const axios = require("axios");

// axios in detail
// things to know
// how to change request method
// send body - 2nd arg for post put delete and no body for get
// send header
// request config

// async function main() {
//   const response = await axios.post(
//     "https://httpdump.app/dumps/c9efc8f0-97f9-4094-bf8f-3e4f2225ac95",
//     {
//       username: "srinc",
//       password: "123",
//     },
//     {
//       headers: {
//         Authorization: "bearer 123",
//       },
//     }
//   );
//   // no need to change this for every type of response
//   console.log(response.data);
// }

// another syntax for axios for custom config
async function main() {
  const response = await axios(
    {
      method: "post",
      url: "https://httpdump.app/dumps/c9efc8f0-97f9-4094-bf8f-3e4f2225ac95",
      headers: {
        Authorization: "bearer 123",
      },
      data: {
        username : "harkirat"
      }
    }
  );
  // no need to change this for every type of response
  console.log(response.data);
}

main();
