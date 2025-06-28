// learning components/functional component, props, conditional rendering, useState


// import React, { useState } from "react";

// function App() {

// return (
//   <div>
//     <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
//       <ToggleMessage />
//       <br/>
//       <NotificationCount />
//       <Greeting name = {"srinc"}/>

//       <div
//       style={{
//           display: "flex",
//           justifyContent: "center",
//       }}
//     >
//       <div>
//         <div>
//           {/* Call PostComponent here with props to render it in the App component */}
//           <PostComponent
//               name={"Rohan Dev"}
//               subtitle={"20 followers"}
//               time={"20m ago"}
//               image={
//                   "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
//               }
//               description={
//                   "What to know how to win big? Check out how these folks won $6000 in bounties."
//               }
//           />
//         </div>
//         <div>
//           <div>
//             {/* Call PostComponent here with props to render it in the App component */}
//             <PostComponent
//                 name={"Harkirat"}
//                 subtitle={"Promoted"}
//                 image={
//                     "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
//                 }
//                 description={
//                     "How to get hired in 2024? I lost my Job in 2023, this is the roadmap I followed to get hired in 2024."
//                 }
//             />
//           </div>
//         </div>
//       </div>
//     </div>

//     </div>
//   </div>
// );
// }

// // notification count component
// const NotificationCount = () => {
//   let [notificationCount, setNotificationCount] = useState(0);

//   console.log("re-render");
//   function increment() {
//     setNotificationCount(notificationCount + 1);
//   }

//   return (
//       <div>
//           <button onClick={increment}>
//               Increase count
//           </button>
//           {notificationCount}
//       </div>
//   );
// };

// // toggle message component
// const ToggleMessage = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
//       {isVisible && <p>This message is conditionally rendered!</p>}
//     </div>
//   );
// };

// // greeting component
// const Greeting = ({ name }) => {
//     return <h1>Hello, {name}!</h1>
// };

// // Create a style object to apply styles to the div element in PostComponent
// const style = {
//     width: 250,
//     backgroundColor: "white",
//     borderRadius: 10,
//     borderColor: "gray",
//     borderWidth: 1,
//     padding: 20,
//     margin: 10,
// };

// // Create a function component named PostComponent with props to render it in the App component
// function PostComponent({ name, subtitle, time, image, description }) {
//     // return JSX that will be rendered
//     return (
//         // Apply style object to the div element
//         <div style={style}>
//             <div style={{ display: "flex" }}>
//                 {/* Display the image, name, subtitle, and time */}
//                 <img src={image} style={{ width: 40, height: 40, borderRadius: 40 }} />
//                 <div style={{ fontSize: 14, marginLeft: 10 }}>
//                     <b>{name}</b>
//                     <div>{subtitle}</div>

//                     {/* Condition is applied is ..like if time is not equal to undefined then do this or return null...its kind of if else statement */}
//                     {time !== undefined ? (
//                         <div style={{ display: "flex" }}>
//                             <div>{time}</div>
//                             <img
//                                 src="https://imgs.search.brave.com/HR4XL7q_XpiQSqNwAl17jYkdNBrGw-fKdXxJlCr-uls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MDc3ODM3Ni9waG90/by9jbG9jay02LW9j/bG9jay5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VTZKUXI5/UFdPYmVuY2lOMHVj/QkgycXJFeWd5WlY4/VUdDem1UQ1pVRnVE/cz0"
//                                 style={{ width: 30, height: 20 }}
//                             />
//                         </div>
//                     ) : null}
//                 </div>
//             </div>

//             <div style={{ fontSize: 14, marginTop: 5 }}>{description}</div>
//         </div>
//     );
// }

// // Export App Component to use it in other components
// export default App;

// ---------------------------------------------------------------------------------------------

// learning using useState

// import { useState } from "react";
// import { PostComponent } from "./Post";

// function App() {
//   const [posts, setPosts] = useState([]);

//   const postComponents = posts.map((post) => (
//     <PostComponent
//       name={post.name}
//       subtitle={post.subtitle}
//       time={post.title}
//       image={post.image}
//       description={post.description}
//     />
//   ));

//   function addPost() {
//     setPosts([
//       ...posts,
//       {
//         name: "harkirat",
//         subtitle: "10000 followers",
//         time: "2m ago",
//         image:
//           "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
//         description:
//           "What to know how to win big? Check out how these folks won $6000 in bounties.",
//       },
//     ]);
//   }

