import { useParams } from 'react-router-dom'

import RestaurantHeader from '../../components/RestaurantHeader'
import RestaurantBanner from '../../components/RestaurantBanner'
import FoodsList from '../../components/FoodsList'
import Footer from '../../components/Footer'

import Cart from '../../components/Cart'

import { useGetMenuQuery } from '../../services/api'

const Restaurants = () => {
  const { id } = useParams()
  const { data } = useGetMenuQuery(id!)
  if (data) {
    return (
      <>
        <RestaurantHeader />
        <RestaurantBanner
          image={data.capa}
          name={data.titulo}
          type={data.tipo}
        />
        <div className="container">
          <FoodsList restaurant={data} type="button" />
        </div>
        <Cart />
        <Footer />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Restaurants
