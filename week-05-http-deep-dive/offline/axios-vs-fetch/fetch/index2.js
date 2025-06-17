// fetch in detail

async function main() {
  const response = await fetch(
    "https://www.postb.in/1749974240540-7751598991453",
    {
        method: "POST",
        body: {
          username: "srinc",
          password: "123"
        },
        headers: {
          Authorization : "bearer 123"
        }
    }
  );
  
  // need to change this for every type of response
  const textualData = await response.text();
  console.log(textualData);
}

main();
