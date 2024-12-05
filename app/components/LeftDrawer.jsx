import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';
import { TfiMenuAlt } from "react-icons/tfi";
import Image from 'next/image';
import profile from "../../public/images/profile.jpeg"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HistoryIcon from '@mui/icons-material/History';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { PiVideoFill } from "react-icons/pi";
import StorefrontIcon from '@mui/icons-material/Storefront';
import ChatIcon from '@mui/icons-material/Chat';
import { HiDotsHorizontal } from "react-icons/hi";
import pic1 from "../../public/images/pic1.jpg"
import pic2 from "../../public/images/pic2.jpg"
import pic3 from "../../public/images/pic3.jpg"
import pic4 from "../../public/images/pic4.webp"
import pic5 from "../../public/images/pic5.jpg"
import pic6 from "../../public/images/pic6.jpg"
import pic7 from "../../public/images/pic7.jpg"
import pic8 from "../../public/images/pic8.webp"
import pic9 from "../../public/images/pic9.jpg"


const drawerWidth = 240;
const drawerWidthRight = 300;

export default function DrawerLeft() {
    return (
        <><style>{`
            body {
                background-color: #e2e5e9;
            }
        `}</style>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar

                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                >

                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            border: "none",
                            marginTop: "78px"
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar />

                    <List style={{ marginTop: "-65px", backgroundColor: "#e2e5e9" }} className='px-2 mb-2'>

                        {/* <Link href={"/"}> */}

                        <div className='flex p-2 gap-3 mt-3 '>
                            <div className=' bg-[#e2e5e9] rounded-circle' style={{ width: "35px", height: "35px" }}>

                                <Image
                                    src={profile}
                                    alt='profile'

                                    style={{ width: "35px", height: "35px", borderRadius: "50%" }}
                                    className="rounded-cirlce"
                                />
                            </div>
                            <p className='text-black mt-2 font-sans text-md font-semibold'>Zunair Khan</p>
                        </div>
                        <div className='flex p-2 gap-3  '>
                            <div className='text-[#1877F2] p-1 rounded'><PeopleAltIcon className='icon text-3xl' /></div>
                            <p className='text-black mt-2 font-sans text-md font-semibold'>Friends</p>
                        </div>
                        <div className='flex p-2 gap-3  '>
                            <div className='text-[#1877F2] p-1 rounded'><BookmarkIcon className='icon text-3xl' /></div>
                            <p className='text-black mt-2 font-sans text-md font-semibold'>Saved</p>
                        </div>
                        <div className='flex p-2 gap-3  '>
                            <div className='text-[#1877F2] p-1 rounded'><HistoryIcon className='icon text-3xl' /></div>
                            <p className='text-black mt-2 font-sans text-md font-semibold'>Memories</p>
                        </div>
                        <div className='flex p-2 gap-3  '>
                            <div className='text-[#1877F2] p-1 rounded'><PeopleOutlineIcon className='icon text-3xl' /></div>
                            <p className='text-black mt-2 font-sans text-md font-semibold'>Groups</p>
                        </div>
                        <div className='flex p-2 gap-3  '>
                            <div className='text-[#1877F2] p-1 rounded'><PiVideoFill className='icon text-3xl' /></div>
                            <p className='text-black mt-2 font-sans text-md font-semibold'>Video</p>
                        </div>
                        <div className='flex p-2 gap-3  '>
                            <div className='text-[#1877F2] p-1 rounded'><StorefrontIcon className='icon text-3xl' /></div>
                            <p className='text-black mt-2 font-sans text-md font-semibold'>Market Place</p>
                        </div>
                        <div className='flex p-2 gap-3  '>
                            <div className='text-[#1877F2] p-1 rounded'><ChatIcon className='icon text-3xl' /></div>
                            <p className='text-black mt-2 font-sans text-md font-semibold'>Feeds</p>
                        </div>
                        {/* </Link> */}
                    </List>


                </Drawer>

                <Drawer
                    sx={{
                        width: drawerWidthRight,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidthRight,
                            border: "none",
                            marginTop: "78px"
                        },
                    }}
                    variant="permanent"
                    anchor="right"
                >
                    <Toolbar />

                    <List style={{ marginTop: "-65px", backgroundColor: "#e2e5e9" }} className='px-2 mb-2'>
                        <div className='flex justify-between mt-2'>
                            <h6>Contact</h6>
                            <p><HiDotsHorizontal className='text-xl' /></p>
                        </div>
                        <div className='flex p-2 gap-3 mt-3 '>
                            <div className=' bg-[#e2e5e9] rounded-circle' style={{ width: "35px", height: "35px" }}>

                                <Image
                                    src={profile}
                                    alt='profile'

                                    style={{ width: "35px", height: "35px", borderRadius: "50%" }}
                                    className="rounded-cirlce"
                                />
                            </div>
                            <p className='text-black mt-2 font-sans text-md font-semibold'>Zunair Khan</p>
                        </div>
                        <div style={{ marginTop: "-15px" }} className='flex p-2 gap-3 '>
                            <div className=' bg-[#e2e5e9] rounded-circle' style={{ width: "35px", height: "35px" }}>

                                <Image
                                    src={pic8}
                                    alt='profile'

                                    style={{ width: "35px", height: "35px", borderRadius: "50%" }}
                                    className="rounded-cirlce"
                                />
                            </div>
                            <p className='text-black mt-2 font-sans text-md font-semibold'>Laiba Khan</p>
                        </div>
                        <div style={{ marginTop: "-15px" }} className='flex p-2 gap-3 '>
                            <div className=' bg-[#e2e5e9] rounded-circle' style={{ width: "35px", height: "35px" }}>

                                <Image
                                    src={pic1}
                                    alt='profile'

                                    style={{ width: "35px", height: "35px", borderRadius: "50%" }}
                                    className="rounded-cirlce"
                                />
                            </div>
                            <p className='text-black mt-2 font-sans text-md font-semibold'>Hasan Ahmed</p>
                        </div>
                        <div style={{ marginTop: "-15px" }} className='flex p-2 gap-3 '>
                            <div className=' bg-[#e2e5e9] rounded-circle' style={{ width: "35px", height: "35px" }}>

                                <Image
                                    src={pic2}
                                    alt='profile'

                                    style={{ width: "35px", height: "35px", borderRadius: "50%" }}
                                    className="rounded-cirlce"
                                />
                            </div>
                            <p className='text-black mt-2 font-sans text-md font-semibold'>Ahmed Bilal</p>
                        </div>
                        <div style={{ marginTop: "-15px" }} className='flex p-2 gap-3 '>
                            <div className=' bg-[#e2e5e9] rounded-circle' style={{ width: "35px", height: "35px" }}>

                                <Image
                                    src={pic3}
                                    alt='profile'

                                    style={{ width: "35px", height: "35px", borderRadius: "50%" }}
                                    className="rounded-cirlce"
                                />
                            </div>
                            <p className='text-black mt-2 font-sans text-md font-semibold'>Nahyan Hussain</p>
                        </div>
                        <div style={{ marginTop: "-15px" }} className='flex p-2 gap-3  '>
                            <div className=' bg-[#e2e5e9] rounded-circle' style={{ width: "35px", height: "35px" }}>

                                <Image
                                    src={pic4}
                                    alt='profile'

                                    style={{ width: "35px", height: "35px", borderRadius: "50%" }}
                                    className="rounded-cirlce"
                                />
                            </div>
                            <p className='text-black mt-2 font-sans text-md font-semibold'>Shees Khan</p>
                        </div>
                        <div style={{ marginTop: "-15px" }} className='flex p-2 gap-3 '>
                            <div className=' bg-[#e2e5e9] rounded-circle' style={{ width: "35px", height: "35px" }}>

                                <Image
                                    src={pic5}
                                    alt='profile'

                                    style={{ width: "35px", height: "35px", borderRadius: "50%" }}
                                    className="rounded-cirlce"
                                />
                            </div>
                            <p className='text-black mt-2 font-sans text-md font-semibold'>Arsalan</p>
                        </div>
                        <div style={{ marginTop: "-15px" }} className='flex p-2 gap-3 '>
                            <div className=' bg-[#e2e5e9] rounded-circle' style={{ width: "35px", height: "35px" }}>

                                <Image
                                    src={pic6}
                                    alt='profile'

                                    style={{ width: "35px", height: "35px", borderRadius: "50%" }}
                                    className="rounded-cirlce"
                                />
                            </div>
                            <p className='text-black mt-2 font-sans text-md font-semibold'>Shayan Khan</p>
                        </div>
                        <div style={{ marginTop: "-15px" }} className='flex p-2 gap-3 '>
                            <div className=' bg-[#e2e5e9] rounded-circle' style={{ width: "35px", height: "35px" }}>

                                <Image
                                    src={pic7}
                                    alt='profile'

                                    style={{ width: "35px", height: "35px", borderRadius: "50%" }}
                                    className="rounded-cirlce"
                                />
                            </div>
                            <p className='text-black mt-2 font-sans text-md font-semibold'>Afzal Shar</p>
                        </div>


                    </List>


                </Drawer>
            </Box>
        </>
    );
}
