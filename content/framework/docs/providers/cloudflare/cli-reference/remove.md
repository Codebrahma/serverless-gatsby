---
title: 'Serverless Framework Commands - Cloudflare Workers - Remove'
menuText: remove
menuOrder: 4
description: 'Remove a deployed Service and all of its Cloudflare Worker Functions and Services.'
layout: Doc
gitLink: /docs/providers/cloudflare/cli-reference/remove.md
---

# Cloudflare Workers - Remove
The `serverless remove` command will remove the deployed service, defined in your current working directory, from the provider.

```bash
serverless remove
```
It will remove the Cloudflare Worker functions from the Cloudflare.
## Provided lifecycle events
- `remove:remove`
