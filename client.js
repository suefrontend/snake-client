const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541, // PORT number here,
  });

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log(`Successfully connected to game server`);
    conn.write("Name: KYN");
  });

  conn.on("connect", () => {
    conn.write("Move: up");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
};
