import React from 'react'

function PackageCard({ image, title, description ,position }) {
  return (
    <div className={`max-w-xs ${position === "center" ? "bg-slate-500" : ""} rounded overflow-hidden shadow-lg my-4 relative rounded-bl-3xl rounded-br-3xl rounded-tl-[25%] p-10`}>
    <div className={`w-full p-2 ${position === "center" ? "bg-white" : "bg-slate-500"} rounded-bl-[60%] rounded-br-[60%] rounded-tl-[60%]`}>
        <img className="w-full max-h-60 object-cover rounded-bl-[60%] rounded-br-[60%] rounded-tl-[60%]" src={image} alt={title} />
    </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 pl-10 px-4 rounded-2xl">
          CLICK HERE
        </button>
      </div>
    </div>
  )
}

export default PackageCard
