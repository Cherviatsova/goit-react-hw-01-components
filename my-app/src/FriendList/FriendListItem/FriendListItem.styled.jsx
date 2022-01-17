import styled from "styled-components";

export const FriendsItemList = styled.li`
 display: flex;
 align-items: center;
 margin-top: 10px;
 padding: 15px;
 background-color: #fff;   
`;
export const SpanStatus = styled.span`
 width: 25px;
 height: 25px;
 border-radius: 50px;
 background-color: ${({ isOnline }) => {
    return isOnline ? "green" : "red";
 }}   
`;
export const ImgAvatar = styled.img`
  margin-left: 10px;
  margin-right: 10px;  
`;
export const FriendName = styled.p`
 font-weight: 700;
 font-size: 18px;  
`;