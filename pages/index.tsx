import { NextPage, GetStaticProps } from 'next'
import { Button } from '@nextui-org/react'
import { Layout } from '@/components/layouts'
import { pokeApi } from '@/api'



const HomePage: NextPage = (props) => {
  console.log(props)
  return (
    <Layout title='Pokemon App | Home'>
    <ul>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
    </ul>
    </Layout>

  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {
  const resp = await pokeApi.get('/pokemon?limit=151');
 console.log({resp})

  return {
    props: {},
  }
}

export default HomePage