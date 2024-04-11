import { useDispatch } from 'react-redux'

import {
  Container,
  List,
  Modal,
  ModalContent,
  AddCartButton,
  CloseButton,
  Image
} from './styles'

import { Restaurant } from '../../pages/Home'

import Card from '../Card'

import closeButton from '../../assets/images/fechar.png'
import { useState } from 'react'

import { MenuItem } from '../../pages/Home'

import { open, add } from '../../store/reducers/cart'

interface ModalProps extends MenuItem {
  isVisible: boolean
}

type Props = {
  restaurant: Restaurant
  type: 'button' | 'link'
  onClick?: () => void
}

export const formatePrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
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
    dispatch(open())
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
    <Container className="container">
      <List>
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
      </List>

      <Modal className={`${modal.isVisible && 'visible'}`}>
        <ModalContent className="container">
          <Image src={modal.foto} alt="comida 1 do restaurante tal" />
          <div>
            <h3>{modal.nome}</h3>
            <p>{modal.descricao}</p>
            <p>Serve de {modal.porcao}</p>
            <AddCartButton
              type="button"
              onClick={() => {
                addToCart()
                closeModal()
              }}
            >
              Adicionar ao carrinho - {formatePrice(modal.preco)}
            </AddCartButton>
          </div>
          <CloseButton
            src={closeButton}
            alt="Clique para fechar"
            onClick={closeModal}
          />
        </ModalContent>
        <div className={`overlay`} onClick={closeModal}></div>
      </Modal>
    </Container>
  )
}

export default HomeList
