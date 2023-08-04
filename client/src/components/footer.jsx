import React from 'react'
import {FaSquareWhatsapp} from "react-icons/fa6"
import {FaGithubSquare,FaInstagramSquare,FaLinkedin} from "react-icons/fa"

export default function () {
  return (
    <>
    <div className='h-[25rem] bg-black flex flex-col flex-wrap justify-center items-center text-yellow-500 space-y-5'>
        <p> Copyright &copy; 2023 | All Rights Reserved</p>
        <h2>CPC Canteen Management System</h2>
        <h3>Made by "The Mavericks"</h3>
        <p>A project made in the "Vadodara Police Hackathon 2023"</p>
        
        <div className='h-[0.05rem] bg-yellow-500 w-[90%]'></div>

        <div className='flex justify-around items-center space-x-10 text-center cursor-pointer'>
            <div>
                <h4 classname="font-bold">Dipanshu Mishra</h4>
                <p>Full Stack Developer</p>
                <div className='flex justify-around items-center text-4xl mt-3 space-x-3 '>
                <a href="https://www.linkedin.com/in/dipanshu-mishra-696a0622a" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaLinkedin /></a>
                <a href="https://github.com/Dipanshu0612" target="_blank" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaGithubSquare /></a>
                <a href="https://api.whatsapp.com/send?phone=918485974624&text=Hello, more information!"
                target="_blank" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaSquareWhatsapp /></a>
                <a href="https://www.instagram.com/_.dipanshu._06/" target="_blank" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaInstagramSquare /></a>
                </div>
            </div>
            <div>
                <h4 classname="font-bold">Arsh Quadri</h4>
                <p>Full Stack Developer</p>
                <div className='flex justify-around items-center text-4xl mt-3 space-x-3 '>
                <a href="https://www.linkedin.com/in/arsh-quadri-60994b243/" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaLinkedin /></a>
                <a href="https://github.com/Arsh-Quadri" target="_blank" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaGithubSquare /></a>
                <a href="https://api.whatsapp.com/send?phone=919429091481&text=Hello, more information!"
                target="_blank" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaSquareWhatsapp /></a>
                <a href="https://www.instagram.com/_.dipanshu._06/" target="_blank" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaInstagramSquare /></a>
                </div>
            </div>
            <div>
                <h4 classname="font-bold">Khushal Dave</h4>
                <p>Full Stack Developer</p>
                <div className='flex justify-around items-center text-4xl mt-3 space-x-3 '>
                <a href="https://www.linkedin.com/in/khushal-dave-b11438253/" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaLinkedin /></a>
                <a href="https://github.com/Khushall-7" target="_blank" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaGithubSquare /></a>
                <a href="https://api.whatsapp.com/send?phone=918866615069&text=Hello, more information!"
                target="_blank" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaSquareWhatsapp /></a>
                <a href="https://www.instagram.com/_.dipanshu._06/" target="_blank" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaInstagramSquare /></a>
                </div>
            </div>
            <div>
                <h4 classname="font-bold">Ved Thakar</h4>
                <p>Full Stack Developer</p>
                <div className='flex justify-around items-center text-4xl mt-3 space-x-3 '>
                <a href="https://www.linkedin.com/in/ved-thakar/" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaLinkedin /></a>
                <a href="https://github.com/turntved" target="_blank" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaGithubSquare /></a>
                <a href="https://api.whatsapp.com/send?phone=916355543672&text=Hello, more information!"
                target="_blank" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaSquareWhatsapp /></a>
                <a href="https://www.instagram.com/_.dipanshu._06/" target="_blank" className='text-yellow-500 hover:text-yellow-600 transition-all'><FaInstagramSquare /></a>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}
