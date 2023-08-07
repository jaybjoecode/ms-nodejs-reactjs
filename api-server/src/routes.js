// api-server/routes.js
import express from 'express';
import { getNotes, getMyNotes, getNote, createNote, updateNote, deleteNote } from './controllers/note.controller.js';

export const routes = express.Router();

// Implement your authentication middleware here
// to ensure that only authenticated users can access the API.
// public
routes.get('/public/notes', getNotes);

routes.get('/notes', getNotes);
routes.get('/my-notes', getMyNotes);
routes.get('/notes/:id', getNote);
routes.post('/notes', createNote);
routes.put('/notes/:id', updateNote);
routes.delete('/notes/:id', deleteNote);
