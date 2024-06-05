import { MenuItem } from '../../pages/Home'

export const getTotalPrice = (items: MenuItem[]) => {
  return items.reduce((acc, item) => {
    return (acc += item.preco!)
  }, 0)
}

export const formatePrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
