/**
 * @module @minions-articles/sdk/schemas
 * Custom MinionType schemas for Minions Articles.
 */

import type { MinionType } from 'minions-sdk';

export const articleType: MinionType = {
  id: 'articles-article',
  name: 'Article',
  slug: 'article',
  description: 'A blog article with its content, metadata, and status.',
  icon: '📄',
  schema: [
    { name: 'blogId', type: 'string', label: 'blogId' },
    { name: 'briefId', type: 'string', label: 'briefId' },
    { name: 'title', type: 'string', label: 'title' },
    { name: 'slug', type: 'string', label: 'slug' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'excerpt', type: 'string', label: 'excerpt' },
    { name: 'wordCount', type: 'number', label: 'wordCount' },
    { name: 'readingTimeMinutes', type: 'number', label: 'readingTimeMinutes' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'authorId', type: 'string', label: 'authorId' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
    { name: 'publishedAt', type: 'string', label: 'publishedAt' },
  ],
};

export const articlerevisionType: MinionType = {
  id: 'articles-article-revision',
  name: 'Article revision',
  slug: 'article-revision',
  description: 'A versioned revision of an article.',
  icon: '✏️',
  schema: [
    { name: 'articleId', type: 'string', label: 'articleId' },
    { name: 'version', type: 'number', label: 'version' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'changedBy', type: 'string', label: 'changedBy' },
    { name: 'changeNotes', type: 'string', label: 'changeNotes' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const seometadataType: MinionType = {
  id: 'articles-seo-metadata',
  name: 'Seo metadata',
  slug: 'seo-metadata',
  description: 'SEO optimization data for an article.',
  icon: '🔍',
  schema: [
    { name: 'articleId', type: 'string', label: 'articleId' },
    { name: 'metaTitle', type: 'string', label: 'metaTitle' },
    { name: 'metaDescription', type: 'string', label: 'metaDescription' },
    { name: 'canonicalUrl', type: 'string', label: 'canonicalUrl' },
    { name: 'ogImage', type: 'string', label: 'ogImage' },
    { name: 'schemaMarkup', type: 'string', label: 'schemaMarkup' },
    { name: 'internalLinks', type: 'string', label: 'internalLinks' },
    { name: 'externalLinks', type: 'string', label: 'externalLinks' },
  ],
};

export const articlescoreType: MinionType = {
  id: 'articles-article-score',
  name: 'Article score',
  slug: 'article-score',
  description: 'Quality and SEO scoring for an article.',
  icon: '⭐',
  schema: [
    { name: 'articleId', type: 'string', label: 'articleId' },
    { name: 'readabilityScore', type: 'number', label: 'readabilityScore' },
    { name: 'seoScore', type: 'number', label: 'seoScore' },
    { name: 'originalityScore', type: 'number', label: 'originalityScore' },
    { name: 'overallScore', type: 'number', label: 'overallScore' },
    { name: 'suggestions', type: 'string', label: 'suggestions' },
    { name: 'scoredAt', type: 'string', label: 'scoredAt' },
    { name: 'scoredBy', type: 'string', label: 'scoredBy' },
  ],
};

export const customTypes: MinionType[] = [
  articleType,
  articlerevisionType,
  seometadataType,
  articlescoreType,
];

