export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    BUCKET: "sg-serverless-stack-tutorial-01"
  },
  apiGateway: {
    URL: "https://gix05r7yk3.execute-api.us-west-2.amazonaws.com/prod",
    REGION: "us-west-2"
  },
  cognito: {
    USER_POOL_ID: "us-west-2_My3D9CdYA",
    APP_CLIENT_ID: "5kjlm8l27elvpjnmdg5dreqsg3",
    REGION: "us-west-2",
    IDENTITY_POOL_ID: "us-west-2:8b204151-ed59-4e17-b3cc-484ab5d03123"
  }
}
