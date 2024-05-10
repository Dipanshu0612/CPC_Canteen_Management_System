import React from 'react'
import {FaSquareWhatsapp} from "react-icons/fa6"
import {FaGithubSquare,FaInstagramSquare,FaLinkedin} from "react-icons/fa"

export default function Footer() {
  return (
    <>
    <div className='h-[25rem] bg-black flex flex-col flex-wrap justify-center items-center text-yellow-500 space-y-5 max-w-full md:flex-row sm:flex-row md:space-y-0 sm:space-y-0 md:h-[30rem] sm:h-[45rem]'>
        <div className='flex flex-col flex-wrap justify-center items-center space-y-5 text-center md:text-xl'>
        <p> Copyright &copy; 2023 | All Rights Reserved</p>
        <h2>CPC Canteen Management System</h2>
        <h3>Made by "The Mavericks"</h3>
        <p>A project made in the "Vadodara Police Hackathon 2023"</p>
        </div>
        <div className='h-[0.05rem] bg-yellow-500 w-[90%]'></div>

        <div className='flex justify-around items-center space-x-10 text-center cursor-pointer flex-wrap md:mx-3 md:my-3 md:space-y-0 sm:flex-col sm:space-y-5 sm:space-x-0'>
            <div classname="flex flex-col md:space-x-0 md:space-y-4 md:my-3 sm:space-x-1">
                <h4 classname="font-bold">Dipanshu Mishra</h4>
                <p>Full Stack Developer</p>
                <div className='flex justify-around items-center text-4xl mt-3 space-x-3 md:text-3xl sm:text-2xl'>
                <a href="https://www.linkedin.com/in/dipanshu-mishra-696a0622a" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaLinkedin /></a>
                <a href="https://github.com/Dipanshu0612" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaGithubSquare /></a>
                <a href="https://api.whatsapp.com/send?phone=918485974624&text=Hello, more information!"
             className='text-yellow-500 hover:text-yellow-600 transition-all'><FaSquareWhatsapp /></a>
                <a href="https://www.instagram.com/_.dipanshu._06/" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaInstagramSquare /></a>
                </div>
            </div>
            <div classname="flex flex-col md:space-x-0 md:space-y-4 md:my-3 sm:space-x-1">
                <h4 classname="font-bold">Arsh Quadri</h4>
                <p>Full Stack Developer</p>
                <div className='flex justify-around items-center text-4xl mt-3 space-x-3 md:text-3xl sm:text-2xl'>
                <a href="https://www.linkedin.com/in/arsh-quadri-60994b243/" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaLinkedin /></a>
                <a href="https://github.com/Arsh-Quadri" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaGithubSquare /></a>
                <a href="https://api.whatsapp.com/send?phone=919429091481&text=Hello, more information!"
             className='text-yellow-500 hover:text-yellow-600 transition-all'><FaSquareWhatsapp /></a>
                <a href="https://www.instagram.com/_.dipanshu._06/" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaInstagramSquare /></a>
                </div>
            </div>
            <div classname="flex flex-col md:space-x-0 md:space-y-4 md:my-3 sm:space-x-1">
                <h4 classname="font-bold">Khushal Dave</h4>
                <p>Full Stack Developer</p>
                <div className='flex justify-around items-center text-4xl mt-3 space-x-3 md:text-3xl sm:text-2xl'>
                <a href="https://www.linkedin.com/in/khushal-dave-b11438253/" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaLinkedin /></a>
                <a href="https://github.com/Khushall-7" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaGithubSquare /></a>
                <a href="https://api.whatsapp.com/send?phone=918866615069&text=Hello, more information!"
             className='text-yellow-500 hover:text-yellow-600 transition-all'><FaSquareWhatsapp /></a>
                <a href="https://www.instagram.com/_.dipanshu._06/" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaInstagramSquare /></a>
                </div>
            </div>
            <div classname="flex flex-col md:space-x-0 md:space-y-4 md:my-3 sm:space-x-1">
                <h4 classname="font-bold">Ved Thakar</h4>
                <p>Full Stack Developer</p>
                <div className='flex justify-around items-center text-4xl mt-3 space-x-3 md:text-3xl sm:text-2xl'>
                <a href="https://www.linkedin.com/in/ved-thakar/" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaLinkedin /></a>
                <a href="https://github.com/turntved" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaGithubSquare /></a>
                <a href="https://api.whatsapp.com/send?phone=916355543672&text=Hello, more information!"
             className='text-yellow-500 hover:text-yellow-600 transition-all'><FaSquareWhatsapp /></a>
                <a href="https://www.instagram.com/_.dipanshu._06/" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaInstagramSquare /></a>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}
