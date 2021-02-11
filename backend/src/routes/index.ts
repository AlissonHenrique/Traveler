import { Router } from 'express';
import UserController from '../controllers/UserController';
import SessionController from '../controllers/SessionController';

const userController = new UserController();
const sessionController = new SessionController();
const routes = Router();

routes.post('/users', userController.create);
routes.post('/session', sessionController.create);

export default routes;
