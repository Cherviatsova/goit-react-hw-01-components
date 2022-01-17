import styled from "styled-components";

export const History = styled.table`
   width: 800px;
   margin: 0 auto; 
  
`;
export const Thead = styled.thead`
background-color: #92b2c7 
`;

export const Head = styled.th`
   padding-top: 5px;
   padding-bottom: 5px;
   font-weight: 400;
   font-size: 18px;
`;

export const TBody = styled.tbody`
 background-color: #fff;  
`;

export const TD = styled.td`
   width: calc(100% / 3);
   text-align: center;
   padding-top: 15px;
   padding-bottom: 15px;
   font-weight: 500;
   font-size: 15px;
   color: #080808;
`;

export const TR = styled.tr`
   &:nth-of-type(2n){
      background-color: #677b8b
   }
`