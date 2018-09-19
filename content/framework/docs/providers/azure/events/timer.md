---
title: 'Serverless Framework - Azure Functions Events - Timer'
menuText: Timer
menuOrder: 2
description: 'Setting up Timer Events with Azure Functions via the Serverless Framework'
layout: Doc
gitLink: /docs/providers/azure/events/timer.md
---

# Timer Trigger

Azure Functions Timer trigger lets you listen on Azure Timer. Full documentation
can be found on
[azure.com](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer).

## Timer Events

### Timer Trigger

This setup specifies that the `hello` function should be run every 5 minutes

Here's an example:

```yml
# serverless.yml

functions:
  example:
    handler: handler.hello
    events:
      - timer:
        x-azure-settings:
            name: timerObj #<string>, default - "myTimer", specifies which name it's available on `context.bindings`
            schedule: 0 */5 * * * * #<string>, cron expression to run on
```

```javascript
// handler.js

'use strict';

module.exports.hello = function(context, timerObj) {
  context.log("Timer ran");
  context.done();
};
```
