const axios = require("axios")

// using axios to hit backend
async function main() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  // axios gives acess directly to json data in response.data no need to convert like in fetch
  console.log("this is using async await axios syntax")
  console.log(response.data.userId);
}

main();