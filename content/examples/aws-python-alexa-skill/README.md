<!--
title: AWS Serverless Alexa Skill example in Python
description: This example demonstrates how to setup your own Alexa skill using AWS Lambdas.
layout: Doc
-->
# Serverless Alexa Skill Example

This example demonstrates how to setup your own Alexa skill using AWS Lambdas.

## Use-cases

- Building custom Alexa skills

## How it works

In the Alexa Developer Portal you can add your own skill. To do so you need to define the available intents and then connect them to a AWS Lambda. The Lambda you can define and update with Serverless.

## Setup

In order to deploy the endpoint simply run

```bash
serverless deploy
```

The expected result should be similar to:

```bash
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
Serverless: Stack create finished...
Serverless: Packaging service...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading service .zip file to S3 (2 KB)...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
Serverless: Stack update finished...

Service Information
service: aws-python-alexa-skill
stage: dev
region: us-east-1
api keys:
  None
endpoints:
  None
functions:
  aws-python-alexa-skill-dev-luckyNumber: arn:aws:lambda:us-east-1:377024778620:function:aws-python-alexa-skill-dev-luckyNumber
```

Next we need to setup a Alexa skill. Once you've signed up for the Amazon Developer Platform visit `https://developer.amazon.com/edw/home.html`. There you should see the following screen:

![Welcome](https://cloud.githubusercontent.com/assets/223045/21183285/8403b37c-c207-11e6-89c0-d36582010af8.png)

Next click on `Add a new Skill`:

![Add Skill](https://cloud.githubusercontent.com/assets/223045/21183286/84051262-c207-11e6-8422-945b6b45e83b.png)

Go through the steps and fill in all the required fields e.g. Intent Schema and Sample Utterances:

Intent Schema
```
{
  "intents": [
    {
      "intent": "GetLuckyNumbers",
      "slots": [
        {
          "name": "UpperLimit",
          "type": "AMAZON.NUMBER"
        }
      ]
    }
  ]
}
```

Sample Utterances
```
GetLuckyNumbers what are my lucky numbers
GetLuckyNumbers tell me my lucky numbers
GetLuckyNumbers what are my lucky numbers lower than {UpperLimit}
GetLuckyNumbers tell me my lucky numbers lower than {UpperLimit}
```

![Skill Information](https://cloud.githubusercontent.com/assets/223045/21183279/83eec480-c207-11e6-841b-d8925f0804a5.png)
![Interaction Model](https://cloud.githubusercontent.com/assets/223045/21183280/83ef3d84-c207-11e6-87a5-bb8dcbb903f8.png)

Fill in the Lambda ARN which was printed or run `serverless info` to retrieve the ARN again.

![Configuration](https://cloud.githubusercontent.com/assets/223045/21183281/83f17086-c207-11e6-89b7-2f6d96ac559c.png)

Next up visit the test page, fill in the utterance and click on `Ask LuckyNumbers`.

![Test](https://cloud.githubusercontent.com/assets/223045/21183283/83f1f632-c207-11e6-858d-41b1a3154e91.png)
![Test](https://cloud.githubusercontent.com/assets/223045/21183282/83f1f628-c207-11e6-974e-b7c051ffb6eb.png)
![Test](https://cloud.githubusercontent.com/assets/223045/21183284/83f708ac-c207-11e6-8199-9489e8f3e494.png)
![Test](https://cloud.githubusercontent.com/assets/223045/21185805/78c1df06-c212-11e6-9cf9-ce44edc30cdd.gif)

You should have received a response containing the text `Your lucky number is` followed by your lucky number :)

Check out this [Amazon guide](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/overviews/steps-to-build-a-custom-skill#your-skill-is-published-now-what) to learn more about how to submit your skill for publication.
