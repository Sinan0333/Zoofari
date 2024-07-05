import React from 'react'

function Content({title, content,textAlign}) {
  return (
    <div className={`bg-white rounded-lg mt-24 p-6 m-4 w-1/3 ${textAlign === "centre" ? 'text-center' : ""} `}>
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{content}</p>
        <button className="bg-red-500 text-white pr-4 pl-10 py-2  rounded-2xl">CLICK HERE</button>
    </div>
  )
}

export default Content
