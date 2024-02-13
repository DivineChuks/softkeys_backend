export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of category' 
    },
    {
      name: 'parentCategory',
      type: 'reference',
      title: 'Parent Category',
      description: 'Select a parent category if this is a subcategory',
      to: [{ type: 'category' }], 
    },
  ]    
}