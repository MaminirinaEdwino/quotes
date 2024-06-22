export default function Citation({ quotes }) {
    return <article>
        <p>{ quotes.q}</p>
        <p>{ quotes.a}</p>
    </article>
}