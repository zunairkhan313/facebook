"use client"

import React, { useState } from 'react'
import facebook from "../../public/images/facebook.png"
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function LoginForm() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [firstName, setFirstName] = useState("");
    const [surName, setSurName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [image, setImage] = useState("");


    const handleUploadImage = (e) => {
        const files = e.target.files;
        const urls = [];

        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();

            reader.onload = (e) => {
                urls.push(e.target.result);
                if (urls.length === files.length) {
                    setImage(urls);
                }
            };

            reader.readAsDataURL(files[i]);
        }
    };


    // const capitalizeFirstLetter = (text) => {
    //     if (!text) return text;
    //     return text.charAt(0).toUpperCase() + text.slice(1);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const capitalizedName = capitalizeFirstLetter(firstName);
        // const capitalizedSurName = capitalizeFirstLetter(surName);

        if (!firstName || !surName || !email || !password) {
            setError("All fields are necessary.");
            return;
        }

        try {
            const resUserExists = await fetch("/api/userExists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const { user } = await resUserExists.json();

            if (user) {
                setError("User already exists.");
                return;
            }

            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    surName,
                    email,
                    password,
                    image
                }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                alert("ok")
                // router.push("/login");
            } else {
                console.log("User registration failed.");
                alert("no")
            }
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };

    return (
        <>
            <style>{`
        body {
          background-color: rgb(241 245 249);
        }
        `}</style>

            {/* Modal */}


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>


                        <div className='flex gap-2'>

                            <input value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                placeholder='First name'
                                className='py-2 px-2 border rounded-md border-[#f0f0f0]'
                                required />

                            <input value={surName}
                                onChange={(e) => setSurName(e.target.value)}
                                type="text"
                                placeholder='Surename'
                                className='py-2 px-2 border rounded-md border-[#f0f0f0]'
                                required />

                        </div>

                        <input value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            className='py-2 mt-2 px-2 w-full border rounded-md border-[#f0f0f0]'
                            placeholder='Mobile number or email address'
                            required />

                        <input value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="text"
                            className='py-2 px-2 mt-2 w-full border rounded-md border-[#f0f0f0]'
                            placeholder='New password'
                            required />

                        <input type="file"
                            onChange={handleUploadImage}
                            className='py-2 px-2 mt-2 w-full border rounded-md border-[#f0f0f0]'
                            required />

                        <label for="date" className='text-[11px] mt-3 font-semibold'>Date of birth?</label><br />
                        <div className='flex gap-3'>

                            <select required className='border border-[#f0f0f0] p-1 w-full py-2 rounded-md '>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12" selected>12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select required className='border border-[#f0f0f0] p-1 w-full py-2 rounded-md'>
                                <option value="Jan">Jan</option>
                                <option value="Feb">Feb</option>
                                <option value="Mar">Mar</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="Aug">Aug</option>
                                <option value="Sep">Sep</option>
                                <option value="Oct" selected>Oct</option>
                                <option value="Nov">Nov</option>
                                <option value="Dec">Dec</option>
                            </select>
                            <select required className='border border-[#f0f0f0] p-1 w-full py-2 rounded-md'>

                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                                <option value="1999">1999</option>
                                <option value="1998">1998</option>
                                <option value="1997">1997</option>
                                <option value="1996">1996</option>
                                <option value="1995">1995</option>
                                <option value="1994">1994</option>
                                <option value="1993">1993</option>
                                <option value="1992">1992</option>
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                                <option value="1989">1989</option>
                                <option value="1988">1988</option>
                                <option value="1987">1987</option>
                                <option value="1986">1986</option>
                                <option value="1985">1985</option>
                                <option value="1984">1984</option>
                                <option value="1983">1983</option>
                                <option value="1982">1982</option>
                                <option value="1981">1981</option>
                                <option value="1980">1980</option>
                            </select>

                        </div>
                        <label for="gender" className='text-[11px] mt-3 font-semibold'>Gender?</label><br />
                        <div className='flex gap-3'>
                            <div className='border border-[#f0f0f0] p-2 w-full py-2 rounded-md flex gap-5 justify-between'>
                                <label for="Male">Male</label>
                                <input type="radio" className='radio' name="gender" id="Male" required />
                            </div>
                            <div className='border border-[#f0f0f0] p-2 w-full py-2 rounded-md flex gap-5 justify-between'>
                                <label for="Female">Female</label>
                                <input type="radio" className='radio' name="gender" id="Female" required />
                            </div>
                            <div className='border border-[#f0f0f0] p-2 w-full py-2 rounded-md flex justify-between'>
                                <label for="Custom">Custom</label>
                                <input type="radio" className='radio' name="gender" id="Custom" required />
                            </div>
                        </div>
                        <p className='text-[11px] mt-3 font-semibold'>People who use our service may have uploaded your contact information to <br />
                            Facebook</p>
                        <p className='text-[11px] mt-3 font-semibold'>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>

                        {error && (
                            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                                {error}
                            </div>
                        )}

                        <div className="d-flex justify-content-center">
                            <button variant="primary" type='submit' className='py-2 px-14 bg-[#24b324] text-white font-bold text-[18px] rounded'>Sign Up</button>
                        </div>
                    </form>


                </Modal.Body>

            </Modal>

            {/* modal close */}


            <div>
                <div className='container'>
                    <div className="row">

                        <div className="flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                            <div className="col-lg-6 d-flex flex-column">
                                <Image src={facebook} width={250} height={200} alt='fb' />
                                <p className='text-[28px] mt-[-28px]'>
                                    Facebook helps you connect and share with the people in your life.
                                </p>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center ">
                                <div className='shadow-md p-4 rounded-lg text-center bg-white'>
                                    <input type="text" className='py-3 px-3 w-96 border rounded-lg border-[#f0f0f0]' placeholder='Email address or phone number' /><br />
                                    <input type="text" className='py-3 mt-3 px-3 w-96 border rounded-lg border-[#f0f0f0]' placeholder='Password' /><br />
                                    <button className='py-3 mt-3 px-3 w-96 bg-[#185df2] rounded-lg text-[18px] font-bold text-white'>Log in</button><br />
                                    <p className='text-center text-sm text-[#003fee] mt-3'>Forgotten password?</p>
                                    <hr />
                                    <div className="d-flex justify-content-center">
                                        <button variant="primary" onClick={handleShow} className='py-2 px-3 bg-[#32CD32] text-white font-bold text-[17px] rounded'>Create new account</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
