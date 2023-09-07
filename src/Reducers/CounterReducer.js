export const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case "COUNTER":
      return action;
    default:
      return action;
  }
};
