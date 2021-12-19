import StatisticsList from "./statisticsList";

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2>{title}</h2>}
      <StatisticsList items={stats} />
    </section>
  );
};
export default Statistics;
