import cookieParser from "cookie-parser";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./config";

import userRegisterRouter from "./modules/users/user.route"

const app: Application = express();

app.use(
  cors({
    origin: config.app_url,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/api", async (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: "server is running",
  });
});

app.use("/api/users", userRegisterRouter)

export default app;
