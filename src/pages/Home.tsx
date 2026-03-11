import { useEffect, useState } from "react"
import { api } from "../api/axios"
import ProductCard from "../components/ProductCard"
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import ProductSkeleton from "../components/ProductSkeleton"
import Footer from "../components/Footer"

export default function Home() {

  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {

    try {

      setLoading(true)

      const res = await api.get("/products?page=1&limit=12")

      setProducts(res.data.data)

    } catch (error) {

      console.error(error)

    } finally {

      setLoading(false)

    }

  }

  const searchProducts = async (keyword: string) => {

    try {

      const res = await api.get(`/products?search=${keyword}`)

      setProducts(res.data.data)

    } catch (error) {

      console.error(error)

    }

  }

  return (

    <div className="min-h-screen flex flex-col">

      {/* NAVBAR */}
      <Navbar onSearch={searchProducts} />

      {/* BANNER */}
      <Banner />

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 py-6">

        {/* TITLE */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Featured Products
        </h1>

        {/* CATEGORY BAR */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">

          <button className="px-4 py-1 bg-green-500 text-white rounded-lg whitespace-nowrap">
            All
          </button>

          <button className="px-4 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition whitespace-nowrap">
            Electronics
          </button>

          <button className="px-4 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition whitespace-nowrap">
            Gaming
          </button>

          <button className="px-4 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition whitespace-nowrap">
            Accessories
          </button>

          <button className="px-4 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition whitespace-nowrap">
            Laptop
          </button>

        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">

          {loading
            ? Array.from({ length: 10 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))
            : products.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))
          }

        </div>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>

  )

}