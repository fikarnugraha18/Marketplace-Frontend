export default function Footer() {
  return (

    <footer className="mt-16 border-t bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 text-center text-gray-500 text-sm">

        <p className="font-semibold text-gray-700 mb-2">
          Tokomart
        </p>

        <p className="mb-2">
          Simple marketplace demo project built with React, Node.js, and PostgreSQL.
        </p>

        <p>
          © {new Date().getFullYear()} Tokomart. All rights reserved.
        </p>

      </div>

    </footer>

  )
}