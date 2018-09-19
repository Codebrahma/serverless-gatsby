---
title: 'Serverless Framework Commands - AWS Lambda - Install'
menuText: install
menuOrder: 3
description: 'Install pre-written AWS Lambda Functions, Events and Resources with the Serverless Framework'
layout: Doc
gitLink: /docs/providers/aws/cli-reference/install.md
---

# AWS - Install

Installs a service from a GitHub URL in the current working directory.

```bash
serverless install --url https://github.com/some/service
```

## Options
- `--url` or `-u` The services GitHub URL. **Required**.
- `--name` or `-n` Name for the service.

## Provided lifecycle events
- `install:install`

## Examples

### Installing a service from a GitHub URL

```bash
serverless install --url https://github.com/pmuens/serverless-crud
```

This example will download the .zip file of the `serverless-crud` service from GitHub, create a new directory with the name `serverless-crud` in the current working directory and unzips the files in this directory.

### Installing a service from a GitHub URL with a new service name

```bash
serverless install --url https://github.com/pmuens/serverless-crud --name my-crud
```

This example will download the .zip file of the `serverless-crud` service from GitHub, create a new directory with the name `my-crud` in the current working directory and unzips the files in this directory and renames the service to `my-crud` if `serverless.yml` exists in the service root.

### Installing a service from a directory in a GitHub URL

```bash
serverless install --url https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb
```

This example will download the `aws-node-rest-api-with-dynamodb` service from GitHub.
