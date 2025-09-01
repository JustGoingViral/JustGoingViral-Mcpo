#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import tools from "./tools.js";
import { registry } from "./handlerRegistry.js";
import { enabledPlugins } from "./plugins.js";
import { logger } from "./logger.js";
import { serverConfig } from "./config.js";

// Register plugin handlers
for (const plugin of enabledPlugins) {
  registry.register(plugin.tools, plugin.handler);
  logger.debug({ plugin: plugin.name }, "registered plugin");
}

// Main server initialization
const server = new Server(
  {
    name: serverConfig.name,
    version: serverConfig.version,
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools,
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    const { name, arguments: args } = request.params;

    if (!args) {
      throw new Error("No arguments provided");
    }

    const handler = registry.get(name);
    if (!handler) {
      return {
        content: [{ type: "text", text: `Tool "${name}" not yet implemented in JustGoingViral` }],
        isError: true,
      };
    }

    return await handler(args);
  } catch (error) {
    logger.error({ err: error }, "tool call failed");
    return {
      content: [
        {
          type: "text",
          text: `Error: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
      isError: true,
    };
  }
});

// Start the server
async function main() {
  try {
    logger.info("Starting JustGoingViral consolidated MCP server...");
    const transport = new StdioServerTransport();

    logger.debug("Connecting transport to server...");
    await server.connect(transport);
    logger.info("JustGoingViral server connected successfully!");
  } catch (error) {
    logger.error({ err: error }, "Failed to initialize JustGoingViral server");
    process.exit(1);
  }
}

if (process.env.NODE_ENV !== "test") {
  main();
}

export { server };
