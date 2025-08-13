import tools from '../src/tools.js';

const toolNames = tools.map((t) => t.name);
console.log('Available tools (' + toolNames.length + '):');
for (const name of toolNames) {
  console.log(`- ${name}`);
}
