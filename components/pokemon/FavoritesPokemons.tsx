import { Grid } from '@nextui-org/react'
import { FC } from 'react'
import FavoriteCardPokemon from './FavoriteCardPokemon'

interface Props {
    pokemons: number[],
}

const FavoritesPokemons:FC<Props> = ({ pokemons }) => (

    <Grid.Container gap={2} direction='row' justify='flex-start'>
        {pokemons.map(id => (
            <FavoriteCardPokemon key={id} pokemonId={id} />
        ))}
    </Grid.Container>
)

export default FavoritesPokemons