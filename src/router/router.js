import express from 'express';
const router = express.Router();

import { createUser } from '../controllers/user.controller.js';

// Users
router.post('/addUser', createUser);

export default router;