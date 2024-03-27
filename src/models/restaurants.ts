class Restaurant {
  title: string
  description: string
  image: string
  type: 'restaurant' | 'food'
  rate?: string
  infos?: string[]
  to?: string

  constructor(
    title: string,
    description: string,
    rate: string,
    image: string,
    type: 'restaurant' | 'food',
    infos?: string[],
    to?: string
  ) {
    this.title = title
    this.description = description
    this.rate = rate
    this.image = image
    this.infos = infos
    this.type = type
    this.to = to
  }
}

export default Restaurant
