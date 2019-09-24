export const addItem = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ITEM': 
      return [
        ...state,
        {
          id: action.item.id,
          name: action.item.name,
          details: action.item.details,
          imageUrl: action.item.imageUrl,
          presentationLink: action.item.presentationLink,
          codeLink: action.item.codeLink
        }
      ]

    case 'REMOVE_ITEM_BY_ID':
      return [...state.filter(item => item.action === action.itemId)];

    default:
      return state;
  }
}

