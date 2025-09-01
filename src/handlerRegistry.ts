import { Tool } from '@modelcontextprotocol/sdk/types.js';

type Handler = (args: unknown) => Promise<any>;

export class HandlerRegistry {
  private handlers: Record<string, Handler> = {};

  register(tools: Tool[], handler: (name: string, args: unknown) => Promise<any>) {
    for (const tool of tools) {
      this.handlers[tool.name] = (args) => handler(tool.name, args);
    }
  }

  get(name: string) {
    return this.handlers[name];
  }
}

export const registry = new HandlerRegistry();
