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
import { gohighlevelTools } from './thirdPartyWrappers/gohighlevel.js';
// New integrations - Complete tool ecosystem restoration
import { whatsappTools } from './thirdPartyWrappers/whatsapp.js';
import { cloudflareTools } from './thirdPartyWrappers/cloudflare.js';
import { openapiTools } from './thirdPartyWrappers/openapi.js';
import { eesystemTools } from './thirdPartyWrappers/eesystem.js';
import { gohighlevelFullToolsList } from './thirdPartyWrappers/gohighlevelFull.js';

// Credential setup tool
const credentialSetupTool = {
  name: 'ghl_setup_credentials',
  description: 'Set up API credentials for third-party service integrations (GoHighLevel, Monday.com, GitHub, etc.)',
  inputSchema: {
    type: 'object',
    properties: {
      service: {
        type: 'string',
        enum: ['gohighlevel', 'monday', 'github', 'whatsapp', 'cloudflare', 'openai', 'supabase'],
        description: 'Service to configure credentials for'
      },
      action: {
        type: 'string',
        enum: ['setup', 'status', 'remove', 'validate'],
        description: 'Action to perform',
        default: 'setup'
      },
      credentials: {
        type: 'object',
        description: 'Credentials object with service-specific keys (e.g., {"GHL_API_KEY": "...", "GHL_LOCATION_ID": "..."})'
      }
    },
    required: ['service']
  }
};

const tools = [
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
  ...modelcontextprotocolServerFilesystemTools,
  ...modelcontextprotocolServerMemoryTools,
  ...gohighlevelTools,
  // New integrations - Complete tool ecosystem (200+ tools restored)
  ...whatsappTools,                // 12 WhatsApp messaging tools
  ...cloudflareTools,              // 15 Cloudflare infrastructure tools
  ...openapiTools,                 // 5 OpenAPI exploration tools
  ...eesystemTools,                // 1 evolutionary intelligence tool
  ...gohighlevelFullToolsList,     // 100+ GoHighLevel tools across 17 categories
  // Credential management
  credentialSetupTool,
];

export default tools;
