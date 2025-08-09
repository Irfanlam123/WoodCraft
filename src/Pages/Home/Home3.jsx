import React from 'react'

const Home3 = () => {
  return (
    <div className='flex items-center font-sans justify-center gap-x-20 py-10 px-8'>
      {/* Left Side Text */}
      <div className="flex flex-col space-y-6 max-w-md">
        <h2 className="text-3xl ">
          Tailoring solutions to individual preferences
        </h2>
        <h1 className="text-4xl font-bold font-sans text-[#4a0404]">
          Dedicated Experts In Flooring And Construction Excellence
        </h1>
        <p className="text-lg text-gray-600">
          At FloorMaster, we blend artistry with functionality to create
          outstanding flooring and construction solutions. Our passion drives
          every project's success.
        </p>

        <ul className="list-disc list-inside space-y-2 text-yellow-900 text-lg">
          <li>Superior quality in every detail</li>
          <li>Tailoring solutions to individual preferences</li>
          <li>Experienced professionals at your service</li>
          <li>Ensuring customer satisfaction with every project</li>
        </ul>
      </div>

      {/* Right Side Images */}
      <div className="relative w-[450px] flex justify-center items-center">
        {/* Large Image */}
        <img
        src='.\src\assets\wrap.avif'
          alt="Large Flooring Work"
          className="rounded-md shadow-lg w-[450px] h-[500px] object-cover"
        />

        {/* Small Overlapping Image */}
        <img
          src=".\src\assets\wrap2.avif"
          alt="Small Flooring Work"
          className="absolute right-[-180px] rounded-lg shadow-lg border-4 border-white w-[350px] h-[300px] object-cover"
        />
      </div>
    </div>
  )
}

export default Home3
