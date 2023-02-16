import { Router } from 'express';
import {
	register,
	login,
	getMe,
	getAllUsers,
	removeUser,
	updateUser,
} from '../controllers/auth.js';
import { checkAuth } from '../utils/checkAuth.js';

const router = new Router();

// Register
// http://localhost:3002/api/auth/register
router.post('/register', register);

// Login
// http://localhost:3002/api/auth/login
router.post('/login', login);

// Get Me
// http://localhost:3002/api/auth/me
router.get('/me', checkAuth, getMe);

// Get allUser
// http://localhost:3002/api/auth/register
router.get('/register', checkAuth, getAllUsers);

// remove user
// http://localhost:3002/api/auth/register/
router.post('/register/removeUser', removeUser);

// update user
// http://localhost:3002/api/auth/register/
router.post('/register/updateUser', updateUser);

export default router;
