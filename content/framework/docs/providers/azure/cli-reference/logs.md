---
title: 'Serverless Framework Commands - Azure Functions - Logs'
menuText: logs
menuOrder: 7
description: 'View logs of your Azure Functions Function within your terminal using the Serverless Framework'
layout: Doc
gitLink: /docs/providers/azure/cli-reference/logs.md
---

# Azure - Logs

Lets you watch the logs of a specific function.

```bash
serverless logs -f hello
```

## Options

- `--function` or `-f` The function you want to fetch the logs for. **Required**

## Examples

### Azure Functions

```bash
serverless logs -f hello
```
This will stream all future logs for a given Function.
