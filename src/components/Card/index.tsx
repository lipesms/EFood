import { CardContainer, TextContainer, TitleReview, Infos } from './styles'

import Button from '../Button'

import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'

export type Props = {
  image: string
  title: string
  rate: string
  description: string
  infos: string[]
  to?: string
  type: 'restaurant' | 'food'
}

const Card = ({ image, title, rate, description, infos, to, type }: Props) => (
  <CardContainer>
    <img src={image} alt="Hioki Sushi" />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <TextContainer>
      <TitleReview>
        <h3>{title}</h3>
        <div>
          <p>{rate}</p>
          <img src={estrela} alt="Estrela" />
        </div>
      </TitleReview>
      <p>{description}</p>
      <Button type={type} to={to as string}>
        Saiba mais
      </Button>
    </TextContainer>
  </CardContainer>
)

export default Card
