---
title: 'Serverless Framework Commands - Fn - Remove'
menuText: remove
menuOrder: 6
description: 'Remove a deployed Service and all of its Fn Functions and Kubernetes Deployments and Services.'
layout: Doc
gitLink: /docs/providers/fn/cli-reference/remove.md
---

# Fn - Remove

The `sls remove` command will remove the deployed service, defined in your current working directory, from the provider.

```bash
serverless remove
```

It will remove the Fn Function functions from your Fn server.

## Provided lifecycle events
- `remove:remove`
