/**
 * Minions Articles SDK
 *
 * Article drafts, revisions, SEO metadata, and publish status
 *
 * @module @minions-articles/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Articles.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
