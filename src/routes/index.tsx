import {
  BrowserRouter,
  Routes as RouterDomRoutes,
  Route,
  Navigate,
} from 'react-router-dom'

import { useNavbar } from 'hooks'

import { AddProductPage, productPage, EditProductPage } from 'pages'

import { Navbar } from 'components'

export const Routes = () => {
  const { isVisible } = useNavbar()

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <RouterDomRoutes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route
            path="/dashboard"
            element={
              <div className={!isVisible ? 'page' : 'page page-with-navbar'}>
                <h1>Dashboard</h1>
              </div>
            }
          />
          <Route path="/products" element={productPage()} />
          <Route path="/products/add" element={AddProductPage()} />
          <Route path="/product/:id" element={EditProductPage()} />
        </RouterDomRoutes>
      </div>
    </BrowserRouter>
  )
}
