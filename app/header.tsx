import Link from 'next/link';
import { FaBars,FaYoutube,FaSearch  } from "react-icons/fa";
import { MdKeyboardVoice,MdNotificationsNone } from "react-icons/md";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { TbCircleLetterBFilled } from "react-icons/tb";
import { GoSearch } from "react-icons/go";

const Header = () => {
  return (
    <header className="  flex items-center justify-between px-4 py-3   shadow-sm ">
     <div className='logo  flex gap-5 items-center  '>
    <span className='text-xl' ><FaBars /></span> 
    <Link href='/' className='flex  items-center text-2xl gap-2 ml-4 cursor-pointer'> <span className='text-red-600 text-[35px] cursor-pointer'> <FaYoutube /></span> <span className='    text-2xl'>YouTube</span></Link>

     </div>

     <div className='hidden md:flex items-center gap-4 '>
     <label className="input input-bordered input-rounded-full flex  gap-2  items-center shrink-0">
  <input type="text" className=" w-[350px] h-4 " placeholder="Search  " />
  <i className='text-slate-400'><GoSearch /></i>
</label>
<span className='bg-gray-500 rounded-full text-xl p-2  text-white'><MdKeyboardVoice /></span>
     </div>
     
     <div className='flex lg:gap-2   text-slate-500 '>
<span className=' hover:text-white rounded-full p-2 text-lg md:hidden '><FaSearch /></span>

<span className='hover:bg-gray-500 hover:text-white rounded-full p-2 text-xl md:hidden '><MdKeyboardVoice /></span>

<span className='hover:bg-gray-500 hover:text-white rounded-full p-2 text-xl '><AiOutlineVideoCameraAdd /></span>
<span className='hover:bg-gray-500 hover:text-white  rounded-full p-2 text-xl '><MdNotificationsNone /></span>
<span className='bg-gray-500 rounded-full font-bold text-xl p-2 text-white '><TbCircleLetterBFilled /></span>
     </div>
    </header>
  );
};

export default Header;