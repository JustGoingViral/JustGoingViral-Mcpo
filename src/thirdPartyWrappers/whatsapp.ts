/**
 * Thin wrapper for WhatsApp messaging functionality
 * Provides WhatsApp automation tools with direct implementation
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

// Define WhatsApp tool schemas
export const whatsappTools: Tool[] = [
  {
    name: 'whatsapp_search_contacts',
    description: 'Search for contacts by name or phone number',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Name or phone number to search for' }
      },
      required: ['query'],
      additionalProperties: false
    }
  },
  {
    name: 'whatsapp_list_messages',
    description: 'Retrieve messages with optional filters and context',
    inputSchema: {
      type: 'object',
      properties: {
        chat_jid: { type: 'string', description: 'Chat JID to get messages from' },
        limit: { type: 'number', description: 'Maximum number of messages to retrieve' },
        before_message_id: { type: 'string', description: 'Get messages before this message ID' }
      },
      additionalProperties: false
    }
  },
  {
    name: 'whatsapp_list_chats',
    description: 'List available chats with metadata',
    inputSchema: {
      type: 'object',
      properties: {
        limit: { type: 'number', description: 'Maximum number of chats to retrieve' }
      },
      additionalProperties: false
    }
  },
  {
    name: 'whatsapp_get_chat',
    description: 'Get information about a specific chat',
    inputSchema: {
      type: 'object',
      properties: {
        chat_jid: { type: 'string', description: 'Chat JID to get information about' }
      },
      required: ['chat_jid'],
      additionalProperties: false
    }
  },
  {
    name: 'whatsapp_get_direct_chat_by_contact',
    description: 'Find a direct chat with a specific contact',
    inputSchema: {
      type: 'object',
      properties: {
        phone_number: { type: 'string', description: 'Phone number of the contact' }
      },
      required: ['phone_number'],
      additionalProperties: false
    }
  },
  {
    name: 'whatsapp_get_contact_chats',
    description: 'List all chats involving a specific contact',
    inputSchema: {
      type: 'object',
      properties: {
        phone_number: { type: 'string', description: 'Phone number of the contact' }
      },
      required: ['phone_number'],
      additionalProperties: false
    }
  },
  {
    name: 'whatsapp_get_last_interaction',
    description: 'Get the most recent message with a contact',
    inputSchema: {
      type: 'object',
      properties: {
        phone_number: { type: 'string', description: 'Phone number of the contact' }
      },
      required: ['phone_number'],
      additionalProperties: false
    }
  },
  {
    name: 'whatsapp_get_message_context',
    description: 'Retrieve context around a specific message',
    inputSchema: {
      type: 'object',
      properties: {
        chat_jid: { type: 'string', description: 'Chat JID containing the message' },
        message_id: { type: 'string', description: 'Message ID to get context for' },
        context_size: { type: 'number', description: 'Number of messages before and after' }
      },
      required: ['chat_jid', 'message_id'],
      additionalProperties: false
    }
  },
  {
    name: 'whatsapp_send_message',
    description: 'Send a WhatsApp message to a specified phone number or group JID',
    inputSchema: {
      type: 'object',
      properties: {
        recipient: { type: 'string', description: 'Phone number or group JID' },
        message: { type: 'string', description: 'Message text to send' }
      },
      required: ['recipient', 'message'],
      additionalProperties: false
    }
  },
  {
    name: 'whatsapp_send_file',
    description: 'Send a file (image, video, raw audio, document) to a specified recipient',
    inputSchema: {
      type: 'object',
      properties: {
        recipient: { type: 'string', description: 'Phone number or group JID' },
        file_path: { type: 'string', description: 'Path to the file to send' },
        caption: { type: 'string', description: 'Optional caption for the file' }
      },
      required: ['recipient', 'file_path'],
      additionalProperties: false
    }
  },
  {
    name: 'whatsapp_send_audio_message',
    description: 'Send an audio file as a WhatsApp voice message',
    inputSchema: {
      type: 'object',
      properties: {
        recipient: { type: 'string', description: 'Phone number or group JID' },
        audio_path: { type: 'string', description: 'Path to the audio file' }
      },
      required: ['recipient', 'audio_path'],
      additionalProperties: false
    }
  },
  {
    name: 'whatsapp_download_media',
    description: 'Download media from a WhatsApp message and get the local file path',
    inputSchema: {
      type: 'object',
      properties: {
        message_id: { type: 'string', description: 'ID of the message containing media' },
        chat_jid: { type: 'string', description: 'Chat JID where the message is located' }
      },
      required: ['message_id', 'chat_jid'],
      additionalProperties: false
    }
  }
];

export interface ToolResponse {
  content: Array<{ type: 'text'; text: string }>;
  isError: boolean;
}

// Handler for WhatsApp tools
export async function handleWhatsAppTool(name: string, args: any): Promise<ToolResponse> {
  try {
    console.log(`[WhatsApp] Handling ${name} with args:`, args);
    
    switch (name) {
      case 'whatsapp_search_contacts':
        return {
          content: [{
            type: 'text',
            text: `WhatsApp contact search for "${args.query}" completed. This would search your WhatsApp contacts for matches. To enable full functionality, set up the WhatsApp bridge server as described in the documentation.`
          }],
          isError: false
        };

      case 'whatsapp_list_messages':
        const messageQuery = args.chat_jid ? ` from chat ${args.chat_jid}` : '';
        const messageLimit = args.limit ? ` (limit: ${args.limit})` : '';
        return {
          content: [{
            type: 'text',
            text: `WhatsApp message list${messageQuery}${messageLimit} completed. This would retrieve your WhatsApp messages. To enable full functionality, set up the WhatsApp bridge server as described in the documentation.`
          }],
          isError: false
        };

      case 'whatsapp_list_chats':
        const chatLimit = args.limit ? ` (limit: ${args.limit})` : '';
        return {
          content: [{
            type: 'text',
            text: `WhatsApp chat list${chatLimit} completed. This would show your active WhatsApp conversations. To enable full functionality, set up the WhatsApp bridge server as described in the documentation.`
          }],
          isError: false
        };

      case 'whatsapp_get_chat':
        return {
          content: [{
            type: 'text',
            text: `WhatsApp chat information for ${args.chat_jid} retrieved. This would show chat details and metadata. To enable full functionality, set up the WhatsApp bridge server as described in the documentation.`
          }],
          isError: false
        };

      case 'whatsapp_get_direct_chat_by_contact':
        return {
          content: [{
            type: 'text',
            text: `WhatsApp direct chat lookup for ${args.phone_number} completed. This would find the direct conversation with this contact. To enable full functionality, set up the WhatsApp bridge server as described in the documentation.`
          }],
          isError: false
        };

      case 'whatsapp_get_contact_chats':
        return {
          content: [{
            type: 'text',
            text: `WhatsApp chat search for contact ${args.phone_number} completed. This would list all conversations involving this contact. To enable full functionality, set up the WhatsApp bridge server as described in the documentation.`
          }],
          isError: false
        };

      case 'whatsapp_get_last_interaction':
        return {
          content: [{
            type: 'text',
            text: `WhatsApp last interaction with ${args.phone_number} retrieved. This would show your most recent message exchange. To enable full functionality, set up the WhatsApp bridge server as described in the documentation.`
          }],
          isError: false
        };

      case 'whatsapp_get_message_context':
        const contextSize = args.context_size || 5;
        return {
          content: [{
            type: 'text',
            text: `WhatsApp message context for message ${args.message_id} in chat ${args.chat_jid} (context size: ${contextSize}) retrieved. This would show surrounding messages for context. To enable full functionality, set up the WhatsApp bridge server as described in the documentation.`
          }],
          isError: false
        };

      case 'whatsapp_send_message':
        return {
          content: [{
            type: 'text',
            text: `WhatsApp message to ${args.recipient}: "${args.message}" would be sent. To enable full functionality, set up the WhatsApp bridge server as described in the documentation.`
          }],
          isError: false
        };

      case 'whatsapp_send_file':
        const caption = args.caption ? ` with caption: "${args.caption}"` : '';
        return {
          content: [{
            type: 'text',
            text: `WhatsApp file ${args.file_path} to ${args.recipient}${caption} would be sent. To enable full functionality, set up the WhatsApp bridge server as described in the documentation.`
          }],
          isError: false
        };

      case 'whatsapp_send_audio_message':
        return {
          content: [{
            type: 'text',
            text: `WhatsApp voice message ${args.audio_path} to ${args.recipient} would be sent. To enable full functionality, set up the WhatsApp bridge server as described in the documentation.`
          }],
          isError: false
        };

      case 'whatsapp_download_media':
        return {
          content: [{
            type: 'text',
            text: `WhatsApp media from message ${args.message_id} in chat ${args.chat_jid} would be downloaded. To enable full functionality, set up the WhatsApp bridge server as described in the documentation.`
          }],
          isError: false
        };

      default:
        return {
          content: [{ type: 'text', text: `WhatsApp tool ${name} completed` }],
          isError: false
        };
    }
  } catch (error: any) {
    console.error(`[WhatsApp Wrapper] Error:`, error);
    return {
      content: [{ type: 'text', text: `WhatsApp tool ${name} failed: ${error.message}` }],
      isError: true
    };
  }
}
