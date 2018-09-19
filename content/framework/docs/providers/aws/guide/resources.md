---
title: 'Serverless Framework - AWS Lambda Guide - AWS Infrastructure Resources'
menuText: Resources
menuOrder: 7
description: 'How to deploy and manage AWS infrastructure to use with your AWS Lambda functions with the Serverless Framework'
layout: Doc
gitLink: /docs/providers/aws/guide/resources.md
---

# AWS - Resources

If you are using AWS as a provider for your Service, all *Resources* are other AWS infrastructure resources which the AWS Lambda functions in your *Service* depend on, like AWS DynamoDB or AWS S3.

Using the Serverless Framework, you can define the infrastructure resources you need in `serverless.yml`, and easily deploy them.

## Configuration

Every stage you deploy to with `serverless.yml` using the `aws` provider is a single AWS CloudFormation stack.  This is where your AWS Lambda functions and their event configurations are defined and it's how they are deployed.  When you add `resources` those resources are added into your CloudFormation stack upon `serverless deploy`.

Define your AWS resources in a property titled `resources`.  What goes in this property is raw CloudFormation template syntax, in YAML, like this:

```yml
# serverless.yml

service: usersCrud
provider: aws
functions:

resources:  # CloudFormation template syntax
  Resources:
    usersTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: usersTable
        AttributeDefinitions:
          - AttributeName: email
            AttributeType: S
        KeySchema:
          - AttributeName: email
            KeyType: HASH
        ProvisionedThroughput:
          ReadCapacityUnits: 1
          WriteCapacityUnits: 1
```

You can overwrite/attach any kind of resource to your CloudFormation stack. You can add `Resources`, `Outputs` or even overwrite the `Description`. You can also use [Serverless Variables](../variables) for sensitive data or reusable configuration in your resources templates.  Please be cautious as overwriting existing parts of your CloudFormation stack might introduce unexpected behavior.

## AWS CloudFormation Resource Reference

To have consistent naming in the CloudFormation Templates that get deployed we use a standard pattern:

`{Function Name}{Cloud Formation Resource Type}{Resource Name}{SequentialID or Random String}`

* `Function Name` - This is optional for Resources that should be recreated when the function name gets changed. Those resources are also called *function bound*
* `Cloud Formation Resource Type` - E.g., S3Bucket
* `Resource Name` - An identifier for the specific resource, e.g. for an S3 Bucket the configured bucket name.
* `SequentialID or Random String` - For a few resources we need to add an optional sequential id or random string to identify them

All resource names that are deployed by Serverless have to follow this naming scheme. The only exception (for backwards compatibility reasons) is the S3 Bucket that is used to upload artifacts so they can be deployed to your function.

We're also using the term `normalizedName` or similar terms in this guide. This means dropping any characters that aren't allowed in resources names, e.g. special characters.

_Tip:_
If you are unsure how a resource is named, that you want to reference from your custom resources, you can issue a `serverless package`. This will create the CloudFormation template for your service in the `.serverless` folder (it is named `cloudformation-template-update-stack.json`). Just open the file and check for the generated resource name.

