import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { RootReducer } from '../../store'
import {
  closeDeliveries,
  concludePayment,
  resetPayment,
  closeCart,
  tooglePayment
} from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

import Button from '../Button'
import { MenuItem } from '../../pages/Home'

type Props = {
  items: MenuItem[]
}

const PaymentForm = ({ items }: Props) => {
  const { paymentCompleted, paymentSection } = useSelector(
    (state: RootReducer) => state.cart
  )

  const [purchase, { isSuccess, data }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      fullName: '',
      adress: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      cardExpiresMonth: '',
      cardExpiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .min(8, 'O endereço precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(4, 'A cidade precisa ter pelo menos 4 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(8, 'O CEP precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'Coloque todos os 16 dígitos do cartão')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'Informe os 3 dígitos CVV')
        .required('O campo é obrigatório'),
      cardExpiresMonth: Yup.string()
        .min(2, 'Informe o mês de expiração do cartão em numeros')
        .required('O campo é obrigatório'),
      cardExpiresYear: Yup.string()
        .min(2, 'Informe o ano de expiração do cartão em numeros')
        .required('O campo é obrigatório')
    }),

    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.adress,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.cardExpiresMonth),
              year: Number(values.cardExpiresYear)
            }
          }
        }
      })
      dispatch(concludePayment())
    }
  })
  console.log(form)

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const checkFirstForm = () => {
    const firstsInputs = ['fullName', 'adress', 'city', 'cep', 'number']
    const hasError = firstsInputs.find((name) => checkInputHasError(name))

    if (hasError) return false
    return true
  }

  const close = () => {
    dispatch(closeCart())
    dispatch(closeDeliveries())
    dispatch(tooglePayment(false))
    dispatch(resetPayment())
  }

  return (
    <>
      {isSuccess && data ? (
        <div className={`${!paymentCompleted ? 'hidden' : ''}`}>
          <S.ConclusionMessage>
            <h2>Pedido realizado - {data.orderId}</h2>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </S.ConclusionMessage>
          <Button type="button" onClick={close}>
            Concluir
          </Button>
        </div>
      ) : (
        <form
          onSubmit={form.handleSubmit}
          id="formulario"
          className={`${paymentCompleted ? 'hidden' : ''}`}
        >
          {!paymentSection ? (
            <>
              <h3>Entrega</h3>
              <S.InputGroup size={100}>
                <S.LabelElement htmlFor="fullName">
                  Quem irá receber?
                </S.LabelElement>
                <S.InputElement
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('fullName') ? 'error' : ''}
                  autoFocus
                />
              </S.InputGroup>
              <S.InputGroup size={100}>
                <S.LabelElement htmlFor="adress">Endereço</S.LabelElement>
                <S.InputElement
                  type="text"
                  id="adress"
                  name="adress"
                  value={form.values.adress}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('adress') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup size={100}>
                <S.LabelElement htmlFor="city">Cidade</S.LabelElement>
                <S.InputElement
                  type="text"
                  id="city"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup size={45}>
                <S.LabelElement htmlFor="cep">CEP</S.LabelElement>
                <S.InputMasked
                  type="text"
                  id="cep"
                  name="cep"
                  value={form.values.cep}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cep') ? 'error' : ''}
                  mask="99999-99"
                />
              </S.InputGroup>
              <S.InputGroup size={45}>
                <S.LabelElement htmlFor="number">Número</S.LabelElement>
                <S.InputElement
                  type="number"
                  id="number"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('number') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup size={100}>
                <S.LabelElement htmlFor="complement">
                  Complemento (Opcional)
                </S.LabelElement>
                <S.InputElement
                  type="text"
                  id="complement"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
              <Button
                type="link"
                onClick={() => dispatch(tooglePayment(checkFirstForm()))}
              >
                Continuar com o pagamento
              </Button>
              <Button type="link" onClick={() => dispatch(closeDeliveries())}>
                Voltar ao carrinho
              </Button>
            </>
          ) : (
            <>
              <p>Pagamento - Valor a pagar R$ 190,90</p>
              <S.InputGroup size={100}>
                <S.LabelElement htmlFor="cardName">
                  Nome no cartão
                </S.LabelElement>
                <S.InputElement
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={form.values.cardName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardName') ? 'error' : ''}
                ></S.InputElement>
              </S.InputGroup>
              <S.InputGroup size={65}>
                <S.LabelElement htmlFor="cardNumber">
                  Número do cartão
                </S.LabelElement>
                <S.InputMasked
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="9999 9999 9999 9999"
                ></S.InputMasked>
              </S.InputGroup>
              <S.InputGroup size={25}>
                <S.LabelElement htmlFor="cardCode">CVV</S.LabelElement>
                <S.InputMasked
                  type="text"
                  id="cardCode"
                  name="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="999"
                ></S.InputMasked>
              </S.InputGroup>
              <S.InputGroup size={45}>
                <S.LabelElement htmlFor="cardExpiresMonth">
                  Mês de vencimento
                </S.LabelElement>
                <S.InputMasked
                  type="text"
                  id="cardExpiresMonth"
                  name="cardExpiresMonth"
                  value={form.values.cardExpiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99"
                ></S.InputMasked>
              </S.InputGroup>
              <S.InputGroup size={45}>
                <S.LabelElement htmlFor="cardExpiresYear">
                  Ano de vencimento
                </S.LabelElement>
                <S.InputMasked
                  type="text"
                  id="cardExpiresYear"
                  name="cardExpiresYear"
                  value={form.values.cardExpiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99"
                ></S.InputMasked>
              </S.InputGroup>
              <Button type="submit">Finalizar Pagamento</Button>
              <Button
                type="button"
                onClick={() => dispatch(tooglePayment(false))}
              >
                Voltar para a edição de endereço
              </Button>
            </>
          )}
        </form>
      )}
    </>
  )
}

export default PaymentForm
