import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Nav from "../components/Nav";

export default function Experiences() {
  const [showDescriptions, setShowDescriptions] = useState([false, false, false])
  
  function updateDescriptions(e, idx) {
    e.preventDefault();
    let tempDescriptions = [...showDescriptions];
    tempDescriptions[idx] = !tempDescriptions[idx];
    setShowDescriptions(tempDescriptions);
    console.log(showDescriptions);
  }

  return (
    <div className="relative bg-gray-50 min-h-screen">
      <Nav />
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-12 pb-20 text-center">
          <div className="px-4 sm:px-8">
            <h1 className="tracking-tight font-extrabold text-gray-900 md:text-6xl text-5xl">
              <span className="block xl:inline">We offer many</span>{' '}
              <span className="block text-blue-600 xl:inline">TECH EXPERIENCES</span>
            </h1>
            <h2 className="text-4xl font-bold mt-8 text-gray-900 ">
              <span className="block xl:inline">At our event, students can participate in a</span>{' '}
              <span className="block text-red-600 xl:inline">plethora of competitions: </span>
            </h2>
            <div className="flex justify-center">
              <div className="mt-8 md:w-4/5 w-full">
                {showDescriptions.map((show, idx) => (
                  <div 
                    key={idx}
                    onClick={(e) => updateDescriptions(e, idx)}
                    className="text-left mt-8 rounded-lg border w-full p-8 bg-red-100 transition ease-in-out hover:scale-105"
                  >
                    <div className="flex items-center">
                      {show ? <ChevronDownIcon className="flex-shrink-0 text-gray-800 h-8 w-8" /> : <ChevronRightIcon className="flex-shrink-0 text-gray-800 h-8 w-8" />}  
                      <span className="ml-3 text-3xl text-gray-800 font-bold">Biotechnology Design</span>
                    </div>
                    {show &&
                      <div className="mt-4">
                        <p className="text-xl text-gray-700">
                          Participants select a contemporary biotechnology problem that reflects the theme for the year. Participants demonstrate understanding of the topic through documented research, the development of a solution, a display (including an optional model or prototype), and an effective multimedia presentation.
                        </p>
                      </div>
                    }
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}