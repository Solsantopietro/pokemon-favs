import { Button } from '@nextui-org/react'
import { NextPage } from 'next'
import { Layout } from '@/components/layouts'



const HomePage: NextPage = () => {
  return (
    <Layout title='Pokemon App | Home'>
      <Button color='gradient'>Hello world!</Button>
    </Layout>
  )
}

export default HomePage