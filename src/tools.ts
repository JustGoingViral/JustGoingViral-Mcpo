/**
 * Unified tool registry for the JustGoingViral server.
 */

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
const tools = [
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
];

export default tools;
