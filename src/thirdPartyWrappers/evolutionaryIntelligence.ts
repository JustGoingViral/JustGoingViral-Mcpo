/**
 * Evolutionary Intelligence Tool - Simplified version for practical use
 * Triggered by the keyword "eesystem" in chat
 */

import { Tool } from '@modelcontextprotocol/sdk/types.js';

// Define the simplified evolutionary intelligence tool
export const evolutionaryIntelligenceTools: Tool[] = [
  {
    name: 'eesystem',
    description: `Evolutionary Intelligence: A practical tool for step-by-step problem-solving with fitness-based thinking.

This tool works like sequential thinking but adds evolutionary concepts like fitness scoring and solution evolution. Each step builds toward better solutions through iterative improvement.

Key Features:
- Step-by-step thinking process (like sequential thinking)
- Fitness scoring (0-1) for solution quality assessment
- Thought evolution and revision capabilities
- Simple branching for exploring alternatives

When to use this tool:
- Complex problems that benefit from iterative improvement
- Situations where solution quality needs to be measured
- Problems requiring exploration of multiple approaches
- Tasks that need systematic refinement

Usage Pattern:
1. Start with thoughtNumber=1, estimate totalThoughts
2. Provide your current thought and a fitnessScore if applicable
3. Set nextThoughtNeeded=true to continue, false when done
4. Use isRevision=true to evolve previous thoughts`,
    inputSchema: {
      type: 'object',
      properties: {
        thought: {
          type: 'string',
          description: 'Your current thinking step or solution approach'
        },
        nextThoughtNeeded: {
          type: 'boolean',
          description: 'Whether another thought step is needed'
        },
        thoughtNumber: {
          type: 'integer',
          description: 'Current thought number in sequence',
          minimum: 1
        },
        totalThoughts: {
          type: 'integer',
          description: 'Estimated total thoughts needed',
          minimum: 1
        },
        fitnessScore: {
          type: 'number',
          description: 'Solution fitness score (0-1, where 1 is optimal)',
          minimum: 0,
          maximum: 1
        },
        isRevision: {
          type: 'boolean',
          description: 'Whether this thought revises previous thinking'
        },
        revisesThought: {
          type: 'integer',
          description: 'Which thought number is being revised',
          minimum: 1
        }
      },
      required: ['thought', 'nextThoughtNeeded', 'thoughtNumber', 'totalThoughts']
    }
  }
];

// Handler for evolutionary intelligence tool
export async function handleEvolutionaryIntelligenceTool(name: string, args: any) {
  try {
    if (name !== 'eesystem') {
      return {
        content: [{ type: 'text', text: `Unknown evolutionary intelligence tool: ${name}` }],
        isError: true
      };
    }

    // Generate response
    let response = generateEvolutionaryResponse(args);

    return {
      content: [{ type: 'text', text: response }],
      isError: false
    };

  } catch (error) {
    console.error(`[Evolutionary Intelligence] Error:`, error);
    return {
      content: [{ 
        type: 'text', 
        text: `Evolutionary Intelligence Error: ${error instanceof Error ? error.message : String(error)}` 
      }],
      isError: true
    };
  }
}

function generateEvolutionaryResponse(args: any): string {
  let response = `**Evolutionary Intelligence - Step ${args.thoughtNumber}/${args.totalThoughts}**\n\n`;

  // Core thought
  response += `**Thought**: ${args.thought}\n\n`;

  // Fitness assessment
  if (args.fitnessScore !== undefined) {
    const fitnessLevel = getFitnessLevel(args.fitnessScore);
    response += `**Fitness Score**: ${args.fitnessScore.toFixed(2)} (${fitnessLevel})\n\n`;
  }

  // Revision info
  if (args.isRevision && args.revisesThought) {
    response += `**Revision**: Evolving thought ${args.revisesThought}\n\n`;
  }

  // Status
  if (args.nextThoughtNeeded) {
    response += `**Status**: Evolution continuing...`;
    if (args.fitnessScore && args.fitnessScore < 0.7) {
      response += ` (Seeking higher fitness)`;
    }
  } else {
    response += `**Status**: Evolution complete`;
    if (args.fitnessScore && args.fitnessScore >= 0.8) {
      response += ` - High quality solution achieved`;
    }
  }

  return response;
}

function getFitnessLevel(score: number): string {
  if (score >= 0.9) return 'Excellent';
  if (score >= 0.8) return 'Good';
  if (score >= 0.7) return 'Acceptable';
  if (score >= 0.6) return 'Moderate';
  return 'Needs improvement';
}
