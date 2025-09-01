/**
 * Unified tool registry for the JustGoingViral server.
 */

import { justGoingViralTools } from './thirdPartyWrappers/justGoingViral.js';
import { filesystemTools } from './thirdPartyWrappers/filesystem.js';
import { memoryTools } from './thirdPartyWrappers/memory.js';
import { githubTools } from './thirdPartyWrappers/github.js';
import { postgresTools } from './thirdPartyWrappers/postgres.js';
import { sequentialThinkingTools } from './thirdPartyWrappers/sequentialThinking.js';
import { context7Tools } from './thirdPartyWrappers/context7.js';
import { browserToolsTools } from './thirdPartyWrappers/browserTools.js';
import { mondayTools } from './thirdPartyWrappers/monday.js';
import { evolutionaryIntelligenceTools } from './thirdPartyWrappers/evolutionaryIntelligence.js';
import { serverHealthTools } from './thirdPartyWrappers/serverHealth.js';
import { modelcontextprotocolServerFilesystemTools } from './thirdPartyWrappers/modelcontextprotocolServerFilesystem.js';

import { modelcontextprotocolServerMemoryTools } from './thirdPartyWrappers/modelcontextprotocolServerMemory.js';

const tools = [
  ...modelcontextprotocolServerMemoryTools,
  ...modelcontextprotocolServerFilesystemTools,
  ...justGoingViralTools,
  ...filesystemTools,
  ...memoryTools,
  ...githubTools,
  ...postgresTools,
  ...sequentialThinkingTools,
  ...context7Tools,
  ...browserToolsTools,
  ...mondayTools,
  ...evolutionaryIntelligenceTools,
  ...serverHealthTools,
];

export default tools;
