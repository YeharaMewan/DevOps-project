provider "aws" {
  region = "ap-southeast-2"  # Updated region
}

# Security Group that allows SSH access
resource "aws_security_group" "ssh_sg" {
  name        = "ssh-access"
  description = "Allow SSH inbound traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Allow SSH access from any IP (use a more restrictive CIDR in production)
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}


# EC2 instance
resource "aws_instance" "test-ec2" {
  ami           = "ami-040e71e7b8391cae4"  # Your specified AMI ID
  instance_type = "t2.micro"

  # Security group for the instance
  security_groups = [aws_security_group.ssh_sg.name]

  # SSH Key Pair for access
  key_name = "key-for-ssh"

  tags = {
    Name = "test-Niranga"
  }
}


resource "aws_key_pair" "deployer" {
        key_name = "key-for-ssh"
        public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC7rbFir2s2NakptMC7iAfbNgWOnFVPEo2GPeXvmPOc0jw0Q4TtcWaSPGT2P54Q0gfJpD7K3VxzeWmc8Uo8kuXUbzNieC2umuMDQk7Tzy1D/IV9PQiO1XQQsK0FyDUDC0U2iP0cZWwyJOamKqN/Vum1bJWqqXn5Bhk867W3gxRSGvWsCrGyZDiIpFvIJ0zwFEnW2hG/lKCxx1+PtgeUd412G2T6vkf+14FpWsSA7FUyNu9chy4v41bn1DNQJTUrci9XgCYCZRn3c4tT48/4w61wLM/KfR2BTwKz3EG3663hHw0XWZXaWKZ3Kf926JzK0eujIWGroCZnNn5Zy855yj7J niranga@DESKTOP-5CSD7U4"
}
