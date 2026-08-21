import type { Song } from '../../shared/Song';
import SongCard from './SongCard';

export default function SongList({ songs }: { songs: Song[] }) {
  return (
    <section className="catalogue" id="catalogue">
      <div className="section-heading"><div><p className="eyebrow">THE CATALOGUE</p><h2>Songs on the shelf</h2></div><span>{songs.length} results</span></div>
      {songs.length > 0
        ? <div className="song-grid">{songs.map((song) => <SongCard key={song.id} song={song} />)}</div>
        : <p className="empty">No artists match that search. Try “Oasis” or “Adele”.</p>}
    </section>
  );
}
