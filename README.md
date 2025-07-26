# JustGoingViral MCP Server 🚀

A unified MCP (Model Context Protocol) server that consolidates multiple MCP servers into a single interface, making it easier to manage and use various tools and services.

## 🌟 Features

JustGoingViral provides access to multiple MCP server functionalities through one server:

### 📱 Apple MCP Tools (macOS only)
- **Contacts**: Search and retrieve contacts from Apple Contacts
- **Notes**: Search, list, and create notes in Apple Notes
- **Messages**: Send and read messages via Apple Messages
- **Mail**: Manage emails through Apple Mail
- **Calendar**: Search and create calendar events
- **Reminders**: Create and manage reminders
- **Maps**: Search locations and get directions
- **Web Search**: Search the web using DuckDuckGo

### 🛠️ Developer Tools
- **Filesystem**: Read/write files, manage directories
- **GitHub**: Repository operations, issues, pull requests
- **PostgreSQL**: Execute database queries
- **Memory/Knowledge Graph**: Create entities and relations
- **Sequential Thinking**: Step-by-step problem solving
- **Context7**: Library documentation lookup

### 🌐 Web & Integration Tools
- **Browser Tools**: Debugging, audits, screenshots
- **Monday.com**: Board and item management

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/justgoingviral-mcp.git
cd justgoingviral-mcp
```

2. **Install dependencies**
```bash
npm install
```

3. **Build the project**
```bash
npm run build
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file with your credentials:

```env
# GitHub Personal Access Token
GITHUB_TOKEN=your_github_token_here

# PostgreSQL Connection String
POSTGRES_CONNECTION_STRING=postgresql://user:password@host:port/database

# Monday.com API Token
MONDAY_API_TOKEN=your_monday_token_here
```

### Cline Configuration

Add to your Cline MCP settings (`cline_mcp_settings.json`):

```json
{
  "mcpServers": {
    "JustGoingViral": {
      "command": "node",
      "args": ["/absolute/path/to/justgoingviral-mcp/dist/index.js"],
      "env": {
        "GITHUB_TOKEN": "your_github_token",
        "POSTGRES_CONNECTION_STRING": "your_postgres_connection",
        "MONDAY_API_TOKEN": "your_monday_token"
      }
    }
  }
}
```

## 🚀 Usage

Once configured, all tools are available through Cline. Here are some examples:

### Apple Tools (macOS only)
- Search contacts: `contacts` tool with `name` parameter
- Create a note: `notes` tool with `operation: "create"`
- Send a message: `messages` tool with `operation: "send"`

### Developer Tools
- Read a file: `read_file` tool
- Create GitHub issue: `create_issue` tool
- Query database: `query` tool with SQL

### Knowledge Graph
- Create entities: `create_entities` tool
- Search nodes: `search_nodes` tool

## 📋 Available Tools

<details>
<summary><b>Complete Tool List</b> (Click to expand)</summary>

### Apple MCP Tools
- `contacts` - Search and retrieve contacts
- `notes` - Search, list, and create notes
- `messages` - Send, read, schedule messages
- `mail` - Read, search, send emails
- `calendar` - Search and create events
- `reminders` - Create and manage reminders
- `maps` - Search locations, get directions
- `webSearch` - Web search via DuckDuckGo

### Filesystem Tools
- `read_file` - Read file contents
- `read_multiple_files` - Read multiple files
- `write_file` - Create or overwrite files
- `edit_file` - Make line-based edits
- `create_directory` - Create directories
- `list_directory` - List directory contents
- `list_directory_with_sizes` - List with file sizes
- `directory_tree` - Get directory tree structure
- `move_file` - Move or rename files
- `search_files` - Search for files by pattern
- `get_file_info` - Get file metadata
- `list_allowed_directories` - List accessible directories

### Memory/Knowledge Graph Tools
- `create_entities` - Create entities
- `create_relations` - Create relationships
- `add_observations` - Add observations to entities
- `delete_entities` - Delete entities
- `delete_observations` - Delete observations
- `delete_relations` - Delete relationships
- `read_graph` - Read entire graph
- `search_nodes` - Search for nodes
- `open_nodes` - Open specific nodes

### GitHub Tools
- `create_or_update_file` - Create/update repository files
- `search_repositories` - Search GitHub repositories
- `create_repository` - Create new repository
- `get_file_contents` - Get file/directory contents
- `push_files` - Push multiple files in one commit
- `create_issue` - Create issues
- `create_pull_request` - Create pull requests
- `list_issues` - List repository issues
- `search_code` - Search code across GitHub

### Other Tools
- `query` - Execute PostgreSQL queries
- `sequentialthinking` - Step-by-step problem solving
- `resolve-library-id` - Find library documentation IDs
- `get-library-docs` - Fetch library documentation
- Browser debugging and audit tools
- Monday.com board management tools

</details>

## 🔧 Development

### Project Structure
```
justgoingviral-mcp/
├── src/
│   ├── index.ts              # Main server file
│   ├── tools.ts              # Tool registry
│   ├── thirdPartyWrappers/   # MCP server wrappers
│   │   ├── filesystem.ts
│   │   ├── memory.ts
│   │   ├── github.ts
│   │   └── ...
│   └── utils/                # Apple MCP utilities
├── dist/                     # Compiled JavaScript
├── package.json
├── tsconfig.json
└── README.md
```

### Adding New Wrappers

To add a new MCP server:

1. Create wrapper in `src/thirdPartyWrappers/`
2. Define tool schemas matching the target server
3. Create handler function that forwards calls
4. Import and add tools to `src/tools.ts`
5. Add routing logic in `src/index.ts`

### Building from Source
```bash
npm run build
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Notes

- **macOS Required**: Apple MCP tools only work on macOS
- **Browser Extension**: Browser tools require the browser extension to be running
- **Authentication**: External services require proper API tokens
- **Performance**: Wrapper approach adds minimal overhead compared to direct server usage

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built on the [Model Context Protocol](https://modelcontextprotocol.io)
- Wraps functionality from various MCP server implementations
- Designed for use with [Cline](https://github.com/cline/cline)

---

**Note**: This is an unofficial consolidation of various MCP servers. Each wrapped server maintains its own licensing and usage terms.
