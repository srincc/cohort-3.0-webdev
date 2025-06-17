// using fetch to hit backend

// using .then syntax
// function main() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1").then(async (response) => {
//     const json = await response.json();
//     console.log("this is using .then fetch syntax")
//     console.log(json.userId);
//   });
// }

// using async await syntax
async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const json = await response.json();
  console.log("this is using async await fetch syntax")
  console.log(json.userId);
}

main();
