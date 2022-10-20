import { useState } from "react";
import { NavLink } from "react-router-dom";
import {logo} from '../assets';
import {links} from '../assets/constants';
const Sidebar = () => {
   return(
    <>
     <div className="md:flex hidden flex-col w-[240px] bg-[#191624] items-center pt-7">
       <img src={logo} className="w-20 "/>
       <div className="flex flex-col text-2xl p-5 my-8">
        {links.map((link)=><NavLink className="p-3 text-white font-semibold flex flex-row"
        key={link.name}
        to={link.to}
        >
          <link.icon className="m-3 h-6"/>
          {link.name}
          </NavLink>)}
       </div>
     </div>
    </>
   )
};

export default Sidebar;