//   return (
//     <div style={{ background: "#dfe6e9", height: "100vh" }}>
//       <button onClick={addPost}>Add post</button>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <div>{postComponents}</div>
//       </div>
//     </div>
//   );
// }

// export default App;

// ---------------------------------------------------------------------------------------------

// learning useEffect

// import { useEffect, useState } from "react";

// function App() {
//   const [count , setcount] = useState(1);
//   const [count2 , setcount2] = useState(1);

//   function increaseCount(){
//     setcount(currentValue => currentValue + 1);
//   }
//   function decreaseCount(){
//     setcount2(currentValue => currentValue - 1);
//   }

//   useEffect(function(){
//     setInterval(increaseCount, 5000)
//     setInterval(decreaseCount, 8000)
//   },[]); // this effect will run only on mount, because the array is empty

//   // dependency variable
//   useEffect(function(){
//     console.log("the count has been updated to" + count);
//   }, [count, count2]); // this effect will run on mount and state change

//   return <div>{count}{count2}</div>;
// }

// export default App;

// ---------------------------------------------------------------------------------------------

// useEffect with dependency array example - linkedIn top bar

// function App() {
//   const [currentTab, setCurrentTab] = useState("feed");

//   useEffect(function(){
//     // send backend req
//     console.log("send backend req to get data for tab" + currentTab);
//   },[currentTab])

//   return (
//     <div>
//       <button
//         onClick={function () {
//           setCurrentTab("feed");
//         }}
//         style={{ color: currentTab == "feed" ? "red" : "black" }}
//       >
//         Feed
//       </button>
//       <button
//         onClick={function () {
//           setCurrentTab("notifications");
//         }}
//         style={{ color: currentTab == "notifications" ? "red" : "black" }}
//       >
//         Notifications
//       </button>
//       <button
//         onClick={function () {
//           setCurrentTab("messages");
//         }}
//         style={{ color: currentTab == "messages" ? "red" : "black" }}
//       >
//         Messages
//       </button>
//       <button
//         onClick={function () {
//           setCurrentTab("jobs");
//         }}
//         style={{ color: currentTab == "jobs" ? "red" : "black" }}
//       >
//         jobs
//       </button>
//     </div>
//   );
// }

// export default App;

// ---------------------------------------------------------------------------------------------

// useEffect with dependency array example - show todo app with loading

// import { useState, useEffect } from "react";

// function App() {
//   const [currentTab, setCurrentTab] = useState(1);
//   const [tabData, setTabData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(
//     function () {
//       setLoading(true);
//       fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab).then(
//         async (res) => {
//           const json = await res.json();
//           setTabData(json);
//           setLoading(false);
//         }
//       );
//     },
//     [currentTab]
//   );

//   return (
//     <div>
//       <button
//         onClick={function () {
//           setCurrentTab(1);
//         }}
//         style={{ color: currentTab == 1 ? "red" : "black" }}
//       >
//         todo#1
//       </button>
//       <button
//         onClick={function () {
//           setCurrentTab(2);
//         }}
//         style={{ color: currentTab == 2 ? "red" : "black" }}
//       >
//         todo#2
//       </button>
//       <button
//         onClick={function () {
//           setCurrentTab(3);
//         }}
//         style={{ color: currentTab == 3 ? "red" : "black" }}
//       >
//         todo#3
//       </button>
//       <button
//         onClick={function () {
//           setCurrentTab(4);
//         }}
//         style={{ color: currentTab == 4 ? "red" : "black" }}
//       >
//         todo#4
//       </button>

//       <br />

//       {loading ? "loading....." :tabData.title}
//     </div>
//   );
// }

// export default App;

// ---------------------------------------------------------------------------------------------

// useEffect with dependency and cleanup

// function App() {
//   const [showTimer, setShowTimer] = useState(true);

//   useEffect(()=> {
//     setInterval(() => {
//       setShowTimer(currentValue => !currentValue);
//     }, 5000);
//   }, []);

//   return <div>
//     {showTimer && <Timer />}
//     </div>;
// }

