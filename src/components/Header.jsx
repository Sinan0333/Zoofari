import React from 'react'

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-600">
          REPUBLIC OF ZOOFARI
        </div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-red-600">Our Mission</a>
          <a href="#" className="text-gray-700 hover:text-red-600">Events</a>
          <a href="#" className="text-gray-700 hover:text-red-600">NGO's</a>
          <a href="#" className="text-gray-700 hover:text-red-600">Packages</a>
          <a href="#" className="text-gray-700 hover:text-red-600">Get in touch</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
