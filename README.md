## Intro
Minimal Reproducible Example to make Netlify dev debug work with VS code.

## Setup

`yarn`

## VS Code Debugging

1. Open the provided launch.json file.
2. Open `Run and Debug` VS code Sidebar
3. In the dropdown, select `Netlify Dev Debug`
4. Set a breakpoint in `graphql.ts`
5. Start by pressing `F5`

_Note_
A window will open with an "lambda error". Make sure to refresh the page and you should be at the playground.
http://localhost:8888/.netlify/functions/graphql

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

## Problems

- will not respect breakpoints
- first load displays error
