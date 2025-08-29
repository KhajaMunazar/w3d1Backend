import express from "express";

const app = express();
 
app.use(express.json());

const PORT = 5000;

app.get("/", (req,res) => {
  res.send("hello server");
});

app.get("/global", (req,res) => {
  res.json("hello global server");
});

app.post("/register", (req,res) => {
  let userData = req.body;
  console.log(userData);
  res.json({msg: "user registered successfully"});
});

app.post("/khaja", (req,res) => {
  let userData = req.body;
  console.log(userData);
  res.json({msg: "send rol"});
});

app.put("/update", (req,res) => {
  let userData = req.body;
  console.log(userData);
  res.json({msg: "user updated successfully"});
});

app.delete("/delete", (req,res) => {
  let userData = req.body;
  console.log(userData);
  res.json({msg: "user deleted successfully"});
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
