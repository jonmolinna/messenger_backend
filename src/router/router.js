import express from 'express';
const router = express.Router();

import { createUser } from '../controllers/user.controller.js';
import { auth } from '../controllers/auth.controllers.js';

// Users
router.post('/addUser', createUser);

// Auth
router.post('/auth', auth);

export default router;