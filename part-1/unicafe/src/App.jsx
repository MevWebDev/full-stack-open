import { useState } from "react";

const Statistics = ({ statistics }) => {
  return (
    <>
      <h2>Statistics</h2>
      <StatisticsLine
        statistic={"good"}
        value={statistics.good}
      ></StatisticsLine>
      <StatisticsLine
        statistic={"neutral"}
        value={statistics.neutral}
      ></StatisticsLine>
      <StatisticsLine statistic={"bad"} value={statistics.bad}></StatisticsLine>
      <StatisticsLine statistic={"all"} value={statistics.all}></StatisticsLine>
      <StatisticsLine
        statistic={"Average"}
        value={statistics.average}
      ></StatisticsLine>
      <StatisticsLine
        statistic={"positive"}
        value={statistics.positive}
      ></StatisticsLine>
    </>
  );
};

const StatisticsLine = ({ statistic, value }) => {
  return (
    <tr>
      <td>{statistic}: </td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;

  const isFeedback = all > 0 ? true : false;

  const average = (good * 1 + bad * -1) / all;

  const positive = (good / all) * 100 + "%";

  const statistics = {
    good,
    neutral,
    bad,
    all,
    average,
    positive,
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text={"good"}></Button>
      <Button onClick={() => setNeutral(neutral + 1)} text={"neutral"}></Button>
      <Button onClick={() => setBad(bad + 1)} text={"bad"}></Button>
      {isFeedback && <Statistics statistics={statistics}></Statistics>}
    </div>
  );
}

export default App;
