import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="bg-blue-400">
    <div className="grid grid-cols-header items-baseline my-0 mx-4 sm:mx-auto max-w-[640px] py-4 px-0">
      <h1 className="m-0 text-4xl my-1.5">
        <Link to="/" className="text-white hover:bg-white active:bg-white focus:bg-white hover:text-blue-400 active:text-blue-400 focus:text-blue-400 font-bold -ml-2 mt-0 p-1">
          To Do
        </Link>
      </h1>
      <nav role="main" className="text-2xl mt-0 text-right">
        <Link to="/" className="text-white hover:bg-white active:bg-white focus:bg-white hover:text-blue-400 active:text-blue-400 focus:text-blue-400 font-bold ml-3 mt-0 p-1">
          Home
        </Link>
        <Link to="/app/board" className="text-white hover:bg-white active:bg-white focus:bg-white hover:text-blue-400 active:text-blue-400 focus:text-blue-400 font-bold ml-3 mt-0 p-1">
          Notes
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
