import * as actionTypes from '../actions/actionTypes';

const initialState = {
  siteName: 'Presentation Site',
  items: []
};

export const items = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_SITE_NAME:
      return Object.assign({}, state, {
        siteName: action.siteName
      });

    case actionTypes.ADD_ITEM:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          {
            id: action.item.id,
            name: action.item.name,
            details: action.item.details,
            imageUrl: action.item.imageUrl,
            presentationLink: action.item.presentationLink,
            codeLink: action.item.codeLink
          }
        ]
      });
    
    case actionTypes.REMOVE_ITEM_BY_ID:
      return Object.assign({}, state, {
        items: [...state.items.filter(item => item.action === action.itemId)]
      });

    default:
      return state;
  }
}

