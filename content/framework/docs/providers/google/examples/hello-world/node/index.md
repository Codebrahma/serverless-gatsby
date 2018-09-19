---
title: 'Hello World Node.js Example'
menuText: 'Hello World Node.js Example'
description: 'Create a Node.js Hello World Google Cloud Functions function'
layout: Doc
gitLink: /docs/providers/google/examples/hello-world/node/README.md
---

# Hello World Node.js Example

Make sure [`serverless` is installed](../../../guide/installation) and you have [setup your credentials](../../../guide/credentials).

## 1. Create a service

`serverless create --template google-nodejs --path my-service`

## 2. Install Provider Plugin

`npm install` in the service directory.

## 3. Update the `provider` property

Update the `credentials` and your `project` property in the `serverless.yml` file.

## 4. Deploy

`serverless deploy`

## 5. Invoke deployed function

`serverless invoke --function first`

In your terminal window you should see a response from the Google Cloud

Congrats you have deployed and ran your Hello World function!
