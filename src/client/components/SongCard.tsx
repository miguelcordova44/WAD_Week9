import type { Song } from '../../shared/Song';

const colours = ['coral', 'violet', 'blue', 'mint', 'gold'];

export default function SongCard({ song }: { song: Song }) {
  const initials = song.artist.split(' ').map((word) => word[0]).join('').slice(0, 2);
  return (
    <article className="song-card">
      <div className={`cover ${colours[song.id % colours.length]}`}>
        <span>HIT<br />TASTIC</span><strong>{initials}</strong>
      </div>
      <div className="song-info">
        <p className="artist">{song.artist}</p>
        <h3>{song.title}</h3>
        <div className="song-meta">
          <strong>£{song.price.toFixed(2)}</strong>
          <span>{song.quantity_in_stock} in stock</span>
        </div>
      </div>
    </article>
  );
}
