import { describe, it, expect, beforeAll, afterEach, vi } from 'vitest';

const stubResult = (label: string) => ({
  content: [{ type: 'text', text: label }],
  isError: false,
});

vi.mock('../src/thirdPartyWrappers/github.js', () => ({
  githubTools: [{ name: 'search_repositories', description: '', inputSchema: { type: 'object', properties: {}, required: [] } }],
  handleGitHubTool: vi.fn(async (name: string) => stubResult(`github:${name}`)),
}));

vi.mock('../src/thirdPartyWrappers/justGoingViral.js', () => ({
  justGoingViralTools: [{ name: 'notes', description: '', inputSchema: { type: 'object', properties: {}, required: [] } }],
  handleJustGoingViralTool: vi.fn(async (name: string) => stubResult(`apple:${name}`)),
}));

vi.mock('../src/thirdPartyWrappers/memory.js', () => ({
  memoryTools: [{ name: 'create_entities', description: '', inputSchema: { type: 'object', properties: {}, required: [] } }],
  handleMemoryTool: vi.fn(async (name: string) => stubResult(`memory:${name}`)),
}));

vi.mock('../src/thirdPartyWrappers/postgres.js', () => ({
  postgresTools: [{ name: 'query', description: '', inputSchema: { type: 'object', properties: {}, required: [] } }],
  handlePostgresTool: vi.fn(async (name: string) => stubResult(`postgres:${name}`)),
}));

vi.mock('../src/thirdPartyWrappers/sequentialThinking.js', () => ({
  sequentialThinkingTools: [{ name: 'sequentialthinking', description: '', inputSchema: { type: 'object', properties: {}, required: [] } }],
  handleSequentialThinkingTool: vi.fn(async (name: string) => stubResult(`seq:${name}`)),
}));

vi.mock('../src/thirdPartyWrappers/context7.js', () => ({
  context7Tools: [{ name: 'resolve-library-id', description: '', inputSchema: { type: 'object', properties: {}, required: [] } }],
  handleContext7Tool: vi.fn(async (name: string) => stubResult(`context7:${name}`)),
}));

vi.mock('../src/thirdPartyWrappers/browserTools.js', () => ({
  browserToolsTools: [{ name: 'getConsoleLogs', description: '', inputSchema: { type: 'object', properties: {}, required: [] } }],
  handleBrowserToolsTool: vi.fn(async (name: string) => stubResult(`browser:${name}`)),
}));

vi.mock('../src/thirdPartyWrappers/monday.js', () => ({
  mondayTools: [{ name: 'create_item', description: '', inputSchema: { type: 'object', properties: {}, required: [] } }],
  handleMondayTool: vi.fn(async (name: string) => stubResult(`monday:${name}`)),
}));

vi.mock('../src/thirdPartyWrappers/modelcontextprotocolServerMemory.js', () => ({
  modelcontextprotocolServerMemoryTools: [{ name: 'open_nodes', description: '', inputSchema: { type: 'object', properties: {}, required: [] } }],
  handleModelcontextprotocolServerMemoryTool: vi.fn(async (name: string) => stubResult(`modelmemory:${name}`)),
}));

vi.mock('../src/thirdPartyWrappers/modelcontextprotocolServerFilesystem.js', () => ({
  modelcontextprotocolServerFilesystemTools: [{ name: 'directory_tree', description: '', inputSchema: { type: 'object', properties: {}, required: [] } }],
  handleModelcontextprotocolServerFilesystemTool: vi.fn(async (name: string) => stubResult(`modelfs:${name}`)),
}));

vi.mock('../src/thirdPartyWrappers/evolutionaryIntelligence.js', () => ({
  evolutionaryIntelligenceTools: [{ name: 'eesystem', description: '', inputSchema: { type: 'object', properties: {}, required: [] } }],
  handleEvolutionaryIntelligenceTool: vi.fn(async (name: string) => stubResult(`evo:${name}`)),
}));

vi.mock('../src/thirdPartyWrappers/serverHealth.js', () => ({
  serverHealthTools: [{ name: 'server_health', description: '', inputSchema: { type: 'object', properties: {}, required: [] } }],
  handleServerHealthTool: vi.fn(async (name: string) => stubResult(`health:${name}`)),
}));

afterEach(() => {
  delete process.env.ENABLED_PLUGINS;
});

let callToolHandler: any;

beforeAll(async () => {
  process.env.NODE_ENV = 'test';
  const mod = await import('../src/index.js');
  const server = (mod as any).server;
  callToolHandler = (server as any)._requestHandlers.get('tools/call');
});

async function callTool(name: string, args: any) {
  return await callToolHandler({ method: 'tools/call', params: { name, arguments: args } });
}

describe('Filesystem wrapper', () => {
  it('reads a file', async () => {
    const result = await callTool('read_file', { path: 'package.json' });
    expect(result.isError).toBe(false);
    expect(result.content[0].text).toContain('JustGoingViral');
  });
});

describe('GitHub wrapper', () => {
  it('calls GitHub tool', async () => {
    const result = await callTool('search_repositories', { query: 'test' });
    expect(result.isError).toBe(false);
    expect(result.content[0].text).toBe('github:search_repositories');
  });
});

describe('Apple wrapper', () => {
  it('calls Apple tool', async () => {
    const result = await callTool('notes', { operation: 'list' });
    expect(result.isError).toBe(false);
    expect(result.content[0].text).toBe('apple:notes');
  });
});

describe('Plugin configuration', () => {
  it('disables filesystem when not enabled', async () => {
    vi.resetModules();
    process.env.NODE_ENV = 'test';
    process.env.ENABLED_PLUGINS = 'github';
    const mod = await import('../src/index.js');
    const server = (mod as any).server;
    const handler = (server as any)._requestHandlers.get('tools/call');
    const res = await handler({ method: 'tools/call', params: { name: 'read_file', arguments: { path: 'package.json' } } });
    expect(res.isError).toBe(true);
  });
});
