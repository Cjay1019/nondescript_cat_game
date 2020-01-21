const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 9023;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
  console.log("env success");
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Game server now on port ${PORT}!`);
});