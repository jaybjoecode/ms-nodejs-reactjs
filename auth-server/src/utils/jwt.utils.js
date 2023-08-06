// shared/jwtUtils.js
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config()
const TOKEN_SECRET = process.env.TOKEN_SECRET;


export async function generateToken(payload) {
  const token = await jwt.sign(payload, TOKEN_SECRET, { expiresIn: '1d' });
  return token;
}

export async function verifyToken(token) {
  return await jwt.verify(token, TOKEN_SECRET);
}
