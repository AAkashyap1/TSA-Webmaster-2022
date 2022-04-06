import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  CalendarIcon,
  CheckCircleIcon,
  ClipboardIcon,
  UsersIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const pages = [
  {
    name: 'Experiences',
    to: '/experiences',
    icon: CalendarIcon,
  },
  {
    name: 'About Us',
    to: '/about',
    icon: UsersIcon,
  },
  {
    name: 'Registration',
    to: '/registration',
    icon: CheckCircleIcon,
  },
  {
    name: 'Work Log & Sources',
    to: '/log',
    icon: ClipboardIcon,
  },
]

export default function Nav() {
  return (
    <Popover className="relative bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start md:w-0 md:flex-1">
            <Link to="/">
              <img
                className="h-8 w-auto sm:h-12"
                src="https://www.gatsa.org/chapter-resources/img/logos/tsa-hd.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute w-full top-0 right-0 z-10 p-2 transition transform origin-top-left"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-0.5 pb-6 px-5">
              <div className="mt-6 flex justify-between">
                <div className="">
                  <Link to="/">
                    <img
                      className="h-8 w-auto sm:h-12"
                      src="https://www.gatsa.org/chapter-resources/img/logos/tsa-hd.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <nav className="grid gap-y-8 mt-6">
                {pages.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <item.icon className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}