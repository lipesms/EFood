import { useDispatch, useSelector } from 'react-redux'

import { Header, RestaurantsLink } from './styles'

import logo from '../../assets/images/logo.png'
import vector from '../../assets/images/Vector.png'

import { openCart } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const RestaurantHeader = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <>
      <Header style={{ backgroundImage: `url(${vector})` }}>
        <div className="container">
          <RestaurantsLink to="/">Restaurantes</RestaurantsLink>
          <img src={logo} alt="Logo EFood" />
          <p onClick={() => dispatch(openCart())}>
            <span>{items.length} produto(s) adicionados no </span>Carrinho
          </p>
        </div>
      </Header>
    </>
  )
}

export default RestaurantHeader
