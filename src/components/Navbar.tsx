import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Navbar({ onSearch }: any) {

  const [keyword, setKeyword] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e: any) => {
    e.preventDefault()
    onSearch(keyword)
  }

  return (

    <div className="w-full border-b bg-white">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-wrap items-center gap-3 overflow-hidden">

        <h1
          onClick={() => navigate("/")}
          className="text-green-600 font-bold text-xl cursor-pointer"
        >
          Tokomart
        </h1>

        <form
          onSubmit={handleSearch}
          className="flex flex-1 min-w-0 max-w-xl"
        >

          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search products"
            className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2"
          />

          <button className="bg-green-500 text-white px-4 py-2 rounded-r-lg">
            Search
          </button>

        </form>

        <div className="flex gap-2">

          <button
            onClick={() => navigate("/cart")}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Cart
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="bg-gray-200 px-4 py-2 rounded-lg"
          >
            Orders
          </button>

        </div>

      </div>

    </div>

  )
}