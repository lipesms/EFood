import RestaurantHeader from '../../components/RestaurantHeader'
import FoodsList from '../../components/FoodsList'
import Footer from '../../components/Footer'

import RestaurantBanner from '../../components/RestaurantBanner'
import Restaurant from '../../models/restaurants'
import marguerita from '../../assets/images/marguerita.png'

const restaurants: Restaurant[] = [
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita,
    type: 'food',
    to: '/restaurant'
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita,
    type: 'food',
    to: '/restaurant'
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita,
    type: 'food',
    to: '/restaurant'
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita,
    type: 'food',
    to: '/restaurant'
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita,
    type: 'food',
    to: '/restaurant'
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita,
    type: 'food',
    to: '/restaurant'
  }
]

const Restaurants = () => (
  <>
    <RestaurantHeader />
    <RestaurantBanner />
    <div className="container">
      <FoodsList restaurants={restaurants} />
    </div>
    <Footer />
  </>
)

export default Restaurants
