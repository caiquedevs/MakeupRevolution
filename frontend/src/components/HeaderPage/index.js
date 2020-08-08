/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { RiArrowLeftSLine } from 'react-icons/ri';
import { Header } from './styled';
import Cart from '../Cart';

export default function HeaderPage({ title, handleClickArrow }){
   return(
      <Header title={title}>
         <nav>
            <RiArrowLeftSLine color="#2F3640" size="26px" onClick={() => handleClickArrow()} />
            <h1>{title}</h1>
            <Cart />
         </nav>
      </Header>
   )
}

HeaderPage.propTypes = {
   title: PropTypes.string.isRequired,
   handleClickArrow: PropTypes.func.isRequired,
}
