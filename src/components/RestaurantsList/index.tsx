import { Container, List } from './styles'

import Restaurant from '../../models/restaurants'

import Card from '../Card'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <Container className="container">
    <List>
      {restaurants.map((restaurant) => (
        <Card
          key={restaurant.title}
          title={restaurant.title}
          description={restaurant.description}
          image={restaurant.image}
          rate={restaurant.rate}
          infos={restaurant.infos != undefined ? restaurant.infos : []}
          to={restaurant.to}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantsList
