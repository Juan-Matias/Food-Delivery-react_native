import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'dishes',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title:'Dish Name',
      validation: rule => rule.required()
    },
    {
      name: 'description',
      type: 'string',
      title:'Dish description',
      validation: rule => rule.required()

    },
    {
      name: 'image',
      type: 'image',
      title:'image of the category',
    },

    {
        name: 'price',
        type: 'number',
        title:'price of the dish in USD',
      }

    

  ],
})
