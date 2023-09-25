import express, { Express, Request, Response } from 'express';
import {json,urlencoded} from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import appRouter from './appRouter';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use(appRouter);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
