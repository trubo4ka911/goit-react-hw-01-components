import PropTypes from "prop-types";
import {
  FriendsAvatar,
  FriendsItem,
  FriendsStatus,
  StatusGreen,
  StatusRed,
} from "./Friends.styled";
const FriendlistItem = ({ id, isOnline, avatar, name }) => {
  return (
    <FriendsItem key={id}>
      <FriendsStatus>
        {isOnline === true ? (
          <StatusGreen></StatusGreen>
        ) : (
          <StatusRed> </StatusRed>
        )}
      </FriendsStatus>
      <FriendsAvatar src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendsItem>
  );
};
FriendlistItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
export default FriendlistItem;
