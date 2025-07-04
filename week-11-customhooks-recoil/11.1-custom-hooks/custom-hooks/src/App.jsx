import "./App.css";

// useCounter custom hook

// function useCounter(){
//   const [count, setCount] = useState(0);

//   function increaseCount(){
//     setCount(count + 1);
//   }

//   return{
//     count: count,
//     increaseCount: increaseCount
//   }
// }

// function Counter(){
//   const {count, increaseCount}= useCounter();

//   return(
//     <div>
//       <button onClick={increaseCount}>Increase {count}</button>
//     </div>
//   )
// }

// function Counter2(){
//   const {count, increaseCount}= useCounter();

//   return(
//     <div>
//       <button onClick={increaseCount}>Increase {count}</button>
//     </div>
//   )
// }

// function App() {
//   return <div>
//     <Counter/>
//     <Counter/>
//     <Counter2/>
//   </div>
// }

// export default App

// -----------------------------------------------------------------------

// useFetch custom hook

// 1. way to fetch data (usefetch)
// import { useState, useEffect } from "react"

// export function useFetchPostTitle() {
//   const [data, setData] = useState({})

//   async function getPosts() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     const json = await response.json()
//     setData(json)
//   }

//   useEffect(() => {
//     getPosts()
//   }, [])

//   return {
//     data: data,
//     getPosts: getPosts
//   }
// }

// function App() {
//   const { data } = useFetchPostTitle()
//   return (
//     <div>
//       {data.title}
//     </div>
//   )
// }

//2nd way

// import { useFetchPostTitle } from './hooks/useFetch.jsx'
// function App() {
//   const postTitle = useFetchPostTitle()

//   return (
//     <div>
//       {postTitle}
//     </div>
//   )
// }

///3 way

// import { useFetch } from './hooks/useFetch'
// function App() {
//   const postTitle = useFetch("https://jsonplaceholder.typicode.com/posts/1")

//   return (
//     <div>
//       {JSON.stringify(postTitle)}
//     </div>
//   )
// }

// export default App

// ------------------------------------------------------------------------------------------

// useFetch with refetching

// import { useState } from 'react'

// import { useFetch } from './hooks/useFetch'
// function App() {
//     const [currentPost, setCurrentPost] = useState(1)

//     const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts/' + currentPost, 5000 )

//     if (loading) {
//         return <div>
//             Loading........
//         </div>
//     }

//     return (
//         <div>
//             <button onClick={() => setCurrentPost(1)}>Link1</button>
//             <button onClick={() => setCurrentPost(2)}>Link2</button>
//             <button onClick={() => setCurrentPost(3)}>Link3</button>
//             <br /> <br />
//             {JSON.stringify(data)}
//         </div>
//     )
// }
// export default App

// ---------------------------------------------------------------------------------------

// usePrev custom hook

// import { useState } from 'react'
// import usePrev from './hooks/usePrev'
// function App() {
//   const [state, setState] = useState(0)
//   const prev = usePrev(state)

//   return (
//     <div>
//       <p>{state}</p>
//       <button onClick={() => { setState(state => state + 1) }}>Increase</button>
//       <p>Prev value is {prev}</p>
//     </div>
//   )
// }

// export default App

// ---------------------------------------------------------------------------------------

// useDebounce custom hook

import { useEffect, useState } from "react";

import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [inputValue, setInputValue] = useState("");

  const debouncedValue = useDebounce(inputValue, 200);

  // e stands for the “event object” - When you attach this change function as an event handler in React (or plain JS), the browser automatically passes an Event object as the first argument to the handler. This object contains information about what triggered the event.
  function change(e) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    console.log("Expensive Operation");
  }, [debouncedValue]);

  return (
    <div>
      <input type="text" onChange={change} />
    </div>
  );
}

export default App;
