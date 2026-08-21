interface SearchBarProps { value: string; onChange: (value: string) => void }

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="search">
      <span aria-hidden="true">⌕</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by artist…"
        aria-label="Search songs by artist"
      />
      {value && <button onClick={() => onChange('')} aria-label="Clear search">×</button>}
    </label>
  );
}
