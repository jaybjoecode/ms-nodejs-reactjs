import express from 'express';
import { register, login, verifyUser, getUsers } from './controllers/auth.controller.js';
import { loginSchema, registerSchema } from "./schemas/auth.schema.js";
import { validateSchema } from "./middlewares/validator.middleware.js";

export const routes = express.Router();

routes.post('/register', validateSchema(registerSchema), register);
routes.post('/login', validateSchema(loginSchema), login);
routes.get('/verify', verifyUser);
routes.post('/users', getUsers);
