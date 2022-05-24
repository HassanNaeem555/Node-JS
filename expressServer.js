import express from "express";
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));
const port = 5000;

app.get("/", (req, res) => {
  //   res.send("Hello, world!");
  //   res.sendFile(path.join(__dirname, "notRecognisedPage.html"));
  //   res.json({ Hello: 4 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
