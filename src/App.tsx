import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './containers/Header'
import ProductDetail from './containers/ProductDetail'
import ProductListing from './containers/ProductListing'
import { useEffect } from 'react'
import Products from './services/Products'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    Products.fetchProducts(dispatch);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' index element={<ProductListing />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route>404 NOT FOUND! </Route>
      </Routes>
    </>
  )
}

export default App
