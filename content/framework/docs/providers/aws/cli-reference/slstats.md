---
title: 'Serverless Framework Commands - AWS Lambda - Serverless Stats'
menuText: 'serverless stats'
menuOrder: 22
description: 'Enables or disables Serverless Statistic logging within the Serverless Framework.'
layout: Doc
gitLink: /docs/providers/aws/cli-reference/slstats.md
---

# Serverless Statistics

This plugin implements a way to toggle framework statistics.

```bash
serverless slstats --enable
```

## Options
- `--enable` or `-e`.
- `--disable` or `-d`

## Provided lifecycle events
- `slstats:slstats`

## Examples

### Disabling it

```bash
serverless slstats --disable
```

This example will disable framework statistics.
