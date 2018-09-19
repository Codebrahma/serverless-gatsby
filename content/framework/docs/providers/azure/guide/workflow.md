---
title: 'Serverless Framework Guide - Azure Functions - Workflow'
menuText: Workflow
menuOrder: 14
description: 'A guide and cheatsheet containing CLI commands and workflow recommendations.'
layout: Doc
gitLink: /docs/providers/azure/guide/workflow.md
---

# Azure - Workflow

Intro. Quick recommendations and tips for various processes.

### Development Workflow

1. Write your functions
2. Use `serverless deploy` only when you've made changes to `serverless.yml` and in CI/CD systems.
3. Use `serverless deploy function -f myFunction` to rapidly deploy changes when you are working on a specific Azure Functions Function.
4. Use `serverless invoke -f myFunction ` to test your Azure Functions.
5. Open up a separate tab in your console and stream logs in there via `serverless logs -f myFunction`.
6. Write tests to run locally.

### Larger Projects
* Break your application/project into multiple Serverless Services.
* Model your Serverless Services around Data Models or Workflows.
* Keep the Functions and Resources in your Serverless Services to a minimum.

## Cheat Sheet
A handy list of commands to use when developing with the Serverless Framework.

##### Create A Service:

Install the boilerplate application.

```bash
serverless install --url https://github.com/azure/boilerplate-azurefunctions --name my-app
```

##### Install A Service

This is a convenience method to install a pre-made Serverless Service locally by
downloading the GitHub repo and unzipping it.

```
serverless install -u [GITHUB URL OF SERVICE]
```

##### Deploy All

Use this when you have made changes to your Functions, Events or Resources in
`serverless.yml` or you simply want to deploy all changes within your Service at
the same time.

```
serverless deploy
```

##### Deploy Function

Use this to quickly overwrite your Azure Functions, allowing you to develop faster.

```
serverless deploy function -f [FUNCTION NAME]
```

##### Invoke Function

Invokes an Azure Function

```
serverless invoke function -f [FUNCTION NAME]
```

##### Streaming Logs

Open up a separate tab in your console and stream all logs for a specific
Function using this command.

```
serverless logs -f [FUNCTION NAME]
```
