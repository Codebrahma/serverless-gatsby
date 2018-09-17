---
title: 'Serverless Framework - Azure Functions Events - Event Hubs'
menuText: 'Event Hubs'
menuOrder: 5
description: 'Setting up Event Hubs Events with Azure Functions via the Serverless Framework'
layout: Doc
gitLink: /docs/providers/azure/events/eventhubs.md
---

# Event Hubs Trigger

Azure Functions Event Hubs trigger lets you listen on Azure Event Hubs. Full
documentation can be found on
[azure.com](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-hubs).

## Event Hubs Events

### Event Hubs Trigger

This setup specifies that the `hello` function should be run when a new Event
Hubs item appears on the path "hello".

Here's an example:

```yml
# serverless.yml

functions:
  example:
    handler: handler.hello
    events:
      - eventHub:
        x-azure-settings:
            name: item #<string>, default - "myEventHubMessage", specifies which name it's available on `context.bindings`
            path: hello #<string>, specifies the Name of the Event Hub
            consumerGroup: $Default #<string>, default - "$Default", specifies the consumerGroup to listen with
            connection: EventHubsConnection #<string>, App Setting/environment variable which contains Event Hubs Namespace Connection String
```

```javascript
// handler.js

'use strict';

module.exports.hello = function(context, item) {
  context.log("Received item: ${item}");
  context.done();
};
```
