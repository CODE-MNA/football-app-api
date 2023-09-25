import express, { Express, Request, Response } from 'express';
import {json,urlencoded} from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/players', (req: Request, res: Response) => {

});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
