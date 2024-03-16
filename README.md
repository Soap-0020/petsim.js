# What Is petsim.js?

It is a JavaScript/TypeScript API wrapper for the pet simulator web API.

# How Do I Install it?

Run "npm install petsim.js"

# Usage

## Getting Details Of A Clan

```typescript
import { clan } from "petsim.js"; // Or Using The require() function

(async () => {
  const clans = await clan("HIPM"); // Get details of the "HIPM" clan
  console.log(clans); // Log out the result
})();
```
