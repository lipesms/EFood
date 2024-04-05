import { Container, List } from './styles'

import { Restaurant } from '../../pages/Home/'

import Card from '../Card'

export type Props = {
  type: 'button' | 'link'
  restaurants: Restaurant[]
}

const HomeList = ({ restaurants, type }: Props) => {
  const catchRestaurantTag = (restaurant: Restaurant) => {
    const tag = []
    if (restaurant.destacado) {
      tag.push('Destaque da semana')
    }

    if (restaurant.tipo) {
      tag.push(restaurant.tipo)
    }

    return tag
  }

  return (
    <Container className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            title={restaurant.titulo}
            description={restaurant.descricao}
            image={restaurant.capa}
            rate={restaurant.avaliacao}
            infos={catchRestaurantTag(restaurant)}
            to={restaurant.id}
            type={type}
          />
        ))}
      </List>
    </Container>
  )
}

export default HomeList
