import {
  BrowserRouter,
  Routes as RouterDomRoutes,
  Route,
  Navigate,
} from 'react-router-dom'

import {
  AddProductPage,
  productPage,
  EditProductPage,
  DashoardPage,
} from 'pages'

import { Navbar } from 'components'

export const Routes = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <RouterDomRoutes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={DashoardPage()} />
          <Route path="/products" element={productPage()} />
          <Route path="/products/add" element={AddProductPage()} />
          <Route path="/product/:id" element={EditProductPage()} />
        </RouterDomRoutes>
      </div>
    </BrowserRouter>
  )
}
