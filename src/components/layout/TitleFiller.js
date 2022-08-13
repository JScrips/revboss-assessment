import React from 'react'

const TitleFiller = () => {
  return (
    <div className="flex flex-col">
      <span className="text-white text-7xl font-semibold ">We'll Drive the Leads.</span>
      <span className="text-white text-7xl font-semibold "> You Close the Deals.</span>
      <span className="text-white text-2xl font-medium tracking-wide ">
        {' '}
        RevBoss helps SaaS companies build pipeline, and grow faster.
      </span>
      <div className="flex gap-6 justify-center mt-10">
        <button className="border py-3 px-8 rounded-full text-xl bg-white text-orange-600 font-medium">
          {' '}
          Schedule a Consultation
        </button>
        <button className="border-2 py-3 px-8 rounded-full text-xl bg-orange-600 text-white font-medium">
          {' '}
          Get Started
        </button>
      </div>
    </div>
  )
}

export default TitleFiller
