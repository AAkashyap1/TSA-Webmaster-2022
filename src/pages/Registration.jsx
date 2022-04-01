import Nav from "../components/Nav";

export default function Registration() {
  return (
    <div className="relative bg-gray-50 min-h-screen">
      <Nav />
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-12 pb-20 text-center">
          <div className="px-4 sm:px-8">
            <h1 className="tracking-tight font-extrabold text-gray-900 md:text-6xl text-5xl">
              <span className="block xl:inline">Register for the</span>{' '}
              <span className="block text-blue-600 xl:inline">REGIONAL EVENT</span>
            </h1>
            <h2 className="text-4xl font-bold mt-8 text-gray-900 ">
              <span className="block xl:inline">To sign up, use the following </span>{' '}
              <span className="block text-red-600 xl:inline">form: </span>
            </h2>
            <div className="flex justify-center">
              <div className="mt-8 md:w-4/5 w-full flex justify-center">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfdxspb_zB44IZz4utPK0AibJp9jkuJLsUrh_FAyHSrsuinQQ/viewform?embedded=true" 
                  width="640" 
                  height="863" 
                  frameborder="0" 
                  marginheight="0" 
                  marginwidth="0"
                >
                  Loading...
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}