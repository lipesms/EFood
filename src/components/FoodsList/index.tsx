import { useDispatch } from 'react-redux'

import * as S from './styles'

import { Restaurant } from '../../pages/Home'

import Card from '../Card'

import closeIcon from '../../assets/images/fechar.png'
import { useState } from 'react'

import { MenuItem } from '../../pages/Home'

import { openCart, add } from '../../store/reducers/cart'
import { formatePrice } from '../utils'

interface ModalProps extends MenuItem {
  isVisible: boolean
}

type Props = {
  restaurant: Restaurant
  type: 'button' | 'link'
  onClick?: () => void
}

const HomeList = ({ restaurant, type }: Props) => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState<ModalProps>({
    id: 0,
    nome: '',
    descricao: '',
    isVisible: false,
    porcao: '',
    foto: '',
    preco: 0
  })

  const addToCart = () => {
    dispatch(
      add({
        id: modal.id,
        foto: modal.foto,
        preco: modal.preco,
        nome: modal.nome,
        descricao: modal.descricao,
        porcao: modal.porcao
      })
    )
    dispatch(openCart())
  }

  const closeModal = () =>
    setModal({
      id: 0,
      nome: '',
      descricao: '',
      isVisible: false,
      porcao: '',
      foto: '',
      preco: 0
    })

  return (
    <S.Container className="container">
      <S.List>
        {restaurant.cardapio.map((item) => (
          <Card
            key={item.id}
            title={item.nome}
            description={item.descricao}
            image={item.foto}
            infos={[]}
            type={type}
            onClick={() =>
              setModal({
                id: item.id,
                nome: item.nome,
                descricao: item.descricao,
                isVisible: true,
                porcao: item.porcao!,
                foto: item.foto,
                preco: item.preco!
              })
            }
          />
        ))}
      </S.List>

      <S.Modal className={`${modal.isVisible && 'visible'}`}>
        <S.ModalContent className="container">
          <S.Image src={modal.foto} alt="comida 1 do restaurante tal" />
          <div>
            <h3>{modal.nome}</h3>
            <p>{modal.descricao}</p>
            <p>Serve de {modal.porcao}</p>
            <S.AddCartButton
              type="button"
              onClick={() => {
                addToCart()
                closeModal()
              }}
            >
              Adicionar ao carrinho - {formatePrice(modal.preco)}
            </S.AddCartButton>
          </div>
          <S.CloseButton
            src={closeIcon}
            alt="Clique para fechar"
            onClick={closeModal}
          />
        </S.ModalContent>
        <div className={`overlay`} onClick={closeModal}></div>
      </S.Modal>
    </S.Container>
  )
}

export default HomeList
