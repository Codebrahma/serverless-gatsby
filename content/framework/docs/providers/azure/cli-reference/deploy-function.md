---
title: 'Serverless Framework Commands - Azure Functions - Deploy Function'
menuText: 'deploy function'
menuOrder: 4
description: 'Deploy your Azure Functions functions quickly'
layout: Doc
gitLink: /docs/providers/azure/cli-reference/deploy-function.md
---

# Azure - Deploy Function

The `serverless deploy function` command deploys an individual function.  This
command simply compiles a deployment package with a single function handler. This
is a much faster way of deploying changes in code.

```bash
serverless deploy function -f functionName
```

**Note:** Because this command is only deploying the function code, function
properties such as environment variables and events will **not** be deployed.

## Options
- `--function` or `-f` The name of the function which should be deployed
