import React, { useState } from 'react'
import GoogleIcon from '../../images/google.png'
import FaceBookIcon from '../../images/facebook.png'
import PhoneIcon from '../../images/phone.png'

function SignIn() {

    const [Background, setBackground] = useState("bg-amber-700");
    const [OtherBackground, setOtherBackground] = useState("bg-amber-200");

    const HandleClick = (e) => {
        
        let temp = "";
        let otherTemp = "";
        if ( e.target.classList.contains(Background) ) {
            temp = "bg-amber-200";
            otherTemp = "bg-amber-700";
        } else if ( e.target.classList.contains(OtherBackground) ) {
            temp = "bg-amber-700";
            otherTemp = "bg-amber-200";
        } else {
            temp = "bg-amber-200";
            otherTemp = "bg-amber-700";
        }

        setBackground(temp);
        setOtherBackground(otherTemp);
    }

    const inputFieldClass = "border border-amber-950 w-[90%] py-2 rounded-lg bg-white shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] px-7";
    const socialButtonClass = "border border-amber-950 w-[90%] py-2 rounded-lg bg-white shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] flex items-center justify-between px-10";

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='w-full rounded-2xl flex flex-col shadow-[0_8px_20px_rgba(0,0,0,0.8)] sm:flex-row sm:my-30 sm:mx-20 my-10 mx-5'>
                
                {/* Left Side - Sign In Form */}
                <div 
                className={`${OtherBackground} sm:rounded-l-2xl sm:rounded-t-none rounded-t-2xl w-full flex flex-col items-center justify-evenly gap-6 py-10 px-5 lg:px-30 transition-all duration-500`}
                onClick={HandleClick}
                >
                    <div className={inputFieldClass}>
                        <div>Username or Email</div>
                        <input type="text" className='border rounded-md w-full px-3 bg-white' />
                    </div>
                    <div className={inputFieldClass}>
                        <div>Password</div>
                        <input type="password" className='border rounded-md w-full px-3' />
                    </div>
                    <div className={inputFieldClass}>
                        <div>Re-enter Password</div>
                        <input type="password" className='border rounded-md w-full px-3' />
                    </div>
                    <button className='border px-10 py-1 rounded-2xl bg-white hover:bg-green-700 hover:text-white transition-all duration-300 hover:scale-105'>
                        SUBMIT
                    </button>
                </div>

                <div className='bg-amber-800 h-px w-full sm:w-0 sm:h-0'></div>

                {/* Right Side - Other Sign In Options */}
                <div className={`${Background} sm:rounded-r-2xl sm:rounded-l-none rounded-b-2xl w-full flex flex-col justify-evenly items-center gap-6 py-10 transition-all duration-500 lg:px-30`}
                onClick={HandleClick}
                >
                    <div className='text-2xl text-center text-amber-950'>
                        Other Sign In Options
                    </div>

                    <button className={socialButtonClass}>
                        <div>
                            <img src={GoogleIcon} alt="" width={24} />
                        </div>
                        <div>Google</div>
                    </button>

                    <button className={socialButtonClass}>
                        <div>
                            <img src={FaceBookIcon} alt="" width={24}/>
                        </div>
                        <div>Facebook</div>
                    </button>

                    <button className={socialButtonClass}>
                        <div>
                            <img src={PhoneIcon} alt="" width={24}/>
                        </div>
                        <div>Mobile Number</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignIn