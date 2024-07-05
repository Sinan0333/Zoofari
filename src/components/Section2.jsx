import React from 'react'
import InfoCard from './InfoCard'

function Section2() {
  return (
    <div className="container mx-auto p-4 flex justify-center items-center mt-12 h-[890px] bg-green-200 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-52"> 
        <InfoCard
          title="Ticket Prices"
          subtitle="Full Day Package"
          details={[
            "Babies (<2 yrs): Free",
            "Toddlers (2-4 yrs): Rs. 700",
            "Kids (4-16 yrs): Rs. 1,450"
          ]}
        />
        <InfoCard
          title="Opening Times"
          subtitle="All Day"
          details={[
            "Monday to Sunday",
            "10:00 am to 9:00 pm"
          ]}
          button={true}
        />
      </div>
    </div>
  )
}

export default Section2
