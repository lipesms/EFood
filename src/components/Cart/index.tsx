import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import {
  closeCart,
  closeDeliveries,
  tooglePayment,
  remove,
  resetPayment,
  openDeliveries
} from '../../store/reducers/cart'

import * as S from './styles'

import Button from '../Button'
import PaymentForm from '../PaymentForm'

import closeIcon from '../../assets/images/fechar.png'
import { formatePrice, getTotalPrice } from '../utils'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, cartIsOpen, deliverySection } = useSelector(
    (state: RootReducer) => state.cart
  )

  const close = () => {
    dispatch(closeCart())
    dispatch(closeDeliveries())
    dispatch(tooglePayment(false))
    dispatch(resetPayment())
  }

  const removeFromCart = (id = 0) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={cartIsOpen ? 'is-open' : ''}>
      <S.Overlay onClick={close} />
      {!deliverySection ? (
        <S.SideBar>
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>{formatePrice(item.preco)}</p>
                  <button onClick={() => removeFromCart(item.id)} />
                </div>
              </S.CartItem>
            ))}
          </ul>
          <S.TotalPrice>
            Valor total
            <span>{formatePrice(getTotalPrice(items))}</span>
          </S.TotalPrice>
          <Button
            type="button"
            onClick={() => dispatch(openDeliveries())}
            disable={items.length > 0 ? false : true}
          >
            Continuar com a entrega
          </Button>
          <S.closeCartButton src={closeIcon} onClick={close} />
        </S.SideBar>
      ) : (
        <S.SideBar>
          <PaymentForm items={items} />
        </S.SideBar>
      )}
    </S.CartContainer>
  )
}

export default Cart
