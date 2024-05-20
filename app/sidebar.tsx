

import React, { useState } from 'react';
import { AiFillHome } from "react-icons/ai";


const Sidebar = () => {
  

  return (
   <div className='px-4 py-4 flex-row'>
    <div className='flex-row items-center justify-center '>
      <i><AiFillHome /></i>
      <span className='text-[10px]'>Home</span>
    </div>
    </div>
  );
};

export default Sidebar;