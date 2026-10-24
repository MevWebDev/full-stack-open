import { useState } from "react";

const Statistics = ({ statistics }) => {
  return (
    <>
      <h2>statistics</h2>
      <p>good {statistics.good}</p>
      <p>neutral {statistics.neutral}</p>
      <p>bad {statistics.bad}</p>
      <p>All {statistics.all}</p>
      <p>Average {statistics.average}</p>
      <p>Positive {statistics.positive}%</p>
    </>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;

  const average = (good * 1 + bad * -1) / all;

  const positive = (good / all) * 100 || 0;

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
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics statistics={statistics}></Statistics>
    </div>
  );
}

export default App;
