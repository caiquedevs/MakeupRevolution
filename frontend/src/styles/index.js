import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   /* largura do scroll vertical e horizonal*/
   ::-webkit-scrollbar { width: 5px; height: 3px; }
   /* Fundo do scroll*/
   ::-webkit-scrollbar-track { background: #fafafa; }
   /* Cor do scroll*/
   ::-webkit-scrollbar-thumb { background: #cccccc; }

   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      position: relative;
      outline: none;
      font-family: 'Roboto', sans-serif;
      text-decoration: none;
      list-style: none;
   }

   body { background: #ffffff; }


   @media screen and (min-width: 992px){}

   @media screen and (min-width: 768px) and (max-width: 991px){
      main { padding: 0 30px; }
   }

   @media screen and (min-width: 576px) and (max-width: 767px){
      main { padding: 0 30px; }
   }

   @media screen and (min-width: 0px) and (max-width: 575px){
      main { padding: 0 30px; }
   }
`;

export default GlobalStyle;
