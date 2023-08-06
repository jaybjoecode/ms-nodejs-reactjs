// api-server/index.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { routes } from './src/routes.js';
import { authenticateToken } from './src/middlewares/auth.middleware.js';
import * as dotenv from 'dotenv';
dotenv.config()
import { connectDB } from "./src/database.js";

const app = express();
app.use(bodyParser.json());
// app.use(cors({}));

await connectDB();

// Apply the authentication middleware to protect routes
app.use(authenticateToken);

app.use('/api', routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API server is running on port ${PORT}`);
});
