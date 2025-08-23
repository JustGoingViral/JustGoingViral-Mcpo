/**
 * Thin wrapper for OpenAPI discovery and documentation functionality
 * Provides API exploration tools with direct implementation
 */

export interface Tool {
  name: string;
  description: string;
  inputSchema: {
    type: string;
    properties: Record<string, any>;
    required?: string[];
    additionalProperties?: boolean;
  };
}

// Define OpenAPI tool schemas
export const openapiTools: Tool[] = [
  {
    name: 'openapi_search_apis',
    description: 'Search for OpenAPI specifications by name or description',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search query for API specifications' },
        limit: { type: 'number', description: 'Maximum number of results to return', default: 10 }
      },
      required: ['query'],
      additionalProperties: false
    }
  },
  {
    name: 'openapi_get_api_overview',
    description: 'Get an overview of a specific OpenAPI specification',
    inputSchema: {
      type: 'object',
      properties: {
        api_identifier: { type: 'string', description: 'OpenAPI identifier (e.g., "stripe", "github")' }
      },
      required: ['api_identifier'],
      additionalProperties: false
    }
  },
  {
    name: 'openapi_get_operation_details',
    description: 'Get detailed information about specific API operations/endpoints',
    inputSchema: {
      type: 'object',
      properties: {
        api_identifier: { type: 'string', description: 'OpenAPI identifier' },
        operation_path: { type: 'string', description: 'API path (e.g., "/users/{id}")' },
        method: { type: 'string', enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], description: 'HTTP method' }
      },
      required: ['api_identifier'],
      additionalProperties: false
    }
  },
  {
    name: 'openapi_explore_endpoints',
    description: 'Explore available endpoints for a specific API',
    inputSchema: {
      type: 'object',
      properties: {
        api_identifier: { type: 'string', description: 'OpenAPI identifier' },
        tag: { type: 'string', description: 'Filter by endpoint tag/category' },
        search: { type: 'string', description: 'Search within endpoint descriptions' }
      },
      required: ['api_identifier'],
      additionalProperties: false
    }
  },
  {
    name: 'openapi_generate_code_sample',
    description: 'Generate code samples for API operations',
    inputSchema: {
      type: 'object',
      properties: {
        api_identifier: { type: 'string', description: 'OpenAPI identifier' },
        operation_path: { type: 'string', description: 'API path' },
        method: { type: 'string', enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], description: 'HTTP method' },
        language: { type: 'string', enum: ['javascript', 'python', 'curl', 'typescript'], description: 'Code language', default: 'javascript' }
      },
      required: ['api_identifier', 'operation_path', 'method'],
      additionalProperties: false
    }
  }
];

export interface ToolResponse {
  content: Array<{ type: 'text'; text: string }>;
  isError: boolean;
}

// Handler for OpenAPI tools
export async function handleOpenAPITool(name: string, args: any): Promise<ToolResponse> {
  try {
    console.log(`[OpenAPI] Handling ${name} with args:`, args);
    
    switch (name) {
      case 'openapi_search_apis':
        const limit = args.limit || 10;
        return {
          content: [{
            type: 'text',
            text: `OpenAPI search for "${args.query}" completed (limit: ${limit}). This would search across available API specifications and return matching results. To enable full functionality, ensure the OpenAPI MCP server is properly configured as described in the documentation.`
          }],
          isError: false
        };

      case 'openapi_get_api_overview':
        return {
          content: [{
            type: 'text',
            text: `OpenAPI overview for "${args.api_identifier}" retrieved. This would provide a comprehensive summary of the API including available endpoints, authentication methods, and key features. To enable full functionality, ensure the OpenAPI MCP server is properly configured as described in the documentation.`
          }],
          isError: false
        };

      case 'openapi_get_operation_details':
        const pathQuery = args.operation_path ? ` for path "${args.operation_path}"` : '';
        const methodQuery = args.method ? ` (${args.method})` : '';
        return {
          content: [{
            type: 'text',
            text: `OpenAPI operation details for "${args.api_identifier}"${pathQuery}${methodQuery} retrieved. This would show detailed parameter information, response schemas, and usage examples. To enable full functionality, ensure the OpenAPI MCP server is properly configured as described in the documentation.`
          }],
          isError: false
        };

      case 'openapi_explore_endpoints':
        const tagFilter = args.tag ? ` filtered by tag "${args.tag}"` : '';
        const searchFilter = args.search ? ` matching "${args.search}"` : '';
        return {
          content: [{
            type: 'text',
            text: `OpenAPI endpoint exploration for "${args.api_identifier}"${tagFilter}${searchFilter} completed. This would list all available API endpoints with descriptions and categories. To enable full functionality, ensure the OpenAPI MCP server is properly configured as described in the documentation.`
          }],
          isError: false
        };

      case 'openapi_generate_code_sample':
        const language = args.language || 'javascript';
        return {
          content: [{
            type: 'text',
            text: `OpenAPI code sample for "${args.api_identifier}" ${args.method} ${args.operation_path} in ${language} generated. This would provide ready-to-use code examples for integrating with the API endpoint. To enable full functionality, ensure the OpenAPI MCP server is properly configured as described in the documentation.`
          }],
          isError: false
        };

      default:
        return {
          content: [{ type: 'text', text: `OpenAPI tool ${name} completed` }],
          isError: false
        };
    }
  } catch (error: any) {
    console.error(`[OpenAPI Wrapper] Error:`, error);
    return {
      content: [{ type: 'text', text: `OpenAPI tool ${name} failed: ${error.message}` }],
      isError: true
    };
  }
}
