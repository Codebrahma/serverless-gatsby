---
title: 'Serverless Rollback Function CLI Command'
menuText: 'rollback function'
menuOrder: 15
description: 'Rollback a function to a specific version'
layout: Doc
gitLink: /docs/providers/aws/cli-reference/rollback-function.md
---

# AWS - Rollback Function

Rollback a function service to a specific version.

```bash
serverless rollback function --function <name> --version <version>
```

**Note:** You can only rollback a function which was previously deployed through `serverless deploy`. Functions are not versioned when running `serverless deploy function`.

## Options

- `--function` or `-f` The name of the function which should be rolled back
- `--version` or `-v` The version to which the function should be rolled back

## Examples

### AWS

At first you want to run `serverless deploy list functions` to see all the deployed functions of your service and their corresponding versions.
After picking a function and the version you can run the `serverless rollback function` command to rollback the function.

E.g. `serverless rollback function -f my-function -v 23` rolls back the function `my-function` to the version `23`.
