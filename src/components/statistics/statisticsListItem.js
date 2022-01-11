import PropTypes from "prop-types";
import { StatItem, StatData } from "./Statistics.styled";

const StatisticListItem = ({ id, label, percentage }) => {
  return (
    <StatItem key={id}>
      <StatData>{label}</StatData>
      <span>{percentage} %</span>
    </StatItem>
  );
};

StatisticListItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default StatisticListItem;
