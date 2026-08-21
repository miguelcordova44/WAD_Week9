import { Router } from 'express';
import { UserController } from '../controllers/UserController.js';

const userRouter = Router();
const userController = new UserController();

// A small, working Week 8-style login example for the extension activity.
userRouter.post('/login', (request, response) => userController.login(request, response));

export default userRouter;
