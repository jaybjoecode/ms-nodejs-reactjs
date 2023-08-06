// gateway-server/api-proxy.js
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

export const apiProxy = express.Router();

apiProxy.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:5002',
    changeOrigin: true,
    // logLevel: 'debug',
    pathRewrite: {
      [`^/api`]: '/api',
      [`^/api/v1`]: '/api/v1',
    },   
  })
);
