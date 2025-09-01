import { Tool } from '@modelcontextprotocol/sdk/types.js';
import { serverConfig } from './config.js';

import { filesystemTools, handleFilesystemTool } from './thirdPartyWrappers/filesystem.js';
import { memoryTools, handleMemoryTool } from './thirdPartyWrappers/memory.js';
import { githubTools, handleGitHubTool } from './thirdPartyWrappers/github.js';
import { postgresTools, handlePostgresTool } from './thirdPartyWrappers/postgres.js';
import { sequentialThinkingTools, handleSequentialThinkingTool } from './thirdPartyWrappers/sequentialThinking.js';
import { context7Tools, handleContext7Tool } from './thirdPartyWrappers/context7.js';
import { browserToolsTools, handleBrowserToolsTool } from './thirdPartyWrappers/browserTools.js';
import { mondayTools, handleMondayTool } from './thirdPartyWrappers/monday.js';
import { modelcontextprotocolServerMemoryTools, handleModelcontextprotocolServerMemoryTool } from './thirdPartyWrappers/modelcontextprotocolServerMemory.js';
import { modelcontextprotocolServerFilesystemTools, handleModelcontextprotocolServerFilesystemTool } from './thirdPartyWrappers/modelcontextprotocolServerFilesystem.js';
import { evolutionaryIntelligenceTools, handleEvolutionaryIntelligenceTool } from './thirdPartyWrappers/evolutionaryIntelligence.js';
import { justGoingViralTools, handleJustGoingViralTool } from './thirdPartyWrappers/justGoingViral.js';
import { serverHealthTools, handleServerHealthTool } from './thirdPartyWrappers/serverHealth.js';

export interface Plugin {
  name: string;
  tools: Tool[];
  handler: (name: string, args: unknown) => Promise<any>;
}

const allPlugins: Plugin[] = [
  { name: 'filesystem', tools: filesystemTools, handler: handleFilesystemTool },
  { name: 'memory', tools: memoryTools, handler: handleMemoryTool },
  { name: 'github', tools: githubTools, handler: handleGitHubTool },
  { name: 'postgres', tools: postgresTools, handler: handlePostgresTool },
  { name: 'sequentialThinking', tools: sequentialThinkingTools, handler: handleSequentialThinkingTool },
  { name: 'context7', tools: context7Tools, handler: handleContext7Tool },
  { name: 'browserTools', tools: browserToolsTools, handler: handleBrowserToolsTool },
  { name: 'monday', tools: mondayTools, handler: handleMondayTool },
  { name: 'modelMemory', tools: modelcontextprotocolServerMemoryTools, handler: handleModelcontextprotocolServerMemoryTool },
  { name: 'modelFilesystem', tools: modelcontextprotocolServerFilesystemTools, handler: handleModelcontextprotocolServerFilesystemTool },
  { name: 'evolutionaryIntelligence', tools: evolutionaryIntelligenceTools, handler: handleEvolutionaryIntelligenceTool },
  { name: 'apple', tools: justGoingViralTools, handler: handleJustGoingViralTool },
  { name: 'serverHealth', tools: serverHealthTools, handler: handleServerHealthTool }
];

export const enabledPlugins: Plugin[] = serverConfig.enabledPlugins.length
  ? allPlugins.filter(p => serverConfig.enabledPlugins.includes(p.name))
  : allPlugins;
