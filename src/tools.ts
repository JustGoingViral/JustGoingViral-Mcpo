/**
 * Unified tool registry for the JustGoingViral server.
 */

import { enabledPlugins } from './plugins.js';

const tools = enabledPlugins.flatMap(p => p.tools);

export default tools;
