/**
 * Thin wrapper for GoHighLevel 2.0 API
 * Provides comprehensive access to all GHL features via HTTP API calls
 */

import { Tool } from '@modelcontextprotocol/sdk/types.js';

// Define tool schemas that match the GoHighLevel 2.0 API
export const goHighLevelTools: Tool[] = [
  // CONTACTS MANAGEMENT
  {
    name: 'ghl_get_contact',
    description: 'Get a contact by ID from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        contactId: { type: 'string', description: 'The ID of the contact to retrieve' },
        locationId: { type: 'string', description: 'The location ID (required for most GHL operations)' }
      },
      required: ['contactId', 'locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_create_contact',
    description: 'Create a new contact in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID where the contact will be created' },
        firstName: { type: 'string', description: 'First name of the contact' },
        lastName: { type: 'string', description: 'Last name of the contact' },
        email: { type: 'string', description: 'Email address of the contact' },
        phone: { type: 'string', description: 'Phone number of the contact' },
        address1: { type: 'string', description: 'Address line 1' },
        city: { type: 'string', description: 'City' },
        state: { type: 'string', description: 'State' },
        postalCode: { type: 'string', description: 'Postal code' },
        website: { type: 'string', description: 'Website URL' },
        timezone: { type: 'string', description: 'Timezone (e.g., America/Chicago)' },
        dnd: { type: 'boolean', description: 'Do not disturb setting' },
        tags: { 
          type: 'array', 
          items: { type: 'string' },
          description: 'Array of tags to apply to the contact' 
        },
        customFields: {
          type: 'object',
          description: 'Custom field values as key-value pairs',
          additionalProperties: true
        }
      },
      required: ['locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_update_contact',
    description: 'Update an existing contact in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        contactId: { type: 'string', description: 'The ID of the contact to update' },
        locationId: { type: 'string', description: 'The location ID' },
        firstName: { type: 'string', description: 'First name of the contact' },
        lastName: { type: 'string', description: 'Last name of the contact' },
        email: { type: 'string', description: 'Email address of the contact' },
        phone: { type: 'string', description: 'Phone number of the contact' },
        address1: { type: 'string', description: 'Address line 1' },
        city: { type: 'string', description: 'City' },
        state: { type: 'string', description: 'State' },
        postalCode: { type: 'string', description: 'Postal code' },
        website: { type: 'string', description: 'Website URL' },
        timezone: { type: 'string', description: 'Timezone (e.g., America/Chicago)' },
        dnd: { type: 'boolean', description: 'Do not disturb setting' },
        tags: { 
          type: 'array', 
          items: { type: 'string' },
          description: 'Array of tags to apply to the contact' 
        },
        customFields: {
          type: 'object',
          description: 'Custom field values as key-value pairs',
          additionalProperties: true
        }
      },
      required: ['contactId', 'locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_delete_contact',
    description: 'Delete a contact from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        contactId: { type: 'string', description: 'The ID of the contact to delete' },
        locationId: { type: 'string', description: 'The location ID' }
      },
      required: ['contactId', 'locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_search_contacts',
    description: 'Search contacts in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        query: { type: 'string', description: 'Search query (email, phone, name)' },
        limit: { type: 'number', description: 'Maximum number of results (default: 20)' },
        startAfterId: { type: 'string', description: 'Pagination cursor' },
        startAfter: { type: 'number', description: 'Pagination timestamp' }
      },
      required: ['locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_add_tags_to_contact',
    description: 'Add tags to a contact in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        contactId: { type: 'string', description: 'The ID of the contact' },
        locationId: { type: 'string', description: 'The location ID' },
        tags: { 
          type: 'array', 
          items: { type: 'string' },
          description: 'Array of tags to add to the contact' 
        }
      },
      required: ['contactId', 'locationId', 'tags'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_remove_tags_from_contact',
    description: 'Remove tags from a contact in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        contactId: { type: 'string', description: 'The ID of the contact' },
        locationId: { type: 'string', description: 'The location ID' },
        tags: { 
          type: 'array', 
          items: { type: 'string' },
          description: 'Array of tags to remove from the contact' 
        }
      },
      required: ['contactId', 'locationId', 'tags'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },

  // OPPORTUNITIES/PIPELINE MANAGEMENT
  {
    name: 'ghl_get_opportunity',
    description: 'Get an opportunity by ID from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        opportunityId: { type: 'string', description: 'The ID of the opportunity to retrieve' },
        locationId: { type: 'string', description: 'The location ID' }
      },
      required: ['opportunityId', 'locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_create_opportunity',
    description: 'Create a new opportunity in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        contactId: { type: 'string', description: 'The ID of the contact associated with this opportunity' },
        pipelineId: { type: 'string', description: 'The ID of the pipeline' },
        pipelineStageId: { type: 'string', description: 'The ID of the pipeline stage' },
        title: { type: 'string', description: 'Title of the opportunity' },
        monetaryValue: { type: 'number', description: 'Monetary value of the opportunity' },
        assignedTo: { type: 'string', description: 'User ID the opportunity is assigned to' },
        status: { type: 'string', enum: ['open', 'won', 'lost', 'abandoned'], description: 'Status of the opportunity' }
      },
      required: ['locationId', 'contactId', 'pipelineId', 'pipelineStageId', 'title'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_update_opportunity',
    description: 'Update an existing opportunity in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        opportunityId: { type: 'string', description: 'The ID of the opportunity to update' },
        locationId: { type: 'string', description: 'The location ID' },
        contactId: { type: 'string', description: 'The ID of the contact associated with this opportunity' },
        pipelineId: { type: 'string', description: 'The ID of the pipeline' },
        pipelineStageId: { type: 'string', description: 'The ID of the pipeline stage' },
        title: { type: 'string', description: 'Title of the opportunity' },
        monetaryValue: { type: 'number', description: 'Monetary value of the opportunity' },
        assignedTo: { type: 'string', description: 'User ID the opportunity is assigned to' },
        status: { type: 'string', enum: ['open', 'won', 'lost', 'abandoned'], description: 'Status of the opportunity' }
      },
      required: ['opportunityId', 'locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_delete_opportunity',
    description: 'Delete an opportunity from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        opportunityId: { type: 'string', description: 'The ID of the opportunity to delete' },
        locationId: { type: 'string', description: 'The location ID' }
      },
      required: ['opportunityId', 'locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_search_opportunities',
    description: 'Search opportunities in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        pipelineId: { type: 'string', description: 'Filter by pipeline ID' },
        pipelineStageId: { type: 'string', description: 'Filter by pipeline stage ID' },
        assignedTo: { type: 'string', description: 'Filter by assigned user ID' },
        contactId: { type: 'string', description: 'Filter by contact ID' },
        status: { type: 'string', enum: ['open', 'won', 'lost', 'abandoned'], description: 'Filter by status' },
        limit: { type: 'number', description: 'Maximum number of results (default: 20)' },
        startAfterId: { type: 'string', description: 'Pagination cursor' }
      },
      required: ['locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },

  // CALENDAR/APPOINTMENTS
  {
    name: 'ghl_get_calendar',
    description: 'Get calendar details by ID from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        calendarId: { type: 'string', description: 'The ID of the calendar to retrieve' },
        locationId: { type: 'string', description: 'The location ID' }
      },
      required: ['calendarId', 'locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_get_appointments',
    description: 'Get appointments from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        calendarId: { type: 'string', description: 'Filter by calendar ID' },
        contactId: { type: 'string', description: 'Filter by contact ID' },
        startDate: { type: 'string', description: 'Start date filter (YYYY-MM-DD)' },
        endDate: { type: 'string', description: 'End date filter (YYYY-MM-DD)' },
        includeAll: { type: 'boolean', description: 'Include all appointments regardless of status' },
        limit: { type: 'number', description: 'Maximum number of results' }
      },
      required: ['locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_create_appointment',
    description: 'Create a new appointment in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        calendarId: { type: 'string', description: 'The ID of the calendar' },
        contactId: { type: 'string', description: 'The ID of the contact' },
        title: { type: 'string', description: 'Title of the appointment' },
        startTime: { type: 'string', description: 'Start time (ISO 8601 format)' },
        endTime: { type: 'string', description: 'End time (ISO 8601 format)' },
        appointmentStatus: { type: 'string', enum: ['confirmed', 'cancelled', 'showed', 'noshow', 'rescheduled'], description: 'Status of the appointment' },
        address: { type: 'string', description: 'Address for the appointment' },
        ignoreDateRange: { type: 'boolean', description: 'Whether to ignore date range restrictions' },
        toNotify: { type: 'boolean', description: 'Whether to send notifications' }
      },
      required: ['locationId', 'calendarId', 'contactId', 'title', 'startTime', 'endTime'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_update_appointment',
    description: 'Update an existing appointment in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        appointmentId: { type: 'string', description: 'The ID of the appointment to update' },
        locationId: { type: 'string', description: 'The location ID' },
        calendarId: { type: 'string', description: 'The ID of the calendar' },
        contactId: { type: 'string', description: 'The ID of the contact' },
        title: { type: 'string', description: 'Title of the appointment' },
        startTime: { type: 'string', description: 'Start time (ISO 8601 format)' },
        endTime: { type: 'string', description: 'End time (ISO 8601 format)' },
        appointmentStatus: { type: 'string', enum: ['confirmed', 'cancelled', 'showed', 'noshow', 'rescheduled'], description: 'Status of the appointment' },
        address: { type: 'string', description: 'Address for the appointment' },
        ignoreDateRange: { type: 'boolean', description: 'Whether to ignore date range restrictions' },
        toNotify: { type: 'boolean', description: 'Whether to send notifications' }
      },
      required: ['appointmentId', 'locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_delete_appointment',
    description: 'Delete an appointment from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        appointmentId: { type: 'string', description: 'The ID of the appointment to delete' },
        locationId: { type: 'string', description: 'The location ID' }
      },
      required: ['appointmentId', 'locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },

  // CONVERSATIONS/MESSAGING
  {
    name: 'ghl_get_conversations',
    description: 'Get conversations from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        contactId: { type: 'string', description: 'Filter by contact ID' },
        assignedTo: { type: 'string', description: 'Filter by assigned user ID' },
        lastMessageType: { type: 'string', enum: ['SMS', 'Email', 'WhatsApp', 'GMB', 'IG', 'FB'], description: 'Filter by last message type' },
        limit: { type: 'number', description: 'Maximum number of results (default: 20)' }
      },
      required: ['locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_send_message',
    description: 'Send a message (SMS, Email, etc.) through GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        contactId: { type: 'string', description: 'The ID of the contact to send message to' },
        type: { type: 'string', enum: ['SMS', 'Email', 'WhatsApp', 'GMB', 'IG', 'FB'], description: 'Type of message to send' },
        message: { type: 'string', description: 'The message content' },
        subject: { type: 'string', description: 'Subject line (for email)' },
        html: { type: 'string', description: 'HTML content (for email)' },
        attachments: {
          type: 'array',
          items: { type: 'string' },
          description: 'Array of attachment URLs'
        }
      },
      required: ['locationId', 'contactId', 'type', 'message'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_get_messages',
    description: 'Get messages from a conversation in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        conversationId: { type: 'string', description: 'The ID of the conversation' },
        locationId: { type: 'string', description: 'The location ID' },
        type: { type: 'string', enum: ['SMS', 'Email', 'WhatsApp', 'GMB', 'IG', 'FB'], description: 'Filter by message type' },
        limit: { type: 'number', description: 'Maximum number of results (default: 20)' },
        lastMessageId: { type: 'string', description: 'Pagination cursor' }
      },
      required: ['conversationId', 'locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },

  // CAMPAIGNS
  {
    name: 'ghl_get_campaigns',
    description: 'Get campaigns from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        type: { type: 'string', enum: ['nurture', 'broadcast'], description: 'Filter by campaign type' },
        status: { type: 'string', enum: ['draft', 'published', 'archived'], description: 'Filter by campaign status' },
        limit: { type: 'number', description: 'Maximum number of results' }
      },
      required: ['locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_add_contact_to_campaign',
    description: 'Add a contact to a campaign in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        campaignId: { type: 'string', description: 'The ID of the campaign' },
        contactId: { type: 'string', description: 'The ID of the contact to add' }
      },
      required: ['locationId', 'campaignId', 'contactId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_remove_contact_from_campaign',
    description: 'Remove a contact from a campaign in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        campaignId: { type: 'string', description: 'The ID of the campaign' },
        contactId: { type: 'string', description: 'The ID of the contact to remove' }
      },
      required: ['locationId', 'campaignId', 'contactId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },

  // WORKFLOWS
  {
    name: 'ghl_get_workflows',
    description: 'Get workflows from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        limit: { type: 'number', description: 'Maximum number of results' }
      },
      required: ['locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_add_contact_to_workflow',
    description: 'Add a contact to a workflow in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        workflowId: { type: 'string', description: 'The ID of the workflow' },
        contactId: { type: 'string', description: 'The ID of the contact to add' },
        eventStartTime: { type: 'string', description: 'When to start the workflow (ISO 8601 format)' }
      },
      required: ['locationId', 'workflowId', 'contactId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_remove_contact_from_workflow',
    description: 'Remove a contact from a workflow in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        workflowId: { type: 'string', description: 'The ID of the workflow' },
        contactId: { type: 'string', description: 'The ID of the contact to remove' }
      },
      required: ['locationId', 'workflowId', 'contactId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },

  // CUSTOM FIELDS
  {
    name: 'ghl_get_custom_fields',
    description: 'Get custom fields from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        model: { type: 'string', enum: ['contact', 'opportunity'], description: 'Model type for custom fields' }
      },
      required: ['locationId', 'model'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_create_custom_field',
    description: 'Create a custom field in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        model: { type: 'string', enum: ['contact', 'opportunity'], description: 'Model type for custom field' },
        name: { type: 'string', description: 'Name of the custom field' },
        dataType: { 
          type: 'string', 
          enum: ['TEXT', 'TEXTAREA', 'NUMBER', 'PHONE', 'EMAIL', 'DATE', 'CHECKBOX', 'SINGLE_OPTIONS', 'MULTIPLE_OPTIONS', 'FILE_UPLOAD'],
          description: 'Data type of the custom field' 
        },
        isRequired: { type: 'boolean', description: 'Whether the field is required' },
        options: {
          type: 'array',
          items: { type: 'string' },
          description: 'Options for single/multiple select fields'
        }
      },
      required: ['locationId', 'model', 'name', 'dataType'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_update_custom_field',
    description: 'Update a custom field in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        customFieldId: { type: 'string', description: 'The ID of the custom field to update' },
        name: { type: 'string', description: 'Name of the custom field' },
        isRequired: { type: 'boolean', description: 'Whether the field is required' },
        options: {
          type: 'array',
          items: { type: 'string' },
          description: 'Options for single/multiple select fields'
        }
      },
      required: ['locationId', 'customFieldId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_delete_custom_field',
    description: 'Delete a custom field from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        customFieldId: { type: 'string', description: 'The ID of the custom field to delete' }
      },
      required: ['locationId', 'customFieldId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },

  // FORMS
  {
    name: 'ghl_get_forms',
    description: 'Get forms from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        type: { type: 'string', enum: ['survey', 'normal'], description: 'Filter by form type' },
        limit: { type: 'number', description: 'Maximum number of results' }
      },
      required: ['locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_get_form_submissions',
    description: 'Get form submissions from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        formId: { type: 'string', description: 'The ID of the form' },
        contactId: { type: 'string', description: 'Filter by contact ID' },
        page: { type: 'number', description: 'Page number for pagination' },
        limit: { type: 'number', description: 'Maximum number of results per page' },
        startAt: { type: 'string', description: 'Start date filter (YYYY-MM-DD)' },
        endAt: { type: 'string', description: 'End date filter (YYYY-MM-DD)' }
      },
      required: ['locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },

  // USERS & LOCATIONS
  {
    name: 'ghl_get_users',
    description: 'Get users from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        limit: { type: 'number', description: 'Maximum number of results' }
      },
      required: ['locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_get_location',
    description: 'Get location details from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The ID of the location to retrieve' }
      },
      required: ['locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },
  {
    name: 'ghl_update_location',
    description: 'Update location details in GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The ID of the location to update' },
        name: { type: 'string', description: 'Name of the location' },
        address: { type: 'string', description: 'Address of the location' },
        city: { type: 'string', description: 'City' },
        state: { type: 'string', description: 'State' },
        country: { type: 'string', description: 'Country' },
        postalCode: { type: 'string', description: 'Postal code' },
        website: { type: 'string', description: 'Website URL' },
        timezone: { type: 'string', description: 'Timezone (e.g., America/Chicago)' }
      },
      required: ['locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },

  // PIPELINES
  {
    name: 'ghl_get_pipelines',
    description: 'Get pipelines from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' }
      },
      required: ['locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },

  // PRODUCTS
  {
    name: 'ghl_get_products',
    description: 'Get products from GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        limit: { type: 'number', description: 'Maximum number of results' },
        offset: { type: 'number', description: 'Offset for pagination' }
      },
      required: ['locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },

  // MEDIA
  {
    name: 'ghl_upload_media',
    description: 'Upload media file to GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' },
        fileUrl: { type: 'string', description: 'URL of the file to upload' },
        fileName: { type: 'string', description: 'Name of the file' },
        hosted: { type: 'boolean', description: 'Whether the file is hosted externally' }
      },
      required: ['locationId', 'fileUrl', 'fileName'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  },

  // OAUTH & SOCIAL MEDIA
  {
    name: 'ghl_get_social_media_accounts',
    description: 'Get social media accounts connected to GoHighLevel',
    inputSchema: {
      type: 'object',
      properties: {
        locationId: { type: 'string', description: 'The location ID' }
      },
      required: ['locationId'],
      additionalProperties: false,
      $schema: 'http://json-schema.org/draft-07/schema#'
    }
  }
];

// Handler for GoHighLevel tools
export async function handleGoHighLevelTool(name: string, args: any) {
  try {
    const apiKey = process.env.GHL_API_KEY;
    if (!apiKey) {
      return {
        content: [{ type: 'text', text: 'GoHighLevel API key not configured. Please set GHL_API_KEY environment variable.' }],
        isError: true
      };
    }

    const baseUrl = 'https://services.leadconnectorhq.com';
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Version': '2021-07-28',
      'Content-Type': 'application/json'
    };

    // Dynamic import of axios to avoid bundling issues
    const axios = (await import('axios')).default;

    let response;
    let endpoint = '';

    // Route based on tool name
    switch (name) {
      // CONTACTS
      case 'ghl_get_contact':
        endpoint = `/contacts/${args.contactId}?locationId=${args.locationId}`;
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      case 'ghl_create_contact':
        endpoint = '/contacts/';
        response = await axios.post(`${baseUrl}${endpoint}`, args, { headers });
        break;

      case 'ghl_update_contact':
        endpoint = `/contacts/${args.contactId}`;
        const { contactId, ...updateData } = args;
        response = await axios.put(`${baseUrl}${endpoint}`, updateData, { headers });
        break;

      case 'ghl_delete_contact':
        endpoint = `/contacts/${args.contactId}?locationId=${args.locationId}`;
        response = await axios.delete(`${baseUrl}${endpoint}`, { headers });
        break;

      case 'ghl_search_contacts':
        const contactParams = new URLSearchParams();
        Object.entries(args).forEach(([key, value]) => {
          if (value !== undefined) contactParams.append(key, String(value));
        });
        endpoint = `/contacts/?${contactParams.toString()}`;
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      case 'ghl_add_tags_to_contact':
        endpoint = `/contacts/${args.contactId}/tags`;
        response = await axios.post(`${baseUrl}${endpoint}`, { 
          locationId: args.locationId,
          tags: args.tags 
        }, { headers });
        break;

      case 'ghl_remove_tags_from_contact':
        endpoint = `/contacts/${args.contactId}/tags`;
        response = await axios.delete(`${baseUrl}${endpoint}`, { 
          data: { locationId: args.locationId, tags: args.tags },
          headers 
        });
        break;

      // OPPORTUNITIES
      case 'ghl_get_opportunity':
        endpoint = `/opportunities/${args.opportunityId}?locationId=${args.locationId}`;
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      case 'ghl_create_opportunity':
        endpoint = '/opportunities/';
        response = await axios.post(`${baseUrl}${endpoint}`, args, { headers });
        break;

      case 'ghl_update_opportunity':
        endpoint = `/opportunities/${args.opportunityId}`;
        const { opportunityId, ...opportunityUpdateData } = args;
        response = await axios.put(`${baseUrl}${endpoint}`, opportunityUpdateData, { headers });
        break;

      case 'ghl_delete_opportunity':
        endpoint = `/opportunities/${args.opportunityId}?locationId=${args.locationId}`;
        response = await axios.delete(`${baseUrl}${endpoint}`, { headers });
        break;

      case 'ghl_search_opportunities':
        const oppParams = new URLSearchParams();
        Object.entries(args).forEach(([key, value]) => {
          if (value !== undefined) oppParams.append(key, String(value));
        });
        endpoint = `/opportunities/search?${oppParams.toString()}`;
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      // CALENDARS & APPOINTMENTS
      case 'ghl_get_calendar':
        endpoint = `/calendars/${args.calendarId}?locationId=${args.locationId}`;
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      case 'ghl_get_appointments':
        const apptParams = new URLSearchParams();
        Object.entries(args).forEach(([key, value]) => {
          if (value !== undefined) apptParams.append(key, String(value));
        });
        endpoint = `/calendars/events?${apptParams.toString()}`;
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      case 'ghl_create_appointment':
        endpoint = '/calendars/events';
        response = await axios.post(`${baseUrl}${endpoint}`, args, { headers });
        break;

      case 'ghl_update_appointment':
        endpoint = `/calendars/events/${args.appointmentId}`;
        const { appointmentId, ...apptUpdateData } = args;
        response = await axios.put(`${baseUrl}${endpoint}`, apptUpdateData, { headers });
        break;

      case 'ghl_delete_appointment':
        endpoint = `/calendars/events/${args.appointmentId}?locationId=${args.locationId}`;
        response = await axios.delete(`${baseUrl}${endpoint}`, { headers });
        break;

      // CONVERSATIONS & MESSAGING
      case 'ghl_get_conversations':
        const convParams = new URLSearchParams();
        Object.entries(args).forEach(([key, value]) => {
          if (value !== undefined) convParams.append(key, String(value));
        });
        endpoint = `/conversations?${convParams.toString()}`;
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      case 'ghl_send_message':
        endpoint = '/conversations/messages';
        response = await axios.post(`${baseUrl}${endpoint}`, args, { headers });
        break;

      case 'ghl_get_messages':
        endpoint = `/conversations/${args.conversationId}/messages?locationId=${args.locationId}`;
        const msgParams = new URLSearchParams();
        Object.entries(args).forEach(([key, value]) => {
          if (key !== 'conversationId' && value !== undefined) {
            msgParams.append(key, String(value));
          }
        });
        if (msgParams.toString()) {
          endpoint += `&${msgParams.toString()}`;
        }
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      // CAMPAIGNS
      case 'ghl_get_campaigns':
        const campaignParams = new URLSearchParams();
        Object.entries(args).forEach(([key, value]) => {
          if (value !== undefined) campaignParams.append(key, String(value));
        });
        endpoint = `/campaigns?${campaignParams.toString()}`;
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      case 'ghl_add_contact_to_campaign':
        endpoint = `/campaigns/${args.campaignId}/contacts`;
        response = await axios.post(`${baseUrl}${endpoint}`, {
          locationId: args.locationId,
          contactId: args.contactId
        }, { headers });
        break;

      case 'ghl_remove_contact_from_campaign':
        endpoint = `/campaigns/${args.campaignId}/contacts/${args.contactId}?locationId=${args.locationId}`;
        response = await axios.delete(`${baseUrl}${endpoint}`, { headers });
        break;

      // WORKFLOWS
      case 'ghl_get_workflows':
        endpoint = `/workflows?locationId=${args.locationId}`;
        if (args.limit) endpoint += `&limit=${args.limit}`;
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      case 'ghl_add_contact_to_workflow':
        endpoint = `/workflows/${args.workflowId}/contacts`;
        response = await axios.post(`${baseUrl}${endpoint}`, {
          locationId: args.locationId,
          contactId: args.contactId,
          eventStartTime: args.eventStartTime
        }, { headers });
        break;

      case 'ghl_remove_contact_from_workflow':
        endpoint = `/workflows/${args.workflowId}/contacts/${args.contactId}?locationId=${args.locationId}`;
        response = await axios.delete(`${baseUrl}${endpoint}`, { headers });
        break;

      // CUSTOM FIELDS
      case 'ghl_get_custom_fields':
        endpoint = `/custom-fields?locationId=${args.locationId}&model=${args.model}`;
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      case 'ghl_create_custom_field':
        endpoint = '/custom-fields';
        response = await axios.post(`${baseUrl}${endpoint}`, args, { headers });
        break;

      case 'ghl_update_custom_field':
        endpoint = `/custom-fields/${args.customFieldId}`;
        const { customFieldId, ...customFieldUpdateData } = args;
        response = await axios.put(`${baseUrl}${endpoint}`, customFieldUpdateData, { headers });
        break;

      case 'ghl_delete_custom_field':
        endpoint = `/custom-fields/${args.customFieldId}?locationId=${args.locationId}`;
        response = await axios.delete(`${baseUrl}${endpoint}`, { headers });
        break;

      // FORMS
      case 'ghl_get_forms':
        const formParams = new URLSearchParams();
        Object.entries(args).forEach(([key, value]) => {
          if (value !== undefined) formParams.append(key, String(value));
        });
        endpoint = `/forms?${formParams.toString()}`;
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      case 'ghl_get_form_submissions':
        const submissionParams = new URLSearchParams();
        Object.entries(args).forEach(([key, value]) => {
          if (value !== undefined) submissionParams.append(key, String(value));
        });
        endpoint = `/forms/submissions?${submissionParams.toString()}`;
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      // USERS & LOCATIONS
      case 'ghl_get_users':
        endpoint = `/users?locationId=${args.locationId}`;
        if (args.limit) endpoint += `&limit=${args.limit}`;
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      case 'ghl_get_location':
        endpoint = `/locations/${args.locationId}`;
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      case 'ghl_update_location':
        endpoint = `/locations/${args.locationId}`;
        const { locationId, ...locationUpdateData } = args;
        response = await axios.put(`${baseUrl}${endpoint}`, locationUpdateData, { headers });
        break;

      // PIPELINES
      case 'ghl_get_pipelines':
        endpoint = `/opportunities/pipelines?locationId=${args.locationId}`;
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      // PRODUCTS
      case 'ghl_get_products':
        const productParams = new URLSearchParams();
        Object.entries(args).forEach(([key, value]) => {
          if (value !== undefined) productParams.append(key, String(value));
        });
        endpoint = `/products?${productParams.toString()}`;
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      // MEDIA
      case 'ghl_upload_media':
        endpoint = '/medias/upload-file';
        response = await axios.post(`${baseUrl}${endpoint}`, args, { headers });
        break;

      // SOCIAL MEDIA
      case 'ghl_get_social_media_accounts':
        endpoint = `/social-media-posting/accounts?locationId=${args.locationId}`;
        response = await axios.get(`${baseUrl}${endpoint}`, { headers });
        break;

      default:
        return {
          content: [{ type: 'text', text: `GoHighLevel tool "${name}" not implemented` }],
          isError: true
        };
    }

    return {
      content: [{ 
        type: 'text', 
        text: JSON.stringify(response.data, null, 2) 
      }],
      isError: false
    };

  } catch (error: any) {
    console.error(`[GoHighLevel Wrapper] Error:`, error);
    return {
      content: [{ 
        type: 'text', 
        text: `GoHighLevel tool ${name} failed: ${error.response?.data?.message || error.message}` 
      }],
      isError: true
    };
  }
}