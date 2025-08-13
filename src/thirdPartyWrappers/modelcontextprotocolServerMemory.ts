/**
 * Thin wrapper for @modelcontextprotocol/server-memory
 * Forwards calls to the underlying package at runtime
 */

import { Tool } from '@modelcontextprotocol/sdk/types.js';

// Define tool schemas that match the @modelcontextprotocol/server-memory server
export const modelcontextprotocolServerMemoryTools: Tool[] = [
  // TODO: Add tool schemas here
];

// Handler for @modelcontextprotocol/server-memory tools
export async function handleModelcontextprotocolServerMemoryTool(name: string, args: any) {
  try {
    // @ts-ignore - Dynamic import resolved at runtime
    const { createServer } = await import('@modelcontextprotocol/server-memory');
    const server = createServer();
    return await server.callTool(name, args);
  } catch (error) {
    console.error(`[@modelcontextprotocol/server-memory Wrapper] Error:`, error);
    return {
      content: [{ type: 'text', text: `@modelcontextprotocol/server-memory tool ${name} failed: ${error}` }],
      isError: true
    };
  }
}