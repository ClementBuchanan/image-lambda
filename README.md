# image-lambda

## Documentation

- a description of how to use your lambda.
- a description of any issues you encountered during deployment of this lambda.
- an image and thumbnail that your Lambda processed

## Feature Tasks

A user should be able to upload an image at any size, and have both the original size and a thumbnail size
When an image is uploaded to your S3 bucket, it should trigger a Lambda function which must;
  - Create a 50x50 pixel thumbnail version of that image
  - Save it to another S3 bucket.
  - It should do so with a predictable naming convention, so that your server and/or frontend know where that thumbnail image will be.

# LAB - 17

## Project: AWS: S3 and Lambda

### Author: Clement Buchanan


### Setup

- Not 100% sure but I consulted this documentntation: https://docs.aws.amazon.com/lambda/latest/dg/with-s3-tutorial.html

#### `.env` requirements (where applicable)

- `aws-sdk`
- `sharp`
- `util`

#### How to initialize/run your application (where applicable)

- I am not 100% certain as to how this thing works. Still referencing video resources to figure it out.

#### How to use your library (where applicable)

- I had alot of issues with this there being no way to actually see whats wrong until it gets to aws

#### Tests

- How do you run tests?
- they are in aws
- Any tests of note?
- nope
- Describe any tests that you did not complete, skipped, etc

#### UML

