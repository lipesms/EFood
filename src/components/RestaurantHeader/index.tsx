import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Header } from './styles'

import logo from '../../assets/images/logo.png'
import vector from '../../assets/images/Vector.png'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useEffect, useState } from 'react'

const RestaurantHeader = () => {
  const { innerWidth: width } = window
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    if (width <= 768) {
      setMobile(true)
    }
  }, [width])
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  console.log(mobile)

  return (
    <>
      <Header style={{ backgroundImage: `url(${vector})` }}>
        <div className="container">
          <Link to="/">Restaurantes</Link>
          <img src={logo} alt="Logo EFood" />
          <p onClick={() => dispatch(open())}>
            {mobile
              ? 'Carrinho'
              : `${items.length} produto(s) adicionados no carrinho`}
          </p>
        </div>
      </Header>
    </>
  )
}

export default RestaurantHeader
