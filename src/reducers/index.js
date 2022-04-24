// **************
// Reducers
// **************
import { combineReducers } from "redux";

// - Will temporarily return a static list of songs 
//   and song details for testing purposes.
const itemsReducer = () => {
  return [
    { title: 'Glycerine', duration: '4:19'},
    { title: 'No Diggity', duration: '4:15'},
    { title: 'Black Hole Sun', duration: '5:19'},
    { title: 'I Want It That Way', duration: '3:34'},
    { title: 'Hypnotize', duration: '3:51'}
  ];
};

// - Takes in a selected item and action object as 
//   arguments.

// - IMPORTANT - selectedItem is given the value of null. This  
//   is because selectedItem will require an initial value when
//   when our app first starts up.
const selectedItemReducer = (selectedItem = null, action) => {
  if (action.type === 'ITEM_SELECTED') {
    return action.payload;
  }
  return selectedItem;
};

export default combineReducers(
  {
    items: itemsReducer,
    selectedItem: selectedItemReducer
  }
);