---
title: 'Serverless Framework - Fn Guide - Introduction'
menuText: Intro
menuOrder: 1
description: 'An introduction to using Fn with the Serverless Framework.'
layout: Doc
gitLink: /docs/providers/fn/guide/intro.md
---

# Fn - Introduction

The Serverless Framework helps you develop and deploy serverless applications using Fn.  It's a CLI that offers structure, automation and best practices out-of-the-box, allowing you to focus on building sophisticated, event-driven, serverless architectures, comprised of [Functions](#functions) and [Events](#events).

The Serverless Framework is different than other application frameworks because:
* It manages your code as well as your infrastructure
* It supports multiple languages (Node.js, Python, Ruby, Go)

## Core Concepts

Here are the Serverless Framework's main concepts and how they pertain to Fn.

### Functions

A Function is a [Fn Function](http://fnproject.io/).  It's an independent unit of deployment, like a microservice.  It's merely code, deployed in the cloud, that is most often written to perform a single job such as:

* *Saving a user to the database*
* *Processing a file in a database*
* *Performing a scheduled task* (To be added in newer versions)

You can perform multiple jobs in your code, but we don't recommend doing that without good reason.  Separation of concerns is best and the Framework is designed to help you easily develop and deploy Functions, as well as manage lots of them.

### Events

Anything that triggers an Fn Event to execute is regarded by the Framework as an **Event**.  Events are platform events on Fn such as:

* *An API Gateway HTTP endpoint (e.g., for a REST API)*
* *A Kafka queue message (e.g., a message)*
* *A scheduled timer (e.g., run every 5 minutes)* (To be added in newer versions)

### Services

A **Service** is the Serverless Framework's unit of organization.  You can think of it as a project file, though you can have multiple services for a single application.  It's where you define your Functions and the Events that trigger them, all in one file entitled `serverless.yml` (or `serverless.json` or `serverless.js`).  It looks like this:

```yml
# serverless.yml

service: hello-world

functions: # Your "Functions"
  hello:
    name: hi
    version: 0.0.1
    runtime: go
    events:
        - http:
            path: /hello
```

When you deploy with the Framework by running `serverless deploy`, everything in `serverless.yml` is deployed at once.
