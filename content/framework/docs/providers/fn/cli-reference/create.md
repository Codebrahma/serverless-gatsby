---
title: 'Serverless Framework Commands - Fn - Create'
menuText: create
menuOrder: 1
description: 'Creates a new Service in your current working directory'
layout: Doc
gitLink: /docs/providers/fn/cli-reference/create.md
---

# Fn - Create

Creates a new Serverless service in the current working directory based on the provided template.

**Create service in current working directory:**

```bash
serverless create --template fn-nodejs
```

```bash
serverless create --template fn-go
```

**Create service in new folder:**

```bash
serverless create --template fn-nodejs --path my-service
```

```bash
serverless create --template fn-nodejs --path my-service
```

## Options
- `--template` or `-t` The name of one of the available templates. **Required if --template-url and --template-path are not present**.
- `--template-url` or `-u` The name of one of the available templates. **Required if --template and --template-path are not present**.
- `--template-path` The local path of your template. **Required if --template and --template-url are not present**.
- `--path` or `-p` The path where the service should be created.
- `--name` or `-n` the name of the service in `serverless.yml`.

## Provided lifecycle events
- `create:create`

## Available Templates for Fn

To see a list of available templates run `serverless create --help`

These are the current available templates for Fn:

- fn-nodejs
- fn-go

## Examples

### Creating a new Serverless service

```bash
serverless create --template fn-nodejs --name my-special-service
```

This example will generate scaffolding for a service with `Fn` as a provider and `nodejs` as runtime. The scaffolding will be generated in the current working directory.

The provider which is used for deployment later on is Fn.

### Creating a named service in a (new) directory

```bash
serverless create --template fn-nodejs --path my-new-service
```

This example will generate scaffolding for a service with `Fn` as a provider and `nodejs` as runtime. The scaffolding will be generated in the `my-new-service` directory. This directory will be created if not present. Otherwise Serverless will use the already present directory.

Additionally Serverless will rename the service according to the path you provide. In this example the service will be renamed to `my-new-service`.

### Creating a new service using a local template

```bash
serverless create --template-path path/to/my/template/folder --path path/to/my/service --name my-new-service
```

This will copy the `path/to/my/template/folder` folder into `path/to/my/service` and rename the service to `my-new-service`.
