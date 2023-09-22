import express from 'express';
const router = express.Router();

import { createUser } from '../controllers/user.controller.js';
import { auth } from '../controllers/auth.controllers.js';
import { createMessage, getAllMessages } from '../controllers/message.controllers.js';
import verifyToken from '../utils/verify.token.js';

// User Post
router.post('/addUser', createUser);

// Auth Post
router.post('/auth', auth);

// Message Post
router.post('/addMessage', verifyToken, createMessage);

// Message Get
router.get('/messages', verifyToken, getAllMessages);

export default router;