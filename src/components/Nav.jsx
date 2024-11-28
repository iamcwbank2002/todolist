
import { useState } from "react"
import logo from "../assets/logo.png"


function Nav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
  <div>
      
      <header className="flex justify-between items-center text-white py-6 px-8
          md:px-32 bg-[#8E05C2] drop-shadow-md">
        <a href="#">
          <img src={logo} alt="" className="w-20 h-20  hover:scale-105 translate-all" />
        </a>


        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base ">
          <li className="p-4 hover:bg-[#3E065F] hover:text-white rounded-full transition-all cursor-pointer">Home</li>
          <li className="p-4 hover:bg-[#3E065F] hover:text-white rounded-full transition-all cursor-pointer">Product</li>
          <li className="p-4 hover:bg-[#3E065F] hover:text-white rounded-full transition-all cursor-pointer">Explore</li>
          <li className="p-4 hover:bg-[#3E065F] hover:text-white rounded-full transition-all cursor-pointer">Contact</li>
        </ul>

        <div className="relative hidden md:flex items-center justify-center gap-3">
          <i className="bx bx-search absolute left-3 text-2xl text-gray-500"></i>
          <input type="text" placeholder="Search..." className="py-2 pl-10 rounded-xl border-2 bg-white focus:bg-slate-100 focus:outline-red-500 text-black" />

        </div>

        <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

        <div className={`absolute xl:hidden top-24 left-0 w-full bg-[#8E05C2] flex flex-col items-center gap-6 font-semibold text-lg transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >



          <li className="list-none w-full text-center p-4 hover:bg-[#3E065F] hover:text-white trasition-all cursor-pointer ">Home</li>
          <li className="list-none w-full text-center p-4 hover:bg-[#3E065F] hover:text-white trasition-all cursor-pointer ">Product</li>
          <li className="list-none w-full text-center p-4 hover:bg-[#3E065F] hover:text-white trasition-all cursor-pointer ">Explore</li>
          <li className="list-none w-full text-center p-4 hover:bg-[#3E065F] hover:text-white trasition-all cursor-pointer ">Contact</li>
        </div>

      </header>
    </div>
  )
}
export default Nav
