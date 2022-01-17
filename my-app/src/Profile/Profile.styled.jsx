import styled from "styled-components";

export const ProfileCard = styled.div`
  margin: 0 auto;
  width: 300px;
  background: #fff;  
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 3px 1px rgba(61, 38, 38, 0.1);
`;

export const Description = styled.div`
    padding: 25px 0;
`;

export const Image = styled.img`
 display: block;
 width: 100px;
 margin: 0 auto; 
 border-radius: 50px;  
 border: 1px solid #080707;
 
`;

export const Name = styled.p`
    margin-top: 10px;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #000;
`;
export const Tag = styled.p`
     margin-top: 10px;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #000; 
`;
export const Location = styled.p`
  margin-top: 10px;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #000;  
`;
export const StatsList = styled.ul`
display: flex;
padding: 0;
background-color: #dfdfdf;
border-radius: 1px solid #8d8d8d;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
  border: 1px solid #080707;
`;
export const StatsLabel = styled.span`
 margin: 0 auto; 
 padding-bottom: 10px;
 font-weight: 400;
 font-size: 15px;
 color: #000;
`;
export const StatsQuantity = styled.span`
 margin: 0 auto; 
 padding-bottom: 10px;
 font-weight: 400;
 font-size: 15px;
 color: #000; 
`