/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom';

import { Section, InfoBar, ProductList } from './styled';

export default function Products({ data, idcategory }){
   return(
      <Section>
         <InfoBar>
            <li> Produto </li>
            <li>Cor</li>
            <li>Preço</li>
         </InfoBar>

         <ProductList>
            {data.map( product =>(
               <li key={product.id}>
                  <div>
                     <figure>
                        <Link to={`/products/${idcategory}/${product.id}`}>
                           <img
                              id={product.id}
                              src={product.image_link}
                              alt="imageProduct"
                           />
                        </Link>

                        <figcaption>
                           <Link to={`/products/${idcategory}/${product.id}`}>
                              <h1>{product.name}</h1>
                              <h2>{product.brand}</h2>
                           </Link>
                        </figcaption>
                     </figure>
                  </div>

                  <div id="colors">
                     {product.product_colors.map( color => (
                        <div
                           key={`${color.colour_name}${color.hex_value}`}
                           style={{background: `${color.hex_value}`}}
                           className="color"
                        />
                     ))}
                  </div>

                  <div>{Number(product.price) ? `$ ${Number(product.price)}` : ''}</div>
               </li>
            ))}
         </ProductList>
      </Section>
   );

}


