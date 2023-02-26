import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Navbar } from 'components/Navbar'

import { useNavbar } from 'hooks/useNavbar'


export const App = () => {
  const { isVisible } = useNavbar()

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
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
          <Route
            path="/products"
            element={
              <div className={!isVisible ? 'page' : 'page page-with-navbar'}>
                <h1>Products</h1>
              </div>
            }
          />
          <Route
            path="/categories"
            element={
              <div className={!isVisible ? 'page' : 'page page-with-navbar'}>
                <h1>Categories</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
