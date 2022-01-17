import PropTypes from "prop-types";
import { FriendsList } from "./FriendList.styled";
import FriendListItem from "./FriendListItem/FriendListItem";


export default function AllFriendsList({ friends }) {
    return (
        <FriendsList>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id}
                    isOnline={isOnline}
                    avatar={avatar}
                    name={name}
                />
    ))}
        </FriendsList>
    );
}

AllFriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({id: PropTypes.number.isRequired })  
   )   
}



