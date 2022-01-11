import PropTypes from "prop-types";
import { FriendsList } from "./Friends.styled";
import FriendlistItem from "./FriendListItem";

const FriendList = ({ items }) => {
  return (
    <FriendsList>
      {items.map((item) => (
        <FriendlistItem
          key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </FriendsList>
  );
};
FriendList.propTypes = {
  items: PropTypes.array,
};

export default FriendList;
