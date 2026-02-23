# minions-articles

**Article drafts, revisions, SEO metadata, and publish status**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-articles/sdk minions-sdk

# Python
pip install minions-articles

# CLI (global)
npm install -g @minions-articles/cli
```

---

## CLI

```bash
# Show help
articles --help
```

---

## Python SDK

```python
from minions_articles import create_client

client = create_client()
```

---

## Project Structure

```
minions-articles/
  packages/
    core/           # TypeScript core library (@minions-articles/sdk on npm)
    python/         # Python SDK (minions-articles on PyPI)
    cli/            # CLI tool (@minions-articles/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [articles.minions.help](https://articles.minions.help)
- Blog: [articles.minions.blog](https://articles.minions.blog)
- App: [articles.minions.wtf](https://articles.minions.wtf)

---

## License

[MIT](LICENSE)
