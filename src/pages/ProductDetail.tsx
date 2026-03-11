import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../api/axios"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function ProductDetail() {

  const { id } = useParams()

  const [product, setProduct] = useState<any>(null)

  useEffect(() => {
    fetchProduct()
  }, [id])

  const fetchProduct = async () => {

  try {

    const res = await api.get(`/products/${id}`)

    setProduct(res.data.data)

  } catch (error) {

    console.error("Failed to fetch product")

  }

}

  const addToCart = async () => {

  console.log("PRODUCT", product)

  try {

    const res = await api.post("/cart", {
      productId: product?.id,
      quantity: 1
    })

    console.log(res)

    alert("Product added to cart")

  } catch (error: any) {

  console.log("ADD CART ERROR:", error.response?.data)

  alert(error.response?.data?.message || "Failed to add product")

}

}

  if (!product) return <div className="p-10">Loading product...</div>

  return (
    <div>

      <Navbar />

      <div className="max-w-5xl mx-auto p-6 grid grid-cols-2 gap-10">

      <img
        src={`https://picsum.photos/seed/${product.id}/600/400`}
        alt={product.title}
        className="h-80 w-full object-cover rounded-lg"
      />

        <div>

          <h1 className="text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-2xl font-bold text-green-600 mb-4">
            Rp {product.price?.toLocaleString()}
          </p>

          {product.stock === 0 ? (
            <span className="text-red-500 font-semibold">
              Out of stock
            </span>
          ) : (

            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-sm text-gray-600">
             Stock: {product.stock}
            </span>
          )}
          
          <h2 className="font-semibold mt-4 mb-2">
          Product Description
          </h2>

          <p className="text-gray-600">
          {product.description}
          </p>
          
          <p className="text-gray-500 text-sm mb-2">
          Seller: {product.seller?.name}
          </p>

          <button
          onClick={addToCart}
          disabled={product.stock === 0}
          className={`px-6 py-3 rounded-lg text-white ${
          product.stock === 0
           ? "bg-gray-400 cursor-not-allowed"
          : "bg-green-500 hover:bg-green-600"
        }`}
        >
        Add to Cart
        </button>

        </div>

      </div>

      <Footer />

    </div>
  )
}