import HomeList from '../../components/HomeList'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Restaurant from '../../models/restaurants'

import hioki from '../../assets/images/hioki_sushi.png'
import vita from '../../assets/images/doce_vita.png'

const restaurants: Restaurant[] = [
  {
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    rate: '4.9',
    image: hioki,
    infos: ['Destaque da semana', 'Japonesa'],
    type: 'restaurant',
    to: '/restaurant'
  },
  {
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rate: '4.6',
    image: vita,
    infos: ['Italiana'],
    type: 'restaurant',
    to: '/restaurant'
  },
  {
    title: 'Hioki Sushi 1',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    rate: '4.9',
    image: hioki,
    infos: ['Destaque da semana', 'Japonesa'],
    type: 'restaurant',
    to: '/restaurant'
  },
  {
    title: 'La Dolce Vita Trattoria 1',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rate: '4.6',
    image: vita,
    infos: ['Italiana'],
    type: 'restaurant',
    to: '/restaurant'
  },
  {
    title: 'Hioki Sushi 2',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    rate: '4.9',
    image: hioki,
    infos: ['Destaque da semana', 'Japonesa'],
    type: 'restaurant',
    to: '/restaurant'
  },
  {
    title: 'La Dolce Vita Trattoria 2',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rate: '4.6',
    image: vita,
    infos: ['Italiana'],
    type: 'restaurant',
    to: '/restaurant'
  }
]

const Home = () => (
  <>
    <Header />
    <div className="container">
      <HomeList restaurants={restaurants} />
    </div>
    <Footer />
  </>
)

export default Home
