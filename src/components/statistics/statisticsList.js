import PropTypes from "prop-types";

import StatisticListItem from "./statisticsListItem";

const StatisticsList = ({ title, items }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <ul className="stat-list">
        {items.map((item) => (
          <StatisticListItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </div>
  );
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};
export default StatisticsList;
