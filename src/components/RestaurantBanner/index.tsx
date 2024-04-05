import { BannerImage, BannerContainer } from './styles'

type Props = {
  image: string
  type: string
  name: string
}

const RestaurantBanner = ({ image, type, name }: Props) => (
  <BannerImage
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`
    }}
  >
    <BannerContainer className="container">
      <h4>{type}</h4>
      <h2>{name}</h2>
    </BannerContainer>
  </BannerImage>
)

export default RestaurantBanner
