import styled from 'styled-components';

export const MenuArea = styled.div`
   width: auto;
   height: auto;

   position: absolute;
   top : 15px;
   right: 0px;

   button{
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: transparent;
      border: none;
      z-index: 9999;

      div#linhax{
         width: 27px;
         height: 4px;
         position: relative;
         transform: ${props => props.hamburguer ? "rotate(45deg)" : "rotate(0deg)"};
         bottom: ${props => props.hamburguer ? "-4px" : "4px"};
         background-color: ${props => props.hamburguer ? "#ffffff" : "#292929"};
         transition: 0.2s;
      }

      div#linha{
         width: 27px;
         height: 4px;
         visibility: ${props => props.hamburguer ? "hidden" : "visible"};
         background-color: #292929;
      }

      div#linhay{
         width: 27px;
         height: 4px;
         position: relative;
         transform: ${props => props.hamburguer ? "rotate(-45deg)" : "rotate(0deg)"};
         top: ${props => props.hamburguer ? "-4px" : "4px"};
         background-color: ${props => props.hamburguer ? "#ffffff" : "#292929"};
         transition: 0.2s;
      }
   }

   nav#menu-hamburguer{
      visibility: ${props => props.hamburguer ? "visible" : "hidden"};
      width: ${props => props.hamburguer ? "395px" : "0"};
      height: 100vh;
      padding: 0 30px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      background-color: #292929;
      color: #fff;
      position: fixed;
      top: 0;
      right: 0;
      transition: 0.3s;
      z-index: 1;

      h1{
         visibility: ${props => props.hamburguer ? "visible" : "hidden"};
         width: 100%;
         height: 70px;
         display: flex;
         align-items: center;
         justify-content: center;
         color: #ffffff;
      }

      ul{
         visibility: ${props => props.hamburguer ? "visible" : "hidden"};
         transition: 0.1s;
         width: 100%;
         height: auto;
         display: flex;
         align-items: flex-start;
         justify-content: flex-start;
         flex-direction: column;

         a{
            display: block;
            padding: 12px 0;
            color: #ffffff
         }

         li{
            width: 100%;
            height: auto;
            color: #ffffff;
            color: #ffffff;
            display: block;

            :hover{
               background: rgba(0, 0, 0, 0.2);
               transition-delay: 0.1s;
               transition-duration: 0.1s;
            }
         }
      }
   }

   @media screen and (min-width: 992px){
      display: none;
      button{ cursor: pointer; }
      nav#menu-hamburguer ul li{ cursor: pointer; }
   }

   @media screen and (min-width: 768px) and (max-width: 991px){}

   @media screen and (min-width: 576px) and (max-width: 767px){}

   @media screen and (min-width: 0px) and (max-width: 575px){
      nav#menu-hamburguer{
         width: ${props => props.hamburguer ? "100%" : "0"};
      }
   }

`;
