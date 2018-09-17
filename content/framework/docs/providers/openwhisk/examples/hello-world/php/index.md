---
title: 'Hello World PHP Example'
menuText: 'Hello World PHP Example'
description: 'Create a PHP Hello World OpenWhisk function'
layout: Doc
gitLink: /docs/providers/openwhisk/examples/hello-world/php/README.md
---

# Hello World PHP Example

Make sure `serverless` is installed. [See installation guide](../../../guide/installation).

## 1. Create a service
`serverless create --template openwhisk-php --path myService` or `sls create --template openwhisk-php --path myService`, where 'myService' is a new folder to be created with template service files.  Change directories into this new folder.

## 2. Install Provider Plugin
Run `npm install` in the service directory.

## 3. Deploy
`serverless deploy` or `sls deploy`. `sls` is shorthand for the Serverless CLI command

## 4. Invoke deployed function
`serverless invoke --function helloWorld` or `serverless invoke -f helloWorld`

`-f` is shorthand for `--function`

In your terminal window you should see the response from Apache OpenWhisk

```bash
{
    "payload": "Hello, World!"
}
```

Congrats you have deployed and ran your Hello World function!
