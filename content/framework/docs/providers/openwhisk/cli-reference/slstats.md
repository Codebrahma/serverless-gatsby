---
title: 'Serverless Framework Commands - Apache OpenWhisk - Serverless Stats'
menuText: 'serverless stats'
menuOrder: 17
description: 'Enables or disables Serverless Statistic logging within the Serverless Framework.'
layout: Doc
gitLink: /docs/providers/openwhisk/cli-reference/slstats.md
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
