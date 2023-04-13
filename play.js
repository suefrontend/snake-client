const { connect } = require("./client");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //type something
  return stdin;
};

const handleUserInput = function (data) {
  // your code here

  if (data === "\u0003") {
    console.log("bye");
    process.exit();
  }
};

setupInput();

console.log("Connecting ...");
connect();
