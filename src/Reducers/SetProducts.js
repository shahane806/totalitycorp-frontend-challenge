export const SetProductReducer = (state=[],action)=>{
    switch(action.type){
        case "SET_PRODUCTS":
            return [...state,[...action?.data]];
        default: return state;
    }
}