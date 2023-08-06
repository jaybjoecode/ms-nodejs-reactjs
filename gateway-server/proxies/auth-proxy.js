// gateway-server/auth-proxy.js
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

export const authProxy = express.Router();

authProxy.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:5001',
    changeOrigin: true,
    pathRewrite: {
      [`^/auth`]: '/api'
    },
  })
);
