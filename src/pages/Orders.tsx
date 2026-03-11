import { useEffect, useState } from "react"
import { api } from "../api/axios"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Orders() {

  const [orders, setOrders] = useState<any[]>([])

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {

    try {

      const res = await api.get("/orders")

      setOrders(res.data)

    } catch (error) {

      console.error("Failed to fetch orders", error)

    }

  }

  return (
    <div>

      <Navbar />

      <div className="max-w-5xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-6">
          My Orders
        </h1>

        {orders.length === 0 && (
          <p>No orders yet</p>
        )}

        {orders.map((order) => (

          <div
            key={order.id}
            className="border p-4 rounded-lg mb-4"
          >

            <div className="flex justify-between mb-2">

              <h2 className="font-semibold">
                Order ID: {order.id}
              </h2>

              <span className="text-green-600 font-bold">
                {order.status}
              </span>

            </div>

            {order.items.map((item: any) => (

              <div
                key={item.id}
                className="flex justify-between text-sm mb-1"
              >

                <span>
                  {item.product.title} x {item.quantity}
                </span>

                <span>
                  Rp {(item.price * item.quantity).toLocaleString()}
                </span>

              </div>

            ))}

            <div className="text-right font-bold mt-2">

              Total: Rp {order.totalPrice.toLocaleString()}

            </div>

          </div>

        ))}

      </div>

    <Footer />

    </div>
  )
}