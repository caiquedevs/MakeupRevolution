import styled from 'styled-components';

export const Cart = styled.div`
   width: auto;

   button#cartButton{
      background: transparent;
      border: none;

      :hover ~ div#cartBody {
         opacity: 1;
         height: auto;
      }
   }

   div#cartBody {
      width: 400px;
      height: 0;
      max-height: 500px;

      opacity: 0;
      border-radius: 5px;
      background: #ffffff;
      box-shadow: 0px 0px 5px rgba(0,0,0,0.1);

      position: absolute;
      top: 29px;
      right: 0;

      overflow: scroll;
      transition: 0.3s ease-in;

      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      :hover {
         opacity: 1;
         height: auto;
      }

      span { color: #00e600 }

      button {
         background: transparent;
         border: none;

         :active svg {
            color: red;
         }
      }
   }

   @media screen and (min-width: 0px) and (max-width: 575px){
      div#cartBody {
         width: 100vw;
         right: -30px;
         max-height: 80vh;

      }
   }

`;

export const CartItem = styled.div`
   width: 90%;
   height: 80px;
   border-bottom: ${props => props.item <= 1? 'none' : '1px solid #ededed'};
   margin-top: 18px;
   padding-bottom: 10px;

   display: flex;
   align-items: center;
   justify-content: space-between;

   figure {
      width: 80%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      img {
         width: 80px;
         height: 78px;
         margin-right: 10px;
      }


      figcaption h1 {
         font-style: normal;
         font-weight: 400;
         font-size: 17px;
         line-height: 23px;
         color: #000000;
      }

      figcaption h2{
         font-weight: 300;
         font-size: 15px;
         line-height: 20px;
         text-transform: capitalize;
         color: #353B48;
      }

      figcaption h1, h2 {
         max-width: 14ch;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
      }
   }

   span.price {
      margin-right: 14px;
      width: 20%;
   }

   @media screen and (min-width: 0px) and (max-width: 575px){
      figure figcaption h1 {
         font-size: 15px !important;
      }

      span.price {
         margin-right: 0px;
         width: 20%;
      }
   }
`;

export const CartEmpty = styled(CartItem)`
   display: ${props => props.item === 0? 'flex' : 'none'};
   align-items: center;
   justify-content: center;
   padding-bottom: 20px;

   span{ color: black !important ; }
`;
