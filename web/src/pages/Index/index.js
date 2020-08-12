/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import HeaderPage from '../../components/HeaderPage';
import Search from '../../components/Search'
import Products from '../../components/Products';
import LoadingProducts from '../../components/LoadingProducts';

export default function Category({ match: { params: { idcategory } } }) {
   const [data, setData] = useState(false);
   const [copyData, setCopyData] = useState([]);

   const history = useHistory();

   useEffect(() => {
      let didCancel = false;

      async function getData(){
         document.title = `Makeup Revolution - ${idcategory}`;
         await api.get(`/${idcategory}`)
         .then(response => {
            if (!didCancel) {
               setData(response.data)
               setCopyData(response.data);
            }
         })
         .catch(() => history.push('/Page404'))
      }

      getData();
      return () => { didCancel = true; };

   },[history, idcategory])

   if(data.length > 0 || data.length === 0){
      return (
         <main>
            <HeaderPage
               handleClickArrow={() => history.push('/')}
               title={idcategory.replace("_"," ")}
            />
            <Search setItems={setData} copyItems={copyData}/>
            <Products data={data} idcategory={idcategory} />
         </main>
      )
   }

   return (
      <main>
         <HeaderPage
            handleClickArrow={() => history.push('/')}
            title={idcategory.replace("_"," ")}
            />
         <Search disabled />
         <LoadingProducts/>
      </main>
   )
}
