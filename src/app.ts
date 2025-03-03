import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import propertyRoutes from "./routes/propertyRoutes";
import contactMessageRoutes from "./routes/contactMessageRoutes";
import { globalErrorHandler, Error404Handler } from "./middlewares/errorHandler";
import { corsMiddleware } from "./middlewares/corsMiddleware";
import { isAuth } from "./middlewares/isAuth";
import scraperRoutes from "./routes/scraperRoutes";

const app = express();

// app.use(express.json());
app.use(bodyParser.json());

app.use(corsMiddleware);

app.use("/auth", authRoutes);
app.use("/property", propertyRoutes);
app.use("/message", contactMessageRoutes);
app.use("/scrape", scraperRoutes);

app.use(globalErrorHandler);
app.use(Error404Handler);

// app.get("/", (req: Request, res: Response) => {
//   res.json({ message: "Hello, TypeScript with Express!" });
// });

export default app;
