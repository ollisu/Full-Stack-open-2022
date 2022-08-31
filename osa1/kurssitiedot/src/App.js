const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const Course = (props) => (
    <>
      <h1>{props.course}</h1>
    </>
  );

  const Part = (props) => (
    <p>
      {props.part} {props.exercises}
    </p>
  );

  const Content = (props) => (
    <>
      <Part part={props.parts[0].part} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].part} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].part} exercises={props.parts[2].exercises} />
    </>
  );

  const Total = (props) => (
    <>
      <p>
        Number of exercises{" "}
        {props.exercises[0] + props.exercises[1] + props.exercises[2]}
      </p>
    </>
  );

  return (
    <div>
      <Course course={course} />
      <Content
        parts={[
          { part: part1, exercises: exercises1 },
          { part: part2, exercises: exercises2 },
          { part: part3, exercises: exercises3 },
        ]}
      />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

export default App;
