import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((p, i) => {
        return <Part key={i} part={p}></Part>;
      })}
    </div>
  );
};

export default Content;
