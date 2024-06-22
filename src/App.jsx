import { useEffect, useState } from 'react'
import './assets/App.css'
import SearchBar from './components/searchBar'
import QuotesListe from './components/quotesList'
import getQuotes from './api'
import Spinner from './components/spinner'

function App() {
  const [filter, setFilter] = useState()
  const [quotes, setQuotes] = useState([])
  const [quotesSorona, setQuotesSorona] = useState([])
  const loading = quotes === undefined

  useEffect(() => {
    getQuotes().then(result => {
      setQuotes(result)
      setQuotesSorona(result)
    })

  }, [])

  const handleFilter = () => {
    //e.preventDefault()
    if (filter == '') {
      setQuotesSorona(quotes)
    } else {
      let filtrer = quotes.filter((quote) => {
        let quo = quote.q.toLowerCase()
        let fil = filter.toLowerCase()
        if (quo.includes(fil)) {
          return quote
        }
      })
      setQuotesSorona(filtrer)
    }
  }
  useEffect(() => {
    handleFilter()


  }, [filter])

  return (
    <>
      <h1>Quotes</h1>
      <SearchBar disabled={loading} value={filter} onChange={setFilter} onClick={handleFilter} />
      {
        quotesSorona.length > 0 ? < QuotesListe quotes={quotesSorona} />: <Spinner/>
      }
    </>
  )
}
export default App
