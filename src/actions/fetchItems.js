export const addItem = item => ({
  type: 'ADD_ITEM',
  item
})

export const removeItemById = itemId => ({
  type: 'REMOVE_ITEM_BY_ID',
  itemId
})