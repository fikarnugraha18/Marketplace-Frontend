export default function Banner() {
  return (

    <div className="max-w-7xl mx-auto px-4 md:px-6 mt-6">

      <div className="bg-green-500 rounded-xl p-6 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            Big Sale Marketplace
          </h2>

          <p className="text-green-100">
            Discover amazing products at the best price
          </p>
        </div>

        <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold">
          Shop Now
        </button>

      </div>

    </div>

  )
}