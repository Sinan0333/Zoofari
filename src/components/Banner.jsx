import React from 'react'

function Banner() {
  return (
    <main className="relative bg-blue-100 overflow-hidden">
      <img src={"/images/banner.jpg"} alt="Background" className="absolute inset-0 w-full h-full object-cover "/>
      <div className="relative z-10 flex justify-center items-center h-screen">
      </div>
    </main>
  )
}

export default Banner
