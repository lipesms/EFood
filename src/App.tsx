import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import AppRoutes from './Routes'

import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
