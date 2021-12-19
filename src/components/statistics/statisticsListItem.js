import PropTypes from "prop-types";

const StatisticListItem = ({ id, label, percentage }) => {
  return (
    <li key={id} className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage} %</span>
    </li>
  );
};

StatisticListItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default StatisticListItem;
