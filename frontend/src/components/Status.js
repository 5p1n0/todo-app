import React from "react"
import { Link, navigate } from "gatsby"
import { getCurrentUser, isLoggedIn, logout } from "../utils/helper"

const Status = () => {
  let details
  if (!isLoggedIn()) {
    details = (
      <p className="my-0 mx-4 sm:mx-auto max-w-[640px] text-right">
        To get the full app experience, you’ll need to
        {` `}
        <Link className="hover:underline text-[blue]"  to="/app/login">log in</Link> or
        {` `}
        <Link className="hover:underline text-[blue]"  to="/app/signup">sign up</Link>
      </p>
    )
  } else {
    const { token, username } = getCurrentUser()

    details = (
      <p className="my-0 mx-4 sm:mx-auto max-w-[640px] text-right">
        Logged in as {username}!
        {` `}
        <Link
          to="/"
          className="hover:underline text-[blue]"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
          log out
        </Link>
      </p>
    )
  }

  return (
    <div className="bg-gray-300 text-sm p-1">
      {details}
    </div>
  )
}

export default Status
