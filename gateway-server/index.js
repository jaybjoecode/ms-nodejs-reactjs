// gateway-server/index.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { apiProxy } from './proxies/api-proxy.js';
import { authProxy } from './proxies/auth-proxy.js';

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use('/auth', authProxy);
app.use('/api', apiProxy);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Gateway server is running on port ${PORT}`);
});
