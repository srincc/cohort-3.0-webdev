// import "./App.css";
// import { RecoilRoot, useRecoilState, useRecoilValue} from 'recoil'
// import { notifications, totalNotificationSelector } from './atoms'
// import axios from 'axios'
// import { useEffect } from 'react'

// function App() {
//   return <RecoilRoot>
//     <MainApp />
//   </RecoilRoot>
// }

// function MainApp() {
//   const [networkCount, setNetworkCount] = useRecoilState(notifications)
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector);

//   // useEffect(() => {
//   //   // fetch
//   //   axios.get("https://sum-server.100xdevs.com/notifications")
//   //     .then(res => {
//   //       setNetworkCount(res.data)
//   //     })
//   // }, [])

//   return (
//     <>
//       <button>Home</button>

//       <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
//       <button>Jobs {networkCount.jobs}</button>
//       <button>Messaging ({networkCount.messaging})</button>
//       <button>Notifications ({networkCount.notifications})</button>

//       <button>Me ({totalNotificationCount})</button>
//     </>
//   )
// }

// export default App

// ------------------------------------------------------------------

// other example - self
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import {todos} from "./atoms.js"

function App() {
  return (
    <RecoilRoot>
      <TodoDisplay />
    </RecoilRoot>
  );
}

function TodoDisplay() {
  const todo = useRecoilValue(todos);
  return <div>
    {JSON.stringify(todo)}
  </div>
}

export default App;
