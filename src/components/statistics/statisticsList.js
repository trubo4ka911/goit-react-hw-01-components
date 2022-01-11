import PropTypes from "prop-types";
import { StatTitle, StatList } from "./Statistics.styled";
import StatisticListItem from "./statisticsListItem";

const StatisticsList = ({ title, items }) => {
  return (
    <div>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {items.map((item) => (
          <StatisticListItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </StatList>
    </div>
  );
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};
export default StatisticsList;
