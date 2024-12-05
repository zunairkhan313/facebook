import React from 'react'
import { BiSolidVideoPlus } from "react-icons/bi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiLaughing } from "react-icons/bs";
import Image from 'next/image';
import profile from "../../public/images/profile.jpeg"
import { HiDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

export default function PostComp() {
    return (
        <>

            <div style={{ marginTop: "15px", maxWidth: "550px" }} className=" bg-white rounded-lg shadow-sm mb-5">
                <div className='p-3 flex justify-between'>


                    <div className='flex gap-3'>
                        <div className='rounded-circle'>
                            <Image
                                src={profile}
                                alt='profile'
                                style={{ width: "48px", height: "48px", borderRadius: "50%" }}
                                className="rounded-cirlce mt-[5px]"
                            />
                        </div>
                        <div>

                            <p className='font-bold mt-2 text-sm'>Zunair</p>
                            <p className='text-[12px] text-start font-semibold text-gray-600' style={{ marginTop: "-12px" }}>Oct 2 .</p>
                        </div>
                    </div>
                    <div className='flex gap-3 mt-3'>
                        <p><HiDotsHorizontal className='text-xl' /></p>
                        <p><RxCross2 className='text-xl' /></p>
                    </div>
                </div>
                <Image
                    src={profile}
                    alt=''
                    style={{ width: "100%", height: "500px" }}
                    className='object-cover object-top'
                />
                <div style={{ height: "30px" }}>

                </div>
                <div className="container">

                    <hr />
                </div>
                <div className=' flex justify-around'>
                    <div className='flex gap-3  '>
                        <div className='p-1'><AiOutlineLike className='icon text-3xl' /></div>
                        <p className='text-black mt-2 font-sans text-md font-semibold'>Like</p>
                    </div>
                    <div className='flex gap-3  '>
                        <div className='p-1'><FaRegComment className='icon text-3xl' /></div>
                        <p className='text-black mt-2 font-sans text-md font-semibold'>Comment</p>
                    </div>
                </div>
             
            </div>
        </>
    )
}
