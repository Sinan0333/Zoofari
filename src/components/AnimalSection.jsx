import React from 'react'


function AnimalSection() {
  return (
    <section className="bg-green-100 py-12 w-full h-[800px] mt-20 ">
      <div className="container mx-auto text-center w-10/12 h-full flex flex-col justify-center">
        <h2 className="text-3xl font-semibold mb-8">Animals We Have</h2>
        <div className="flex justify-center items-center 1/2 ">
          <div className="h-96 w-1/3  p-2 relative">
            <img src={'/images/tree.jpg'} alt="tree" className="rounded-lg shadow-md  w-full h-full" />
          </div>
          <div className="flex p-2  flex-col justify-evenly " >
            <img src={"/images/animal1.jpg"} alt="Animal 3" className=" rounded-lg shadow-md h-44 w-56" />
            <img src={"/images/animal2.jpg"} alt="Animal 4" className=" rounded-lg shadow-md h-44 w-56 mt-4" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimalSection
