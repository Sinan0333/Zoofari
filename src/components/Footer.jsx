import React from 'react'

function Footer() {
  return (
    <footer className="bg-green-700 text-gray-200 px-56 mt-72 ">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src={"/images/logo.png"} alt="Zoofari Logo" className="h-20 mr-4" />
          <nav className="space-x-4">
            <a href="#about" className="hover:text-white">About us</a>
            <a href="#mission" className="hover:text-white">Our Mission</a>
            <a href="#events" className="hover:text-white">Events</a>
            <a href="#ngos" className="hover:text-white">NGO's</a>
            <a href="#packages" className="hover:text-white">Packages</a>
            <a href="#contact" className="hover:text-white">Get in touch</a>
          </nav>
        </div>
        <div className="space-x-4">
          <a href="#privacy" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#terms" className="hover:text-white">Terms</a>
        </div>
      </div>
      <p className='ml-10'>Farm No.2, Petting Zoo, Mandi to Faridabad Road, Near Bal Bhavan School, Mandi, Delhi - 110 047</p>

      <div className="container mx-auto px-4 py-4 text-center text-sm">
        <hr />
        <p>&copy; 2024 Republic of Zoofari. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
