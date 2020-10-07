export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET": {
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    }
    case "REMOVE_FROM_BASKET": {
      const index = state.basket.findIndex(
        (item) => item.id === action.payload
      );
      let newBasket = [...state.basket];

      index >= 0
        ? newBasket.splice(index, 1)
        : console.warn(
            `Can not remove product (id: ${action.payload}) as is it not in the basket`
          );

      return {
        ...state,
        basket: newBasket,
      };
    }
    case "SET_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
