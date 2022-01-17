import styled from "styled-components";

export const StatisticsSection = styled.section`
    margin: 20px auto;
  width: 300px;
  background: #fff;  
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 3px 1px rgba(61, 38, 38, 0.1);
`;
export const Title = styled.h2`
    padding-bottom: 20px;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    text-transform:uppercase;
    color: #000;  
`;
export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;
export const StatItem = styled.li`
    display: flex;
 flex-direction: column;
  padding: 10px;
  width: 50px;
  background-color: ${() =>
        `#${Math.floor(Math.random() * 16777215).toString(16)}`};
`;
export const Label = styled.span`
  margin: 0 auto; 
 padding-bottom: 10px;
 font-weight: 400;
 font-size: 15px;  
`;
export const Percentage = styled.span`
  margin: 0 auto; 
 padding-bottom: 10px;
 font-weight: 400;
 font-size: 15px;    
`