export function SearchForm({ value, setValue }) {
  return (
    <input
      type="text"
      value={value}
      onChange={ e => setValue(e.target.value)}
    />
  )
}