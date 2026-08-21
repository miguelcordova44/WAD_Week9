import type { Song } from '../../shared/Song.js';
import db from '../db.js';

export class SongDao {
  getAll(): Song[] {
    // TODO Task 5: replace the safe starter query with the prepared statement from README.
    return db.prepare('SELECT * FROM songs ORDER BY artist, title').all() as Song[];
  }

  findByArtist(artist: string): Song[] {
    // TODO Task 6: use a named parameter and a case-insensitive partial match.
    return db.prepare('SELECT * FROM songs WHERE artist LIKE ? ORDER BY title').all(`%${artist}%`) as Song[];
  }
}
