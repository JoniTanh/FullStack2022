const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = ({course}) => {
  return (
    <>
      <h1>
        {course.name}
      </h1>
    </>
  )
}

const Content = ({course}) => {
  return (
    <>
      {course.parts.map(x => <Part key={x.name} name={x.name} exercises={x.exercises} />)}
    </>
  )
}

const Total = ({course}) => {
  return (
    <>
      <p>
        Number of exercises {course.parts.flatMap(x => x.exercises).reduce((a, b) => a + b, 0)}
      </p>
    </>
  )
}

const Part = ({name, exercises}) => {
  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  )
}

export default App