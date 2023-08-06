// shared/jwtUtils.js
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config()

const secretKey = process.env.TOKEN_SECRET;

export function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

export function verifyToken(token) {
  return jwt.verify(token, secretKey);
}
