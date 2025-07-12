import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-7 px-10 bg-purple-400 flex justify-between items-center ">
      <h2 className="text-2xl">Partha</h2>
      <div className="flex gap-10 text-xl underline">
        {/* when we use Link in router dom it's feel like a sigle page. this is the advantage of react router */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Project</Link>
        <Link to="/contact">Contact</Link>

        {/* here this ancor tag ahve a problem like when enter the tag/word at this time full page reload everytime */}
        {/* <a className='text-xl underline' href="/">Home</a>
        <a className='text-xl underline' href="/about">About</a>
        <a className='text-xl underline' href="/projects">Project</a>
        <a className='text-xl underline' href="/contact">Contact</a> */}
      </div>
    </div>
  );
};

export default Header;
