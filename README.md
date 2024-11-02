# What Is petsim.js?

It is a JavaScript/TypeScript API wrapper for the pet simulator web API.

# How Do I Install it?

Run "npm install petsim.js"

# Usage

## Getting Details Of A Clan

```typescript
import { getClan } from "petsim.js"; // Or Using The require() function

(async () => {
  const clan = await getClan("HIPM"); // Get details of the "HIPM" clan
  console.log(clan); // Log out the result
})();
```

## Getting A Collection

```typescript
import { getCollection } from "petsim.js"; // Or Using The require() function

(async () => {
  const pets = await getCollection("pets"); // Get the "pets" collection data
  console.log(pets); // Log out the result
})();
```

## Getting Exists/RAP Data

```typescript
import { getRAP, getExists } from "petsim.js"; // Or Using The require() function

(async () => {
  const [RAP, exists] = await Promise.all([getRAP(), getExists()]); // get RAP and Exists data
  console.log(RAP, exists); // Log out the result
})();
```
