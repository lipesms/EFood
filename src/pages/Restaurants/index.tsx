import RestaurantsList from '../../components/RestaurantsList'

import RestaurantHeader from '../../components/RestaurantHeader'
import Restaurant from '../../models/restaurants'
import hioki from '../../assets/images/hioki_sushi.png'

const restaurants: Restaurant[] = [
  {
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    rate: '4.9',
    image: hioki,
    type: 'food',
    to: '/restaurant'
  }
]

const Restaurants = () => (
  <>
    <RestaurantHeader />
    <div className="container">
      <RestaurantsList restaurants={restaurants} />
    </div>
  </>
)

export default Restaurants
