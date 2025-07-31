# JustGoingViral MCP Server

A consolidated MCP server for Cline that integrates multiple MCP servers into a single interface.

## 🚀 Quick Setup (One Command)

Copy and paste this single command to get started:

```bash
git clone https://github.com/JustGoingViral/JustGoingViral-Mcpo.git && cd JustGoingViral-Mcpo && chmod +x setup.sh && ./setup.sh
```

This will:
1. Clone the repository
2. Navigate to the project directory
3. Make the setup script executable
4. Run the automated setup (installs dependencies, builds project, shows instructions)

## 🌟 Features - 68 Powerful Tools

**JustGoingViral is a mega-consolidated MCP server providing 68 tools across 10+ categories:**

### 🍎 Apple Ecosystem Integration (8 tools)
- `contacts`, `notes`, `messages`, `mail`, `reminders`, `webSearch`, `calendar`, `maps`

### 📁 Advanced Filesystem Operations (11 tools) 
- `read_file`, `read_multiple_files`, `write_file`, `edit_file`, `create_directory`
- `list_directory`, `list_directory_with_sizes`, `directory_tree`, `move_file`
- `search_files`, `get_file_info`, `list_allowed_directories`

### 🧠 Memory & Knowledge Graph (9 tools)
- `create_entities`, `create_relations`, `add_observations`, `delete_entities`
- `delete_observations`, `delete_relations`, `read_graph`, `search_nodes`, `open_nodes`

### 🐙 GitHub Integration (9 tools)
- `create_or_update_file`, `search_repositories`, `create_repository`, `get_file_contents`
- `push_files`, `create_issue`, `create_pull_request`, `list_issues`, `search_code`

### 🌐 Browser & Web Tools (14 tools)
- `getConsoleLogs`, `getConsoleErrors`, `getNetworkErrors`, `getNetworkLogs`
- `takeScreenshot`, `getSelectedElement`, `wipeLogs`, `runAccessibilityAudit`
- `runPerformanceAudit`, `runSEOAudit`, `runNextJSAudit`, `runDebuggerMode`
- `runAuditMode`, `runBestPracticesAudit`

### 📊 Monday.com Project Management (11 tools)
- `delete_item`, `get_board_items_by_name`, `create_item`, `create_update`
- `get_board_schema`, `get_users_by_name`, `change_item_column_values`
- `move_item_to_group`, `create_board`, `create_column`, `all_monday_api`

### 🧬 AI-Powered Thinking Systems (2 tools)
- `sequentialthinking` - Step-by-step problem solving
- `eesystem` - Evolutionary Intelligence with biohacking-enhanced cognitive amplification

### 📚 Documentation & Context (2 tools)
- `resolve-library-id`, `get-library-docs` - Context7 library documentation access

### 🗄️ Database Operations (1 tool)
- `query` - PostgreSQL database operations

**Total: 68 tools providing comprehensive automation, development, and productivity capabilities**

## Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```

## Adding a New MCP Server

To add a new MCP server to this consolidated server, use the automated script:

```bash
npm run add-mcp-server <repository-url>
```

For example, to add other MCP servers:
```bash
# Add a weather MCP server
npm run add-mcp-server https://github.com/modelcontextprotocol/servers/tree/main/src/weather

# Add a Slack MCP server  
npm run add-mcp-server https://github.com/modelcontextprotocol/servers/tree/main/src/slack

# Or any other MCP server repository
npm run add-mcp-server <repository-url>
```

### What the Script Does

The automation script will:
1. Clone the MCP server repository
2. Extract the server name from its package.json
3. Generate a wrapper file in `src/thirdPartyWrappers/`
4. Automatically populate tool schemas from the server's `src/tools.ts` file
5. Update `src/tools.ts` to import the new tools
6. Update `src/index.ts` to handle routing for the new tools
7. Extract and populate tool names for routing

### Manual Steps After Running the Script

After running the automation script, you may need to:

1. Review the generated wrapper file in `src/thirdPartyWrappers/` and make any necessary adjustments
2. If the MCP server doesn't follow the standard structure (tools defined in `src/tools.ts`), manually add the tool schemas
3. Add the package to dependencies in `package.json`:
   ```json
   "dependencies": {
     // ... other dependencies
     "package-name": "latest"
   }
   ```
4. Run `npm install` to install the new dependency
5. Rebuild the project: `npm run build`

## Usage

This server is designed to be used with Cline. Configure it in your MCP settings to use all the consolidated tools.

## Development

### Project Structure

```
.
├── src/
│   ├── index.ts              # Main server entry point
│   ├── tools.ts              # Tool registry
│   ├── thirdPartyWrappers/   # Wrappers for each MCP server
│   └── utils/                # Utility functions for Apple MCP
├── scripts/
│   └── add-mcp-server.ts     # Automation script for adding new servers
├── package.json
├── tsconfig.json
└── README.md
```

### Adding Tools Manually

If you need to add tools manually or the automation script doesn't fully work for your use case:

1. Create a wrapper file in `src/thirdPartyWrappers/`
2. Define the tool schemas matching the MCP server's tools
3. Create a handler function that imports and calls the server
4. Update `src/tools.ts` to import and include the new tools
5. Update `src/index.ts` to route the new tools to your handler

## License

MIT
