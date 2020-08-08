import React from 'react';
import { Link } from 'react-router-dom';

import { Section, Header } from './styled';
import modelo from '../../assets/modelo.png';
import Menu from '../../components/Menu';

export default function Home() {
   document.title = 'Makeup Revolution';

   return (
      <main>
         <Header>
            <nav>
               <ul>
                  <li> <Link to="products/blush">blush</Link> </li>
                  <li><Link to="products/bronzer">bronzer</Link></li>
                  <li><Link to="products/eyebrow">eyebrow</Link></li>
                  <li><Link to="products/eyeliner">eyeliner</Link></li>
                  <li><Link to="products/eyeshadow">eyeshadow</Link></li>
                  <li><Link to="products/foundation">foundation</Link></li>
                  <li><Link to="products/lip_liner">lip liner</Link></li>
                  <li><Link to="products/lipstick">lipstick</Link></li>
                  <li><Link to="products/mascara">mascara</Link></li>
                  <li><Link to="products/nail_polish">nail polish</Link></li>
               </ul>
            </nav>

            <Menu />
         </Header>

         <Section>
            <figure>
               <img src={modelo} alt="Logo" />
               <figcaption>
                  <span>Makeup</span>
                  <span>evolution</span>
               </figcaption>
            </figure>
         </Section>
      </main>
   );
}
