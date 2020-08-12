import styled from 'styled-components';

export const Section = styled.section`
   width: 100%;
   height: auto;

   div#box{
      width: 100%;
      max-width: 800px;
      height: 455px;
      margin: 30px auto;
      display: flex;

      figure{
         width: 100%;
         max-width: 340px;
         display: flex;
         align-items: center;

         img{ width: 100%}
      }

      div#information{
         width: 100%;
         padding: 50px;
         display: flex;
         flex-direction: column;
         justify-content: space-around;

         span{
            font-style: normal;
            font-weight: 300;
            font-size: 17px;
            line-height: 20px;
            text-transform: capitalize;
            color: #353B48;
            margin-bottom: 7px;
         }

         div.title{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            span:nth-child(1){
               max-width: 19ch;
               font-style: normal;
               font-weight: 400;
               font-size: 20px;
               line-height: 23px;
               color: #000000;
            }

            span:nth-child(2){
               font-style: normal;
               font-weight: normal;
               font-size: 25px;
               line-height: 35px;
               letter-spacing: 0.1em;
               color: #ACACAC;
            }

            button {
               background: transparent;
               border: none;
               cursor: pointer;

               :active svg {
                  color: green;
               }
            }
         }
      }

      div#listcolors{
         width: 100%;
         margin: 37px 0;

         div#colors{
            width: 100%;
            display: flex;
            margin: 10px 0;
            flex-wrap: wrap;

            div.color{
               width: 20px;
               height: 20px;
               border-radius: 50%;
               margin: 3px 3px 3px 0;
            }
         }
         div{
            width: 100%;
            display: flex;

         }
      }

      div#details{
         hr{
            margin: 7px 0;
         }
         p{
            height: 10ch;
            font-size: 13px;
            font-weight: 400;
            color: #353B48;
            overflow: hidden;
         }
      }
   }

   @media screen and (min-width: 576px) and (max-width: 767px){
      div#box{
         flex-direction: column;
         align-items: center;
      }
   }

   @media screen and (min-width: 0px) and (max-width: 575px) {
      div#box{
         flex-direction: column;
         align-items: center;

         div#information {
            padding: 25px;

            span{ margin: 5px 0}
            div.title {
               flex-direction: column;
               align-items: flex-start;

               span:nth-child(1){
                  max-width: 100%;
                  font-size: 18px;
               }
               span:nth-child(2){

               }
            }
         }
      }
   }
`;

