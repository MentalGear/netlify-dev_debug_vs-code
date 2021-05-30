# netlift dev no Error output in vsCode

## Bug

When running from vs code the `debug console` shows no errors and no indication what the problem is or how to solve it. Only a generic `404 function not found` when trying to access the function.

## Expected Result

When running from shell with `netlify dev` command, the build shows erros normally.

A clear error is given:

> `Failed building functions from directory serverlessFunctions with error:`

Full output

```shell
◈ Building functions from directory serverlessFunctions
 > serverlessFunctions/graphQL2.ts:33:45: error: Expected ";" but found "{"
    33 │ const handler = async (event, ctx, callback) {
       ╵                                              ^

◈ Failed building functions from directory serverlessFunctions with error:
Build failed with 1 error:
serverlessFunctions/graphQL2.ts:33:45: error: Expected ";" but found "{"
```

## Reproduction

Follow the below instruction. A new file has been added that will error the netlify function building in this codebase.

---

## Normal Intro

Minimal Reproducible Example for `fullstack` `netlify dev` debugging with `vs code`.

Running: `nuxt`, `vue`, `type-graphql`, `typescript`, `buefy`, `apollo-server-lambda` on `netlify functions`.

## Setup

```shell
yarn
```

## VS Code Debugging

**IMPORTANT**

> Make sure you have deactivated "Caught Exceptions" in VS Code debugger, otherwise you might catch internal node.js or other wrapping processes errors.

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
