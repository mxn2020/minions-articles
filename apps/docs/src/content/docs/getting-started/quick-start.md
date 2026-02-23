---
title: Quick Start
description: Get up and running with Minions Articles in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-articles/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_articles import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
articles info
```
