function SearchBar({ search, onSearchChange }) {
  return (
    <div className="border-b p-3">
      <input
        placeholder="Search Projects"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded border p-2"
      />
    </div>
  );
}

export default SearchBar;