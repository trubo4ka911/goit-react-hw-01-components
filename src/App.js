import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import Transactions from "./data/transactions.json";

import Profile from "./components/social-profil";
import Statistics from "./components/statistics/statistics";
import FriendList from "./components/friends/friends";
import TransactionHistory from "./components/transactions/transactions";

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList items={friends} />
      <TransactionHistory items={Transactions} />;
    </div>
  );
};

export default App;
