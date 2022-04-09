import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";

const experiences = [
  {
    title: 'Innovations in Web Design',
    description: 'Leaders in the web design field will showcase their recent projects, such as new updates to JavaScript, new innovations in backend, and new features coming to many modern web browsers. Presentations will last approximately 1 hour each, and will be held over the entire first day. These presentions will be held in zoom room 1.'
  },
  {
    title: 'The role of AI in programming',
    description: 'Managers of the Code Helper AI team will be given a chance to present their recent work on the Code Helper AI program. They will go over how they accomplished such a feat, and how it is important to the entire programming community. The presentation will be on day 1, at 3:00-4:00 PM EST, and will be held in zoom room 2.'
  },
  {
    title: 'New Programming Languages',
    description: 'New programming languages will be announced and explained, including new JavaSript libraries, a new functional programming language, and the newest addition to the C family, boasted the speed of C, but the readability of C#. Presentations will be held on day 1 in zoom room 3, and will be held in one hour increments, starting at 10:00 AM EST, and ending at 1:00 PM EST.'
  },
  {
    title: 'The Future of Technology and business',
    description: 'Some of the biggest names in Silicon Valley will present on the future of technology and business. They will discuss how they are using technology to solve problems, and the many challenges that they have to face to achieve their vision of the future. Presentations will be held on day 2 in zoom room 1, starting at 2:00 PM EST, and ending at 5:00 PM EST.'
  },
  {
    title: 'Advances in Security Technology',
    description: 'Agents of intelligence orginizations will give details on new methods of surveillance, and how it keeps us safe. Presentations will be held on day 2 in zoom room 2, starting at 2:00 AM EST, and ending at 3:00 PM EST.'
  },
  {
    title: 'The Material That Will Power the World',
    description: 'Leading experts in Materials Science will present their latest advances in the field. They will discuss how they found their "Mircale Material", and how it change the world. Presentations will be held on day 2 in zoom room 3, starting at 4:00 AM EST, and ending at 5:00 PM EST.'
  },
  {
    title: 'Humans on Mars',
    description: 'Technology visionaries will lay out their plans for how humans will colonize Mars. They will not only show initial designs for Mars Base Alpha, but will also unvail the technology that will allow us to survive there. Presentations will be held on day 2 in zoom room 4, starting at 10:00 AM, and ending at noon.'
  },
  {
    title: 'Closing Ceremonies',
    description: 'The final presentation hosted by the organizers of the event will go over how all of these technologies will enable us to enter the future. The presentation will be held in all zoom rooms, starting at 5:00 PM EST, and ending at approximately 6:30 PM EST.'
  }
]

export default function Experiences() {
  const [showDescriptions, setShowDescriptions] = useState([false, false, false, false, false, false, false, false])
  
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
              <span className="block xl:inline">At our event, participants can watch a </span>{' '}
              <span className="block text-red-600 xl:inline">plethora of presentations: </span>
            </h2>
            <div className="flex justify-center">
              <div className="mt-8 md:w-4/5 w-full">
                {showDescriptions.map((show, idx) => (
                  <Card noPadding>
                    <div 
                      key={idx}
                      onClick={(e) => updateDescriptions(e, idx)}
                      className="w-full h-full p-8"
                    >
                      <div className="flex items-center">
                        {show ? <ChevronDownIcon className="flex-shrink-0 text-gray-800 h-8 w-8" /> : <ChevronRightIcon className="flex-shrink-0 text-gray-800 h-8 w-8" />}  
                        <span className="ml-3 text-3xl text-gray-800 font-bold">{experiences[idx].title}</span>
                      </div>
                      {show &&
                        <div className="mt-4">
                          <p className="text-xl text-left text-gray-700">
                            {experiences[idx].description}
                          </p>
                        </div>
                      }
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}