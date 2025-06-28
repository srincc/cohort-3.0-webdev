// example - 1

// import React from 'react'

// function App() {
//   const [count, setCount] = React.useState(0)

//   return (
//     <div>
//       <Button count={count} setCount={setCount}></Button>
//     </div>
//   )
// }

// function Button(props) {

//   function onButtonClick() {
//     props.setCount(props.count + 1);
//   }

//   // return React.createElement(
//   //   'button',
//   //   { onClick: onButtonClick },
//   //   `Counter ${props.count}`
//   // );

//   // jsx syntax
//   return <button onClick={onButtonClick}>Counter {props.count}</button>
// }

// export default App



// example - 2
import { useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Hit the gym regularly",
      done: true,
    },
  ]);

  function addTodo() {
    let newArray = [];
    for (let i = 0; i < todos.length; i++) {
      newArray.push(todos[i]);
    }
    newArray.push({
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      done: true,
    });
    setTodos(newArray);
  }

  return (
    <div>
      <input id="title" type="text" placeholder="Title"></input>
      <input id="description" type="text" placeholder="Deescription"></input>
      <br />
      <button onClick={addTodo}>Add todo</button>
      <br />
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          description={todo.description}
          done={todo.done}
        />
      ))}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h1>{props.done ? "Task is done" : "Task is not done"}</h1>
    </div>
  );
}