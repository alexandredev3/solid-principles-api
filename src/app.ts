import express from 'express';
import { routes } from './routes';

class App {
  server = express();

  constructor() {
    this.server = express();

    this.middlwares();
    this.routes();
  }

  middlwares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;