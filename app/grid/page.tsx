'use client'
import { useState } from 'react'

export default function Grid() {
  const [list] = useState([1, 2, 3, 4, 5])

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        {list.map((item, index) => (
          <div
            key={index}
            className="bg-orange-200 p-4 rounded-lg shadow-md flex items-center justify-center h-32">
            {item}
          </div>
        ))}
      </div>

      {/* Flex Layout */}
      <div className="flex flex-wrap justify-between mt-10">
        {list.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-blue-200 p-4 rounded-lg shadow-sm flex items-center justify-center h-20">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
