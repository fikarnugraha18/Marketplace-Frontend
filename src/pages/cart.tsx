import { useEffect, useState } from "react"
import { api } from "../api/axios"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Cart() {

  const [cart, setCart] = useState<any[]>([])

  useEffect(() => {
    fetchCart()
  }, [])

  const fetchCart = async () => {
  try {

    const res = await api.get("/cart")

    setCart(res.data?.items || [])

  } catch (error) {
    console.error("Failed to fetch cart", error)
  }
}

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.product.price * item.quantity
  }, 0)

const checkout = async () => {

  try {

    const res = await api.post("/orders/checkout")

    console.log(res.data)

    alert("Checkout successful!")

    fetchCart()

  } catch (error: any) {

    console.error(error.response?.data)

    alert(error.response?.data?.message || "Checkout failed")

  }

}

  return (
    <div>

      <Navbar />

      <div className="max-w-5xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-6">
          Shopping Cart
        </h1>

        {cart.length === 0 && (
          <p>Your cart is empty</p>
        )}

        {cart.map((item) => (

          <div
            key={item.id}
            className="flex justify-between items-center border p-4 rounded-lg mb-4"
          >

            <div>

              <h2 className="font-semibold">
                {item.product.title}
              </h2>

              <p className="text-gray-500">
                Quantity: {item.quantity}
              </p>

            </div>

            <p className="font-bold text-green-600">
              Rp {(item.product.price * item.quantity).toLocaleString()}
            </p>

          </div>

        ))}

        {cart.length > 0 && (

          <div className="mt-6 border-t pt-6">

            <h2 className="text-xl font-bold">
              Total: Rp {totalPrice.toLocaleString()}
            </h2>

            <button
            onClick={checkout}
            className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg"
        >
            Checkout
            </button>

          </div>

        )}

      </div>

        <Footer />
        
    </div>
  )
}