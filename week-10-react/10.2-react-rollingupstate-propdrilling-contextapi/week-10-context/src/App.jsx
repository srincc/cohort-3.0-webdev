// Rolling up the state

// import { useState } from 'react'

// function App() {
//   return <div>
//     <Light />
//   </div>
// }

// function Light() {
//   const [bulbOn, setBulbOn] = useState(true)

//   return <div>
//     <LightBulb bulbOn={bulbOn} />
//     <LightSwitch bulbOn={bulbOn} setBulbOn={setBulbOn} />
//   </div>
// }

// function LightBulb({bulbOn}) {
//   return <div>
//     {bulbOn ? "Bulb on" : "Bulb off"}
//   </div>
// }

// function LightSwitch({bulbOn, setBulbOn}) {

//   function toggle() {
//     // setBulbOn(currentState => !currentState)
//     setBulbOn(!bulbOn)
//   }

//   return <div>
//     <button onClick={toggle}>Toggle the bulb</button>
//   </div>
// }

// export default App;

// ----------------------------------------------------------------------------------

// Prop Drilling

// import { useState } from 'react'

// function App() {
//   const [bulbOn, setBulbOn] = useState(true)

//   return <div>
//     <Light bulbOn ={bulbOn} setBulbOn ={setBulbOn} />
//   </div>
// }

// function Light({bulbOn ,setBulbOn}) {
//   return <div>
//     <LightBulb bulbOn={bulbOn} />
//     <LightSwitch bulbOn={bulbOn} setBulbOn={setBulbOn}/>
//   </div>
// }

// function LightBulb({bulbOn}) {
//   return <div>
//     {bulbOn ? "Bulb on" : "Bulb off"}
//   </div>
// }

// function LightSwitch({bulbOn, setBulbOn}) {

//   function toggle() {
//     // setBulbOn(currentState => !currentState)
//     setBulbOn(!bulbOn)
//   }

//   return <div>
//     <button onClick={toggle}>Toggle the bulb</button>
//   </div>
// }

// export default App;

// ----------------------------------------------------------------------------------------

// context API - solves the problem of prop drilling

// import { createContext, useContext, useState } from "react";

// const BulbContext = createContext();

// function BulbProvider({ children }) {
//   const [bulbOn, setBulbOn] = useState(true);

//   return (
//     <BulbContext.Provider
//       value={{
//         bulbOn: bulbOn,
//         setBulbOn: setBulbOn,
//       }}
//     >
//       {children}
//     </BulbContext.Provider>
//   );
// }

// function App() {
//   return (
//     <div>
//       <BulbProvider>
//         <Light />
//       </BulbProvider>
//     </div>
//   );
// }

// function Light() {
//   return (
//     <div>
//       <LightBulb/>
//       <LightSwitch />
//     </div>
//   );
// }

// function LightBulb() {
//   const {bulbOn} = useContext(BulbContext);
//   return <div>{bulbOn ? "Bulb on" : "Bulb off"}</div>;
// }

// function LightSwitch() {
//   const {bulbOn, setBulbOn} = useContext(BulbContext)
//   function toggle() {
//     // setBulbOn(currentState => !currentState)
//     setBulbOn(!bulbOn);
//   }

//   return (
//     <div>
//       <button onClick={toggle}>Toggle the bulb</button>
//     </div>
//   );
// }

// export default App;

// --------------------------------------------------------------------------------------

// testing Context API - has problem with renders optimisation

// import React, { createContext, useContext, useState } from 'react';

// const CountContext = createContext();

// function CountContextProvider({ children }) {
//   const [count, setCount] = useState(0);

//   return <CountContext.Provider value={{count, setCount}}>
//     {children}
//   </CountContext.Provider>
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

// function Decrease() {
//   const {count, setCount} = useContext(CountContext);
//   return <button onClick={() => setCount(count - 1)}>Decrease</button>;
// }

// function Increase() {
//   const {count, setCount} = useContext(CountContext);
//   return <button onClick={() => setCount(count + 1)}>Increase</button>;
// }

// function Value() {
//   const {count} = useContext(CountContext);
//   return <p>Count: {count}</p>;
// }

// // App Component
// const App = () => {
//   return <div>
//     <Parent />
//   </div>
// };

// export default App;

// -------------------------------------------------------------------------------------------

// Intro to recoil - solves the renders optimisation problem -- dont know why its not rendering??????????????

import React from 'react';
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

const count = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

function Parent() {
  return (
    <RecoilRoot>
      <Increase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
}

function Increase() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
}

function Value() {
  const countValue = useRecoilValue(count);
  return <p>Count: {countValue}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;