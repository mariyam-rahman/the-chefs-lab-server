const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors");
const data = require("./data.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("chef is cooking!");
});

app.get("/auth/register", (req, res) => {
  res.send("data");
});

app.get("/chefs", (req, res) => {
  res.send(data);
});

app.get("/recipes", (req, res) => {
  const recipes = [];
  data.forEach((c) => {
    c.recipes.forEach((r) => recipes.push(r));
  });
  res.send(recipes);
});

app.get("/chef/:id", (req, res) => {
  const chefId = req.params.id;
  const chef = data.find((e) => e.id == chefId);
  res.send(chef);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
