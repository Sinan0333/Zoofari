import React from 'react'

function InfoCard({ title, subtitle, details, button }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-4 bg-green-100 p-6 text-center">
      <div className="font-semibold text-4xl mb-6">{title}</div>
      <div className="font-semibold text-2xl mb-2">{subtitle}</div>
      <div className="text-gray-700 text-base mb-4">
        {details.map((detail, index) => (
          <p key={index} className='text-xl'>{detail}</p>
        ))}
      </div>
      {button && (
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
          CLICK HERE
        </button>
      )}
    </div>
  )
}

export default InfoCard
