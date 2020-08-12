import styled from 'styled-components';

export const Header = styled.header`
   width: 100%;
   max-width: 1366px;
   height: 70px;
   margin: 0 auto;
   display: flex;

   nav#MenuHorozintal{
      width: calc(100% - 60px);
      height: 70px;
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #ffffff;
      z-index: 1;

      h1{
         visibility: ${props => props.title ? "visible" : "hidden"};
         font-family: 'ABeeZee', sans-serif;
         font-size: 22px;
         font-weight: 400;
         list-style: none;
      }
      svg{
         visibility: ${props => props.title ? "visible" : "hidden"};
      }
   }

   @media screen and (min-width: 992px){
      padding: 0 30px;
      svg{ cursor: pointer; }
   }

   @media screen and (min-width: 768px) and (max-width: 991px){
      nav { width: calc(100% - 60px); }
   }

   @media screen and (min-width: 576px) and (max-width: 767px){
      nav { width: calc(100% - 60px); }
   }

   @media screen and (min-width: 0px) and (max-width: 575px){
      nav {
         width: calc(100% - 60px);

         h1{
            max-width: 15ch;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
         }
      }
   }
`;
