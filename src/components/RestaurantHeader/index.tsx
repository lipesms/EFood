import { Link } from 'react-router-dom'

import { Header } from './styles'

import logo from '../../assets/images/logo.png'
import vector from '../../assets/images/Vector.png'

const RestaurantHeader = () => (
  <>
    <Header style={{ backgroundImage: `url(${vector})` }}>
      <div className="container">
        <Link to="/">Restaurantes</Link>
        <img src={logo} alt="Logo EFood" />
        <p>0 produto(s) adicionados no carrinho</p>
      </div>
    </Header>
  </>
)

export default RestaurantHeader
