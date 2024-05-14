import Link from 'next/link';
import { FaBars,FaYoutube  } from "react-icons/fa";

const Header = () => {
  return (
    <header className=" flex items-center justify-between px-4 py-2">
     <div className='logo  flex gap-3 items-center '>
    <span><FaBars /></span> 
    <div className='flex  items-center'><FaYoutube /> <span className='text-2xl'>YouTube</span></div>


     </div>
    </header>
  );
};

export default Header;