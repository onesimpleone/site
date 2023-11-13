provider "aws" {
  region = local.region
}

resource "random_string" "bucket" {
  length  = 5
  special = false
  upper   = false
}

locals {
  region            = "us-east-1"
  project_name      = join("-", [var.stage, "onesimple-frontend-site"])
  root_domain       = "onesimpleone.com"
  domain_name       = local.root_domain
  domain_name_alias = join("", ["www.", local.domain_name])

  bucket_name        = local.project_name
  bucket_unique_name = join("-", [local.bucket_name, random_string.bucket.result])

  tags = {
    Name        = local.project_name
    Terraform   = "true"
    Environment = var.stage
  }
}


module "s3_bucket" {
  source = "terraform-aws-modules/s3-bucket/aws"

  bucket        = local.bucket_unique_name
  force_destroy = true

  attach_policy = true
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid       = "PublicReadGetObject",
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
        Resource  = "${module.s3_bucket.s3_bucket_arn}/*"
      }
    ]
  })

  block_public_policy      = false
  restrict_public_buckets  = false
  control_object_ownership = true
  object_ownership         = "BucketOwnerPreferred"

  versioning = {
    status     = true
    mfa_delete = false
  }

  website = {
    index_document = "index.html"
    error_document = "404.html"
  }

  tags = local.tags
}

module "acm" {
  source  = "terraform-aws-modules/acm/aws"
  version = "~> 4.0"

  domain_name       = local.domain_name
  zone_id           = data.aws_route53_zone.this.id
  validation_method = "DNS"

  subject_alternative_names = [
    local.domain_name_alias
  ]
  wait_for_validation = true

  tags = local.tags
}

resource "aws_cloudfront_cache_policy" "no_cache_policy" {
  name    = join("-", [local.project_name, "no-cache-policy"])
  comment = "Policy to prevent caching."

  parameters_in_cache_key_and_forwarded_to_origin {
    headers_config {
      header_behavior = "none"
    }

    cookies_config {
      cookie_behavior = "none"
    }

    query_strings_config {
      query_string_behavior = "none"
    }
  }

  min_ttl     = 0
  max_ttl     = 0
  default_ttl = 0
}

resource "aws_cloudfront_cache_policy" "cache_policy" {
  name    = join("-", [local.project_name, "cache-policy"])
  comment = "Policy to cache static files"

  parameters_in_cache_key_and_forwarded_to_origin {
    headers_config {
      header_behavior = "none"
    }

    cookies_config {
      cookie_behavior = "none"
    }

    query_strings_config {
      query_string_behavior = "all"
    }
  }

  min_ttl     = 0
  max_ttl     = 31536000
  default_ttl = 86400
}


module "cdn" {
  source = "terraform-aws-modules/cloudfront/aws"

  aliases             = [local.domain_name_alias]
  comment             = "[$${var.stage}] OneSimple – Site and App"
  enabled             = true
  is_ipv6_enabled     = true
  price_class         = "PriceClass_All"
  retain_on_delete    = false
  wait_for_deployment = false

  origin = {
    "${local.bucket_name}" = {
      domain_name = module.s3_bucket.s3_bucket_website_endpoint
      custom_origin_config = {
        http_port              = 80
        https_port             = 443
        origin_protocol_policy = "http-only"
        origin_ssl_protocols   = ["TLSv1.2"]
      }
    }
  }

  default_cache_behavior = {
    target_origin_id       = "${local.bucket_name}"
    viewer_protocol_policy = "redirect-to-https"

    allowed_methods = ["GET", "HEAD"]
    cached_methods  = ["GET", "HEAD"]
    compress        = true

    use_forwarded_values = false
    cache_policy_id      = aws_cloudfront_cache_policy.cache_policy.id
  }

  ordered_cache_behavior = [{
    path_pattern           = "*.html"
    target_origin_id       = "${local.bucket_name}"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]

    use_forwarded_values = false
    cache_policy_id      = aws_cloudfront_cache_policy.no_cache_policy.id
    }, {
    path_pattern           = "page-data/*.json"
    target_origin_id       = "${local.bucket_name}"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]

    use_forwarded_values = false
    cache_policy_id      = aws_cloudfront_cache_policy.no_cache_policy.id
  }]

  viewer_certificate = {
    acm_certificate_arn = module.acm.acm_certificate_arn
    ssl_support_method  = "sni-only"
  }

  tags = local.tags
}


data "aws_route53_zone" "this" {
  name = local.root_domain
}

module "route53_records" {
  source  = "terraform-aws-modules/route53/aws//modules/records"
  version = "~> 2.0"

  count = var.stage == "production" ? 1 : 0

  zone_id = data.aws_route53_zone.this.zone_id

  records = [
    {
      name = ""
      type = "A"
      alias = {
        name    = module.cdn.cloudfront_distribution_domain_name
        zone_id = module.cdn.cloudfront_distribution_hosted_zone_id
      }
    },
  ]
}
