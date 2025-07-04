// Counter app with out state management

// import { useState } from "react";
// import "./App.css";
// function App() {
//   return (
//     <>
//       <Counter />
//     </>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <CurrentCount count={count} />
//       <Increase setCount={setCount} count={count} />
//       <Decrease setCount={setCount} count={count} />
//     </>
//   );
// }

// function CurrentCount({ count }) {
//   return <>{count}</>;
// }

// function Increase({ setCount, count }) {
//   function IncreaseCount() {
//     setCount(count + 1);
//   }
//   return (
//     <>
//       <button onClick={IncreaseCount}>Increase</button>
//     </>
//   );
// }

// function Decrease({ setCount, count }) {
//   function DecreaseCount() {
//     setCount(count - 1);
//   }
//   return (
//     <>
//       <button onClick={DecreaseCount}>Decrease</button>
//     </>
//   );
// }

// export default App;

//---------------------------------------------------------------------------------------------

// Counter app with context API - good for state management but didn't fix the re-render optimization

// import { useState, useContext, createContext } from "react";
// import './App.css';

// function App() {
//   return (
//     <Parent />
//   );
// }

// const CountContext = createContext(); // create context

// // provide context
// function CountContextProvider({ children }) {
//   const [count, setCount] = useState(0);

//   return (
//     <CountContext.Provider value={{ count, setCount }}>
//       {children}
//     </CountContext.Provider>
//   );
// }

// function Parent() {
//   return (
//     <CountContextProvider>
//       <Increase />
//       <Decrease />
//       <Value />
//     </CountContextProvider>
//   );
// }

// function Increase() {
//   const { count, setCount } = useContext(CountContext);

//   return (
//     <button onClick={() => setCount(count + 1)}>Increase</button>
//   );
// }

// function Decrease() {
//   const { count, setCount } = useContext(CountContext);

//   return (
//     <button onClick={() => setCount(count - 1)}>Decrease</button>
//   );
// }

// function Value() {
//   const { count } = useContext(CountContext);

//   return <p>Count: {count}</p>;
// }

// export default App;

// ----------------------------------------------------------------------------------------

// counter app with statemanagement tool - Recoil

// import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
// import "./App.css";
// import { counterAtom } from './store/atoms/counter';

// function Parent() {
//   return (
//     <RecoilRoot>
//       <Increase />
//       <Decrease />
//       <Value />
//     </RecoilRoot>
//   );
// }

// function Decrease() {
//   const setCount = useSetRecoilState(counterAtom);
//   return <button onClick={() => setCount(c => c - 1)}>Decrease</button>;
// }

// function Increase() {
//   const setCount = useSetRecoilState(counterAtom);
//   return <button onClick={() => setCount(c => c + 1)}>Increase</button>;
// }

// function Value() {
//   const countValue = useRecoilValue(counterAtom);
//   return <p>Count: {countValue}</p>;
// }

// // App Component
// const App = () => {
//   return <div>
//     <Parent />
//   </div>
// };

// export default App;

// ------------------------------------------------------------------------------------------

// counter app with recoil - alternate

// import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
// import "./App.css";
// import { counterAtom } from "./store/atoms/counter";

// function Decrease() {
//   const setCount = useSetRecoilState(counterAtom);
//   return <button onClick={() => setCount((c) => c - 1)}>Decrease</button>;
// }

// function Increase() {
//   const setCount = useSetRecoilState(counterAtom);
//   return <button onClick={() => setCount((c) => c + 1)}>Increase</button>;
// }

// function Buttons() {
//   return (
//     <>
//       <Increase />
//       <Decrease />
//     </>
//   );
// }

// function Counter() {
//   const countValue = useRecoilValue(counterAtom);
//   return <p>Count: {countValue}</p>;
// }

// // App Component
// const App = () => {
//   return (
//     <div>
//       <RecoilRoot>
//         <Counter />
//         <Buttons />
//       </RecoilRoot>
//     </div>
//   );
// };

// export default App;

// ------------------------------------------------------------------------------------------

// counter app with memo

// import { useState, useEffect, memo } from "react";
// import "./App.css";

// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);

//   // useEffect(() => {
//   //     const interval = setInterval(() => {
//   //         setCount((c) => c + 1);
//   //     }, 3000);

//   //     return () => clearInterval(interval);
//   // }, []);

//   return (
//     <div>
//       <CurrentCount count={count} />
//       <Increase setCount={setCount} />
//       <Decrease setCount={setCount} />
//     </div>
//   );
// }

// const CurrentCount = memo(function ({ count }) {
//   return <h1>{count}</h1>;
// });

// const Decrease = memo(function ({ setCount }) {
//   function decrease() {
//     setCount((c) => c - 1);
//   }

//   return <button onClick={decrease}>Decrease</button>;
// });

// const Increase = memo(function ({ setCount }) {
//   function increase() {
//     setCount((c) => c + 1);
//   }

//   return <button onClick={increase}>Increase</button>;
// });

// export default App;

/*
Notes:
- `memo` is used to optimize rendering by preventing unnecessary re-renders of the child components. It ensures that the child components only re-render when their props change.

- Without `memo`, all child components (CurrentCount, Increase, Decrease) would re-render every time the parent (Counter) updates due to the `setInterval` in the useEffect.

- By using `memo`, even when the interval updates the count state, only the specific component 
  affected by the state change (CurrentCount in this case) will re-render, making the application more efficient.
*/

// ----------------------------------------------------------------------------------------

// selectors in recoil

import {
  RecoilRoot,
  // useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { counterAtom, evenSelector } from "./store/atoms/counter";
import "./App.css";

function App() {
  return (
    <>
      <RecoilRoot>
        <Buttons />
        <Counter />
        <IsEven />
      </RecoilRoot>
    </>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount((c) => c + 2);
  }

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

function Counter() {
  const count = useRecoilValue(counterAtom);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

function IsEven() {
  const even = useRecoilValue(evenSelector);
  return (
    <div>
      {even ? "Even" : "Odd"}
    </div>
  );
}

export default App;

// Notes:
// Here we are using a selector that is a part of the atom. The atom will have a derived function
// which can be anything. In our current program, this function checks whether the number is odd or even.
// For odd/even check, the function is passed to the selector.
// The Buttons and Counter components are dependent on the atom. The "IsEven" component gets the value from the atom,
// then passes it through the selector function to check if the number is even or odd and displays the result.
// IsEven doesnot depend on the atom rather depends on the selector