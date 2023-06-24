import { Layout } from '@/components/layouts'
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';

import { Pokemon, PokemonListResponse } from '@/interfaces';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { pokeApi } from '@/api';
import { getPokemonInfo, localFavorites } from '@/utils';
import { useState } from 'react';
import confetti from 'canvas-confetti';
interface Props {
    pokemon: Pokemon;

}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
    const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id))

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id)
        setIsInFavorites(!isInFavorites)

        if (!isInFavorites) {
            confetti({
                zIndex: 999,
                particleCount: 100,
                spread: 160,
                angle: -100,
                origin: {
                    x: 0.8,
                    y: 0.1,
                }
            })
        }
    }

    return (
        <Layout title={`${pokemon.id} | ${pokemon.name}`}>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
                                alt={pokemon.name}
                                width='100%'
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>

                        <Card.Header className="card-header-fav" css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text h1 transform='capitalize'>{pokemon.name}</Text>
                            <Button color='gradient'
                                onClick={onToggleFavorite}
                                ghost={!isInFavorites}>
                                {isInFavorites ? 'En Favoritos' : 'Guardar en favoritos'}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container display='flex' direction='row' gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>


        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')


    const pokemonNames: string[] = data.results.map(pokemon => pokemon.name)

    return {
        paths: pokemonNames.map(name => ({
            params: { name }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string }

    return {
        props: {
            pokemon: await getPokemonInfo(name)
        },
    }
}

export default PokemonByNamePage