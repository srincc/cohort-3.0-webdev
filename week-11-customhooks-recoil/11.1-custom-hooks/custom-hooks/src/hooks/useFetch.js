import { useState, useEffect } from "react";

// useFetchPostTitle custom hook
// export function useFetchPostTitle() {
//     const [data, setData] = useState({})

//     async function getPosts() {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//         const json = await response.json()
//         setData(json)
//     }

//     useEffect(() => {
//         getPosts()
//     }, [])

//     return data.title
// }


// useFetch custom hook
// export function (url) {
//     const [data, setData] = useState({})

//     async function getPosts() {
//         const response = await fetch(url)
//         const json = await response.json()
//         setData(json)
//     }

//     useEffect(() => {
//         getPosts()
//     }, [])

//     return data
// }


// use fetch with refetching custom hook
export function useFetch(url, time) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }

    getPosts();

    if (time !== null) {
      const getPostAgain = setInterval(() => {
        getPosts();
      }, time);
      return () => clearInterval(getPostAgain);
    }
  }, [url, time]);

  return {
    data,
    loading,
  };
}
