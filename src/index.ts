#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import tools from "./tools.js";
import { handleFilesystemTool } from "./thirdPartyWrappers/filesystem.js";
import { handleMemoryTool } from "./thirdPartyWrappers/memory.js";
import { handleGitHubTool } from "./thirdPartyWrappers/github.js";
import { handlePostgresTool } from "./thirdPartyWrappers/postgres.js";
import { handleSequentialThinkingTool } from "./thirdPartyWrappers/sequentialThinking.js";
import { handleContext7Tool } from "./thirdPartyWrappers/context7.js";
import { handleBrowserToolsTool } from "./thirdPartyWrappers/browserTools.js";
import { handleMondayTool } from "./thirdPartyWrappers/monday.js";
import { handleModelcontextprotocolServerMemoryTool } from "./thirdPartyWrappers/modelcontextprotocolServerMemory.js";
import { handleModelcontextprotocolServerFilesystemTool } from "./thirdPartyWrappers/modelcontextprotocolServerFilesystem.js";
import { handleEvolutionaryIntelligenceTool } from "./thirdPartyWrappers/evolutionaryIntelligence.js";
import { handleJustGoingViralTool } from "./thirdPartyWrappers/justGoingViral.js";
import { handleServerHealthTool } from "./thirdPartyWrappers/serverHealth.js";
import appleRouter from "./appleRouter.js";

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

    // Route filesystem tools to their wrapper
    const filesystemToolNames = [
      'read_file', 'read_multiple_files', 'write_file', 'edit_file', 
      'create_directory', 'list_directory', 'list_directory_with_sizes',
      'directory_tree', 'move_file', 'search_files', 'get_file_info', 'list_allowed_directories'
    ];
    
    if (filesystemToolNames.includes(name)) {
      return await handleFilesystemTool(name, args);
    }

    // Route memory tools
    const memoryToolNames = [
      'create_entities', 'create_relations', 'add_observations', 'delete_entities',
      'delete_observations', 'delete_relations', 'read_graph', 'search_nodes', 'open_nodes'
    ];
    
    if (memoryToolNames.includes(name)) {
      return await handleMemoryTool(name, args);
    }

    // Route GitHub tools
    const githubToolNames = [
      'create_or_update_file', 'search_repositories', 'create_repository', 'get_file_contents',
      'push_files', 'create_issue', 'create_pull_request', 'list_issues', 'search_code'
    ];
    
    if (githubToolNames.includes(name)) {
      return await handleGitHubTool(name, args);
    }

    // Route Postgres tools
    if (name === 'query') {
      return await handlePostgresTool(name, args);
    }

    // Route Sequential Thinking tools
    if (name === 'sequentialthinking') {
      return await handleSequentialThinkingTool(name, args);
    }

    // Route Context7 tools
    if (name === 'resolve-library-id' || name === 'get-library-docs') {
      return await handleContext7Tool(name, args);
    }

    // Route Browser Tools
    const browserToolNames = [
      'getConsoleLogs', 'getConsoleErrors', 'getNetworkErrors', 'getNetworkLogs',
      'takeScreenshot', 'getSelectedElement', 'wipeLogs', 'runAccessibilityAudit',
      'runPerformanceAudit', 'runSEOAudit', 'runNextJSAudit', 'runDebuggerMode',
      'runAuditMode', 'runBestPracticesAudit'
    ];
    
    if (browserToolNames.includes(name)) {
      return await handleBrowserToolsTool(name, args);
    }

    // Route @modelcontextprotocol/server-filesystem tools
    const modelcontextprotocolServerFilesystemToolNames = [
      'read_file',
      'read_multiple_files',
      'write_file',
      'edit_file',
      'create_directory',
      'list_directory',
      'list_directory_with_sizes',
      'directory_tree',
      'move_file',
      'search_files',
      'get_file_info',
      'list_allowed_directories'
    ];

    if (modelcontextprotocolServerFilesystemToolNames.includes(name)) {
      return await handleModelcontextprotocolServerFilesystemTool(name, args);
    }

    // Route @modelcontextprotocol/server-memory tools
    const modelcontextprotocolServerMemoryToolNames = [
      'create_entities',
      'create_relations',
      'add_observations',
      'delete_entities',
      'delete_observations',
      'delete_relations',
      'read_graph',
      'search_nodes',
      'open_nodes'
    ];

    if (modelcontextprotocolServerMemoryToolNames.includes(name)) {
      return await handleModelcontextprotocolServerMemoryTool(name, args);
    }

    // Route Monday.com tools
    const mondayToolNames = [
      'delete_item', 'get_board_items_by_name', 'create_item', 'create_update',
      'get_board_schema', 'get_users_by_name', 'change_item_column_values',
      'move_item_to_group', 'create_board', 'create_column', 'all_monday_api'
    ];
    
    if (mondayToolNames.includes(name)) {
      return await handleMondayTool(name, args);
    }

    // Route server health tool
    if (name === 'server_health') {
      return await handleServerHealthTool(name, args);
    }

    // Route Evolutionary Intelligence tools
    if (name === 'eesystem') {
      return await handleEvolutionaryIntelligenceTool(name, args);
    }

    // Route JustGoingViral tools
    const justGoingViralToolNames = [
      'contacts', 'notes', 'messages', 'mail', 'reminders', 'webSearch', 'calendar', 'maps'
    ];

    if (justGoingViralToolNames.includes(name)) {
      return await handleJustGoingViralTool(name, args);
    }

    // Handle Apple MCP tools via router
    const handler = appleRouter[name];
    if (handler) {
      const result = await handler(args);
      if (result !== undefined) {
        return result;
      }
    }
    return {
      content: [{ type: "text", text: `Tool "${name}" not yet implemented in JustGoingViral` }],
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
