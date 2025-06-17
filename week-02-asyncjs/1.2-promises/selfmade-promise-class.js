//creating own promise class to understand promise better

class Promise2 {
  constructor(fn) {
    this.fn = fn;
    this.fn(() => {
      this.resolve();
    });
  }
  then(callback) {
    this.resolve = callback;
  }
}

function readTheFile(resolve) {
  setTimeout(function () {
    console.log("callback based setTimeout completed");
    resolve();
  }, 3000);
}

function setTimeoutPromisified() {
  return new Promise2(readTheFile);
}

function callback() {
  console.log("callback has been called");
}

const p = setTimeoutPromisified();
p.then(callback);
