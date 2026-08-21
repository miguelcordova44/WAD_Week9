import { Router } from 'express';
import { SongController } from '../controllers/SongController.js';

const songRouter = Router();
const songController = new SongController();

// TODO Task 4: connect GET / to songController.getAll.
songRouter.get('/', (request, response) => songController.getAll(request, response));

// TODO Task 6: connect GET /artist/:artist to songController.findByArtist.
songRouter.get('/artist/:artist', (request, response) => songController.findByArtist(request, response));

export default songRouter;
