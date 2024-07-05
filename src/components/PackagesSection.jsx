import React from 'react'
import PackageCard from './PackageCard'

function PackagesSection() {
  return (
    <div className="container mx-auto p-4 text-center  flex flex-col  items-center h-[900px] z-0" >
      <h1 className="text-4xl font-bold mb-8 mt-36">Packages</h1>
      <div className="flex justify-evenly w-10/12 mb-36 ">
        <PackageCard 
          image={"/images/package1.png"} 
          title="School Visits" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered" 
        />
        <PackageCard 
          image={"/images/package2.png"} 
          title="Birthdays at Zoofari" 
          description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text." 
          position={"center"}
        />
        <PackageCard 
          image={"/images/package3.png"} 
          title="Private Events" 
          description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary." 
        />
      </div>
    </div>
  )
}

export default PackagesSection
