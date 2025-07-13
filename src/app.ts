import express, { Request, Response, Application } from "express";
import cors from "cors";
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  const a = 20;
  res.send(a);
});

export default app;
