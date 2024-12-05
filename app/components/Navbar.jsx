"use client";

import profile from "../../public/images/profile.jpeg"
import * as React from 'react';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import { AiFillHome } from "react-icons/ai";
import { PiVideoFill } from "react-icons/pi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { CgGames } from "react-icons/cg";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../public/images/faceb.png";
import { FaBell } from "react-icons/fa";

export default function Navbars() {
  return (
    <Navbar expand="lg" className="bg-white drop-shadow-md fixed-top">
      <Container fluid>
        <Link href={"/"} className="navbar-brand d-flex align-items-center">
          <Image src={logo} alt="fb" width={60} />
        </Link>
        <div style={{ position: 'relative', display: 'inline-block', marginLeft: '20px' }}>

          <p
            className='absolute mt-1 inset-y-0 left-0 pl-3 flex items-center'
            style={{ height: "100%", border: "none", background: "transparent", cursor: "pointer", color: "gray" }}>
            <SearchIcon className='text-[20px]' />
          </p>
          <input
            id='search'
            style={{ height: "43px", borderRadius: "21px", paddingLeft: "140px" }}
            className='mt-1 border border-gray-200 py-2 px-5 bg-slate-50'
            type="text"
            placeholder='Search Facebook'
          />
        </div>


        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="ml-[80px] gap-20 d-flex align-items-center">
            <Link href="/" className="nav-link hover:bg-[#e2e5e9] rounded">
              <AiFillHome className='text-black text-[25px]' />
            </Link>
            <Link href="/videos" className="nav-link hover:bg-[#e2e5e9] rounded">
              <PiVideoFill className='text-black text-[25px]' />
            </Link>
            <Link href="/another-link" className="nav-link hover:bg-[#e2e5e9] rounded">
              <HiOutlineBuildingLibrary className='text-black text-[25px]' />
            </Link>
            <Link href="/more" className="nav-link hover:bg-[#e2e5e9] rounded">
              <CgProfile className='text-black text-[25px]' />
            </Link>
            <Link href="/more" className="nav-link hover:bg-[#e2e5e9] rounded">
              <CgGames className='text-black text-[25px]' />
            </Link>
          </Nav>
          <div className='flex gap-3 ml-32'>
            <div className='p-2 bg-[#e2e5e9] rounded-circle'>

              <BsFillGrid3X3GapFill className='text-black text-[20px] ' />
            </div>
            <div className='p-2 bg-[#e2e5e9] rounded-circle'>

              <FaFacebookMessenger className='text-black text-[20px]' />
            </div>
            <div className='p-2 bg-[#e2e5e9] rounded-circle'>

              <FaBell className='text-black text-[20px]' />
            </div>
            <div className=' bg-[#e2e5e9] rounded-circle' style={{width:"35px",height:"35px"}}>

              <Image
                src={profile}
                alt='profile'
                
                style={{width:"35px",height:"35px",borderRadius:"50%"}}
                className="rounded-cirlce"
              />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