| AWS Resource          |  Name Template                                          | Example                       |
|---                    |---                                                      | ---                           |
| S3::Bucket            | S3Bucket{normalizedBucketName}                          | S3BucketMybucket              |
|IAM::Role              | IamRoleLambdaExecution                                  | IamRoleLambdaExecution        |
|Lambda::Function       | {normalizedFunctionName}LambdaFunction                  | HelloLambdaFunction           |
|Lambda::Version        | {normalizedFunctionName}LambdaVersion{sha256}                           | HelloLambdaVersionr3pgoTvv1xT4E4NiCL6JG02fl6vIyi7OS1aW0FwAI |
|Logs::LogGroup         | {normalizedFunctionName}LogGroup                        | HelloLogGroup                 |
|Lambda::Permission     | <ul><li>**Schedule**: {normalizedFunctionName}LambdaPermissionEventsRuleSchedule{index}</li><li>**CloudWatch Event**: {normalizedFunctionName}LambdaPermissionEventsRuleCloudWatchEvent{index}</li><li>**CloudWatch Log**: {normalizedFunctionName}LambdaPermissionLogsSubscriptionFilterCloudWatchLog{index}</li><li>**IoT**: {normalizedFunctionName}LambdaPermissionIotTopicRule{index} </li><li>**S3**: {normalizedFunctionName}LambdaPermission{normalizedBucketName}S3</li><li>**APIG**: {normalizedFunctionName}LambdaPermissionApiGateway</li><li>**SNS**: {normalizedFunctionName}LambdaPermission{normalizedTopicName}SNS</li><li>**Alexa Skill**: {normalizedFunctionName}LambdaPermissionAlexaSkill</li><li>**Alexa Smart Home**: {normalizedFunctionName}LambdaPermissionAlexaSmartHome{index}</li><li>**Cognito User Pool Trigger Source**: {normalizedFunctionName}LambdaPermissionCognitoUserPool{normalizedPoolId}TriggerSource{triggerSource}</li> </ul> | <ul><li>**Schedule**: HelloLambdaPermissionEventsRuleSchedule1</li><li>**CloudWatch Event**: HelloLambdaPermissionEventsRuleCloudWatchEvent1</li><li>**CloudWatch Log**: HelloLambdaPermissionLogsSubscriptionFilterCloudWatchLog1</li><li>**IoT**: HelloLambdaPermissionIotTopicRule1 </li><li>**S3**: HelloLambdaPermissionBucketS3</li><li>**APIG**: HelloLambdaPermissionApiGateway</li><li>**SNS**: HelloLambdaPermissionTopicSNS</li><li>**Alexa Skill**: HelloLambdaPermissionAlexaSkill</li><li>**Alexa Smart Home**: HelloLambdaPermissionAlexaSmartHome1</li><li>**Cognito User Pool Trigger Source**: HelloLambdaPermissionCognitoUserPoolMyPoolTriggerSourceCustomMessage</li> </ul>|
|Events::Rule           | <ul><li>**Schedule**: {normalizedFunctionName}EventsRuleSchedule{SequentialID}</li><li>**CloudWatch Event**: {normalizedFunctionName}EventsRuleCloudWatchEvent{SequentialID}</li> </ul> | <ul><li>**Schedule**: HelloEventsRuleSchedule1</li><li>**CloudWatch Event**: HelloEventsRuleCloudWatchEvent1</li></ul>      |
|AWS::Logs::SubscriptionFilter    | {normalizedFunctionName}LogsSubscriptionFilterCloudWatchLog{SequentialID}       | HelloLogsSubscriptionFilterCloudWatchLog1            |
|AWS::IoT::TopicRule    | {normalizedFunctionName}IotTopicRule{SequentialID}       | HelloIotTopicRule1            |
|ApiGateway::RestApi    | ApiGatewayRestApi                                       | ApiGatewayRestApi             |
|ApiGateway::Resource   | ApiGatewayResource{normalizedPath}                      | ApiGatewayResourceUsers       |
|ApiGateway::Method     | ApiGatewayMethod{normalizedPath}{normalizedMethod}      | ApiGatewayMethodUsersGet      |
|ApiGateway::Authorizer | {normalizedFunctionName}ApiGatewayAuthorizer            | HelloApiGatewayAuthorizer     |
|ApiGateway::Deployment | ApiGatewayDeployment{randomNumber}                      | ApiGatewayDeployment12356789  |
|ApiGateway::ApiKey     | ApiGatewayApiKey{SequentialID}                          | ApiGatewayApiKey1             |
|ApiGateway::UsagePlan  | ApiGatewayUsagePlan                          | ApiGatewayUsagePlan             |
|ApiGateway::UsagePlanKey     | ApiGatewayUsagePlanKey{SequentialID}                          | ApiGatewayUsagePlanKey1             |
|SNS::Topic             | SNSTopic{normalizedTopicName}                           | SNSTopicSometopic             |
|SNS::Subscription      | {normalizedFunctionName}SnsSubscription{normalizedTopicName}   | HelloSnsSubscriptionSomeTopic             |
|AWS::Lambda::EventSourceMapping | <ul><li>**DynamoDB:** {normalizedFunctionName}EventSourceMappingDynamodb{tableName}</li><li>**Kinesis:** {normalizedFunctionName}EventSourceMappingKinesis{streamName}</li></ul> | <ul><li>**DynamoDB:** HelloLambdaEventSourceMappingDynamodbUsers</li><li>**Kinesis:** HelloLambdaEventSourceMappingKinesisMystream</li></ul> |
|Cognito::UserPool      | CognitoUserPool{normalizedPoolId}                       | CognitoUserPoolPoolId         |

## Override AWS CloudFormation Resource

You can override the specific CloudFormation resource to apply your own options. For example, if you want to set `AWS::Logs::LogGroup` retention time to 30 days, override it with above table's `Name Template`.

When you override basic resources, there are two things to keep in mind when it comes to `normalizedFunctionName`:

- It should start with an uppercase character
- The `-` will be changed to `Dash`, `_` will be changed to `Underscore`

Here's an example:

```yml
functions:
  write-post:
    handler: handler.writePost
    events:
      - http:
          method: post
          path: ${self:service}/api/posts/new
          cors: true

resources:
  Resources:
    WriteDashPostLogGroup:
      Type: AWS::Logs::LogGroup
      Properties:
        RetentionInDays: "30"
```
