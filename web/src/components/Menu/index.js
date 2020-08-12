import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { Menu, ButtonMenu } from './styled';

export default function MenuComponent() {
   const [isActive, setIsActive] = useState(false);

   return (
      <>
      <ButtonMenu isActive={isActive} type="button" onClick={() => setIsActive(!isActive)}>
         <div className="row" id="rowX"/>
         <div className="row" id="rowCenter"/>
         <div className="row" id="rowY"/>
      </ButtonMenu>

      <Menu isActive={isActive}>
         <h1>Menu</h1>
         <ul>
            <li> <Link to="/products/blush">blush</Link> </li>
            <li> <Link to="/products/bronzer">bronzer</Link> </li>
            <li> <Link to="/products/eyebrow" >eyebrow</Link> </li>
            <li> <Link to="/products/eyeliner">eyeliner</Link> </li>
            <li> <Link to="/products/eyeshadow">eyeshadow</Link> </li>
            <li> <Link to="/products/foundation">foundation</Link> </li>
            <li> <Link to="/products/lip_liner">lip liner</Link> </li>
            <li> <Link to="/products/lipstick">lipstick</Link> </li>
            <li> <Link to="/products/mascara">mascara</Link> </li>
            <li> <Link to="/products/nail_polish">nail polish</Link> </li>
         </ul>
      </Menu>
      </>
   )
}
