#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import tools from "./tools.js";
import { getToolHandler } from "./toolHandlers.js";

console.error("Starting JustGoingViral consolidated MCP server...");

// Main server initialization
const server = new Server(
  {
    name: "JustGoingViral",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    const { name, arguments: args } = request.params;

    if (!args) {
      throw new Error("No arguments provided");
    }

    const handler = getToolHandler(name);
    if (handler) {
      return await handler(args);
    }

    return {
      content: [{ type: "text", text: `Tool \"${name}\" not yet implemented in JustGoingViral` }],
      isError: true,
    };
  } catch (error) {
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
    console.error("Initializing transport...");
    const transport = new StdioServerTransport();
    
    console.error("Connecting transport to server...");
    await server.connect(transport);
    console.error("JustGoingViral server connected successfully!");
  } catch (error) {
    console.error("Failed to initialize JustGoingViral server:", error);
    process.exit(1);
  }
}

if (process.env.NODE_ENV !== "test") {
  main();
}

export { server };
