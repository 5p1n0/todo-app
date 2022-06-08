import React from "react"
import PropTypes from "prop-types"

const View = ({ title, children }) => (
  <section className="max-w-[640px] mt-8 mx-4 sm:mx-auto mb-12">
    <h1 className="text-2xl font-bold mb-4">{title}</h1>
    {children}
  </section>
)

View.propTypes = {
  title: PropTypes.string.isRequired,
}

export default View