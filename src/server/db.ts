import Database from 'better-sqlite3';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDirectory = dirname(fileURLToPath(import.meta.url));
const databasePath = resolve(serverDirectory, '../../data/music.db');
mkdirSync(dirname(databasePath), { recursive: true });

// One shared connection for the whole application.
const db = new Database(databasePath);

db.exec(`
  CREATE TABLE IF NOT EXISTS songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    price REAL NOT NULL,
    quantity_in_stock INTEGER NOT NULL
  )
`);

const songCount = db.prepare('SELECT COUNT(*) AS count FROM songs').get() as { count: number };
if (songCount.count === 0) {
  const insert = db.prepare(`
    INSERT INTO songs (title, artist, price, quantity_in_stock)
    VALUES (@title, @artist, @price, @quantity_in_stock)
  `);
  const seedSongs = [
    { title: 'Wonderwall', artist: 'Oasis', price: 0.99, quantity_in_stock: 14 },
    { title: "Don't Look Back in Anger", artist: 'Oasis', price: 1.09, quantity_in_stock: 9 },
    { title: 'Hello', artist: 'Adele', price: 1.19, quantity_in_stock: 18 },
    { title: 'Rolling in the Deep', artist: 'Adele', price: 0.99, quantity_in_stock: 12 },
    { title: 'Shape of You', artist: 'Ed Sheeran', price: 1.29, quantity_in_stock: 20 },
    { title: 'Blinding Lights', artist: 'The Weeknd', price: 1.29, quantity_in_stock: 16 },
    { title: 'Counting Stars', artist: 'OneRepublic', price: 0.89, quantity_in_stock: 7 },
    { title: 'Save Your Tears', artist: 'The Weeknd', price: 1.09, quantity_in_stock: 11 }
  ];
  const seed = db.transaction(() => seedSongs.forEach((song) => insert.run(song)));
  seed();
}

export default db;
