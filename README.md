## Setup

`yarn`

## Running

`netlify dev`
or
`npx netlify dev`

_Note_
A window will open with an "lambda error". Make sure to refresh the page and you should be at the playground.

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

## VS Code Debugging

1. Open the provided launch.json file.
2. Open to the `Run and Debug` Sidebar
3. In the dropdown, select `Netlify Dev Debug`
4. Set a breakpoint in `graphql.ts`
5. Start by pressing `F5`

## Problems

- will not respect breakpoints
- first load displays error
