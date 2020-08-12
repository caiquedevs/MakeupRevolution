import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { MenuArea } from './styled';

export default function Menu() {
   const [hamburguer, setHamburguer] = useState(false);

   function handleClick(){ setHamburguer(!hamburguer); }

   return (
      <MenuArea hamburguer={hamburguer} >
         <button type="button" onClick={handleClick}>
            <div id="linhax"/>
            <div id="linha"/>
            <div id="linhay"/>
         </button>

         <nav id="menu-hamburguer">
            <h1>Menu</h1>
            <ul>
               <li>
                  <hr/><Link to="/" onClick={handleClick}>inicio</Link><hr/>
               </li>
               <li>
                  <Link to="/products/blush" onClick={handleClick}>blush</Link>
               </li>
               <li>
                  <Link to="/products/bronzer" onClick={handleClick}>bronzer</Link>
               </li>
               <li>
                  <Link to="/products/eyebrow" onClick={handleClick} >eyebrow</Link>
               </li>
               <li>
                  <Link to="/products/eyeliner" onClick={handleClick}>eyeliner</Link>
               </li>
               <li>
                  <Link to="/products/eyeshadow" onClick={handleClick}>eyeshadow</Link>
               </li>
               <li>
                  <Link to="/products/foundation" onClick={handleClick}>foundation</Link>
               </li>
               <li>
                  <Link to="/products/lip_liner" onClick={handleClick}>lip liner</Link>
               </li>
               <li>
                  <Link to="/products/lipstick" onClick={handleClick}>lipstick</Link>
               </li>
               <li>
                  <Link to="/products/mascara" onClick={handleClick}>mascara</Link>
               </li>
               <li>
                  <Link to="/products/nail_polish" onClick={handleClick}>nail polish</Link>
               </li>
            </ul>
         </nav>
      </MenuArea>
   )
}
