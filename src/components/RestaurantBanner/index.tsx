import { BannerImage, BannerContainer } from './styles'

import vita from '../../assets/images/doce_vita.png'

const RestaurantBanner = () => (
  <BannerImage
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${vita})`
    }}
  >
    <BannerContainer className="container">
      <h4>Italiana</h4>
      <h2>La Dolce Vita Trattoria</h2>
    </BannerContainer>
  </BannerImage>
)

export default RestaurantBanner
