import { SmallPokemon } from "@/interfaces"
import { FC } from "react"
import { Grid, Card, Text, Row } from '@nextui-org/react'
import { useRouter } from 'next/router';

interface Props {
    pokemon: SmallPokemon
}
export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${pokemon.name}`);
    }

    return (
        <Grid xs={12} sm={3} md={2} xl={1} key={pokemon.id}>
            <Card onClick={onClick} isHoverable isPressable>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image src={pokemon.img} width='100%' height={140} />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text>{pokemon.name}</Text>
                        <Text># {pokemon.id}</Text>
                    </Row>
                </Card.Footer>
            </Card>

        </Grid>
    )
}
