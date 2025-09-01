export const serverConfig = {
  name: process.env.SERVER_NAME || 'JustGoingViral',
  version: process.env.SERVER_VERSION || '1.0.0',
  enabledPlugins: (process.env.ENABLED_PLUGINS || '')
    .split(',')
    .map(p => p.trim())
    .filter(Boolean)
};
