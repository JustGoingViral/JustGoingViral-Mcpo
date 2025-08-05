/**
 * Unified tool registry for the JustGoingViral server.
 */

import { type Tool } from "@modelcontextprotocol/sdk/types.js";
import localAppleTools from './utils/tools.js'; // Apple MCP utils
import { filesystemTools } from './thirdPartyWrappers/filesystem.js';
import { memoryTools } from './thirdPartyWrappers/memory.js';
import { githubTools } from './thirdPartyWrappers/github.js';
import { postgresTools } from './thirdPartyWrappers/postgres.js';
import { sequentialThinkingTools } from './thirdPartyWrappers/sequentialThinking.js';
import { context7Tools } from './thirdPartyWrappers/context7.js';
import { browserToolsTools } from './thirdPartyWrappers/browserTools.js';
import { mondayTools } from './thirdPartyWrappers/monday.js';
import { evolutionaryIntelligenceTools } from './thirdPartyWrappers/evolutionaryIntelligence.js';

const serverInfoTool: Tool = {
  name: "server_info",
  description: "Get basic information about the JustGoingViral server",
  inputSchema: {
    type: "object",
    properties: {}
  }
};
const tools: Tool[] = [
  ...localAppleTools,
  ...filesystemTools,
  ...memoryTools,
  ...githubTools,
  ...postgresTools,
  ...sequentialThinkingTools,
  ...context7Tools,
  ...browserToolsTools,
  ...mondayTools,
  ...evolutionaryIntelligenceTools,
  serverInfoTool,
];

export default tools;
