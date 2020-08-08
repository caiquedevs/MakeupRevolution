import React, { useState } from 'react';
import { RiSearchEyeLine } from 'react-icons/ri';
import { Section } from './styled';
import {debounce} from 'throttle-debounce';

export default function Search({ disabled, items, setItems }) {

   function handleChangeInput(e) {
      const responseSearch = items.filter(item => {
         return item.name.includes(e.target.value)
      })

      console.log(responseSearch)
   }

   return (
      <Section>
      {console.log('total', items)}
         <label htmlFor="search">
            <input
               type="search"
               id="search"
               placeholder="search product"
               disabled={disabled}
               onChange={handleChangeInput}
            />

            <RiSearchEyeLine />
         </label>
      </Section>
   );
}
