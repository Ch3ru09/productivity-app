import express from "express";

const app = express();
const port = Number(process.env.PORT || 3000);

app.get("/", (_req, res) => {
  res.status(200).send("Hello from Express js!");
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

