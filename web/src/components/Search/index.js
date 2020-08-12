/* eslint-disable react/prop-types */
import React from 'react';
import { RiSearchEyeLine } from 'react-icons/ri';
import { Section } from './styled';

export default function Search({ disabled, setItems, copyItems }) {

   function handleChangeInput(e) {
      const responseSearch = copyItems.filter(item => {
         return item.name.toUpperCase().includes(e.target.value.toUpperCase())
      });
      setItems(responseSearch)
   }

   return (
      <Section>
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
