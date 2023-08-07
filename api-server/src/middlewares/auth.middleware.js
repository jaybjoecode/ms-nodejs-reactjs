// api-server/middlewares/authMiddleware.js
import { verifyToken } from '../utils/jwt.utils.js';

// Define an array of routes that don't require authorization
const publicRoutes = ['/api/public/notes'];

export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // Check if the route is public and skip authorization
  if (publicRoutes.includes(req.path)) {
    return next();
  }

  if (!token) {
    return res.status(401).json({ message: 'Authentication token missing.' });
  }

  try {
    const decodedToken = verifyToken(token);
    req.user = decodedToken;
    // console.log('token', decodedToken)
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid authentication token.' });
  }
}
