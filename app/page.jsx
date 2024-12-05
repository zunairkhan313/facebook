
import profile from "../public/images/profile.jpeg"
import Navbars from "./components/Navbar";
import DrawerLeft from "./components/LeftDrawer";
import SearchIcon from '@mui/icons-material/Search';
import { BiSolidVideoPlus } from "react-icons/bi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiLaughing } from "react-icons/bs";
import PostComp from "./components/PostComp";
import Image from "next/image";

export default function Home() {
  return (
    <> <style>{`
      body {
          background-color: #e2e5e9;
      }
  `}</style>

      <Navbars />
      <DrawerLeft />
      <center>

        <div style={{ maxWidth: "800px" }} className="mt-[140px]">
          <div style={{ marginTop: "-15px", maxWidth: "550px" }} className="p-3 bg-white rounded-lg shadow-sm">
            <div className='flex gap-3'>
              <div className='rounded-circle' style={{ width: "38px", height: "38px" }}>
                <Image
                  src={profile}
                  alt='profile'
                  style={{ width: "38px", height: "38px", borderRadius: "50%" }}
                  className="rounded-cirlce mt-[5px]"
                />
              </div>
              <div style={{ flexGrow: 1 }}>
                <input
                  id='search'
                  style={{ height: "43px", borderRadius: "21px", width: "100%" }}
                  className='mt-1 border border-gray-200 py-2 px-4 bg-slate-50'
                  type="text"
                  placeholder="What's on your mind.."
                />
              </div>
            </div>
            <div className="flex gap-5 mt-3 justify-center">
              <div className='flex p-2 gap-2 '>
                <div className='text-[#f21847] p-1 rounded'><BiSolidVideoPlus className='icon text-3xl' /></div>
                <p className='text-black mt-[7px] font-sans text-md font-semibold'>Live video</p>
              </div>


              <div className='flex p-2 gap-2 '>
                <div className='text-[#319723] p-1 rounded'><IoMdPhotos className='icon text-3xl' /></div>
                <p className='text-black mt-[7px] font-sans text-md font-semibold'>Photo</p>
              </div>



              <div className='flex p-2 gap-2'>
                <div className='text-[#c2b32c] p-1 rounded'><BsEmojiLaughing className='icon text-3xl' /></div>
                <p className='text-black mt-[7px] font-sans text-md font-semibold'>Feeelings</p>
              </div>
            </div>
          </div>
          <PostComp/>
        </div>
      </center>
    </>
  );
}
