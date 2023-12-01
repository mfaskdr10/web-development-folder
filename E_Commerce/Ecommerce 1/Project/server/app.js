import express from "express";

const app = express();
const port = 3200;

app.get("/",
  (req, res) => {
    res.send("Halo Cokkkkkk");
  });

app.listen(port, () => {
  console.log(`server sudah berjalan di localhost port: ${port}`);
});
