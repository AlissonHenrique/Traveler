import { Router } from 'express';
import multer from 'multer';
import UserController from '../controllers/UserController';
import SessionController from '../controllers/SessionController';
import CategoriesController from '../controllers/CategoriesController';
import CitiesController from '../controllers/CitiesController';
import AddressesController from '../controllers/AddressesController';
import PlacesController from '../controllers/PlacesController';
import DepositionController from '../controllers/DepositionsController';
import uploadConfig from '../config/upload';

const upload = multer(uploadConfig);

const userController = new UserController();
const sessionController = new SessionController();
const categoriesController = new CategoriesController();
const citiesController = new CitiesController();
const addressesController = new AddressesController();
const placesController = new PlacesController();
const depositionController = new DepositionController();

const routes = Router();

routes.post('/users', userController.create);
routes.post('/session', sessionController.create);

routes.post('/deposition', depositionController.create);

routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);
routes.post('/categories', categoriesController.create);
routes.put('/categories/:id', categoriesController.update);

routes.post('/cities', upload.single('image'), citiesController.create);
routes.put('/cities/:id', upload.single('image'), citiesController.update);
routes.delete('/cities/:id', citiesController.delete);

routes.post('/addresses', addressesController.create);
routes.put('/addresses/:id', addressesController.update);
routes.delete('/addresses/:id', addressesController.delete);

routes.post('/places', upload.single('image'), placesController.create);
routes.put('/places/:id', upload.single('image'), placesController.create);
routes.delete('/places/:id', placesController.delete);
export default routes;
