import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  console.log(course);
  const total = course.parts.reduce((acc, curr) => {
    return (acc += curr.exercises);
  }, 0);

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <p>total of {total} exercises</p>
    </div>
  );
};

export default Course;
