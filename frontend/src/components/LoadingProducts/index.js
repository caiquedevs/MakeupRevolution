import React from 'react'
import { Section, InfoBar, ProductList } from './styled';

export default function LoadingProductsComponent() {
   const product = [1, 2 , 3];
   const productColor = [1, 2 , 3];

   return (
      <Section>
         <InfoBar>
            <li> Produto </li>
            <li>Cor</li>
            <li>Preço</li>
         </InfoBar>

         <ProductList>
            {product.map( (item) =>(
               <li key={item}>
                  <div className="figure">
                     <div className="img"/>

                     <div className="figcaption">
                        <div className="h1"/>
                        <div className="h2"/>
                     </div>
                  </div>

                  <div className="colors">
                     {productColor.map(itemColor => (
                        <div key={itemColor} className="color" />
                     ))}
                  </div>

                  <div className="price" />
               </li>
            ))}
         </ProductList>
      </Section>
   )
}
