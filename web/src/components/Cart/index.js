import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { Cart, CartItem, CartEmpty } from './styled';

import * as actionsCart from '../../store/modules/cart/actions';

export default function CartComponent() {
   const allItemsCart = useSelector(state => state.cart.allItemsCart);
   const dispatch = useDispatch();

   const handleClickDelete = (index) => {
      dispatch(actionsCart.removeCart(index));
   }

   return (
      <Cart>
         <button type="button" id="cartButton">
            <RiShoppingCart2Line
               color="#2F3640"
               size="26px"
            />
         </button>
         <div id="cartBody">
            {allItemsCart && allItemsCart.map((item, index) => (
               <CartItem item={allItemsCart.length} key={index}>
                  <figure>
                     <img src={item.image_link} alt="img product"/>
                     <figcaption>
                        <h1>{item.name}</h1>
                        <h2>{item.brand}</h2>
                     </figcaption>
                  </figure>

                  <span className="price">
                     {Number(item.price) ? `$ ${Number(item.price)}` : ''}
                  </span>

                  <button type="button" onClick={() => handleClickDelete(index)}>
                     <IoIosRemoveCircleOutline size="25px"/>
                  </button>
               </CartItem>
            ))}

            <CartEmpty item={allItemsCart.length}>
               <span>Carrinho vazio</span>
            </CartEmpty>
         </div>
      </Cart>
   )
}
