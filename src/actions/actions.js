import * as actionTypes from './actionTypes';

export const changeSiteName = siteName => ({
  type: actionTypes.CHANGE_SITE_NAME,
  siteName
});

export const addItem = item => ({
  type: actionTypes.ADD_ITEM,
  item
});

export const removeItemById = itemId => ({
  type: actionTypes.REMOVE_ITEM_BY_ID,
  itemId
});
