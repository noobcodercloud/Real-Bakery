import React, { useState } from 'react'
import GoogleIcon from '../../images/google.png'
import FaceBookIcon from '../../images/facebook.png'
import PhoneIcon from '../../images/phone.png'

function SignIn() {

    const [Background, setBackground] = useState("bg-amber-100");
    const [OtherBackground, setOtherBackground] = useState("bg-amber-200");

    const HandleClick = (e) => {
        
        let temp = "";
        let otherTemp = "";
        if ( e.target.classList.contains(Background) ) {
            temp = "bg-amber-200";
            otherTemp = "bg-amber-100";
        } else if ( e.target.classList.contains(OtherBackground) ) {
            temp = "bg-amber-100";
            otherTemp = "bg-amber-200";
        } else {
            temp = "bg-amber-200";
            otherTemp = "bg-amber-100";
        }

        setBackground(temp);
        setOtherBackground(otherTemp);
    }

    const inputFieldClass = "border-2 border-amber-950 w-[90%] py-3 rounded-xl bg-white shadow-lg px-7 hover:scale-[1.02] transition-all duration-300";
    const socialButtonClass = "border-2 border-amber-950 w-[90%] py-3 rounded-xl bg-white shadow-lg flex items-center justify-between px-10 hover:scale-105 hover:shadow-2xl transition-all duration-300";

    return (
        <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50'>
            <div className='w-full rounded-3xl flex flex-col shadow-[0_20px_60px_rgba(120,53,15,0.3)] sm:flex-row sm:my-30 sm:mx-20 my-10 mx-5 border-4 border-amber-900 overflow-hidden'>
                
                {/* Left Side - Sign In Form */}
                <div 
                className={`${OtherBackground} sm:rounded-l-3xl sm:rounded-t-none rounded-t-3xl w-full flex flex-col items-center justify-evenly gap-8 py-12 px-5 lg:px-30 transition-all duration-500`}
                onClick={HandleClick}
                >
                    {/* Header */}
                    <div className='text-center pointer-events-none'>
                        <div className='text-3xl font-bold text-amber-950 mb-2'>Welcome Back</div>
                        <p className='text-amber-900'>Sign in to your account</p>
                    </div>

                    <div className={inputFieldClass}>
                        <div className='font-semibold text-amber-950 mb-2'>Username or Email</div>
                        <input type="text" className='border-2 border-amber-300 rounded-lg w-full px-3 py-2 bg-white focus:border-amber-600 focus:outline-none transition-colors' />
                    </div>
                    <div className={inputFieldClass}>
                        <div className='font-semibold text-amber-950 mb-2'>Password</div>
                        <input type="password" className='border-2 border-amber-300 rounded-lg w-full px-3 py-2 focus:border-amber-600 focus:outline-none transition-colors' />
                    </div>
                    <div className={inputFieldClass}>
                        <div className='font-semibold text-amber-950 mb-2'>Re-enter Password</div>
                        <input type="password" className='border-2 border-amber-300 rounded-lg w-full px-3 py-2 focus:border-amber-600 focus:outline-none transition-colors' />
                    </div>
                    <button className='border-2 border-amber-950 px-12 py-3 rounded-full bg-linear-to-r from-amber-500 to-orange-500 hover:from-green-600 hover:to-green-700 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 transform hover:-translate-y-1'>
                        SUBMIT
                    </button>
                </div>

                <div className='bg-amber-900 h-1 w-full sm:w-1 sm:h-auto'></div>

                {/* Right Side - Other Sign In Options */}
                <div className={`${Background} sm:rounded-r-3xl sm:rounded-l-none rounded-b-3xl w-full flex flex-col justify-evenly items-center gap-8 py-12 transition-all duration-500 lg:px-30`}
                onClick={HandleClick}
                >
                    <div className='text-center pointer-events-none'>
                        <div className='text-3xl font-bold text-amber-950 mb-2'>Quick Sign In</div>
                        <p className='text-amber-900'>Choose your preferred method</p>
                    </div>

                    <button className={socialButtonClass}>
                        <div>
                            <img src={GoogleIcon} alt="" width={28} />
                        </div>
                        <div className='font-semibold text-amber-950'>Google</div>
                    </button>

                    <button className={socialButtonClass}>
                        <div>
                            <img src={FaceBookIcon} alt="" width={28}/>
                        </div>
                        <div className='font-semibold text-amber-950'>Facebook</div>
                    </button>

                    <button className={socialButtonClass}>
                        <div>
                            <img src={PhoneIcon} alt="" width={28}/>
                        </div>
                        <div className='font-semibold text-amber-950'>Mobile Number</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignIn