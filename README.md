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
## Getting Details of Members
```typescript
import { getClanMembers } from "petsim.js";

(async () => {
  const members = await getClanMembers("C4T6"); //array of fullMember objects

  console.log(members);
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

## Other

```typescript
⚠️ DO NOT USE. WAITING ON API ACCESS

import { getActiveHuges } from "petsim.js"; // Or Using The require() function

(async () => {
  const activeHuges = await getActiveHuges(); // Fetch active huges
  console.log(activeHuges); // Example: [ 'Huge Koi Fish', 'Huge Bee', 'Huge Bearserker' ]
})();
```
