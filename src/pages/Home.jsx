import Nav from "../components/Nav";
const news = [
  {
    title: 'Schedule Realesed!',
    description: 'We have just released the schedule for competitions! Read More...'
  },
  {
    title: 'Signup Deadline is Approaching!',
    description: 'On March 10, 2022, signups for our virtual event will conclude. Read More...'
  },
  {
    title: 'Ten Speakers Signed Up!',
    description: 'Yesterday, we just had our tenth speaker sign up! Read More...'
  }

]
const faq = [
  {
    title: 'What date does the event take place?',
    description: 'June 22, 2022'
  },
  {
    title: 'How do I become a speaker?',
    description: 'To Become a Speaker, head over to our registration page, scroll down to the "Speaker" section, put in all of your current information, including your topic, profession, and skillset, and we can take care of the rest.'
  },
  {
    title: 'How do I attend the expo?',
    description: 'To sign up, head over to the registration page, and fill out the google form. We will automatically assign you to each zoom room as necessary.'
  }
  
]

export default function Home() {
  return (
    <div className="relative bg-gray-50 min-h-screen">
      <Nav />
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-12 pb-20 text-center">
          <div className="px-4 sm:px-8">
            <h1 className="tracking-tight font-extrabold text-gray-900 md:text-6xl text-5xl">
              <span className="block xl:inline">Welcome to the</span>{' '}
              <span className="block text-blue-600 xl:inline">2022 VIRTUAL CURRENT TECHNOLOGY EXPO</span>
            </h1>
            <div className="mt-12 grid sm:grid-cols-2 gap-10">
              <div className="text-left">
                <p className="text-3xl text-center sm:text-left sm:text-4xl text-gray-900 font-semibold">NEWS</p>
                {news.map((item) => 
                  <div className="mt-6 rounded-lg border w-full p-8 bg-red-100 transition ease-in-out hover:scale-105">
                    <p className="text-3xl text-gray-800 font-bold">{item.title}</p>
                    <div className="mt-4">
                      <a href="/News" target = "_blank" className="text-2xl text-blue-500 underline">
                        {item.description}
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="text-left">
                <p className="text-3xl text-center sm:text-left sm:text-4xl text-gray-900 font-semibold ">FAQ</p>
                {faq.map((item) => (
                  <div className="mt-6 rounded-lg border w-full p-8 bg-red-100 transition ease-in-out hover:scale-105">
                    <p className="text-2xl text-gray-800">Q: {item.title}</p>
                    <p className="mt-4 text-2xl text-gray-800 ">A: {item.description}</p>
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