import { json } from "body-parser";
import cors from "cors";
import { config } from "dotenv";
import express, { Application, Request, Response } from "express";
import usersRouter from "./routes/users";

config();
const app: Application = express();
const allowedOrigins = ["http://localhost:3000"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));
app.use(json());
app.use(usersRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express server with TypeScript");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
