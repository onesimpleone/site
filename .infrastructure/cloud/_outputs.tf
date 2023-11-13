output "cdn__distribution_id" {
  description = "CloudFront Distribution ID."
  value       = module.cdn.cloudfront_distribution_id
}

output "cdn__url" {
  description = "CloudFront URL."
  value       = "https://${module.cdn.cloudfront_distribution_domain_name}"
}


output "s3_bucket__bucket_name" {
  description = "Bucket name."
  value       = module.s3_bucket.s3_bucket_id
}


output "s3_bucket__bucket_region" {
  description = "Bucket region."
  value       = module.s3_bucket.s3_bucket_region
}