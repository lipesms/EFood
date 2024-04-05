import { RestaurantLink, FoodLink } from './styles'

type Props = {
  type: 'button' | 'link'
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, onClick, children, to }: Props) => {
  if (type === 'link') {
    return (
      <RestaurantLink to={to as string} onClick={onClick}>
        {children}
      </RestaurantLink>
    )
  }
  return <FoodLink onClick={onClick}>{children}</FoodLink>
}

export default Button
