/**
 * Thin wrapper for @modelcontextprotocol/server-filesystem
 * Forwards calls to the underlying package at runtime
 */

import { Tool } from '@modelcontextprotocol/sdk/types.js';

// Define tool schemas that match the @modelcontextprotocol/server-filesystem server
export const modelcontextprotocolServerFilesystemTools: Tool[] = [
  // TODO: Add tool schemas here
];

// Handler for @modelcontextprotocol/server-filesystem tools
export async function handleModelcontextprotocolServerFilesystemTool(name: string, args: any) {
  try {
    // @ts-ignore - Dynamic import resolved at runtime
    const { createServer } = await import('@modelcontextprotocol/server-filesystem');
    const server = createServer();
    return await server.callTool(name, args);
  } catch (error) {
    console.error(`[@modelcontextprotocol/server-filesystem Wrapper] Error:`, error);
    return {
      content: [{ type: 'text', text: `@modelcontextprotocol/server-filesystem tool ${name} failed: ${error}` }],
      isError: true
    };
  }
}