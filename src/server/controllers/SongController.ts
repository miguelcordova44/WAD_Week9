import type { Request, Response } from 'express';
import { SongDao } from '../dao/SongDao.js';

const songDao = new SongDao();

export class SongController {
  getAll(_request: Request, response: Response): void {
    // TODO Task 5: ask the DAO for songs, then decide the HTTP response.
    response.json(songDao.getAll());
  }

  findByArtist(request: Request, response: Response): void {
    // TODO Task 6: validate request.params.artist before calling the DAO.
    const artist = typeof request.params.artist === 'string' ? request.params.artist : '';
    response.json(songDao.findByArtist(artist));
  }
}
