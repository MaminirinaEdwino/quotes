export default function SearchBar({disabled, value, onChange}){
    return <form id="searchBar">
        <input type="text" disabled={disabled} value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search . . ."/>
        
    </form>
}