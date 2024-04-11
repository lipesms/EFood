import { useDispatch, useSelector } from 'react-redux'

import { CartContainer, Overlay, SideBar, CartItem, TotalPrice } from './styles'

import Button from '../Button'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import { formatePrice } from '../FoodsList'

const Cart = () => {
  const dispatch = useDispatch()

  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

  const getTotalPrice = () => {
    return items.reduce((acc, item) => {
      return (acc += item.preco!)
    }, 0)
  }

  const closeCart = () => {
    dispatch(close())
  }

  const removeFromCart = (id = 0) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formatePrice(item.preco)}</p>
                <button onClick={() => removeFromCart(item.id)} />
              </div>
            </CartItem>
          ))}
        </ul>
        <TotalPrice>
          Valor total
          <span>{formatePrice(getTotalPrice())}</span>
        </TotalPrice>
        <Button type="button">Containuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
