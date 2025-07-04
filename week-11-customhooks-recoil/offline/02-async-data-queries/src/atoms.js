// import axios from "axios";
// import { atom, selector } from "recoil";

// export const notifications = atom({
//     key: "networkAtom",
//     // default: {
//     //     network: 4, 
//     //     jobs: 6, 
//     //     messaging: 3, 
//     //     notifications: 3
//     // }
//     default: selector({
//         key : "networkAtomSelector",
//         get : async ()=>{
//             const res = await axios.get("https://sum-server.100xdevs.com/notifications")
//             return res.data;
//         }
//     })
// });

// export const totalNotificationSelector = selector({
//     key: "totalNotificationSelector",
//     get: ({get}) => {
//         const allNotifications = get(notifications);
//         return allNotifications.network + 
//         allNotifications.jobs + 
//         allNotifications.notifications + 
//         allNotifications.messaging
//     }
// })

// ------------------------------------------------------------------

// other example - self
import axios from "axios";
import {atom, selector} from "recoil"

export const todos = atom({
    key : "todo",
    default : selector({
        key: "todoselector",
        get : async () => {
            const res =await axios.get("https://jsonplaceholder.typicode.com/todos/1");
            return res.data;
        }
    })
})