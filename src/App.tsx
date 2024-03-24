import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import AppRoutes from './Routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
