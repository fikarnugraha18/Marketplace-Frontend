import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/cart"
import Orders from "./pages/Orders"
import ProductDetail from "./pages/ProductDetail"

export default function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

    </BrowserRouter>
  )
}