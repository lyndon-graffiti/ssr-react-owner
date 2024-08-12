import express from "express";
import render from "./render.js";

const app = express();

app.use(express.static("./public"));

app.get("*", render);

app.listen(9527, () => {
  console.log("Server running on port 9527");
});
