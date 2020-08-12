import styled from 'styled-components';

export const Section = styled.section`
   width: 100%;
   max-width: 1000px;
   margin: 0 auto;
`;

export const InfoBar = styled.ul`
   width: 100%;
   height: 63px;
   padding: 0 100px 0 60px;
   border: 1px solid #EDEDED;
   border-radius: 6px 6px 0px 0px;
   background: #FFFFFF;
   display: flex;
   align-items: center;
   justify-content: flex-start;

   li{
      font-family: 'roboto', sans-serif;
      font-size: 17px;
      font-weight: 300;
      color: rgba(0, 0, 0, 0.4);
      text-align: left;

      :nth-child(1){
         width: 100%;
         max-width: 520px;
      }

      :nth-child(2){
         width: 100%;
         max-width: 250px;
      }
   }

   @media screen and (min-width: 992px){}

   @media screen and (min-width: 768px) and (max-width: 991px){
      padding-right: 60px;
      li:nth-child(1){ max-width: 330px; }
      li:nth-child(2){ max-width: 150px; }
   }
   @media screen and (min-width: 576px) and (max-width: 767px){
      display: none;
   }

   @media screen and (min-width: 0px) and (max-width: 575px){
      display: none;
   }

`;

export const ProductList = styled.ul`
   width: 100%;

   li {
      width: 100%;
      padding: 25px 90px 25px 35px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background: #FFFFFF;
      border-bottom: 1px solid #EDEDED;

      div.figure{
         display: flex;

         div.img{
            width: 100px;
            height: 100px;
            margin-right: 55px;
            background: #e7e7e7;
         }

         div.figcaption{
            width: 283px;
            display: flex;
            margin-right: 100px;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;

            div.h1{
               width: 100%;
               height: 17px;
               max-width: 28ch;
               background: #e7e7e7;
               margin-bottom: 10px;
            }

            div.h2{
               width: 100%;
               height: 17px;
               max-width: 15ch;
               background: #e7e7e7;
            }
         }
      }

      div.colors{
         width: 198px;
         height: 30px;
         margin-right: 60px;
         overflow: overlay;
         display: flex;

         div.color{
            min-width: 17px;
            height: 17px;
            border-radius: 50%;
            margin-right: 5px;
            background: #e7e7e7;
         }
      }

      div.price{
         width: 50px;
         height: 17px;
         background: #e7e7e7;
      }
   }

   @media screen and (min-width: 992px) {}

   @media screen and (min-width: 768px) and (max-width: 991px){
      li{
         padding: 25px 35px 25px 35px;

         div.colors{
            width: 100px;
            height: 30px;
            margin-right: 50px;
            overflow: overlay;
         }

         div.figure{
            div.img{ margin-right: 35px; }

            div.figcaption{
               min-width: 195px;
               margin-right: 20px;

               div.h1{
                  max-width: 20ch;
                  margin-bottom: 10px;
               }
            }
         }
      }
   }

   @media screen and (min-width: 576px) and (max-width: 767px){

      li{
         padding: 25px 35px 25px 35px;

         div.colors, div:nth-child(3){
            display: none;
         }

         div.figure div.figcaption{
            margin-right: 0;

            div.h1{
               max-width: 30ch;
               margin-bottom: 10px;
            }
         }
      }
   }

   @media screen and (min-width: 0px) and (max-width: 575px){
      max-width: 100%;

      li{
         padding: 25px 0 25px 0;

         div.colors, div:nth-child(3){
            display: none;
         }

         div.figure{
            div.img{
               margin-right: 21px;
            }
            div.figcaption{
               width: 283px;
               max-width: 150px;
               margin-right: 0;

               div.h1{
                  max-width: 20ch;
                  margin-bottom: 10px;
               }
            }
         }
      }
   }
`;
