import PropTypes from 'prop-types';
import {
    FriendsItemList,
    SpanStatus,
    ImgAvatar,
    FriendName
} from "./FriendListItem.styled";

export default function FriendListItem({ isOnline, avatar, name }) {
    return (
       <FriendsItemList>
            <SpanStatus isOnline={isOnline}></SpanStatus>
  <ImgAvatar src={avatar} alt={name} width="48" />
            <FriendName>{name}</FriendName>
</FriendsItemList> 
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}