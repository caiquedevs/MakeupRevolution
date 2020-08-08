import * as types from '../types';

const initialState = {
  allItemsCart: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_CART: {
      const newState = { ...state };

      const copyCart = Array.from(state.allItemsCart);
      copyCart.push(action.payload)

      newState.allItemsCart = copyCart;
      return newState;
    }

    case types.REMOVE_CART: {
      const newState = { ...state }

      const { index } = action.payload;

      const copyCart = Array.from(state.allItemsCart);
      copyCart.splice(index, 1);

      newState.allItemsCart = copyCart;
      return newState;
    }

    default: {
      return state;
    }
  }
}
