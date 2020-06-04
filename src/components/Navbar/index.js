import React, { useEffect } from "react"

import "./navbar.scss"

const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const nav = document.getElementById("nav")
    if (window.pageYOffset === 0 && nav.classList.contains("nav--scroll")) {
      nav.classList.remove("nav--scroll")
    } else if (
      window.pageYOffset !== 0 &&
      !nav.classList.contains("nav--scroll")
    ) {
      nav.classList.add("nav--scroll")
    }
  }

  return (
    <nav id="nav" className="nav bg-light-primary">
      <a href="#top" className="nav__ico">
        Home
      </a>
      <ul className="nav__menu color-light-surface">
        <li className="nav__item elevate-hover">
          <a href="#about">About</a>
        </li>
        <li className="nav__item elevate-hover">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav__item elevate-hover">
          <a href="#experience">Experience</a>
        </li>
        <li className="nav__item elevate-hover">
          <a href="#contact">Contact</a>
        </li>
        {/* <button>
          <i class="fas fa-sun"></i> -- Dark mode toggle
        </button> */}
      </ul>
    </nav>
  )
}

export default Navbar
