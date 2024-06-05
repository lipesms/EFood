import HomeList from '../../components/HomeList'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { useGetRestaurantsQuery } from '../../services/api'
import Loader from '../../components/Loader'

export interface MenuItem {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao?: string
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
  const { data } = useGetRestaurantsQuery()

  if (data) {
    return (
      <>
        <Header />
        <div className="container">
          <HomeList restaurants={data} type="link" />
        </div>
        <Footer />
      </>
    )
  }
  return <Loader />
}

export default Home
