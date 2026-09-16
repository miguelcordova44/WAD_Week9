import type { Song } from '../../shared/Song.js';
import db from '../db.js';

export class SongDao {
  getAll(): Song[] {
    // TODO Task 5: replace the safe starter query with the prepared statement from README.
    const statement = db.prepare(`
    SELECT id, title, artist, price, quantity_in_stock
    FROM songs
    ORDER BY artist, title
  `);
    return statement.all() as Song[];
  }

  findByArtist(artist: string): Song[] {
    // TODO Task 6: use a named parameter and a case-insensitive partial match.
    const statement = db.prepare(`
    SELECT id, title, artist, price, quantity_in_stock
    FROM songs
    WHERE LOWER(artist) LIKE LOWER(@artist)
    ORDER BY title
  `);
    return statement.all({ artist: `%${artist}%` }) as Song[];
  }
}
