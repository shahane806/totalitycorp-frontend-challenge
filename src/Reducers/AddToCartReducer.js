export const AddToCartReducer = (state=[], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state,{...action?.data}];
    
    case "REMOVE_FROM_CART":
      return [...state];
    default:
      return state;
  }
};
