import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import {json,urlencoded} from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import {appRouter} from './appRouter';
import {RegisterShutdowns} from './shutdown';


dotenv.config();

const PORT = process.env.PORT || 3000;
export const app: Express = express();

app.use(cors({
    origin:"*"
}));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/uploaded',express.static("uploaded"))


//Use main routes
app.use(appRouter);



//After configuring express app, start listening to port for connections
const httpPortListener = app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));

//Shutting down
RegisterShutdowns(httpPortListener,process);


