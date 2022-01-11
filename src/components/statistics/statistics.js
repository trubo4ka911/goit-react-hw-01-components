import StatisticsList from "./statisticsList";
import { StatTitle } from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <StatTitle>{title}</StatTitle>}
      <StatisticsList items={stats} />
    </section>
  );
};
export default Statistics;
