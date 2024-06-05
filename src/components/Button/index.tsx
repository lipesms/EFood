import { RestaurantLink, FoodLink } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  to?: string
  onClick?: () => void
  children: string
  disable?: boolean
}

const Button = ({ type, onClick, children, to, disable }: Props) => {
  if (type === 'link') {
    return (
      <RestaurantLink to={to as string} onClick={onClick}>
        {children}
      </RestaurantLink>
    )
  }
  return (
    <FoodLink onClick={onClick} disabled={disable}>
      {children}
    </FoodLink>
  )
}

export default Button