// const Timer = () => {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     console.log("timer mounted")
//     const interval = setInterval(() => {
//       console.log("from inside clock")
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     return () => {
//       console.log("timer unmounted");
//       clearInterval(interval)}; // Cleanup on unmount
//   }, []);

//   return <div>{seconds} seconds elapsed</div>;
// };

// export default App;

// ---------------------------------------------------------------------------------------------

// learnt children prop - allows you to pass elements or components as props to other components.

// import React from "react";

// const Card = ({ children }) => {
//   return (
//     <div
//       style={{
//         border: "1px solid #ccc",
//         borderRadius: "5px",
//         padding: "20px",
//         margin: "10px",
//         boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Card>
//         <h2>Card Title</h2>
//         <p>This is some content inside the card.</p>
//       </Card>
//       <Card>
//         <h2>Another Card</h2>
//         <p>This card has different content!</p>
//       </Card>
//     </div>
//   );
// };

// export default App;

// ---------------------------------------------------------------------------------------------

// list and keys - When rendering lists, each item should have a unique key prop for React to track changes efficiently.

// import React from 'react';

// const ItemList = ({ items }) => {
//     return (
//         <ul>
//             {items.map(item => (
//                 <li key={item.id}>{item.name}</li>
//             ))}
//         </ul>
//     );
// };

// const App = () => {
//     const items = [
//         { id: 1, name: 'Item 1' },
//         { id: 2, name: 'Item 2' },
//         { id: 3, name: 'Item 3' },
//     ];

//     return <ItemList items={items} />;
// };

// export default App

// ---------------------------------------------------------------------------------------------

// inline styling in react

// import React from 'react';

// const App = () => {
//     return <div>
//       <MyComponent/>
//     </div>
// };

// function MyComponent() {
//   return (
//     <div style={{ backgroundColor: 'blue', color: 'white' }}>
//       Hello, World!
//     </div>
//   );
// }

// export default App

// ---------------------------------------------------------------------------------------------

// Class based vs functional components - Earlier, React code was written using Class based components. Slowly functional components were introduced and today they are the ones you’ll se everywhere.

// import React, { Component } from 'react';

// function App (){
//   return <div>
//     <ClassCounter/>
//   </div>
// }

// class ClassCounter extends Component {
//     state = { count: 0 };

//     increment = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     render() {
//         return (
//             <div>
//                 <p>Count: {this.state.count}</p>
//                 <button onClick={this.increment}>Increment</button>
//             </div>
//         );
//     }
// }

// export default App;

// ---------------------------------------------------------------------------------------------

// lifecycle events

// Functional component lifecycle events - useEffect

// import React, { useState, useEffect } from "react";

// function App() {
//   return (
//     <div>
//       <MyComponent />
//     </div>
//   );
// }

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Component mounted or count updated");
//   }, [count]); // Runs on mount and when count changes

//   useEffect(() => {
//     console.log("Component mounted");
//     return () => {
//       console.log("Component will unmount");
//     };
//   }, []);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default App;

// lifecycle event in legacy class based components

// import React from "react";

// function App(){
//   return <div>
//     <MyComponent/>
//   </div>
// }

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   componentDidMount() {
//     console.log('Component mounted');
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('Component updated');
//   }

//   componentWillUnmount() {
//     console.log('Component will unmount');
//   }

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increment
//         </button>
//       </div>
//     );
//   }
// }

// export default App

// ---------------------------------------------------------------------------------------------

//  Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI. Error boundaries only exist in class based components

// import React from "react";

// const App = () => {
//   return (
//     <div>
//       <ErrorBoundary>
//         <MyComponent1 />
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <MyComponent2 />
//       </ErrorBoundary>
//     </div>
//   );
// };

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, info) {
//     console.error("Error caught:", error, info);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children;
//   }
// }

// const MyComponent1 = () => {
//   throw new Error("I crashed!");
//   return <div style = {{background : "red" , borderRadius: 20, padding :20, margin: 20}}>
//     hi there</div>;
// };

// const MyComponent2 = () => {
//   // throw new Error("I crashed!");
//   return <div style = {{background : "red" , borderRadius: 20, padding :20, margin: 20}}>
//     hi there 2</div>;
// };

// export default App;

// ---------------------------------------------------------------------------------------------

// Fragments - In React, a component can return a single parent element, but it can contain multiple children within that single parent

import { Fragment } from "react";

function App(){
  return <div>
    <MyComponent/>
  </div>
}

// wrong code
// const MyComponent = () => {
//     return (
//         <h1>Hello</h1>
//         <p>World</p> // This line will cause an error
//     );
// };

// right code

// const MyComponent = () => {
//     return (
//         <>
//             <h1>Hello</h1>
//             <p>World</p>
//         </>
//     );
// };

// or

const MyComponent = () => {
    return (
        <Fragment>
            <h1>Hello</h1>
            <p>World</p>
        </Fragment>
    );
};

export default App;