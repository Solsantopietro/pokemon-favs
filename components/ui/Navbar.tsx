import { Spacer, Text, useTheme, Image } from '@nextui-org/react'
import Link from 'next/link'

export const Navbar = () => {

  const { theme } = useTheme()
// console.log(theme.colors.gray900.value )
  return (
    <nav style={{ display: 'flex', 
    width: '100%', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    padding: '0 10px', 
    backgroundColor: theme?.colors.gray100.value 
    }}>
      {/* <Link></Link>
        <Link></Link>
        <Link></Link> */}

        <Image width={90} alt="icono de la app = ditto" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"/>

        <Text color='white' h2>P</Text>
        <Text color='white' h3>okemon</Text>
        <Spacer css={{ flex: 1}}/>
        <Text color='white'>Favoritos</Text>


    </nav>
  )
}
