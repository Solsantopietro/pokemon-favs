import { Spacer, Text, useTheme, Image, Row } from '@nextui-org/react'
import Link from 'next/link'

export const Navbar = () => {

  const { theme } = useTheme()

  return (
    <nav style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0 50px',
      backgroundColor: theme?.colors.gray100.value
    }}>

      <Link href='/'>
        <Row css={{ alignItems: 'center' }}>
          <Image width={90} alt="icono de la app = ditto" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" />
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okemon</Text>
        </Row>
      </Link>

      <Spacer css={{ flex: 1 }} />

      <Link href={'/favorites'}>
        <Text color='white'>Favoritos</Text>
      </Link>

    </nav>
  )
}
