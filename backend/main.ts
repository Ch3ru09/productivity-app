// @deno-types="npm:@types/express@4"
import express, { NextFunction, Request, Response } from "npm:express@4.18.2";

const app = express();
const router = express.Router();
const port = Number(Deno.env.get("PORT") || 3000);

app.use("/api", router);

router.get("/", (_req, res) => {
  res.status(200).send("Hello from Deno and Express!");
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
