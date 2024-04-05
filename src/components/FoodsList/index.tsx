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

type MenuItems = {
  nome: string
  infos: string
  porcoes: string
  url: string
  isVisible: boolean
  price: number
}

type Props = {
  restaurant: Restaurant
  type: 'button' | 'link'
  onClick?: () => void
}

const formatePrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const HomeList = ({ restaurant, type }: Props) => {
  const [modal, setModal] = useState<MenuItems>({
    nome: '',
    infos: '',
    porcoes: '',
    url: '',
    isVisible: false,
    price: 0
  })

  const closeModal = () =>
    setModal({
      nome: '',
      infos: '',
      isVisible: false,
      porcoes: '',
      url: '',
      price: 0
    })
  console.log(restaurant)

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
                nome: item.nome,
                infos: item.descricao,
                isVisible: true,
                porcoes: item.porcao,
                url: item.foto,
                price: item.preco
              })
            }
          />
        ))}
      </List>

      <Modal className={`${modal.isVisible && 'visible'}`}>
        <ModalContent className="container">
          <Image src={modal.url} alt="comida 1 do restaurante tal" />
          <div>
            <h3>{modal.nome}</h3>
            <p>{modal.infos}</p>
            <p>Serve de {modal.porcoes}</p>
            <AddCartButton type="button">
              Adicionar ao carrinho - {formatePrice(modal.price)}
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
