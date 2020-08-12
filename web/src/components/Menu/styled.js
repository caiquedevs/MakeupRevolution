import styled from 'styled-components';

export const ButtonMenu = styled.button`
   width: 35px;
   height: 35px;

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   background: transparent;
   border: none;
   z-index: 9999;

   div.row{
      width: 27px;
      height: 4px;
   }

   div#rowCenter{
      visibility: ${props => props.isActive ? "hidden" : "visible"};
      background-color: #292929;
   }

   div#rowX {
      bottom: ${props => props.isActive ? "-4px" : "4px"};
      background-color: ${props => props.isActive ? "#ffffff" : "#292929"};
      transform: ${props => props.isActive ? "rotate(45deg)" : "rotate(0deg)"};
      transition: 0.2s ease-in;
   }

   div#rowY{
      top: ${props => props.isActive ? "-4px" : "4px"};
      background-color: ${props => props.isActive ? "#ffffff" : "#292929"};
      transform: ${props => props.isActive ? "rotate(-45deg)" : "rotate(0deg)"};
      transition: 0.2s ease-in;
   }

   @media screen and (min-width: 992px){
      display: none;
   }
`;

export const Menu = styled.nav`
   width: ${props => props.isActive? '350px' : '0' };
   opacity: ${props => props.isActive? '1' : '0' };
   height: 100vh;
   padding: 24px 0;
   overflow: hidden;

   display: flex;
   align-items: center;
   justify-content: flex-start;
   flex-direction: column;

   position: absolute;
   top : 0px;
   right: -30px;
   background: #292929;
   transition: 0.2s ease-in;
   z-index: 1;

   h1 {
      color: #ffffff;
   }

   ul{
      width: 100%;
      display: flex;
      padding: 0 30px;

      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;

      li {
         width: 100%;
         padding: 15px 0;
         border-bottom: 1px solid rgb(62 62 62 / 50%);

         a {
            font-size: 20px;
            font-size: 20px;
            color: aliceblue;
            text-transform: capitalize;

            :hover {
               color: pink;
            }
         }
      }
   }

   @media screen and (min-width: 992px){}

   @media screen and (min-width: 768px) and (max-width: 991px){}

   @media screen and (min-width: 576px) and (max-width: 767px){}

   @media screen and (min-width: 0px) and (max-width: 575px){
      width: ${props => props.isActive? '100vw' : '0' };

   }

`;
