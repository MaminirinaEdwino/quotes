export default function SearchBar({disabled, value, onChange, onClick}){
    return <form id="searchBar">
        <input type="text" disabled={disabled} value={value} onChange={(e) => onChange(e.target.value)}/>
        <button onClick={onClick}>Search</button>
    </form>
}