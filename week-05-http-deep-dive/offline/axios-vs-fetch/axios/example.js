const axios = require("axios");

// with .then syntax
axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log("Data:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// with async await syntax
async function fetchPost() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("Data:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchPost();

// with custom config
axios({
  method: "get",
  url: "https://jsonplaceholder.typicode.com/posts",
  params: {
    userId: 1,
  },
  headers: {
    Authorization: "Bearer my-token",
  },
})
  .then((response) => {
    console.log("Data with config:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
