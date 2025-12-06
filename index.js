import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/api/user", (req, res) => {
  res.json({ id: 1, name: "Haru" });
});

app.listen(3000, () => {
  console.log("Express server running at http://localhost:3000");
});


