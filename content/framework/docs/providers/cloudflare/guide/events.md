---
title: 'Serverless Framework - Clouldflare Workers Guide - Events'
menuText: Events
menuOrder: 6
description: 'Configuring Cloudflare Workers Events in the Serverless Framework'
layout: Doc
gitLink: /docs/providers/cloudflare/guide/events.md
---

# Cloudflare Workers - Events
Simply put, events are the things that trigger your functions to run. Currently, they are optional to define and are only used by the `serverless invoke` command, which can be useful for testing your Functions.

If you are using Cloudflare Workers as your provider, all `events` in the service are HTTP Events, because that is the only event that Cloudflare Workers currently support.

```yml
# serverless.yml
…

functions:
  helloWorld:
    # What the script will be called on Cloudflare
    worker: hello
    # The name of the script on your machine, omitting the .js file extension
    script: helloWorld
    events:
      - http:
          url: example.com/hello/user
          # Defines the method used by serverless when the `invoke` command is used. Cloudflare Workers only support GET requests for now
          method: GET
          headers:
                greeting: hi
```

Then [`serverless invoke -f helloWorld`](../../cli-reference/invoke) will make a GET request to `example.com/hello/user` with a header called `greeting` that has a value of `hi`.

[View the Cloudflare Workers events section for more information on HTTP events](../../events).
