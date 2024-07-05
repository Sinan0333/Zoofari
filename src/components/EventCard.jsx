import React from 'react'

function EventCard({ image, title, description, button ,imageSide}) {
  return (
    <div className={`flex ${imageSide ==="left" ? "flex-row" : "flex-row-reverse"} w-full h-96 mb-72  bg-white rounded-lg shadow-lg overflow-hidden my-4 p-6`}>
      <img className="w-1/2   object-cover" src={image} alt={title} />
      <div className="flex flex-col justify-between p-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
        </div>
        {button && (
          <button className="self-start bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            CLICK HERE
          </button>
        )}
      </div>
    </div>
  )
}

export default EventCard
