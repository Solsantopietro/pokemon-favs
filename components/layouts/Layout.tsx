import Head from "next/head"
import { FC } from "react"
import { Navbar } from '../ui/Navbar'

interface Props {
    children?: JSX.Element | JSX.Element[];
    title?: string | JSX.Element[];
}

export const Layout: FC<Props> = ({ children, title}) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name='author' content='Sol Santopietro' />
                <meta name='description' content='Informacion sobre el pokemon X' />
                <meta name='keywords' content='x, pokemon, pokedex' />
            </Head>
            <Navbar/>
            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
