// example 1 - using .then syntax

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not OK");
//     }
//     return response.json(); // parse JSON
//   })
//   .then((data) => {
//     console.log("Data:", data); // handle the parsed JSON
//   })
//   .catch((error) => {
//     console.error("Fetch error:", error);
//   });

// example 2 - using async await syntax

// async function getPost() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

//     if (!response.ok) {
//       throw new Error("Network response was not OK");
//     }

//     const data = await response.json(); // parse JSON
//     console.log("Data:", data);
//   } catch (error) {
//     console.error("Fetch error:", error);
//   }
// }

// getPost();

// example with fetch() Options

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Hello",
    body: "World",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("POST response:", data))
  .catch((error) => console.error("Error:", error));
