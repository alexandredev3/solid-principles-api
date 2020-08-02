import { Router } from 'express';
import { createUserController } from '../useCase/CreateUser';

const routes = Router();

routes.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

export { routes };