import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import GoogleIcon from '../../images/google.png'
import FaceBookIcon from '../../images/facebook.png'
import PhoneIcon from '../../images/phone.png'

function SignIn() {

    const [Background, setBackground] = useState("bg-amber-100");
    const [OtherBackground, setOtherBackground] = useState("bg-amber-200");

    const HandleClick = (e) => {

        let temp = "";
        let otherTemp = "";
        if (e.target.classList.contains(Background)) {
            temp = "bg-amber-200";
            otherTemp = "bg-amber-100";
        } else if (e.target.classList.contains(OtherBackground)) {
            temp = "bg-amber-100";
            otherTemp = "bg-amber-200";
        } else {
            temp = "bg-amber-200";
            otherTemp = "bg-amber-100";
        }

        setBackground(temp);
        setOtherBackground(otherTemp);
    }

    const inputFieldClass = "w-full space-y-2";
    const socialButtonClass = "group relative w-full py-4 px-6 bg-white border-2 border-amber-200 rounded-2xl hover:border-amber-700 hover:shadow-lg transition-all duration-300 flex items-center gap-4";

    return (
        <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50 p-4 pt-30'>
            <div className='w-full max-w-6xl rounded-3xl flex flex-col sm:flex-row shadow-[0_20px_60px_rgba(120,53,15,0.2)] overflow-hidden border border-amber-200/50 backdrop-blur-sm'>

                {/* Left Side - Sign In Form */}
                <div
                    className={`${OtherBackground} w-full sm:w-1/2 flex flex-col items-center justify-center gap-6 py-16 px-8 lg:px-16 transition-all duration-500 relative`}
                    onClick={HandleClick}
                >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-700/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-600/5 rounded-full blur-3xl pointer-events-none"></div>

                    {/* Header */}
                    <div className='text-center pointer-events-none space-y-2 mb-4'>
                        <div className='text-4xl font-bold bg-linear-to-r from-amber-900 to-amber-700 bg-clip-text text-transparent'>Welcome Back</div>
                        <p className='text-amber-800 text-sm'>Sign in to continue your journey</p>
                        <div className="w-16 h-1 bg-amber-700 mx-auto rounded-full mt-3"></div>
                    </div>

                    <div className='w-full max-w-md space-y-5'>
                        <div className={inputFieldClass}>
                            <label className='font-semibold text-amber-900 text-sm uppercase tracking-wide'>Email Address</label>
                            <input 
                                type="text" 
                                placeholder='name@example.com'
                                className='w-full px-4 py-3 border-2 border-amber-300/50 rounded-xl bg-white/80 backdrop-blur-sm focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700/20 transition-all' 
                            />
                        </div>
                        <div className={inputFieldClass}>
                            <label className='font-semibold text-amber-900 text-sm uppercase tracking-wide'>Password</label>
                            <input 
                                type="password" 
                                placeholder='Enter your password'
                                className='w-full px-4 py-3 border-2 border-amber-300/50 rounded-xl bg-white/80 backdrop-blur-sm focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700/20 transition-all' 
                            />
                        </div>
                        <div className={inputFieldClass}>
                            <label className='font-semibold text-amber-900 text-sm uppercase tracking-wide'>Confirm Password</label>
                            <input 
                                type="password" 
                                placeholder='Re-enter your password'
                                className='w-full px-4 py-3 border-2 border-amber-300/50 rounded-xl bg-white/80 backdrop-blur-sm focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700/20 transition-all' 
                            />
                        </div>
                        
                        <button className='w-full py-4 rounded-xl bg-linear-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform mt-6 uppercase tracking-wide text-sm'>
                            Sign In
                        </button>

                        <div className='text-center text-sm text-amber-700 hover:text-amber-900 cursor-pointer transition-colors mt-3'>
                            Forgot Password?
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className='bg-linear-to-b from-amber-300 to-amber-700 h-0.5 w-full sm:w-0.5 sm:h-auto'></div>

                {/* Right Side - Social Sign In */}
                <div className={`${Background} w-full sm:w-1/2 flex flex-col justify-center items-center gap-6 py-16 px-8 lg:px-16 transition-all duration-500 relative`}
                    onClick={HandleClick}
                >
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-amber-700/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-600/5 rounded-full blur-3xl pointer-events-none"></div>

                    <div className='text-center pointer-events-none space-y-2 mb-4'>
                        <div className='text-4xl font-bold bg-linear-to-r from-amber-900 to-amber-700 bg-clip-text text-transparent'>Quick Access</div>
                        <p className='text-amber-800 text-sm'>Continue with your favorite platform</p>
                        <div className="w-16 h-1 bg-amber-700 mx-auto rounded-full mt-3"></div>
                    </div>

                    <div className='w-full max-w-md space-y-4'>
                        <button className={socialButtonClass}>
                            <div className='w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors'>
                                {/* Google Icon Placeholder */}
                                <div className='w-5 h-5 bg-amber-700 rounded-full'></div>
                            </div>
                            <div className='flex-1 text-left'>
                                <div className='font-bold text-amber-950'>Continue with Google</div>
                                <div className='text-xs text-amber-700'>Quick and secure</div>
                            </div>
                            <div className='text-amber-700 group-hover:translate-x-1 transition-transform'>→</div>
                        </button>

                        <button className={socialButtonClass}>
                            <div className='w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors'>
                                {/* Facebook Icon Placeholder */}
                                <div className='w-5 h-5 bg-amber-700 rounded-full'></div>
                            </div>
                            <div className='flex-1 text-left'>
                                <div className='font-bold text-amber-950'>Continue with Facebook</div>
                                <div className='text-xs text-amber-700'>Connect instantly</div>
                            </div>
                            <div className='text-amber-700 group-hover:translate-x-1 transition-transform'>→</div>
                        </button>

                        <button className={socialButtonClass}>
                            <div className='w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors'>
                                {/* Phone Icon Placeholder */}
                                <div className='w-5 h-5 bg-amber-700 rounded-full'></div>
                            </div>
                            <div className='flex-1 text-left'>
                                <div className='font-bold text-amber-950'>Continue with Phone</div>
                                <div className='text-xs text-amber-700'>OTP verification</div>
                            </div>
                            <div className='text-amber-700 group-hover:translate-x-1 transition-transform'>→</div>
                        </button>

                        <div className='text-center pt-6'>
                            <p className='text-sm text-amber-800'>
                                Don't have an account? 
                                <span className='font-bold text-amber-900 hover:text-amber-700 cursor-pointer transition-colors ml-1'>Sign Up</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn