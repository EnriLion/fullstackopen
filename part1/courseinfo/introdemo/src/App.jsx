const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name : 'Fundametals of React',
    exercises: 10
  }
  const part2 =  {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
    

  return (
    <div>
      <Header  course={course}/>
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises}/>
      <Total exercises1={part1.exercises}  exercises2={part2.exercises} exercises3={part3.exercises}/>
    </div>

  )
}

  //Header
  const Header = (props) => {
    console.log(props)
    return (
      <div>
      <h1> {props.course}</h1>
      </div>
    )
  }

  const Part = (props) => {
    return (
      <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
      </div>
    )
  }

  //Body
  const Content= (props) => {
    return (
      <div>
        <Part  part1={props.part1} exercises1={props.exercises1}/>
        <Part  part2={props.part2} exercises2={props.exercises2}/>
        <Part  part3={props.part3} exercises3={props.exercises3}/>
      </div>
    )
  }

  //Footer

  const Total =(props) => {
    const exercises1 = props.exercises1
    const exercises2 = props.exercises2
    const exercises3 = props.exercises3
    return(
      <div>
      <p>Number of exercises  {exercises1 + exercises2 + exercises3} </p>
      </div>
    )
  }



export default App
