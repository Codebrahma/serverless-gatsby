---
title: 'Serverless Framework Commands - Apache OpenWhisk - Config Credentials'
menuText: 'config credentials'
menuOrder: 1
description: 'Configure Serverless credentials'
layout: Doc
gitLink: /docs/providers/openwhisk/cli-reference/config-credentials.md
---

# OpenWhisk - Config Credentials

```bash
serverless config credentials --provider provider --apihost apihost --auth auth
```

## Options

- `--provider` or `-p` The provider (in this case `openwhisk`). **Required**.
- `--apihost` or `-h` The `openwhisk_apihost`. **Required**.
- `--auth` or `-a` The `openwhisk_auth`. **Required**.

## Provided lifecycle events

- `config:credentials:config`

## Examples

### Configure the default profile

```bash
serverless config credentials --provider openwhisk --apihost openwhisk.ng.bluemix.net --auth username:password
```

Credentials are stored in `~/.wskprops`, which you can edit directly if needed.
