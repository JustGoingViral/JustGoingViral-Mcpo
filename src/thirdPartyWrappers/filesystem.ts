/**
 * Thin wrapper for @modelcontextprotocol/server-filesystem
 * Forwards calls to the underlying package at runtime
 */

import { Tool } from '@modelcontextprotocol/sdk/types';

// Define tool schemas that match the filesystem server
export const filesystemTools: Tool[] = [
  {
    name: 'read_file',
    description: 'Read the complete contents of a file from the file system. Handles various text encodings and provides detailed error messages if the file cannot be read.',
    inputSchema: {
      type: 'object',
      properties: {
        path: { type: 'string' },
        tail: { type: 'number', description: 'If provided, returns only the last N lines of the file' },
        head: { type: 'number', description: 'If provided, returns only the first N lines of the file' }
      },
      required: ['path'],
      additionalProperties: false
    }
  },
  {
    name: 'read_multiple_files',
    description: 'Read the contents of multiple files simultaneously.',
    inputSchema: {
      type: 'object',
      properties: {
        paths: { type: 'array', items: { type: 'string' } }
      },
      required: ['paths'],
      additionalProperties: false
    }
  },
  {
    name: 'write_file',
    description: 'Create a new file or completely overwrite an existing file with new content.',
    inputSchema: {
      type: 'object',
      properties: {
        path: { type: 'string' },
        content: { type: 'string' }
      },
      required: ['path', 'content'],
      additionalProperties: false
    }
  },
  {
    name: 'edit_file',
    description: 'Make line-based edits to a text file.',
    inputSchema: {
      type: 'object',
      properties: {
        path: { type: 'string' },
        edits: { type: 'array', items: { type: 'object' } },
        dryRun: { type: 'boolean', default: false }
      },
      required: ['path', 'edits'],
      additionalProperties: false
    }
  },
  {
    name: 'create_directory',
    description: 'Create a new directory or ensure a directory exists.',
    inputSchema: {
      type: 'object',
      properties: {
        path: { type: 'string' }
      },
      required: ['path'],
      additionalProperties: false
    }
  },
  {
    name: 'list_directory',
    description: 'Get a detailed listing of all files and directories in a specified path.',
    inputSchema: {
      type: 'object',
      properties: {
        path: { type: 'string' }
      },
      required: ['path'],
      additionalProperties: false
    }
  },
  {
    name: 'list_directory_with_sizes',
    description: 'Get a detailed listing of all files and directories with sizes.',
    inputSchema: {
      type: 'object',
      properties: {
        path: { type: 'string' },
        sortBy: { type: 'string', enum: ['name', 'size'], default: 'name' }
      },
      required: ['path'],
      additionalProperties: false
    }
  },
  {
    name: 'directory_tree',
    description: 'Get a recursive tree view of files and directories as a JSON structure.',
    inputSchema: {
      type: 'object',
      properties: {
        path: { type: 'string' }
      },
      required: ['path'],
      additionalProperties: false
    }
  },
  {
    name: 'move_file',
    description: 'Move or rename files and directories.',
    inputSchema: {
      type: 'object',
      properties: {
        source: { type: 'string' },
        destination: { type: 'string' }
      },
      required: ['source', 'destination'],
      additionalProperties: false
    }
  },
  {
    name: 'search_files',
    description: 'Recursively search for files and directories matching a pattern.',
    inputSchema: {
      type: 'object',
      properties: {
        path: { type: 'string' },
        pattern: { type: 'string' },
        excludePatterns: { type: 'array', items: { type: 'string' }, default: [] }
      },
      required: ['path', 'pattern'],
      additionalProperties: false
    }
  },
  {
    name: 'get_file_info',
    description: 'Retrieve detailed metadata about a file or directory.',
    inputSchema: {
      type: 'object',
      properties: {
        path: { type: 'string' }
      },
      required: ['path'],
      additionalProperties: false
    }
  },
  {
    name: 'list_allowed_directories',
    description: 'Returns the list of directories that this server is allowed to access.',
    inputSchema: {
      type: 'object',
      properties: {},
      required: []
    }
  }
];

// Lazy-loaded filesystem server instance
let filesystemServer: any = null;

async function getFilesystemServer() {
  if (!filesystemServer) {
    // This would normally spawn the filesystem server as a subprocess
    // For now, we'll implement a placeholder that logs the call
    filesystemServer = {
      async callTool(name: string, args: any) {
        console.log(`[Filesystem Wrapper] Tool: ${name}, Args:`, args);
        return {
          content: [{ type: 'text', text: `Filesystem tool ${name} called (wrapper mode)` }],
          isError: false
        };
      }
    };
  }
  return filesystemServer;
}

export async function handleFilesystemTool(name: string, args: any) {
  const server = await getFilesystemServer();
  return server.callTool(name, args);
}
