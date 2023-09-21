import express from 'express';
const router = express.Router();

import { createUser } from '../controllers/user.controller.js';
import { auth } from '../controllers/auth.controllers.js';
import { createMessage } from '../controllers/message.controllers.js';
import verifyToken from '../utils/verify.token.js';

// User Post
router.post('/addUser', createUser);

// Auth Post
router.post('/auth', auth);

// Message Post
router.post('/addMessage', verifyToken, createMessage);

export default router;