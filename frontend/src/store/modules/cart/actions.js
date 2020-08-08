import * as types from '../types';

export function addCart(payload) {
  return {
    type: types.ADD_CART,
    payload,
  };
}

export function removeCart(payload) {
  return {
    type: types.REMOVE_CART,
    payload,
  };
}
