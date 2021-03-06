import Nav from "../components/Nav";
import Card from "../components/Card";

const news = [
  {
    title: 'Schedule Realesed!',
    description: (
      <div>
        We have just released the schedule for speakers! To obtain the schedule, have your coordinator email us at{''}
        <span className="font-medium text-blue-600">
          <a 
            target="_blank"
            rel="noreferrer"
            href="mailto:technologyconferenceschedule@technology.com?subject=Schedule">
              {' '}technologyconferenceschedule@technology.com
          </a>
        </span>
      </div>
    )
  },
  {
    title: 'Signup Deadline is Approaching!',
    description: (
      <div>
        On March 10, 2022, signups for our virtual event will conclude. Please make sure that by March 10, you have all of your materials prepared and ready to present. We plan to send out the schedeule by March 17. Thank you for you cooperation and have a good time!
      </div>
    )
  },
  {
    title: 'Ten Speakers Signed Up!',
    description: (
      <div>
        Yesterday, we just had our tenth speaker sign up! We are extremely excited for you to hear about the new innovations in technology this year. They all have impressive background with a wide array of knowledge.
      </div>
    )
  },
  {
    title: 'Welcome to the 2022 Virtual Technology Expo!',
    description: (
      <div>
       We are excited to announce the 2022 Virtual Technology Expo! At our event, you can watch presentations exploring the latest trends in technology, learn about the latest innovations in the industry, and get to know the speakers. You will have an oppurtunity to learn more about current technology, which can allow you to advance your career. Entry will be free. The event will take place on June 22, 2022 - June 23, 2022. We hope to see you there!
      </div>
    )
  }
  


  
]

export default function News() {
  return (
    <div className="relative bg-gray-50 min-h-screen">
      <Nav />
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-12 pb-20 text-center">
          <div className="px-4 sm:px-8">
            <h1 className="tracking-tight font-extrabold text-gray-900 md:text-6xl text-5xl">
              <span className="block xl:inline">News</span>
            </h1>
            <h2 className="text-4xl font-bold mt-8 text-gray-900 ">
              <span className="block xl:inline">At our event, participants can watch a </span>{' '}
              <span className="block text-red-600 xl:inline">plethora of presentations: </span>
            </h2>
            <div className="text-left flex justify-center">
              <div className="mt-8 md:w-4/5 w-full">
              {news.map((item) => 
                <Card noPadding={false}>
                  <p className="text-3xl text-gray-800 font-bold">{item.title}</p>
                  <div className="mt-4">
                    <p className="text-xl text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </Card>
              )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}