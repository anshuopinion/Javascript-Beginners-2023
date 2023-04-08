import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "My First Backend Code + Nodemon",
  });
});

app.listen(9000, () => {
  console.log("Server is running on port 9000 ");
});
