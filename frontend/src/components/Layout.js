import React from "react"
import Header from "./Header"

const Layout = ({ children }) => (
  <div>
    <Header />
    <main className="mt-0">{children}</main>
  </div>
)

export default Layout
