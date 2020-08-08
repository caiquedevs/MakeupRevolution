import styled from 'styled-components';

export const Section = styled.section`
   width: 100%;
   height: auto;
   padding: 30px 0;
   display: flex;
   align-items: center;
   justify-content: center;

   label{
      width: auto;

      input{
         width: 650px;
         height: 55px;
         padding: 20px;
         border: 1px solid #EDEDED;
         border-radius: 4px;
         background: #FFFFFF;
         color: #797575;
         box-shadow: 7px 7px 0px rgba(194, 194, 194, 0.25);

         ::-webkit-input-placeholder {
            color: #BDC3C7;
         }

         ::-webkit-search-cancel-button{
            appearance: none;

         }
      }

      svg{
         position: absolute;
         right: 20px;
         top: 20px
      }
   }

   @media screen and (min-width: 992px){}

   @media screen and (min-width: 768px) and (max-width: 991px){}

   @media screen and (min-width: 576px) and (max-width: 767px){
      label input{
         width: 420px;
      }
   }

   @media screen and (min-width: 0px) and (max-width: 575px){
      label input{
         width: 290px;
      }
   }

`;
