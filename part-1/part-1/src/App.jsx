const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.content.map((x, index) => {
        return <Part key={index} title={x[0]} exercises={x[1]}></Part>;
      })}
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.title}: {props.exercises}
    </p>
  );
};

const Total = (props) => {
  const total = props.content.reduce((acc, curr) => (acc += curr[1]), 0);

  return <p>Number of exercises: {total}</p>;
};

const App = () => {
  const course = "Half Stack application development";

  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const content = [
    [part1, exercises1],
    [part2, exercises2],
    [part3, exercises3],
  ];

  return (
    <div>
      <Header title={course}></Header>
      <Content content={content}></Content>
      <Total content={content}></Total>
    </div>
  );
};

export default App;
