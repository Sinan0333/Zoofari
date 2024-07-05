import React from 'react'
import EventCard from './EventCard'

function EventSection() {
  return (
    <div className="container mx-auto p-4 px-56 ">
      <h1 className="text-4xl font-bold  text-center">Events</h1>
      <div className="space-y-36">
        <EventCard
          image="/images/event1.jpg" 
          title="Movie nights"
          description="Lorem ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance."
          button={false}
          imageSide={"left"}
        />
        <EventCard
          image="/images/event2.png" 
          title="NGO's"
          description="Lorem ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance."
          button={true}
          imageSide={"right"}
        />
      </div>
      <div className="w-full mt-8">
        <img src="/images/companies.png" alt="Logo 1" className="" /> 
      </div>
    </div>
  )
}

export default EventSection
