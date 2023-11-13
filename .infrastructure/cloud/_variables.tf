variable "stage" {
  description = "Deployment stage. Can be \"dev\" or \"staging\" or \"production\"."
  type        = string

  validation {
    condition     = contains(["dev", "staging", "production"], var.stage)
    error_message = "The stage variable must have a valid value."
  }
}