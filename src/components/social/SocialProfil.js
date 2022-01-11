import PropTypes from "prop-types";
import { ProfileUser, Avatar, Stats, StatsList } from "./Socials.styled";

const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <ProfileUser>
      <div>
        <Avatar src={avatar} alt={username} />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <Stats>
        <StatsList>
          <span className="label">Followers: </span>
          <span className="quantity">{stats.followers}</span>
        </StatsList>
        <StatsList>
          <span className="label">Views: </span>
          <span className="quantity">{stats.views}</span>
        </StatsList>
        <StatsList>
          <span className="label">Likes: </span>
          <span className="quantity">{stats.likes}</span>
        </StatsList>
      </Stats>
    </ProfileUser>
  );
};
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  },
};

export default Profile;
// ReactDOM.render(
//   <Profile
//     username={user.username}
//     tag={user.tag}
//     location={user.location}
//     avatar={user.avatar}
//     stats={user.stats}
//   />,
//   document.querySelector("#root")
// );

//ReactDOM.render(<Profile />, document.querySelector("#root"));

// import user from 'путь/к/user.json;

// {
/* <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/> */
// }
