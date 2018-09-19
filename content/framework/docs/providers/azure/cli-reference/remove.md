---
title: 'Serverless Framework Commands - Azure Functions - Remove'
menuText: remove
menuOrder: 8
description: 'Remove a deployed Service and all of its Azure Functions Functions, Events and Resources'
layout: Doc
gitLink: /docs/providers/azure/cli-reference/remove.md
---

# Azure - Remove

The `serverless remove` command will remove the deployed service, defined in your
current working directory, from the provider.

```bash
serverless remove
```

## Provided lifecycle events
- `remove:remove`

## Examples

### Removal of service

```bash
serverless remove
```

This example will remove the deployed service of your current working directory
from the current platform endpoint.
