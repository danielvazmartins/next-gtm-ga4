import Head from "next/head"
import { useState } from "react"

declare const window: Window & { dataLayer: Record<string, unknown>[]; };

const Blog = () => {
    const [term, setTerm] = useState('')

    const sendPush = () => {
        console.log(term)
        window.dataLayer.push({
            event: 'search',
            term
        })
    }

    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <h1>Blog</h1>
            <input type="text" value={term} onChange={e => setTerm(e.target.value)}></input>
            <button onClick={sendPush}>Buscar</button>
        </>
    )
}

export default Blog