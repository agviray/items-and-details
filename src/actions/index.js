// Action creator
export const selectItem = (item) => {
  return {
    type: 'ITEM_SELECTED',
    payload: item,
  };
};
