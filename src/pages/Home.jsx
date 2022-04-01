import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="relative bg-gray-50 min-h-screen">
      <Nav />
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-12 pb-20 text-center">
          <div className="px-4 sm:px-8">
            <h1 className="tracking-tight font-extrabold text-gray-900 md:text-6xl text-5xl">
              <span className="block xl:inline">Welcome to the</span>{' '}
              <span className="block text-blue-600 xl:inline">2022 VIRTUAL TECH EXPO</span>
            </h1>
            <div className="mt-12 grid sm:grid-cols-2 gap-10">
              <div className="text-left">
                <p className="text-3xl text-center sm:text-left sm:text-4xl text-gray-900 font-semibold">NEWS</p>
                {[1, 2, 3].map(() => (
                  <div className="mt-6 rounded-lg border w-full p-8 bg-red-100 transition ease-in-out hover:scale-105">
                    <p className="text-3xl text-gray-800 font-bold">Schedule Realesed!</p>
                    <div className="mt-4">
                      <a href="https://everaise.org" className="text-2xl text-blue-500 underline">
                        We have just released the schedule for competitions! Read More...
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-3xl text-center sm:text-left sm:text-4xl text-gray-900 font-semibold ">FAQ</p>
                {[1, 2, 3, 4, 5].map(() => (
                  <div className="mt-6 rounded-lg border w-full p-8 bg-red-100 transition ease-in-out hover:scale-105">
                    <p className="text-2xl text-gray-800">Q: Frequently Asked Questions</p>
                    <p className="mt-4 text-2xl text-gray-800 ">A: Frequently Asked Questions</p>
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