import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="flex py-5 px-10 items-center justify-between bg-emerald-800 ">
        <h2>partha</h2>
        <div className="flex gap-8 items-center ">
          <h4 className="text-2xl">About</h4>
          <h4 className="text-2xl">Projects</h4>
          <h4 className="text-2xl">Contact</h4>
          <h4 className="text-2xl">Profile</h4>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
