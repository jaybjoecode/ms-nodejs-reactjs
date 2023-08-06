import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { routes } from './src/routes.js'
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDB } from "./src/database.js";

dotenv.config()

const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(morgan('dev'))

await connectDB();

app.use('/api', routes);

app.listen(process.env.PORT, () => {
  console.log(`Auth server is running on port ${process.env.PORT}`);
});
