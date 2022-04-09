import Nav from "../components/Nav";
import Card from "../components/Card";

export default function Experiences() {
  return (
    <div className="relative bg-gray-50 min-h-screen">
      <Nav />
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-12 pb-20 text-center">
          <div className="text-left px-4 sm:px-8">
            <h1 className="text-center tracking-tight font-extrabold text-gray-900 md:text-6xl text-5xl">
              <span className="block xl:inline">Our sources and</span>{' '}
              <span className="block text-blue-600 xl:inline">WORK LOG</span>
            </h1>
            <h2 className="text-center text-4xl font-bold mt-8 text-gray-900 ">
              <span className="block xl:inline">See below for more information on</span>{' '}
              <span className="block text-red-600 xl:inline">how we created this website: </span>
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="md:w-4/5 w-full">
                <Card noPadding={false}>
                  <p className="text-3xl text-gray-800 font-bold">TailwindCSS</p>
                  <div className="mt-4">
                    <p className="text-xl text-gray-700">
                      We used TailwindCSS very moderately to help us create an organized website. We did not use any pre-built TailwindCSS templates in the designing process, and mainly utilized TailwindCSS for basic classnames and design properties
                    </p>
                  </div>
                </Card>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="md:w-4/5 w-full">
                <Card noPadding={false}>
                  <p className="text-3xl text-gray-800 font-bold">Copyright Checklist</p>
                  <div className="mt-4">
                    <a href="copyright-checklist.pdf" target = "_blank" download className="text-xl text-blue-500 underline">
                      Download
                    </a>
                  </div>
                </Card>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="md:w-4/5 w-full">
                <Card noPadding={false}>
                  <p className="text-3xl text-gray-800 font-bold">Work Log</p>
                  <div className="mt-4">
                    <a href="plan-of-work-log (2).pdf" target = "_blank" download className="text-xl text-blue-500 underline">
                      Download
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}