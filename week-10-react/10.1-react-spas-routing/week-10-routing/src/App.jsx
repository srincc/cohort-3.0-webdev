// learnt about Routing, SPAs, Layouts(Outlet)

// import "./App.css";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   useNavigate,
//   Outlet,
// } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route path="/neet/online-coaching-class-11" element={<Class11Program />}/>
//             <Route path="/neet/online-coaching-class-12" element={<Class12Program />}/>
//             <Route path="/" element={<Landing />} />
//             <Route path="*" element={<Errorpage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// function Layout(){
//   return <div style={{height : "100vh"}}>
//     <Header/>
//     <div style={{height : "90vh"}}>
//       <Outlet/>
//     </div>
//     footer
//   </div>
// }

// function Header() {
//   return (
//     <div>
//       <Link to="/">Allen</Link>|
//       <Link to="/neet/online-coaching-class-11">Class 11</Link>|
//       <Link to="/neet/online-coaching-class-12">Class 12</Link>
//     </div>
//   );
// }

// function Errorpage() {
//   return <div>sorry page not found</div>;
// }

// function Landing() {
//   return <div>Welcome to allen</div>;
// }

// function Class11Program() {
//   return <div>NEET programs for Class 11th</div>;
// }

// function Class12Program() {
//   const navigate = useNavigate();

//   function redirectUser() {
//     navigate("/");
//   }

//   return (
//     <div>
//       NEET programs for Class 12th
//       <button onClick={redirectUser}>Go back to landing page</button>
//     </div>
//   );
// }

// export default App;

// ------------------------------------------------------------------------------------------

//learnt about useRef - is a hook that provides a way to create a reference to a value or a DOM element that persists across renders but does not trigger a re-render when the value changes.

// dom use-case
// import React, { useRef } from 'react';

// function FocusInput() {
//   // Step 1: Create a ref to store the input element
//   const inputRef = useRef(null);

//   // Step 2: Define the function to focus the input
//   const handleFocus = () => {
//     // Access the DOM node and call the focus method
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       {/* Step 3: Attach the ref to the input element */}
//       <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
//       <button onClick={handleFocus}>Focus the input</button>
//     </div>
//   );
// }

// export default FocusInput;

// value use-case

// ugly code
// import React, { useState } from 'react';

// function App() {
//   const [time, setTime] = useState(0);
//   const [intervalId, setIntervalId] = useState(null); // Use state to store the interval ID

//   const startTimer = () => {
//     if (intervalId !== null) return; // Already running, do nothing

//     const newIntervalId = setInterval(() => {
//       setTime((prevTime) => prevTime + 1);
//     }, 1000);
    
//     // Store the interval ID in state (triggers re-render)
//     setIntervalId(newIntervalId);
//   };

//   const stopTimer = () => {
//     clearInterval(intervalId);

//     // Clear the interval ID in state (triggers re-render)
//     setIntervalId(null);
//   };

//   return (
//     <div>
//       <h1>Timer: {time}</h1>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </div>
//   );
// }

// export default App;

// better code
import React, { useState, useRef } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return; // Already running, do nothing

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h1>Timer: {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default App