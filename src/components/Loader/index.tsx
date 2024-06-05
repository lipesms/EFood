import { PulseLoader } from 'react-spinners'
import { Container } from './styles'
import { colors } from '../../styles'

const Loader = () => (
  <Container>
    <PulseLoader color={colors.lightOrange} />
  </Container>
)

export default Loader
