import HomeList from '../../components/HomeList'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { useEffect, useState } from 'react'

export type MenuItem = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <HomeList restaurants={restaurants} type="link" />
      </div>
      <Footer />
    </>
  )
}

export default Home
