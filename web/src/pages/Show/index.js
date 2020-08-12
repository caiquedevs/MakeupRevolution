/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { useHistory } from 'react-router-dom'

import FadeIn from 'react-fade-in';
import api from '../../services/api';
import * as actionsCart from '../../store/modules/cart/actions';

import { Section } from './styled';
import HeaderPage from '../../components/HeaderPage';

export default function Compnt({ match: { params: { id } } }) {
   const [data, setData] = useState(false);
   const dispatch = useDispatch();
   const history = useHistory();

   useEffect(() => {
      let didCancel = false;

      const getData = async () => {
         try{
            const response = await api.get(`/product/${id}`);
            if (!didCancel) setData(response.data[0])
            document.title = `Makeup Revolution - ${response.data[0].name}`;
         }catch(e){
            history.push('/page404');
         }
      }

      getData();
      return () => { didCancel = true; };

   },[history, id])

   const handleClickCart = (idProduct, brand, name, price, image_link) => {
      dispatch(actionsCart.addCart({ id: idProduct, brand, name, price, image_link }))
   }

   if(data){
      return (
         <main>
            <HeaderPage
               handleClickArrow={() => history.goBack()}
               title={data.name}
            />

            <Section>
               <div id="box">
                  <figure>
                     <img
                        id={data.id}
                        src={data.image_link}
                        alt="imageProduct"
                     />
                  </figure>

                  <div id="information">
                     <FadeIn delay="150">
                     <span>{data.brand}</span>

                     <div className="title">
                        <span>{data.name}</span>
                        <span>{Number(data.price) ? `$ ${Number(data.price)}` : ''}</span>
                        <button
                           type="button"
                           onClick={
                              () => handleClickCart(
                                 data.id,
                                 data.brand,
                                 data.name,
                                 data.price,
                                 data.image_link,
                              )
                           }
                        >
                           <MdAddShoppingCart size="25px"/>
                        </button>
                     </div>

                     <div id="listcolors">
                        <div id="colors">
                           {data.product_colors.map(item => (
                              <div
                                 key={`${item.colour_name}${item.hex_value}`}
                                 style={{background: `${item.hex_value}`}}
                                 className="color"
                              />
                           ))}
                        </div>
                        <span>select color</span>
                     </div>

                     <div id="details">
                        <span>Details</span>
                        <hr/>
                        <div className="details">
                           <p>
                              {data.description}
                           </p>
                        </div>
                     </div>
                     </FadeIn>
                  </div>
               </div>
            </Section>
         </main>
      );
   }
   return(
      <> </>
   )
}




