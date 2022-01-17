import PropTypes from 'prop-types';
import {
    ProfileCard,
    Description,
    Image,
    Name,
    Tag,
    Location,
    StatsList,
    StatsItem,
    StatsLabel,
    StatsQuantity
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
    const { followers, views, likes } = stats;
    return (
        <ProfileCard>
  <Description>
        <Image src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

  <StatsList>
    <StatsItem>
      <StatsLabel>Followers</StatsLabel>
      <StatsQuantity>{followers}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel>Views</StatsLabel>
      <StatsQuantity>{views}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel>Likes</StatsLabel>
      <StatsQuantity>{likes}</StatsQuantity>
    </StatsItem>
  </StatsList>
        </ProfileCard>
    )
}
  
   
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
       likes: PropTypes.number.isRequired
    }),  
}

