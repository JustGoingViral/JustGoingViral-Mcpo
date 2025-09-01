import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { handleFilesystemTool, filesystemTools } from "./thirdPartyWrappers/filesystem.js";
import { handleMemoryTool, memoryTools } from "./thirdPartyWrappers/memory.js";
import { handleGitHubTool, githubTools } from "./thirdPartyWrappers/github.js";
import { handlePostgresTool, postgresTools } from "./thirdPartyWrappers/postgres.js";
import { handleSequentialThinkingTool, sequentialThinkingTools } from "./thirdPartyWrappers/sequentialThinking.js";
import { handleContext7Tool, context7Tools } from "./thirdPartyWrappers/context7.js";
import { handleBrowserToolsTool, browserToolsTools } from "./thirdPartyWrappers/browserTools.js";
import { handleMondayTool, mondayTools } from "./thirdPartyWrappers/monday.js";
import { handleModelcontextprotocolServerMemoryTool, modelcontextprotocolServerMemoryTools } from "./thirdPartyWrappers/modelcontextprotocolServerMemory.js";
import { handleModelcontextprotocolServerFilesystemTool, modelcontextprotocolServerFilesystemTools } from "./thirdPartyWrappers/modelcontextprotocolServerFilesystem.js";
import { handleEvolutionaryIntelligenceTool, evolutionaryIntelligenceTools } from "./thirdPartyWrappers/evolutionaryIntelligence.js";
import { handleJustGoingViralTool, justGoingViralTools } from "./thirdPartyWrappers/justGoingViral.js";
import { handleServerHealthTool, serverHealthTools } from "./thirdPartyWrappers/serverHealth.js";

export type ToolHandler = (args: any) => Promise<any>;

const registry: Record<string, ToolHandler> = {};

function register(tools: Tool[], handler: (name: string, args: any) => Promise<any>) {
  for (const tool of tools) {
    if (!registry[tool.name]) {
      registry[tool.name] = (args: any) => handler(tool.name, args);
    }
  }
}

register(filesystemTools, handleFilesystemTool);
register(memoryTools, handleMemoryTool);
register(githubTools, handleGitHubTool);
register(postgresTools, handlePostgresTool);
register(sequentialThinkingTools, handleSequentialThinkingTool);
register(context7Tools, handleContext7Tool);
register(browserToolsTools, handleBrowserToolsTool);
register(mondayTools, handleMondayTool);
register(modelcontextprotocolServerMemoryTools, handleModelcontextprotocolServerMemoryTool);
register(modelcontextprotocolServerFilesystemTools, handleModelcontextprotocolServerFilesystemTool);
register(evolutionaryIntelligenceTools, handleEvolutionaryIntelligenceTool);
register(justGoingViralTools, handleJustGoingViralTool);
register(serverHealthTools, handleServerHealthTool);

export function getToolHandler(name: string): ToolHandler | undefined {
  return registry[name];
}
