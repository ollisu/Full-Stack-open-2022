const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const Course = (props) => (
    <>
      <h1>{props.course.name}</h1>
    </>
  );

  const Part = (props) => (
    <p>
      {props.part} {props.exercises}
    </p>
  );

  const Content = (props) => (
    <>
      {props.parts.map((part, index) => (
        <Part key={index} part={part.name} exercises={part.exercises} />
      ))}
    </>
  );

  const Total = (props) => (
    <>
      <p>
        Number of exercises{" "}
        {props.exercises[0].exercises +
          props.exercises[1].exercises +
          props.exercises[2].exercises}
      </p>
    </>
  );

  return (
    <div>
      <Course course={course} />
      <Content parts={course.parts} />
      <Total exercises={course.parts} />
    </div>
  );
};

export default App;
