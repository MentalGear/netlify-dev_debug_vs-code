## Intro

Minimal Reproducible Example for `fullstack` `netlify dev` debugging with `vs code`. (nuxt/vue/graphql/typescript/buefy)

## Setup

`yarn`

## VS Code Debugging

**IMPORTANT**

> Make sure you have deactivated "Caught Exceptions" in VS code debugger, otherwise you might catch internal node.js or other process errors.

`launch.json` should contain everything you need to integrate debugging with your project.

In VS CODE:

1. Open `Run and Debug` Sidebar. Make sure "Caught Exceptions" is deactivated.
2. In the dropdown, select `Fullstack Debugging`
3. Add a breakpoint in

- `/serverlessFunctions/helloServerless.ts` or
- `/serverlessFunctions/graphql.ts`

4. Start debugging by pressing `F5` or run button

## Debug Examples

1. `Hello World` example

   http://localhost:8888/.netlify/functions/helloServerless

2. `graphql.ts` example

   http://localhost:8888/.netlify/functions/graphql

   **Note**: An error might display on first page load. Make sure to refresh the page and you should be at the playground.

   Query Example:

   ```graphql
   query GetRecipe1 {
     recipe(title: "Recipe 1") {
       title
       description
       ratings
       creationDate
       ratingsCount(minRate: 2)
       averageRating
     }
   }
   ```
