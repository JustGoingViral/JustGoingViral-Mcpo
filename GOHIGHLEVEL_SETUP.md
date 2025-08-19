# GoHighLevel MCP Server Integration

This document explains how to use the GoHighLevel tools integrated into the JustGoingViral MCP Server.

## Setup

1. **Get your GoHighLevel API Key**
   - Log in to your GoHighLevel account
   - Go to Settings > Integrations
   - Generate an API key with the required permissions

2. **Set Environment Variable**
   ```bash
   export GHL_API_KEY="your_api_key_here"
   ```

3. **Get your Location ID**
   - In GoHighLevel, the Location ID can be found in the URL or through the API
   - You'll need this for most operations

## Available Tools

### Contact Management

- **`ghl_get_contact`** - Get a specific contact by ID
- **`ghl_create_contact`** - Create a new contact
- **`ghl_update_contact`** - Update an existing contact
- **`ghl_delete_contact`** - Delete a contact
- **`ghl_search_contacts`** - Search contacts by various criteria
- **`ghl_add_tags_to_contact`** - Add tags to a contact
- **`ghl_remove_tags_from_contact`** - Remove tags from a contact

### Opportunities & Pipeline

- **`ghl_get_opportunity`** - Get a specific opportunity
- **`ghl_create_opportunity`** - Create a new opportunity
- **`ghl_update_opportunity`** - Update an existing opportunity
- **`ghl_delete_opportunity`** - Delete an opportunity
- **`ghl_search_opportunities`** - Search opportunities

### Calendar & Appointments

- **`ghl_get_calendar`** - Get calendar details
- **`ghl_get_appointments`** - Get appointments from calendars
- **`ghl_create_appointment`** - Create a new appointment
- **`ghl_update_appointment`** - Update an existing appointment
- **`ghl_delete_appointment`** - Delete an appointment

### Messaging & Conversations

- **`ghl_get_conversations`** - Get conversations
- **`ghl_send_message`** - Send SMS, Email, WhatsApp messages
- **`ghl_get_messages`** - Get messages from a conversation

### Campaigns & Workflows

- **`ghl_get_campaigns`** - Get campaigns
- **`ghl_add_contact_to_campaign`** - Add contact to a campaign
- **`ghl_remove_contact_from_campaign`** - Remove contact from campaign
- **`ghl_get_workflows`** - Get workflows
- **`ghl_add_contact_to_workflow`** - Add contact to workflow
- **`ghl_remove_contact_from_workflow`** - Remove contact from workflow

### Custom Fields & Forms

- **`ghl_get_custom_fields`** - Get custom field definitions
- **`ghl_create_custom_field`** - Create a new custom field
- **`ghl_update_custom_field`** - Update custom field
- **`ghl_delete_custom_field`** - Delete custom field
- **`ghl_get_forms`** - Get forms
- **`ghl_get_form_submissions`** - Get form submissions

### Admin & Other

- **`ghl_get_users`** - Get users in the location
- **`ghl_get_location`** - Get location details
- **`ghl_update_location`** - Update location settings
- **`ghl_get_pipelines`** - Get opportunity pipelines
- **`ghl_get_products`** - Get products
- **`ghl_upload_media`** - Upload media files
- **`ghl_get_social_media_accounts`** - Get connected social media accounts

## Example Usage

### Create a Contact
```json
{
  "name": "ghl_create_contact",
  "arguments": {
    "locationId": "your_location_id",
    "firstName": "John",
    "lastName": "Doe", 
    "email": "john@example.com",
    "phone": "+1234567890",
    "tags": ["lead", "website"]
  }
}
```

### Send an SMS Message
```json
{
  "name": "ghl_send_message",
  "arguments": {
    "locationId": "your_location_id",
    "contactId": "contact_id",
    "type": "SMS",
    "message": "Hello from our automated system!"
  }
}
```

### Create an Opportunity
```json
{
  "name": "ghl_create_opportunity",
  "arguments": {
    "locationId": "your_location_id",
    "contactId": "contact_id",
    "pipelineId": "pipeline_id",
    "pipelineStageId": "stage_id",
    "title": "New Sales Opportunity",
    "monetaryValue": 5000
  }
}
```

### Search Contacts
```json
{
  "name": "ghl_search_contacts",
  "arguments": {
    "locationId": "your_location_id",
    "query": "john@example.com",
    "limit": 10
  }
}
```

## Error Handling

- If the `GHL_API_KEY` environment variable is not set, tools will return an error message
- API errors from GoHighLevel will be returned with the original error message
- All tools follow the standard MCP response format with `content` and `isError` fields

## API Limits

- GoHighLevel has API rate limits - typically 100 requests per minute
- The server will return error messages if rate limits are exceeded
- Consider implementing delays between consecutive API calls for high-volume operations

## Permissions

Make sure your GoHighLevel API key has the necessary permissions for the operations you want to perform:

- **Contacts:** Read, Write, Delete
- **Opportunities:** Read, Write, Delete  
- **Calendars:** Read, Write
- **Conversations:** Read, Write
- **Campaigns:** Read, Write
- **Workflows:** Read, Write
- **Custom Fields:** Read, Write, Delete
- **Forms:** Read
- **Media:** Write

## Support

For GoHighLevel API documentation, visit: https://highlevel.stoplight.io/docs/integrations

For issues with this MCP integration, please check the repository issues or create a new one.