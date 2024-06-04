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

## Hooks/Events

```typescript
import { onExistChange } from "petsim.js"; // Or Using The require() function

onExistChange((after, before) => {
  // Listen for exist changes
  if (after.exist < 100) console.log(after, before); // When exist changes of a pet, check if exist is less then 100, if so, log it
});
```

## Types

Most types are exported in the index file. There are types on most features.

## Other

```typescript
⚠️ DO NOT USE. WAITING ON API ACCESS

import { getActiveHuges } from "petsim.js"; // Or Using The require() function

(async () => {
  const activeHuges = await getActiveHuges(); // Fetch active huges
  console.log(activeHuges); // Example: [ 'Huge Koi Fish', 'Huge Bee', 'Huge Bearserker' ]
})();
```
