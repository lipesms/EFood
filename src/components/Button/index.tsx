import { RestaurantLink, FoodLink } from './styles'

type Props = {
  type: 'restaurant' | 'food'
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, onClick, children, to }: Props) => {
  if (type === 'restaurant') {
    return (
      <RestaurantLink to={to as string} onClick={onClick}>
        {children}
      </RestaurantLink>
    )
  }
  return <FoodLink onClick={onClick}>{children}</FoodLink>
}

export default Button
