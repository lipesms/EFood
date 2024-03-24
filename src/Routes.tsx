import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Restaurants from './pages/Restaurants'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/restaurant" element={<Restaurants />}></Route>
  </Routes>
)

export default AppRoutes
