const recipe = {
  type: 'document',
  name: 'recipe',
  title: 'Recipe',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'image',
      name: 'image'
    },
    {
      type: 'string',
      description: "Where'd you find this recipe?",
      title: 'Source / Credit',
      name: 'source'
    },
    {
      type: 'simplePortableText',
      name: 'intro'
    },
    {
      type: 'array',
      name: 'ingredients',
      of: [
        {
          type: 'ingredientUsage'
        }
      ]
    },
    {
      type: 'array',
      name: 'steps',
      of: [
        {
          type: 'recipeStep'
        }
      ]
    }
  ]
}

const recipeStep = {
  type: 'object',
  name: 'recipeStep',
  title: 'Recipe step',
  fields: [
    {type: 'string', name: 'title'},
    {type: 'simplePortableText', name: 'text'},
    {type: 'number', name: 'minutes'},
    {type: 'image', name: 'image'},
    {type: 'mux.video', name: 'video'}
  ]
}

const ingredientUsage = {
  type: 'object',
  name: 'ingredientUsage',
  fields: [
    {
      type: 'reference',
      name: 'ingredient',
      to: [{type: 'ingredient'}, {type: 'recipe'}]
    },
    {
      type: 'string',
      name: 'unit',
      options: {
        list: ['ml', 'g', 'pcs', 'small', 'medium', 'large', 'squeeze', 'dollop']
      }
    },
    {
      type: 'number',
      name: 'amount'
    }
  ],
  preview: {
    select: {
      title: 'ingredient.title',
      amount: 'amount',
      unit: 'unit'
    },
    prepare ({title, amount, unit}) {
      return {
        title: amount && unit ? `${title} (${amount} ${unit})` : title
        // subtitle: date.split("-")[0] // YYYY-MM-DD --> YYYY
      }
    }
  }
}

const ingredient = {
  type: 'document',
  name: 'ingredient',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    }
  ]
}

export {recipe, recipeStep, ingredient, ingredientUsage}
