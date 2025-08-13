let contacts: typeof import('./utils/contacts.js').default | null = null;
let notes: typeof import('./utils/notes.js').default | null = null;
let message: typeof import('./utils/message.js').default | null = null;
let mail: typeof import('./utils/mail.js').default | null = null;
let reminders: typeof import('./utils/reminders.js').default | null = null;
let webSearch: typeof import('./utils/webSearch.js').default | null = null;
let calendar: typeof import('./utils/calendar.js').default | null = null;
let maps: typeof import('./utils/maps.js').default | null = null;

async function loadAppleModule<T extends 'contacts' | 'notes' | 'message' | 'mail' | 'reminders' | 'webSearch' | 'calendar' | 'maps'>(moduleName: T): Promise<any> {
  try {
    switch (moduleName) {
      case 'contacts':
        if (!contacts) contacts = (await import('./utils/contacts.js')).default;
        return contacts;
      case 'notes':
        if (!notes) notes = (await import('./utils/notes.js')).default;
        return notes;
      case 'message':
        if (!message) message = (await import('./utils/message.js')).default;
        return message;
      case 'mail':
        if (!mail) mail = (await import('./utils/mail.js')).default;
        return mail;
      case 'reminders':
        if (!reminders) reminders = (await import('./utils/reminders.js')).default;
        return reminders;
      case 'webSearch':
        if (!webSearch) webSearch = (await import('./utils/webSearch.js')).default;
        return webSearch;
      case 'calendar':
        if (!calendar) calendar = (await import('./utils/calendar.js')).default;
        return calendar;
      case 'maps':
        if (!maps) maps = (await import('./utils/maps.js')).default;
        return maps;
      default:
        throw new Error(`Unknown module: ${moduleName}`);
    }
  } catch (e) {
    console.error(`Error loading module ${moduleName}:`, e);
    throw e;
  }
}

const appleRouter: Record<string, (args: any) => Promise<any> | undefined> = {
  contacts: async (args: any) => {
    const contactsModule = await loadAppleModule('contacts');
    if (args.name) {
      const numbers = await contactsModule.findNumber(args.name);
      return {
        content: [{
          type: 'text',
          text: numbers.length ? `${args.name}: ${numbers.join(', ')}` : `No contact found for "${args.name}"`
        }],
        isError: false
      };
    } else {
      const allNumbers = await contactsModule.getAllNumbers();
      const formattedContacts = Object.entries(allNumbers)
        .filter(([_, phones]) => (phones as string[]).length > 0)
        .map(([name, phones]) => `${name}: ${(phones as string[]).join(', ')}`);
      return {
        content: [{
          type: 'text',
          text: formattedContacts.length > 0 ? `Found contacts:\n\n${formattedContacts.join('\n')}` : 'No contacts with phone numbers found.'
        }],
        isError: false
      };
    }
  },
  notes: async (args: any) => {
    const notesModule = await loadAppleModule('notes');
    if (args.operation === 'search') {
      const results = await notesModule.searchNotes(args.searchText);
      return {
        content: [{
          type: 'text',
          text: results.length > 0 ? `Found ${results.length} notes matching "${args.searchText}":\n\n${results.join('\n\n')}` : `No notes found matching "${args.searchText}".`
        }],
        isError: false
      };
    } else if (args.operation === 'list') {
      const allNotes = await notesModule.listNotes();
      return {
        content: [{
          type: 'text',
          text: allNotes.length > 0 ? `Found ${allNotes.length} notes:\n\n${allNotes.join('\n\n')}` : 'No notes found.'
        }],
        isError: false
      };
    } else if (args.operation === 'create') {
      await notesModule.createNote(args.title, args.body, args.folderName);
      return {
        content: [{
          type: 'text',
          text: `Note created successfully: "${args.title}"`
        }],
        isError: false
      };
    }
  },
  messages: async (args: any) => {
    const messageModule = await loadAppleModule('message');
    if (args.operation === 'send') {
      await messageModule.sendMessage(args.phoneNumber, args.message);
      return {
        content: [{
          type: 'text',
          text: `Message sent to ${args.phoneNumber}`
        }],
        isError: false
      };
    } else if (args.operation === 'read') {
      const messages = await messageModule.readMessages(args.phoneNumber, args.limit);
      return {
        content: [{
          type: 'text',
          text: messages.length > 0 ? `Messages with ${args.phoneNumber}:\n\n${messages.join('\n\n')}` : `No messages found with ${args.phoneNumber}.`
        }],
        isError: false
      };
    }
  },
  mail: async (args: any) => {
    const mailModule = await loadAppleModule('mail');
    if (args.operation === 'unread') {
      const unreadMails = await mailModule.getUnreadEmails(args.account, args.mailbox, args.limit);
      return {
        content: [{
          type: 'text',
          text: unreadMails.length > 0 ? `Found ${unreadMails.length} unread emails:\n\n${unreadMails.join('\n\n')}` : 'No unread emails found.'
        }],
        isError: false
      };
    } else if (args.operation === 'send') {
      await mailModule.sendEmail(args.to, args.subject, args.body, args.cc, args.bcc);
      return {
        content: [{
          type: 'text',
          text: `Email sent to ${args.to}`
        }],
        isError: false
      };
    }
  },
  webSearch: async (args: any) => {
    const webSearchModule = await loadAppleModule('webSearch');
    const result = await webSearchModule.webSearch(args.query);
    return {
      content: [{
        type: 'text',
        text: result.results.length > 0 ? `Found ${result.results.length} results for "${args.query}". ${result.results.map((r: any) => `[${r.displayUrl}] ${r.title} - ${r.snippet}`).join('\n')}` : `No results found for "${args.query}".`
      }],
      isError: false
    };
  },
  calendar: async (args: any) => {
    const calendarModule = await loadAppleModule('calendar');
    if (args.operation === 'search') {
      const events = await calendarModule.searchEvents(args.searchText, args.fromDate, args.toDate, args.limit);
      return {
        content: [{
          type: 'text',
          text: events.length > 0 ? `Found ${events.length} events:\n\n${events.join('\n\n')}` : 'No events found.'
        }],
        isError: false
      };
    } else if (args.operation === 'create') {
      await calendarModule.createEvent(args.title, args.startDate, args.endDate, args.location, args.notes, args.isAllDay, args.calendarName);
      return {
        content: [{
          type: 'text',
          text: `Event created: "${args.title}"`
        }],
        isError: false
      };
    }
  },
  reminders: async (args: any) => {
    const remindersModule = await loadAppleModule('reminders');
    if (args.operation === 'create') {
      await remindersModule.createReminder(args.name, args.listName, args.notes, args.dueDate);
      return {
        content: [{
          type: 'text',
          text: `Reminder created: "${args.name}"`
        }],
        isError: false
      };
    }
  },
  maps: async (args: any) => {
    const mapsModule = await loadAppleModule('maps');
    if (args.operation === 'search') {
      const locations = await mapsModule.searchLocations(args.query, args.limit);
      return {
        content: [{
          type: 'text',
          text: locations.length > 0 ? `Found ${locations.length} locations:\n\n${locations.join('\n\n')}` : `No locations found for "${args.query}".`
        }],
        isError: false
      };
    }
  }
};

export default appleRouter;
