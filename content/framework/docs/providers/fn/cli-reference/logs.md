---
title: 'Serverless Framework Commands - Fn - Logs'
menuText: logs
menuOrder: 4
description: 'View logs of your Fn Function within your terminal using the Serverless Framework'
layout: Doc
gitLink: /docs/providers/fn/cli-reference/logs.md
---

# Fn - Logs

Lets you watch the logs of a specific function.

```bash
serverless logs -f hello
```

## Options

- `--function` or `-f` The function you want to fetch the logs for. **Required**

## Examples

```bash
serverless logs -f hello
```
This will fetch the logs for hello for the most recent calls to it.
