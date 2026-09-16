import { useEffect, useState } from 'react';
import type { Song } from '../shared/Song';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SongList from './components/SongList';
import RequestJourney from './components/RequestJourney';

const fallbackSongs: Song[] = [
  { id: 1, title: 'Wonderwall', artist: 'Oasis', price: 0.99, quantity_in_stock: 14 },
  { id: 2, title: 'Hello', artist: 'Adele', price: 1.19, quantity_in_stock: 18 },
  { id: 3, title: 'Shape of You', artist: 'Ed Sheeran', price: 1.29, quantity_in_stock: 20 },
  { id: 4, title: 'Blinding Lights', artist: 'The Weeknd', price: 1.29, quantity_in_stock: 16 },
];

export default function App() {
  const [songs, setSongs] = useState<Song[]>(fallbackSongs);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('Connecting to the HitTastic API…');

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const path = query.trim()
        ? `/api/songs/artist/${encodeURIComponent(query.trim())}`
        : '/api/songs';

      fetch(path)
        .then((response) => response.json() as Promise<Song[]>)
        .then((data) => {
          setSongs(data);
          setStatus(`${data.length} songs returned as JSON`);
        })
        .catch(() => setStatus('Could not reach the HitTastic API'));
    }, 300);

    return () => window.clearTimeout(timer);
  }, [query]);

  const visibleSongs = songs;

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <p className="eyebrow">QHO540 · WEEK 9</p>
          <h1>Find your next favourite track.</h1>
          <p className="lede">A working music store, ready to be refactored into professional layers.</p>
          <SearchBar value={query} onChange={setQuery} />
          <p className="status" role="status"><span />{status}</p>
        </section>
        <SongList songs={visibleSongs} />
        <RequestJourney />
      </main>
      <footer>HitTastic Music Store · Architecture sounds better in layers.</footer>
    </>
  );
}
