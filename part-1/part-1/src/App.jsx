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
      {props.content.map((part, index) => {
        return (
          <Part key={index} title={part.name} exercises={part.exercises}></Part>
        );
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
  const total = props.content.reduce((acc, curr) => (acc += curr.exercises), 0);

  return <p>Number of exercises: {total}</p>;
};

const App = () => {
  const course = "Half Stack application development";

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  const content = [part1, part2, part3];

  return (
    <div>
      <Header title={course}></Header>
      <Content content={content}></Content>
      <Total content={content}></Total>
    </div>
  );
};

export default App;
