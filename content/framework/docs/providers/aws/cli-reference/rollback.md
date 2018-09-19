---
title: 'Serverless Rollback CLI Command'
menuText: rollback
menuOrder: 14
description: 'Rollback the Serverless service to a specific deployment'
layout: Doc
gitLink: /docs/providers/aws/cli-reference/rollback.md
---

# AWS - Rollback

Rollback the Serverless service to a specific deployment.

```bash
serverless rollback --timestamp timestamp
```

If `timestamp` is not specified, Framework will show your existing deployments.

## Options
- `--timestamp` or `-t` The deployment you want to rollback to.
- `--verbose` or `-v` Shows any Stack Output.

## Provided lifecycle events
- `rollback:initialize`
- `rollback:rollback`

## Examples

### AWS

At first you want to run `serverless deploy list` to show your existing deployments. This will provide you with a list of the deployments stored in your S3 bucket. You can then use the timestamp of one of these deployments to set your infrastructure stack to this specific deployment.

**Example:**

```
$ serverless deploy list
Serverless: Listing deployments:
Serverless: -------------
Serverless: Timestamp: 1476790110568
Serverless: Datetime: 2018T11:28:30.568Z
Serverless: Files:
Serverless: - compiled-cloudformation-template.json
Serverless: - mail-service.zip
Serverless: -------------
Serverless: Timestamp: 1476889476243
Serverless: Datetime: 2019T15:04:36.243Z
Serverless: Files:
Serverless: - compiled-cloudformation-template.json
Serverless: - mail-service.zip
Serverless: -------------
Serverless: Timestamp: 1476893957131
Serverless: Datetime: 2019T16:19:17.131Z
Serverless: Files:
Serverless: - compiled-cloudformation-template.json
Serverless: - mail-service.zip
Serverless: -------------
Serverless: Timestamp: 1476895175540
Serverless: Datetime: 2019T16:39:35.540Z
Serverless: Files:
Serverless: - compiled-cloudformation-template.json
Serverless: - mail-service.zip
Serverless: -------------
Serverless: Timestamp: 1476993293402
Serverless: Datetime: 2020T19:54:53.402Z
Serverless: Files:
Serverless: - compiled-cloudformation-template.json
Serverless: - mail-service.zip

$ serverless rollback -t 1476893957131
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
.....
Serverless: Stack update finished...
```
