import { Router } from 'express';
import { SongController } from '../controllers/SongController.js';

const songRouter = Router();
const songController = new SongController();

// TODO Task 4: connect GET / to songController.getAll.
songRouter.get('/', songController.getAll);

// TODO Task 6: connect GET /artist/:artist to songController.findByArtist.
songRouter.get('/artist/:artist', songController.findByArtist);

export default songRouter;
