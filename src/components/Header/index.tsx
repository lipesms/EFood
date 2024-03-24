import { HeaderBG, HeaderContainer, Image, Title } from './styles'

import logo from '../../assets/images/logo.png'
import vector from '../../assets/images/Vector.png'

const Header = () => (
  <HeaderBG style={{ backgroundImage: `url(${vector})` }}>
    <HeaderContainer className="container">
      <Image src={logo} alt="Logo EFood" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </HeaderContainer>
  </HeaderBG>
)

export default Header
