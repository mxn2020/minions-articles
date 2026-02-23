"""
Minions Articles SDK — Type Schemas
Custom MinionType schemas for Minions Articles.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

article_type = MinionType(
    id="articles-article",
    name="Article",
    slug="article",
    description="A blog article with its content, metadata, and status.",
    icon="📄",
    schema=[
        FieldDefinition(name="blogId", type="string", label="blogId"),
        FieldDefinition(name="briefId", type="string", label="briefId"),
        FieldDefinition(name="title", type="string", label="title"),
        FieldDefinition(name="slug", type="string", label="slug"),
        FieldDefinition(name="body", type="string", label="body"),
        FieldDefinition(name="excerpt", type="string", label="excerpt"),
        FieldDefinition(name="wordCount", type="number", label="wordCount"),
        FieldDefinition(name="readingTimeMinutes", type="number", label="readingTimeMinutes"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="authorId", type="string", label="authorId"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
        FieldDefinition(name="publishedAt", type="string", label="publishedAt"),
    ],
)

article_revision_type = MinionType(
    id="articles-article-revision",
    name="Article revision",
    slug="article-revision",
    description="A versioned revision of an article.",
    icon="✏️",
    schema=[
        FieldDefinition(name="articleId", type="string", label="articleId"),
        FieldDefinition(name="version", type="number", label="version"),
        FieldDefinition(name="body", type="string", label="body"),
        FieldDefinition(name="changedBy", type="string", label="changedBy"),
        FieldDefinition(name="changeNotes", type="string", label="changeNotes"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

seo_metadata_type = MinionType(
    id="articles-seo-metadata",
    name="Seo metadata",
    slug="seo-metadata",
    description="SEO optimization data for an article.",
    icon="🔍",
    schema=[
        FieldDefinition(name="articleId", type="string", label="articleId"),
        FieldDefinition(name="metaTitle", type="string", label="metaTitle"),
        FieldDefinition(name="metaDescription", type="string", label="metaDescription"),
        FieldDefinition(name="canonicalUrl", type="string", label="canonicalUrl"),
        FieldDefinition(name="ogImage", type="string", label="ogImage"),
        FieldDefinition(name="schemaMarkup", type="string", label="schemaMarkup"),
        FieldDefinition(name="internalLinks", type="string", label="internalLinks"),
        FieldDefinition(name="externalLinks", type="string", label="externalLinks"),
    ],
)

article_score_type = MinionType(
    id="articles-article-score",
    name="Article score",
    slug="article-score",
    description="Quality and SEO scoring for an article.",
    icon="⭐",
    schema=[
        FieldDefinition(name="articleId", type="string", label="articleId"),
        FieldDefinition(name="readabilityScore", type="number", label="readabilityScore"),
        FieldDefinition(name="seoScore", type="number", label="seoScore"),
        FieldDefinition(name="originalityScore", type="number", label="originalityScore"),
        FieldDefinition(name="overallScore", type="number", label="overallScore"),
        FieldDefinition(name="suggestions", type="string", label="suggestions"),
        FieldDefinition(name="scoredAt", type="string", label="scoredAt"),
        FieldDefinition(name="scoredBy", type="string", label="scoredBy"),
    ],
)

custom_types: list[MinionType] = [
    article_type,
    article_revision_type,
    seo_metadata_type,
    article_score_type,
]

