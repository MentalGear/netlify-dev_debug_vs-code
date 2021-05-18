import { InputType, Field } from 'type-graphql'

@InputType()
export class RecipeInput {
  @Field((_type) => String)
  title!: string

  @Field((_type) => String, { nullable: true })
  description?: string
}
