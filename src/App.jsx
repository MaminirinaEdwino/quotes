import { useEffect, useState } from 'react'
import './assets/App.css'
import SearchBar from './components/searchBar'
import QuotesListe from './components/quotesList'
import getQuotes from './api'

function App() {
  const [filter, setFilter] = useState()
  const [quotes, setQuotes] = useState([])
  const loading = quotes === undefined

  useEffect(() => {
    getQuotes().then(result => setQuotes(result))

  }, [])
  let filtrer = []
  const handleFilter = (e) => {
    e.preventDefault()
    filtrer = []
    if (filter) {
      for (let index = 0; index < quotes.length; index++) {
        if (quotes[index].q.include(filter)) {
          filtrer.push(quotes[index])
        }
      }
    }
    alert(filter)
  }

  return (
    <>
      <h1>Quotes</h1>
      <SearchBar disabled={loading} value={filter} onChange={setFilter} onClick={handleFilter}/>
      {
        loading ? 'loading' : < QuotesListe quotes={quotes} />
      }
    </>
  )
}
export default App
