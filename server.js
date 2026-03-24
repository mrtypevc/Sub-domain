const express = require("express");
const app = express();

app.get("*", (req, res) => {
  const host = req.headers.host;
  const subdomain = host.split(".")[0];

  res.send(`<h1>Welcome ${subdomain}</h1>`);
});

app.listen(3000);
