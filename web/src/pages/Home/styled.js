import styled from 'styled-components';

export const Header = styled.header`
   width: 100%;
   height: 75px;

   nav {
      width: 100%;
      height: 75px;
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;

      ul {
         display: flex;
         align-items: center;
         justify-content: center;

         li {
            padding: 10px;

            font-weight: 300;
            font-size: 15px;
            line-height: 18px;
            text-transform: lowercase;
            color: #000000;
            transition: 0.2s all;
            cursor: pointer;

            :hover {
               text-decoration: underline
            }

            a{ padding: 10px 15px;}
         }
      }
   }

   @media screen and (min-width: 992px){ nav { display: flex } }
`;

export const Section = styled.section`
   width: 100%;
   height: calc(100vh - 75px);
   padding-bottom: 60px;
   display: flex;
   align-items: center;
   justify-content: center;

   figure img {
      width: 139px;
      height: auto;
      position: absolute;
      left: 50%;
      margin-left: -131px;
      top: -67px;
   }

   figure figcaption {
      span {
         :first-child {
            padding-right: 81px;
            z-index: -1;
         }
         font-family: 'ABeeZee', sans-serif;
         font-size: 96px;
      }
   }

   @media screen and (min-width: 992px){}

   @media screen and (min-width: 768px) and (max-width: 991px){
      figure img{ width: 115px; margin-left: -103px; top: -62px; }
      figure figcaption span{ font-size: 65px; }
   }

   @media screen and (min-width: 576px) and (max-width: 767px){
      figure img{ width: 105px; margin-left: -95px; top: -59px; }
      figure figcaption span{ font-size: 55px; }
   }

   @media screen and (min-width: 0px) and (max-width: 575px){
      figure img{ width: 72px; margin-left: -60px; top: -48px;}
      figure figcaption span{ font-size: 23px; }
      figure figcaption span:first-child{ padding-right: 70px }
   }
`;

