import { CardContainer, TextContainer, TitleReview, Infos } from './styles'

import Button from '../Button'

import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'

export type Props = {
  image: string
  title: string
  rate?: number
  description: string
  infos: string[]
  to?: number
  type: 'button' | 'link'
  onClick?: () => void
}

const Card = ({
  image,
  title,
  rate,
  description,
  infos,
  type,
  to,
  onClick
}: Props) => {
  const getCardDescription = (desc: string) => {
    if (desc.length > 122) {
      return desc.slice(0, 104).concat('...')
    }
  }
  return (
    <CardContainer type={type} onClick={onClick}>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <TextContainer type={type}>
        <TitleReview type={type}>
          <h3>{title}</h3>
          {(() => {
            if (rate) {
              return (
                <>
                  <div>
                    <p>{rate}</p>
                    <img src={estrela} alt="" />
                  </div>
                </>
              )
            }
          })()}
        </TitleReview>
        <p>{getCardDescription(description)}</p>
        <Button type={type} to={`/restaurant/${to}`}>
          {type === 'link' ? 'Saiba mais' : 'Adicionar ao carrinho'}
        </Button>
      </TextContainer>
    </CardContainer>
  )
}

export default Card
