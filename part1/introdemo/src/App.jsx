// const App = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

// () => (
//   <div>
//     <p>Hello world</p>
//   </div>
// )

// const App = () => {
//   console.log('Hello from component')
//   return(
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

//JSX is XML-Like

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20

//   // return (
//   //   <div>
//   //     <p>Hello world, it is {now.toString()}</p>
//   //     <p>
//   //       {a} plus {b} is {a + b}
//   //     </p>
//   //   </div>
//   // )
//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'p',null, 'Hello world, it is ', now.toString()
//     ),
//     React.createElement(
//       'p',null, a, 'plus', b, now.toString()
//     )
//   )
// } 

// const Hello = () => {
//   return(
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

// const Hello = (props) => {
//   return(
//     <div>
//       <p>Hello {props.name}</p>
//     </div>
//   )
// }


// const App = () => {
//   return(
//     <div>
//       <h1>Greetings</h1>
//       <Hello />
//       <Hello />
//       <Hello />
//     </div>
//   )
// }

// const App = () => {
//   return(
//     <div>
//       <h1>Greetings</h1>
//       <Hello name='George'/>
//       <Hello name='Daisy'/>
//       <Hello />
//     </div>
//   )
// }

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const footer = () => {
  return(
    <div>
      greeting app creted by <a href="https://github.com/EnriLion">EnriLion</a>
    </div>
  )
}

const App = () => {
  // const name = 'Peter'
  // const age = 10
  // const friends = [
  //   { name: 'Peter', age: 4},
  //   { name: 'Maya', age: 10},
  // ]
  const friends = ['Peter', 'Maya']

  return(
    // <div>
    // <>
    //   <h1>Greetings</h1>
    //   <Hello name='Maya' age={26 + 10} />
    //   <Hello name={name} age={age} />
    //   <footer/>
    // </>
    // <div>
    //   <p>{friends[0].name} {friends[0].age}</p>
    //   <p>{friends[1].name} {friends[1].age}</p>
    // </div>
    // </div>
    <div>
      <p>{friends}</p>
    </div>
  )
}

export default App
