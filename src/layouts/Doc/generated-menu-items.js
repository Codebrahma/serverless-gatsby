module.exports = {
  "/framework/docs": {
    "index": [
      {
        "path": "/framework/docs/index",
        "title": "Docs"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/getting-started",
        "title": "Getting Started"
      },
      {
        "path": "/framework/docs/platform",
        "title": "Platform"
      },
      {
        "path": "/framework/docs/providers",
        "title": "Providers"
      }
    ]
  },
  "/framework/docs/platform": {
    "index": [
      {
        "path": "/framework/docs/platform/index",
        "title": "Platform"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/platform/commands",
        "title": "commands"
      }
    ]
  },
  "/framework/docs/platform/commands": {
    "index": [
      {
        "path": "/framework/docs/platform/commands/index",
        "title": "commands"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/platform/commands/login",
        "title": "login",
        "order": 11
      },
      {
        "path": "/framework/docs/platform/commands/logout",
        "title": "logout",
        "order": 11
      }
    ]
  },
  "/framework/docs/providers": {
    "index": [
      {
        "path": "/framework/docs/providers/index",
        "title": "Providers"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/aws",
        "title": "AWS"
      },
      {
        "path": "/framework/docs/providers/azure",
        "title": "Azure"
      },
      {
        "path": "/framework/docs/providers/cloudflare",
        "title": "Cloudflare Workers"
      },
      {
        "path": "/framework/docs/providers/fn",
        "title": "Fn"
      },
      {
        "path": "/framework/docs/providers/google",
        "title": "Google"
      },
      {
        "path": "/framework/docs/providers/kubeless",
        "title": "Kubeless"
      },
      {
        "path": "/framework/docs/providers/openwhisk",
        "title": "OpenWhisk"
      },
      {
        "path": "/framework/docs/providers/spotinst",
        "title": "Spotinst"
      },
      {
        "path": "/framework/docs/providers/webtasks",
        "title": "Webtasks"
      }
    ]
  },
  "/framework/docs/providers/aws": {
    "index": [
      {
        "path": "/framework/docs/providers/aws/index",
        "title": "AWS"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/aws/cli-reference",
        "title": "CLI Reference"
      },
      {
        "path": "/framework/docs/providers/aws/events",
        "title": "AWS Events"
      },
      {
        "path": "/framework/docs/providers/aws/examples",
        "title": "Examples"
      },
      {
        "path": "/framework/docs/providers/aws/guide",
        "title": "User Guide"
      }
    ]
  },
  "/framework/docs/providers/aws/cli-reference": {
    "index": [
      {
        "path": "/framework/docs/providers/aws/cli-reference/index",
        "title": "CLI Reference"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/aws/cli-reference/config-credentials",
        "title": "config credentials",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/create",
        "title": "create",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/install",
        "title": "install",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/package",
        "title": "package",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/deploy",
        "title": "deploy",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/deploy-function",
        "title": "deploy function",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/deploy-list",
        "title": "deploy list",
        "order": 7
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/invoke",
        "title": "invoke",
        "order": 8
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/invoke-local",
        "title": "invoke local",
        "order": 9
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/logs",
        "title": "logs",
        "order": 10
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/login",
        "title": "login",
        "order": 11
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/metrics",
        "title": "metrics",
        "order": 12
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/info",
        "title": "info",
        "order": 13
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/rollback",
        "title": "rollback",
        "order": 14
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/rollback-function",
        "title": "rollback function",
        "order": 15
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/remove",
        "title": "remove",
        "order": 16
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/plugin-list",
        "title": "Plugin List",
        "order": 17
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/plugin-search",
        "title": "Plugin Search",
        "order": 18
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/plugin-install",
        "title": "Plugin Install",
        "order": 19
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/plugin-uninstall",
        "title": "Plugin Uninstall",
        "order": 20
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/print",
        "title": "Print",
        "order": 21
      },
      {
        "path": "/framework/docs/providers/aws/cli-reference/slstats",
        "title": "serverless stats",
        "order": 22
      }
    ]
  },
  "/framework/docs/providers/aws/events": {
    "index": [
      {
        "path": "/framework/docs/providers/aws/events/index",
        "title": "AWS Events"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/aws/events/apigateway",
        "title": "API Gateway",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/aws/events/streams",
        "title": "Kinesis & DynamoDB",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/aws/events/s3",
        "title": "S3",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/aws/events/schedule",
        "title": "Schedule",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/aws/events/sns",
        "title": "SNS",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/aws/events/sqs",
        "title": "SQS",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/aws/events/alexa-skill",
        "title": "Alexa Skill",
        "order": 7
      },
      {
        "path": "/framework/docs/providers/aws/events/iot",
        "title": "IoT",
        "order": 8
      },
      {
        "path": "/framework/docs/providers/aws/events/cloudwatch-event",
        "title": "CloudWatch Event",
        "order": 9
      },
      {
        "path": "/framework/docs/providers/aws/events/cloudwatch-log",
        "title": "CloudWatch Log",
        "order": 10
      },
      {
        "path": "/framework/docs/providers/aws/events/cognito-user-pool",
        "title": "Cognito User Pool",
        "order": 11
      },
      {
        "path": "/framework/docs/providers/aws/events/alexa-smart-home",
        "title": "Alexa Smart Home",
        "order": 12
      }
    ]
  },
  "/framework/docs/providers/aws/examples": {
    "index": [
      {
        "path": "/framework/docs/providers/aws/examples/index",
        "title": "Examples"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/aws/examples/hello-world",
        "title": "Hello World Example"
      }
    ]
  },
  "/framework/docs/providers/aws/examples/hello-world": {
    "index": [
      {
        "path": "/framework/docs/providers/aws/examples/hello-world/index",
        "title": "Hello World Example"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/aws/examples/hello-world/csharp",
        "title": "Hello World C# Example"
      },
      {
        "path": "/framework/docs/providers/aws/examples/hello-world/fsharp",
        "title": "Hello World F# Example"
      },
      {
        "path": "/framework/docs/providers/aws/examples/hello-world/go",
        "title": "Hello World Go Example"
      },
      {
        "path": "/framework/docs/providers/aws/examples/hello-world/node",
        "title": "Hello World Node.js Example"
      },
      {
        "path": "/framework/docs/providers/aws/examples/hello-world/python",
        "title": "Hello World Python Example"
      }
    ]
  },
  "/framework/docs/providers/aws/examples/hello-world/csharp": {
    "index": [
      {
        "path": "/framework/docs/providers/aws/examples/hello-world/csharp/index",
        "title": "Hello World C# Example"
      }
    ],
    "children": []
  },
  "/framework/docs/providers/aws/examples/hello-world/fsharp": {
    "index": [
      {
        "path": "/framework/docs/providers/aws/examples/hello-world/fsharp/index",
        "title": "Hello World F# Example"
      }
    ],
    "children": []
  },
  "/framework/docs/providers/aws/examples/hello-world/go": {
    "index": [
      {
        "path": "/framework/docs/providers/aws/examples/hello-world/go/index",
        "title": "Hello World Go Example"
      }
    ],
    "children": []
  },
  "/framework/docs/providers/aws/examples/hello-world/node": {
    "index": [
      {
        "path": "/framework/docs/providers/aws/examples/hello-world/node/index",
        "title": "Hello World Node.js Example"
      }
    ],
    "children": []
  },
  "/framework/docs/providers/aws/examples/hello-world/python": {
    "index": [
      {
        "path": "/framework/docs/providers/aws/examples/hello-world/python/index",
        "title": "Hello World Python Example"
      }
    ],
    "children": []
  },
  "/framework/docs/providers/aws/guide": {
    "index": [
      {
        "path": "/framework/docs/providers/aws/guide/index",
        "title": "User Guide"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/aws/guide/intro",
        "title": "Intro",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/aws/guide/quick-start",
        "title": "Quick Start",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/aws/guide/installation",
        "title": "Installation",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/aws/guide/credentials",
        "title": "Credentials",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/aws/guide/services",
        "title": "Services",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/aws/guide/functions",
        "title": "Functions",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/aws/guide/events",
        "title": "Events",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/aws/guide/resources",
        "title": "Resources",
        "order": 7
      },
      {
        "path": "/framework/docs/providers/aws/guide/deploying",
        "title": "Deploying",
        "order": 8
      },
      {
        "path": "/framework/docs/providers/aws/guide/testing",
        "title": "Testing",
        "order": 9
      },
      {
        "path": "/framework/docs/providers/aws/guide/variables",
        "title": "Variables",
        "order": 10
      },
      {
        "path": "/framework/docs/providers/aws/guide/packaging",
        "title": "Packaging",
        "order": 11
      },
      {
        "path": "/framework/docs/providers/aws/guide/iam",
        "title": "IAM",
        "order": 12
      },
      {
        "path": "/framework/docs/providers/aws/guide/plugins",
        "title": "Plugins",
        "order": 13
      },
      {
        "path": "/framework/docs/providers/aws/guide/workflow",
        "title": "Workflow",
        "order": 14
      },
      {
        "path": "/framework/docs/providers/aws/guide/serverless.yml",
        "title": "Serverless.yml",
        "order": 15
      },
      {
        "path": "/framework/docs/providers/aws/guide/v0_to_v1",
        "title": "V.0 & V.1",
        "order": 16
      }
    ]
  },
  "/framework/docs/providers/azure": {
    "index": [
      {
        "path": "/framework/docs/providers/azure/index",
        "title": "Azure"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/azure/cli-reference",
        "title": "CLI Reference"
      },
      {
        "path": "/framework/docs/providers/azure/events",
        "title": "Azure Events"
      },
      {
        "path": "/framework/docs/providers/azure/examples",
        "title": "Examples"
      },
      {
        "path": "/framework/docs/providers/azure/guide",
        "title": "Guide"
      }
    ]
  },
  "/framework/docs/providers/azure/cli-reference": {
    "index": [
      {
        "path": "/framework/docs/providers/azure/cli-reference/index",
        "title": "CLI Reference"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/azure/cli-reference/create",
        "title": "create",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/azure/cli-reference/install",
        "title": "install",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/azure/cli-reference/deploy",
        "title": "deploy",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/azure/cli-reference/deploy-function",
        "title": "deploy function",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/azure/cli-reference/invoke",
        "title": "invoke",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/azure/cli-reference/login",
        "title": "login",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/azure/cli-reference/logs",
        "title": "logs",
        "order": 7
      },
      {
        "path": "/framework/docs/providers/azure/cli-reference/remove",
        "title": "remove",
        "order": 8
      },
      {
        "path": "/framework/docs/providers/azure/cli-reference/plugin-list",
        "title": "Plugin List",
        "order": 9
      },
      {
        "path": "/framework/docs/providers/azure/cli-reference/plugin-search",
        "title": "Plugin Search",
        "order": 10
      },
      {
        "path": "/framework/docs/providers/azure/cli-reference/plugin-install",
        "title": "Plugin Install",
        "order": 11
      },
      {
        "path": "/framework/docs/providers/azure/cli-reference/plugin-uninstall",
        "title": "Plugin Uninstall",
        "order": 12
      },
      {
        "path": "/framework/docs/providers/azure/cli-reference/print",
        "title": "Print",
        "order": 13
      }
    ]
  },
  "/framework/docs/providers/azure/events": {
    "index": [
      {
        "path": "/framework/docs/providers/azure/events/index",
        "title": "Azure Events"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/azure/events/http",
        "title": "HTTP",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/azure/events/timer",
        "title": "Timer",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/azure/events/queuestorage",
        "title": "Queue Storage",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/azure/events/servicebus",
        "title": "Service Bus",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/azure/events/eventhubs",
        "title": "Event Hubs",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/azure/events/blobstorage",
        "title": "Blob Storage",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/azure/events/other",
        "title": "Other Bindings",
        "order": 7
      }
    ]
  },
  "/framework/docs/providers/azure/examples": {
    "index": [
      {
        "path": "/framework/docs/providers/azure/examples/index",
        "title": "Examples"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/azure/examples/hello-world",
        "title": "Hello World Example"
      }
    ]
  },
  "/framework/docs/providers/azure/examples/hello-world": {
    "index": [
      {
        "path": "/framework/docs/providers/azure/examples/hello-world/index",
        "title": "Hello World Example"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/azure/examples/hello-world/node",
        "title": "Hello World Node.js Example"
      }
    ]
  },
  "/framework/docs/providers/azure/examples/hello-world/node": {
    "index": [
      {
        "path": "/framework/docs/providers/azure/examples/hello-world/node/index",
        "title": "Hello World Node.js Example"
      }
    ],
    "children": []
  },
  "/framework/docs/providers/azure/guide": {
    "index": [
      {
        "path": "/framework/docs/providers/azure/guide/index",
        "title": "Guide"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/azure/guide/intro",
        "title": "Intro",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/azure/guide/quick-start",
        "title": "Quick Start",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/azure/guide/installation",
        "title": "Installation",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/azure/guide/credentials",
        "title": "Credentials",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/azure/guide/services",
        "title": "Services",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/azure/guide/functions",
        "title": "Functions",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/azure/guide/events",
        "title": "Events",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/azure/guide/deploying",
        "title": "Deploying",
        "order": 8
      },
      {
        "path": "/framework/docs/providers/azure/guide/testing",
        "title": "Testing",
        "order": 9
      },
      {
        "path": "/framework/docs/providers/azure/guide/variables",
        "title": "Variables",
        "order": 10
      },
      {
        "path": "/framework/docs/providers/azure/guide/packaging",
        "title": "Packaging",
        "order": 11
      },
      {
        "path": "/framework/docs/providers/azure/guide/plugins",
        "title": "Plugins",
        "order": 13
      },
      {
        "path": "/framework/docs/providers/azure/guide/workflow",
        "title": "Workflow",
        "order": 14
      }
    ]
  },
  "/framework/docs/providers/cloudflare": {
    "index": [
      {
        "path": "/framework/docs/providers/cloudflare/index",
        "title": "Cloudflare Workers"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/cloudflare/cli-reference",
        "title": "CLI Reference"
      },
      {
        "path": "/framework/docs/providers/cloudflare/events",
        "title": "Cloudflare Workers Events"
      },
      {
        "path": "/framework/docs/providers/cloudflare/guide",
        "title": "Guide"
      }
    ]
  },
  "/framework/docs/providers/cloudflare/cli-reference": {
    "index": [
      {
        "path": "/framework/docs/providers/cloudflare/cli-reference/index",
        "title": "CLI Reference"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/cloudflare/cli-reference/create",
        "title": "create",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/cloudflare/cli-reference/deploy",
        "title": "deploy",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/cloudflare/cli-reference/invoke",
        "title": "invoke",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/cloudflare/cli-reference/remove",
        "title": "remove",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/cloudflare/cli-reference/plugin-list",
        "title": "Plugin List",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/cloudflare/cli-reference/plugin-search",
        "title": "Plugin Search",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/cloudflare/cli-reference/plugin-install",
        "title": "Plugin Install",
        "order": 7
      },
      {
        "path": "/framework/docs/providers/cloudflare/cli-reference/plugin-uninstall",
        "title": "Plugin Uninstall",
        "order": 8
      }
    ]
  },
  "/framework/docs/providers/cloudflare/events": {
    "index": [
      {
        "path": "/framework/docs/providers/cloudflare/events/index",
        "title": "Cloudflare Workers Events"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/cloudflare/events/http",
        "title": "HTTP Events",
        "order": 1
      }
    ]
  },
  "/framework/docs/providers/cloudflare/guide": {
    "index": [
      {
        "path": "/framework/docs/providers/cloudflare/guide/index",
        "title": "Guide"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/cloudflare/guide/intro",
        "title": "Intro",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/cloudflare/guide/quick-start",
        "title": "Quick Start",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/cloudflare/guide/installation",
        "title": "Installation",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/cloudflare/guide/services",
        "title": "Services",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/cloudflare/guide/functions",
        "title": "Functions",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/cloudflare/guide/events",
        "title": "Events",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/cloudflare/guide/deploying",
        "title": "Deploying",
        "order": 7
      },
      {
        "path": "/framework/docs/providers/cloudflare/guide/debugging",
        "title": "Debugging",
        "order": 8
      },
      {
        "path": "/framework/docs/providers/cloudflare/guide/workflow",
        "title": "Workflow",
        "order": 9
      }
    ]
  },
  "/framework/docs/providers/fn": {
    "index": [
      {
        "path": "/framework/docs/providers/fn/index",
        "title": "Fn"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/fn/cli-reference",
        "title": "CLI Reference"
      },
      {
        "path": "/framework/docs/providers/fn/events",
        "title": "Fn Events"
      },
      {
        "path": "/framework/docs/providers/fn/guide",
        "title": "Guide"
      }
    ]
  },
  "/framework/docs/providers/fn/cli-reference": {
    "index": [
      {
        "path": "/framework/docs/providers/fn/cli-reference/index",
        "title": "CLI Reference"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/fn/cli-reference/create",
        "title": "create",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/fn/cli-reference/deploy",
        "title": "deploy",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/fn/cli-reference/invoke",
        "title": "invoke",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/fn/cli-reference/logs",
        "title": "logs",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/fn/cli-reference/info",
        "title": "info",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/fn/cli-reference/remove",
        "title": "remove",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/fn/cli-reference/plugin-list",
        "title": "Plugin List",
        "order": 7
      },
      {
        "path": "/framework/docs/providers/fn/cli-reference/plugin-search",
        "title": "Plugin Search",
        "order": 8
      },
      {
        "path": "/framework/docs/providers/fn/cli-reference/plugin-install",
        "title": "Plugin Install",
        "order": 9
      },
      {
        "path": "/framework/docs/providers/fn/cli-reference/plugin-uninstall",
        "title": "Plugin Uninstall",
        "order": 10
      }
    ]
  },
  "/framework/docs/providers/fn/events": {
    "index": [
      {
        "path": "/framework/docs/providers/fn/events/index",
        "title": "Fn Events"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/fn/events/http",
        "title": "HTTP Events",
        "order": 1
      }
    ]
  },
  "/framework/docs/providers/fn/guide": {
    "index": [
      {
        "path": "/framework/docs/providers/fn/guide/index",
        "title": "Guide"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/fn/guide/intro",
        "title": "Intro",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/fn/guide/quick-start",
        "title": "Quick Start",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/fn/guide/installation",
        "title": "Installation",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/fn/guide/events",
        "title": "Events",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/fn/guide/deploying",
        "title": "Deploying",
        "order": 7
      },
      {
        "path": "/framework/docs/providers/fn/guide/debugging",
        "title": "Debugging",
        "order": 8
      },
      {
        "path": "/framework/docs/providers/fn/guide/workflow",
        "title": "Workflow",
        "order": 9
      }
    ]
  },
  "/framework/docs/providers/google": {
    "index": [
      {
        "path": "/framework/docs/providers/google/index",
        "title": "Google"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/google/cli-reference",
        "title": "CLI Reference"
      },
      {
        "path": "/framework/docs/providers/google/events",
        "title": "Google Functions Events"
      },
      {
        "path": "/framework/docs/providers/google/examples",
        "title": "Examples"
      },
      {
        "path": "/framework/docs/providers/google/guide",
        "title": "Guide"
      }
    ]
  },
  "/framework/docs/providers/google/cli-reference": {
    "index": [
      {
        "path": "/framework/docs/providers/google/cli-reference/index",
        "title": "CLI Reference"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/google/cli-reference/create",
        "title": "create",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/google/cli-reference/install",
        "title": "install",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/google/cli-reference/package",
        "title": "package",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/google/cli-reference/deploy",
        "title": "deploy",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/google/cli-reference/info",
        "title": "info",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/google/cli-reference/invoke",
        "title": "invoke",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/google/cli-reference/invoke-local",
        "title": "invoke local",
        "order": 7
      },
      {
        "path": "/framework/docs/providers/google/cli-reference/login",
        "title": "login",
        "order": 7
      },
      {
        "path": "/framework/docs/providers/google/cli-reference/logs",
        "title": "logs",
        "order": 8
      },
      {
        "path": "/framework/docs/providers/google/cli-reference/remove",
        "title": "remove",
        "order": 9
      },
      {
        "path": "/framework/docs/providers/google/cli-reference/plugin-list",
        "title": "Plugin List",
        "order": 10
      },
      {
        "path": "/framework/docs/providers/google/cli-reference/plugin-search",
        "title": "Plugin Search",
        "order": 11
      },
      {
        "path": "/framework/docs/providers/google/cli-reference/plugin-install",
        "title": "Plugin Install",
        "order": 12
      },
      {
        "path": "/framework/docs/providers/google/cli-reference/plugin-uninstall",
        "title": "Plugin Uninstall",
        "order": 12
      },
      {
        "path": "/framework/docs/providers/google/cli-reference/print",
        "title": "Print",
        "order": 13
      }
    ]
  },
  "/framework/docs/providers/google/events": {
    "index": [
      {
        "path": "/framework/docs/providers/google/events/index",
        "title": "Google Functions Events"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/google/events/http",
        "title": "HTTP",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/google/events/event",
        "title": "Event",
        "order": 2
      }
    ]
  },
  "/framework/docs/providers/google/examples": {
    "index": [
      {
        "path": "/framework/docs/providers/google/examples/index",
        "title": "Examples"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/google/examples/hello-world",
        "title": "Hello World Example"
      }
    ]
  },
  "/framework/docs/providers/google/examples/hello-world": {
    "index": [
      {
        "path": "/framework/docs/providers/google/examples/hello-world/index",
        "title": "Hello World Example"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/google/examples/hello-world/node",
        "title": "Hello World Node.js Example"
      }
    ]
  },
  "/framework/docs/providers/google/examples/hello-world/node": {
    "index": [
      {
        "path": "/framework/docs/providers/google/examples/hello-world/node/index",
        "title": "Hello World Node.js Example"
      }
    ],
    "children": []
  },
  "/framework/docs/providers/google/guide": {
    "index": [
      {
        "path": "/framework/docs/providers/google/guide/index",
        "title": "Guide"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/google/guide/intro",
        "title": "Intro",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/google/guide/installation",
        "title": "Installation",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/google/guide/quick-start",
        "title": "Quick Start",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/google/guide/credentials",
        "title": "Credentials",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/google/guide/services",
        "title": "Services",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/google/guide/functions",
        "title": "Functions",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/google/guide/events",
        "title": "Events",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/google/guide/deploying",
        "title": "Deploying",
        "order": 8
      },
      {
        "path": "/framework/docs/providers/google/guide/packaging",
        "title": "Packaging",
        "order": 9
      },
      {
        "path": "/framework/docs/providers/google/guide/variables",
        "title": "Variables",
        "order": 10
      },
      {
        "path": "/framework/docs/providers/google/guide/plugins",
        "title": "Plugins",
        "order": 13
      },
      {
        "path": "/framework/docs/providers/google/guide/workflow",
        "title": "Workflow",
        "order": 14
      }
    ]
  },
  "/framework/docs/providers/kubeless": {
    "index": [
      {
        "path": "/framework/docs/providers/kubeless/index",
        "title": "Kubeless"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/kubeless/cli-reference",
        "title": "CLI Reference"
      },
      {
        "path": "/framework/docs/providers/kubeless/events",
        "title": "Kubeless Events"
      },
      {
        "path": "/framework/docs/providers/kubeless/guide",
        "title": "Guide"
      }
    ]
  },
  "/framework/docs/providers/kubeless/cli-reference": {
    "index": [
      {
        "path": "/framework/docs/providers/kubeless/cli-reference/index",
        "title": "CLI Reference"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/kubeless/cli-reference/create",
        "title": "create",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/kubeless/cli-reference/deploy",
        "title": "deploy",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/kubeless/cli-reference/invoke",
        "title": "invoke",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/kubeless/cli-reference/logs",
        "title": "logs",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/kubeless/cli-reference/info",
        "title": "info",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/kubeless/cli-reference/remove",
        "title": "remove",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/kubeless/cli-reference/plugin-list",
        "title": "Plugin List",
        "order": 7
      },
      {
        "path": "/framework/docs/providers/kubeless/cli-reference/plugin-search",
        "title": "Plugin Search",
        "order": 8
      },
      {
        "path": "/framework/docs/providers/kubeless/cli-reference/plugin-install",
        "title": "Plugin Install",
        "order": 9
      },
      {
        "path": "/framework/docs/providers/kubeless/cli-reference/plugin-uninstall",
        "title": "Plugin Uninstall",
        "order": 10
      }
    ]
  },
  "/framework/docs/providers/kubeless/events": {
    "index": [
      {
        "path": "/framework/docs/providers/kubeless/events/index",
        "title": "Kubeless Events"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/kubeless/events/http",
        "title": "HTTP Events",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/kubeless/events/pubsub",
        "title": "PubSub",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/kubeless/events/scheduler",
        "title": "Schedule",
        "order": 3
      }
    ]
  },
  "/framework/docs/providers/kubeless/guide": {
    "index": [
      {
        "path": "/framework/docs/providers/kubeless/guide/index",
        "title": "Guide"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/kubeless/guide/intro",
        "title": "Intro",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/kubeless/guide/quick-start",
        "title": "Quick Start",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/kubeless/guide/installation",
        "title": "Installation",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/kubeless/guide/services",
        "title": "Services",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/kubeless/guide/functions",
        "title": "Functions",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/kubeless/guide/events",
        "title": "Events",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/kubeless/guide/deploying",
        "title": "Deploying",
        "order": 7
      },
      {
        "path": "/framework/docs/providers/kubeless/guide/debugging",
        "title": "Debugging",
        "order": 8
      },
      {
        "path": "/framework/docs/providers/kubeless/guide/workflow",
        "title": "Workflow",
        "order": 9
      },
      {
        "path": "/framework/docs/providers/kubeless/guide/packaging",
        "title": "Packaging",
        "order": 10
      }
    ]
  },
  "/framework/docs/providers/openwhisk": {
    "index": [
      {
        "path": "/framework/docs/providers/openwhisk/index",
        "title": "OpenWhisk"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference",
        "title": "CLI Reference"
      },
      {
        "path": "/framework/docs/providers/openwhisk/events",
        "title": "OpenWhisk Events"
      },
      {
        "path": "/framework/docs/providers/openwhisk/examples",
        "title": "Examples"
      },
      {
        "path": "/framework/docs/providers/openwhisk/guide",
        "title": "Guide"
      }
    ]
  },
  "/framework/docs/providers/openwhisk/cli-reference": {
    "index": [
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/index",
        "title": "CLI Reference"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/config-credentials",
        "title": "config credentials",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/create",
        "title": "create",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/install",
        "title": "install",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/deploy",
        "title": "deploy",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/deploy-function",
        "title": "deploy function",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/invoke",
        "title": "invoke",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/invoke-local",
        "title": "invoke local",
        "order": 7
      },
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/logs",
        "title": "logs",
        "order": 8
      },
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/info",
        "title": "info",
        "order": 9
      },
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/login",
        "title": "login",
        "order": 10
      },
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/remove",
        "title": "remove",
        "order": 11
      },
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/plugin-list",
        "title": "Plugin List",
        "order": 12
      },
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/plugin-search",
        "title": "Plugin Search",
        "order": 13
      },
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/plugin-install",
        "title": "Plugin Install",
        "order": 14
      },
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/plugin-uninstall",
        "title": "Plugin Uninstall",
        "order": 15
      },
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/print",
        "title": "Print",
        "order": 16
      },
      {
        "path": "/framework/docs/providers/openwhisk/cli-reference/slstats",
        "title": "serverless stats",
        "order": 17
      }
    ]
  },
  "/framework/docs/providers/openwhisk/events": {
    "index": [
      {
        "path": "/framework/docs/providers/openwhisk/events/index",
        "title": "OpenWhisk Events"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/openwhisk/events/apigateway",
        "title": "API Gateway",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/openwhisk/events/triggers",
        "title": "Triggers",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/openwhisk/events/cloudant",
        "title": "Cloudant",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/openwhisk/events/messagehub",
        "title": "Message Hub",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/openwhisk/events/schedule",
        "title": "Schedule",
        "order": 4
      }
    ]
  },
  "/framework/docs/providers/openwhisk/examples": {
    "index": [
      {
        "path": "/framework/docs/providers/openwhisk/examples/index",
        "title": "Examples"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/openwhisk/examples/hello-world",
        "title": "Hello World Example"
      }
    ]
  },
  "/framework/docs/providers/openwhisk/examples/hello-world": {
    "index": [
      {
        "path": "/framework/docs/providers/openwhisk/examples/hello-world/index",
        "title": "Hello World Example"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/openwhisk/examples/hello-world/node",
        "title": "Hello World Node.js Example"
      },
      {
        "path": "/framework/docs/providers/openwhisk/examples/hello-world/php",
        "title": "Hello World PHP Example"
      },
      {
        "path": "/framework/docs/providers/openwhisk/examples/hello-world/python",
        "title": "Hello World Python Example"
      },
      {
        "path": "/framework/docs/providers/openwhisk/examples/hello-world/swift",
        "title": "Hello World Swift Example"
      }
    ]
  },
  "/framework/docs/providers/openwhisk/examples/hello-world/node": {
    "index": [
      {
        "path": "/framework/docs/providers/openwhisk/examples/hello-world/node/index",
        "title": "Hello World Node.js Example"
      }
    ],
    "children": []
  },
  "/framework/docs/providers/openwhisk/examples/hello-world/php": {
    "index": [
      {
        "path": "/framework/docs/providers/openwhisk/examples/hello-world/php/index",
        "title": "Hello World PHP Example"
      }
    ],
    "children": []
  },
  "/framework/docs/providers/openwhisk/examples/hello-world/python": {
    "index": [
      {
        "path": "/framework/docs/providers/openwhisk/examples/hello-world/python/index",
        "title": "Hello World Python Example"
      }
    ],
    "children": []
  },
  "/framework/docs/providers/openwhisk/examples/hello-world/swift": {
    "index": [
      {
        "path": "/framework/docs/providers/openwhisk/examples/hello-world/swift/index",
        "title": "Hello World Swift Example"
      }
    ],
    "children": []
  },
  "/framework/docs/providers/openwhisk/guide": {
    "index": [
      {
        "path": "/framework/docs/providers/openwhisk/guide/index",
        "title": "Guide"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/openwhisk/guide/intro",
        "title": "Intro",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/openwhisk/guide/quick-start",
        "title": "Quick Start",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/openwhisk/guide/installation",
        "title": "Installation",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/openwhisk/guide/credentials",
        "title": "Credentials",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/openwhisk/guide/services",
        "title": "Services",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/openwhisk/guide/functions",
        "title": "Functions",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/openwhisk/guide/events",
        "title": "Events",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/openwhisk/guide/web-actions",
        "title": "Web Actions",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/openwhisk/guide/deploying",
        "title": "Deploying",
        "order": 8
      },
      {
        "path": "/framework/docs/providers/openwhisk/guide/testing",
        "title": "Testing",
        "order": 9
      },
      {
        "path": "/framework/docs/providers/openwhisk/guide/variables",
        "title": "Variables",
        "order": 10
      },
      {
        "path": "/framework/docs/providers/openwhisk/guide/packaging",
        "title": "Packaging",
        "order": 11
      },
      {
        "path": "/framework/docs/providers/openwhisk/guide/plugins",
        "title": "Plugins",
        "order": 13
      },
      {
        "path": "/framework/docs/providers/openwhisk/guide/workflow",
        "title": "Workflow",
        "order": 14
      },
      {
        "path": "/framework/docs/providers/openwhisk/guide/serverless.yml",
        "title": "Serverless.yml",
        "order": 15
      }
    ]
  },
  "/framework/docs/providers/spotinst": {
    "index": [
      {
        "path": "/framework/docs/providers/spotinst/index",
        "title": "Spotinst"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/spotinst/guide",
        "title": "User Guide",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/spotinst/cli-reference",
        "title": "CLI Reference",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/spotinst/events",
        "title": "Spotinst Events",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/spotinst/examples",
        "title": "Hello World Example",
        "order": 4
      }
    ]
  },
  "/framework/docs/providers/spotinst/cli-reference": {
    "index": [
      {
        "path": "/framework/docs/providers/spotinst/cli-reference/index",
        "title": "CLI Reference",
        "order": 2
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/spotinst/cli-reference/config-credentials",
        "title": "config credentials",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/spotinst/cli-reference/create",
        "title": "create",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/spotinst/cli-reference/deploy",
        "title": "deploy",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/spotinst/cli-reference/deploy-function",
        "title": "deploy function",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/spotinst/cli-reference/invoke",
        "title": "invoke",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/spotinst/cli-reference/logs",
        "title": "logs",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/spotinst/cli-reference/stage",
        "title": "Stage Variables",
        "order": 7
      },
      {
        "path": "/framework/docs/providers/spotinst/cli-reference/info",
        "title": "info",
        "order": 8
      },
      {
        "path": "/framework/docs/providers/spotinst/cli-reference/remove",
        "title": "remove",
        "order": 9
      },
      {
        "path": "/framework/docs/providers/spotinst/cli-reference/plugin-list",
        "title": "Plugin List",
        "order": 10
      },
      {
        "path": "/framework/docs/providers/spotinst/cli-reference/plugin-install",
        "title": "Plugin Install",
        "order": 11
      },
      {
        "path": "/framework/docs/providers/spotinst/cli-reference/plugin-search",
        "title": "Plugin Search",
        "order": 11
      },
      {
        "path": "/framework/docs/providers/spotinst/cli-reference/plugin-uninstall",
        "title": "Plugin Uninstall",
        "order": 13
      }
    ]
  },
  "/framework/docs/providers/spotinst/events": {
    "index": [
      {
        "path": "/framework/docs/providers/spotinst/events/index",
        "title": "Spotinst Events",
        "order": 3
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/spotinst/events/http",
        "title": "API Gateway",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/spotinst/events/schedule",
        "title": "Schedule",
        "order": 4
      }
    ]
  },
  "/framework/docs/providers/spotinst/examples": {
    "index": [
      {
        "path": "/framework/docs/providers/spotinst/examples/index",
        "title": "Hello World Example",
        "order": 4
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/spotinst/examples/java8",
        "title": "Hello World Java8 Example"
      },
      {
        "path": "/framework/docs/providers/spotinst/examples/node",
        "title": "Hello World JavaScript Example"
      },
      {
        "path": "/framework/docs/providers/spotinst/examples/python",
        "title": "Hello World Python Example"
      },
      {
        "path": "/framework/docs/providers/spotinst/examples/ruby",
        "title": "Hello World Ruby Example"
      }
    ]
  },
  "/framework/docs/providers/spotinst/examples/java8": {
    "index": [
      {
        "path": "/framework/docs/providers/spotinst/examples/java8/index",
        "title": "Hello World Java8 Example"
      }
    ],
    "children": []
  },
  "/framework/docs/providers/spotinst/examples/node": {
    "index": [
      {
        "path": "/framework/docs/providers/spotinst/examples/node/index",
        "title": "Hello World JavaScript Example"
      }
    ],
    "children": []
  },
  "/framework/docs/providers/spotinst/examples/python": {
    "index": [
      {
        "path": "/framework/docs/providers/spotinst/examples/python/index",
        "title": "Hello World Python Example"
      }
    ],
    "children": []
  },
  "/framework/docs/providers/spotinst/examples/ruby": {
    "index": [
      {
        "path": "/framework/docs/providers/spotinst/examples/ruby/index",
        "title": "Hello World Ruby Example"
      }
    ],
    "children": []
  },
  "/framework/docs/providers/spotinst/guide": {
    "index": [
      {
        "path": "/framework/docs/providers/spotinst/guide/index",
        "title": "User Guide",
        "order": 1
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/spotinst/guide/intro",
        "title": "Intro",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/spotinst/guide/quick-start",
        "title": "Quick Start",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/spotinst/guide/create-token",
        "title": "Create Token",
        "order": 3
      },
      {
        "path": "/framework/docs/providers/spotinst/guide/credentials",
        "title": "Credentials",
        "order": 4
      },
      {
        "path": "/framework/docs/providers/spotinst/guide/serverless.yml",
        "title": "Serverless.yml",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/spotinst/guide/endpoints",
        "title": "Endpoint Set Up",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/spotinst/guide/variables",
        "title": "Variables",
        "order": 6
      },
      {
        "path": "/framework/docs/providers/spotinst/guide/cors",
        "title": "CORS",
        "order": 8
      },
      {
        "path": "/framework/docs/providers/spotinst/guide/active-versions",
        "title": "Active Versions",
        "order": 9
      },
      {
        "path": "/framework/docs/providers/spotinst/guide/IAM-roles",
        "title": "IAM Role",
        "order": 11
      }
    ]
  },
  "/framework/docs/providers/webtasks": {
    "index": [
      {
        "path": "/framework/docs/providers/webtasks/index",
        "title": "Webtasks"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/webtasks/cli-reference",
        "title": "CLI Reference"
      },
      {
        "path": "/framework/docs/providers/webtasks/events",
        "title": "Auth0 Webtasks Events"
      },
      {
        "path": "/framework/docs/providers/webtasks/guide",
        "title": "Guide"
      }
    ]
  },
  "/framework/docs/providers/webtasks/cli-reference": {
    "index": [
      {
        "path": "/framework/docs/providers/webtasks/cli-reference/index",
        "title": "CLI Reference"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/webtasks/cli-reference/config-credentials",
        "title": "config credentials",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/webtasks/cli-reference/create",
        "title": "create",
        "order": 2
      },
      {
        "path": "/framework/docs/providers/webtasks/cli-reference/deploy",
        "title": "deploy",
        "order": 5
      },
      {
        "path": "/framework/docs/providers/webtasks/cli-reference/invoke",
        "title": "invoke",
        "order": 8
      },
      {
        "path": "/framework/docs/providers/webtasks/cli-reference/logs",
        "title": "logs",
        "order": 10
      },
      {
        "path": "/framework/docs/providers/webtasks/cli-reference/info",
        "title": "info",
        "order": 12
      },
      {
        "path": "/framework/docs/providers/webtasks/cli-reference/remove",
        "title": "remove",
        "order": 15
      }
    ]
  },
  "/framework/docs/providers/webtasks/events": {
    "index": [
      {
        "path": "/framework/docs/providers/webtasks/events/index",
        "title": "Auth0 Webtasks Events"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/webtasks/events/http",
        "title": "http",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/webtasks/events/schedule",
        "title": "schedule",
        "order": 4
      }
    ]
  },
  "/framework/docs/providers/webtasks/guide": {
    "index": [
      {
        "path": "/framework/docs/providers/webtasks/guide/index",
        "title": "Guide"
      }
    ],
    "children": [
      {
        "path": "/framework/docs/providers/webtasks/guide/intro",
        "title": "Intro",
        "order": 1
      },
      {
        "path": "/framework/docs/providers/webtasks/guide/quick-start",
        "title": "Quick Start",
        "order": 2
      }
    ]
  }
}