import React from 'react'

function FaqSection() {
  return (
    <div className="bg-green-100 h-100 flex items-center justify-center ">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">FAQs</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Is Zoofari open for Public?</span>
            <span>→</span>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <span>How much does it cost to rent Zoofari?</span>
            <span>→</span>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <span>When is the next event at Zoofari?</span>
            <span>→</span>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <span>What is Zoofari about?</span>
            <span>→</span>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <span>Who started Zoofari?</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqSection
