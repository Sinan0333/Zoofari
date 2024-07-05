import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

function ContactSection() {
  return (
    <div className="px-56">
      <div className="flex items-center justify-between w-full mt-24 p-8 bg-white rounded-md shadow-md">
        <div className="text-gray-600">
          <p className="text-lg">Get in touch with us at</p>
          <p className="text-2xl">info@zoofari.com</p>
        </div>
        <div className="flex space-x-4 text-gray-600">
          <FaInstagram size={24} />
          <FaFacebook size={24} />
          <FaTwitter size={24} />
        </div>
      </div>
     </div>
  )
}

export default ContactSection
