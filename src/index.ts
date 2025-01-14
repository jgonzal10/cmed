import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/health", (req: Request, res: Response) => {
 res.status(200).json("Server running!!!");
});

app.listen(4000, () => {
 console.log(`App is listening on port 4000`);
});