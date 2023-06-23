import Head from "next/head"
import { FC } from "react"
import { Navbar } from '../ui/Navbar'

interface Props {
    children?: JSX.Element | JSX.Element[];
    title?: string | JSX.Element[];
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name='author' content='Sol Santopietro' />
                <meta name='description' content='Informacion sobre el pokemon X' />
                <meta name='keywords' content='x, pokemon, pokedex' />

                <meta property="og:title" content={`Informacion sobre el pokemon ${title} `} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <Navbar />
            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
