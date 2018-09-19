---
title: 'Serverless Framework - AWS Lambda Events - IoT'
menuText: IoT
menuOrder: 8
description: 'Setting up AWS IoT Events with AWS Lambda via the Serverless Framework'
layout: Doc
gitLink: /docs/providers/aws/events/iot.md
---

# IoT

## Simple event definition

This will enable your Lambda function to be called by an AWS IoT rule.

```yml
functions:
  myIoT:
    handler: myIoT.handler
    events:
      - iot:
          sql: "SELECT * FROM 'some_topic'"
```

## Enabling / Disabling

**Note:** `iot` events are enabled by default.

This will create and attach a disabled `iot` event for the `myIoT` function.

```yml
functions:
  myIoT:
    handler: myIoT.handler
    events:
      - iot:
          sql: "SELECT * FROM 'some_topic'"
          enabled: false
```

## Specify Name and Description

Name and Description can be specified with the help of the `name` and `description` properties.

```yml
functions:
  myIoT:
    handler: myIoT.handler
    events:
      - iot:
          name: "myIotEvent"
          sql: "SELECT * FROM 'some_topic'"
          description: "My IoT Event Description"
```

## Specify SQL Versions

[SQL Versions](http://docs.aws.amazon.com/iot/latest/developerguide/iot-rule-sql-version.html) can be specified for an `iot` event. However the `sqlVersion` is not a required property.

```yml
functions:
  myIoT:
    handler: myIoT.handler
    events:
      - iot:
          sql: "SELECT * FROM 'some_topic'"
          sqlVersion: "beta"
```
