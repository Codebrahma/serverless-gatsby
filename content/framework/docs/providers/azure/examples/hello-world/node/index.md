---
title: 'Hello World Node.js Example'
menuText: 'Hello World Node.js Example'
description: 'Create a Node.js Hello World Azure function'
layout: Doc
gitLink: /docs/providers/azure/examples/hello-world/node/README.md
---

# Hello World Node.js Example

Make sure `serverless` is installed. [See installation guide](../../../guide/installation).

## 1. Create a service

`serverless install --url https://github.com/azure/boilerplate-azurefunctions --name my-app`

## 2. Install Provider Plugin

`npm install -g serverless-azure` followed by `npm install` in the service directory.

## 3. Deploy

`serverless deploy` or `sls deploy`. `sls` is shorthand for the Serverless CLI command

## 4. Invoke deployed function

`serverless invoke --function helloWorld` or `serverless invoke -f helloWorld`

`-f` is shorthand for `--function`

In your terminal window you should see the response from azure

```bash
{
    "payload": "Hello, World!"
}
```

Congrats you have deployed and ran your Hello World function!
