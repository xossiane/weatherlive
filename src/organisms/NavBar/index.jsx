import React from 'react'

function NavBar() {
  return (
    <nav
    className="navbar navbar-expand-md navbar-dark bg-dark mb-4"
    aria-label="navbar"
    tabIndex={0}
  >
    <a href="#top" className="navbar-brand text-white">
      Weather Live!
    </a>
  </nav>
  )
}

export default NavBar
