import { Container, List } from './styles'

import Restaurant from '../../models/restaurants'

import Card from '../Card'

export type Props = {
  restaurants: Restaurant[]
}

const HomeList = ({ restaurants }: Props) => (
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
          type={restaurant.type}
        />
      ))}
    </List>
  </Container>
)

export default HomeList
