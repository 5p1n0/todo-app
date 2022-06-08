import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { isLoggedIn } from "../utils/helper"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate(`/app/login`)
    return null
  }

  return <Component location={location} {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute
