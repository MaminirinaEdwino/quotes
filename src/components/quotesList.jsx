import Citation from "./quotes";

export default function QuotesListe({quotes}) {
    
    return <section id="quotesListes">
        {quotes.map((quote, i) => <Citation key={i} quotes={quote}/>)}
    </section>
}