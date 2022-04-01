import Nav from "../components/Nav";

export default function About() {
  return (
    <div className="relative bg-gray-50 min-h-screen">
      <Nav />
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-12 pb-20 text-center">
          <div className="px-4 sm:px-8">
            <h1 className="tracking-tight font-extrabold text-gray-900 md:text-6xl text-5xl">
              <span className="block xl:inline">About</span>{' '}
              <span className="block text-blue-600 xl:inline">THE TEAM</span>
            </h1>
            <h2 className="text-4xl font-bold mt-10 text-gray-900 ">
              <span className="block xl:inline">How we</span>{' '}
              <span className="block text-red-600 xl:inline">started out: </span>
            </h2>
            <div className="flex justify-center">
              <div className="md:w-4/5 w-full">
                <div 
                  className="text-left mt-8 rounded-lg border w-full p-8 bg-red-100 transition ease-in-out hover:scale-105"
                >
                  <div className="">
                    <p className="text-xl text-gray-700">
                      Our TSA chapter started in 1995, with just a small group of students who wanted to promote what is now known as STEM and technology in an interesting way. Nowadays, STEM is very widespread, so we are proud to have started teaching the previous generation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold mt-10 text-gray-900 ">
              <span className="block xl:inline">What we</span>{' '}
              <span className="block text-red-600 xl:inline">work towards: </span>
            </h2>
            <div className="flex justify-center">
              <div className="md:w-4/5 w-full">
                <div 
                  className="text-left mt-8 rounded-lg border w-full p-8 bg-red-100 transition ease-in-out hover:scale-105"
                >
                  <div className="">
                    <p className="text-xl text-gray-700">
                    Our TSA Chapter is very proud of our past, and we only plan to grow in the future. We plan to continue our member growth, hopefully reaching up to 100 members in our group. Despite this, membership is not our only goal. We plan to keep innovating, and helping our own communinty. Ultimately, our end goal is to not only provide High School kids with a memorable experience, but to increase the amount of people who benefit from our projects as well.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}