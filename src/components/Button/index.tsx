type Props = {
  tipo: 'link' | 'button'
  to?: string
  onClick: () => void
  chieldren: string
}

const Button = ({ tipo, onClick, chieldren }: Props) => {
  if (tipo === 'link') {
    return (
      <a href="#" onClick={onClick}>
        {chieldren}
      </a>
    )
  }
  return <button onClick={onClick}>{chieldren}</button>
}

export default Button
