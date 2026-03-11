import { api } from "../api/axios"
import { useNavigate } from "react-router-dom"

type Product = {
  id: string
  title: string
  price: number
  stock: number
  seller?: {
    name: string
  }
}

export default function ProductCard({ product }: { product: Product }) {

  const navigate = useNavigate()

  const addToCart = async () => {
    try {

      await api.post("/cart", {
        productId: product.id,
        quantity: 1
      })

      alert("Product added to cart")

    } catch (error) {

      console.error(error)
      alert("Failed to add product")

    }
  }

  return (

    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white"
    >

      {/* PRODUCT IMAGE */}
      <div className="relative overflow-hidden">

        <img
          src={`https://picsum.photos/seed/${product.id}/600/400`}
          alt={product.title}
          className="h-44 w-full object-cover hover:scale-105 transition duration-300"
        />

        {/* STOCK BADGE */}
        <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded shadow">
          Stock: {product.stock}
        </div>

      </div>

      {/* PRODUCT INFO */}
      <div className="p-4">

        <h3 className="font-semibold text-sm md:text-base line-clamp-2 min-h-[40px]">
          {product.title}
        </h3>

        <p className="text-green-600 font-bold text-lg mt-2 tracking-wide">
          Rp {product.price.toLocaleString()}
        </p>

        <p className="text-gray-500 text-xs mt-1">
          {product.seller?.name || "Marketplace Seller"}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation()
            addToCart()
          }}
          className="mt-3 w-full bg-green-500 hover:bg-green-600 active:scale-95 text-white py-2 rounded-lg transition"
        >
          Add to Cart
        </button>

      </div>

    </div>
  )
}