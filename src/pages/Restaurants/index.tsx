import { useParams } from 'react-router-dom'

import RestaurantHeader from '../../components/RestaurantHeader'
import FoodsList from '../../components/FoodsList'
import Footer from '../../components/Footer'

import RestaurantBanner from '../../components/RestaurantBanner'
import { useEffect, useState } from 'react'
import { Restaurant } from '../Home'

const Restaurants = () => {
  const { id } = useParams()
  const [menu, setMenu] = useState<Restaurant>({
    id: 0,
    titulo: '',
    destacado: false,
    tipo: '',
    avaliacao: 5.0,
    descricao: '',
    capa: '',
    cardapio: []
  })

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setMenu(res))
  }, [id])

  return (
    <>
      <RestaurantHeader />
      <RestaurantBanner image={menu.capa} name={menu.titulo} type={menu.tipo} />
      <div className="container">
        <FoodsList restaurant={menu} type="button" />
      </div>
      <Footer />
    </>
  )
}

export default Restaurants
