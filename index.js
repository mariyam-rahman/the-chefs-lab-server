const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  res.send("chef is cooking!");
});

app.get("/auth/register", (req, res) => {
  res.send("data");
});
app.get("/chefs", (req, res) => {
  const data = [
    {
      name: "",
      id: "",
      bio: "",
      imageUrl: "",
      recipes: [],
    },
    {
      name: "",
      id: "",
      bio: "",
      imageUrl: "",
      recipes: [],
    },
    {
      name: "",
      id: "",
      bio: "",
      imageUrl: "",
      recipes: [],
    },
    {
      name: "",
      id: "",
      bio: "",
      imageUrl: "",
      recipes: [],
    },
    {
      name: "",
      id: "",
      bio: "",
      imageUrl: "",
      recipes: [],
    },
    {
      name: "",
      id: "",
      bio: "",
      imageUrl: "",
      recipes: [],
    },
  ];

  res.send(data);
});

app.get("/recipes", (req, res) => {
  res.send("data");
});
app.get("/chef/:id/recipes", (req, res) => {
  res.send("data");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
