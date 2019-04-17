export interface IIngredient {
  id: string;
  name: string;
  notes: string;
}

export class Ingredient implements IIngredient {
  id: string;
  name: string;
  notes: string;

  constructor(ingredient: IIngredient) {
    this.id = ingredient.id;
    this.name = ingredient.name;
    this.notes = ingredient.notes;
  }
}
