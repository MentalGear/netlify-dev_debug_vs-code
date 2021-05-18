import {
  Resolver,
  Query,
  FieldResolver,
  Arg,
  Root,
  Mutation,
  Int,
  ResolverInterface,
} from 'type-graphql'

import { Recipe } from './recipe-type'
import { RecipeInput } from './recipe-input'
import { createRecipeSamples } from './recipe-samples'

//
@Resolver((_of) => Recipe)
export class RecipeResolver implements ResolverInterface<Recipe> {
  private readonly items: Recipe[] = createRecipeSamples()

  @Query((_returns) => Recipe, { nullable: true })
  async recipe(
    @Arg('title', (_type) => String) title: string
  ): Promise<Recipe | undefined> {
    console.log('hey there from Recipe Resolver')

    return await this.items.find((recipe) => recipe.title === title)
  }

  @Query((_returns) => [Recipe], {
    description: 'Get all the recipes from around the world ',
  })
  async recipes(): Promise<Recipe[]> {
    return await this.items
  }

  @Mutation((_returns) => Recipe)
  async addRecipe(
    @Arg('recipe', (_type) => RecipeInput) recipeInput: RecipeInput
  ): Promise<Recipe> {
    const recipe = Object.assign(new Recipe(), {
      description: recipeInput.description,
      title: recipeInput.title,
      ratings: [],
      creationDate: new Date(),
    })
    await this.items.push(recipe)
    return recipe
  }

  @FieldResolver()
  ratingsCount(
    @Root() recipe: Recipe,
    @Arg('minRate', (_type) => Int, { defaultValue: 0.0 }) minRate: number
  ): number {
    return recipe.ratings.filter((rating) => rating >= minRate).length
  }
}
