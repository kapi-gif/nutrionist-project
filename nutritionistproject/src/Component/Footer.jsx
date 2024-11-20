import React from 'react'
import NutritionIcon from "../Assets/Nutrition Icon.png"
import { Link } from 'react-router-dom'

const Footer = () => {
 
  return (
    <>

<nav className=" w-full bg-green-950 text-white py-3 h-[150px] mt-28">

{/* Navigation Links Section */}
<div className="flex ">
<div className="flex items-center max-w-5xl mx-auto px-4">
  <h1 className="flex -ml-32"><img className='size-6 ' src = {NutritionIcon} alt="Nutrition Icon" />Nutritionist</h1>
  </div>

  {/* Centered Navigation Links */}
  <div className="w-7/12 ">
  <ul className="flex gap-1 text-sm">
  <Link className="hover:bg-gray-600 px-2 py-2 rounded" to = "/">Home</Link>
  <Link className="hover:bg-gray-600 px-2 py-2 rounded" to = "/about2">About</Link>
  <Link className="hover:bg-gray-600 px-2 py-2 rounded" to = "/TeamMembers2">Team</Link>
  <Link className="hover:bg-gray-600 px-2 py-2 rounded" to = "/process">Process</Link>
  <Link className="hover:bg-gray-600 px-2 py-2 rounded" to = "/pricing">Pricing</Link>
  <Link className="hover:bg-gray-600 px-2 py-2 rounded" to = "/blog">Blog</Link>
  <Link className="hover:bg-gray-600 px-2 py-2 rounded" to = "/contact">Contact</Link>
  </ul>
</div >
</div>




{/* Contact Information Section */}

<div className="flex w-11/12 ml-14 -mr-16 items-center mt-6 p-2 bg-green-900  border-white ">
<div className="flex items-center w-full text-sm px-2 py-1 rounded gap-3 ">
  <p className="mx-1 ">hello@squareup.com</p>
  <p className="mx-1">+91813232309</p>
  <p className="mx-1">Somewhere in the World</p>
 <div className="mx-1 ml-auto"><p >2023 Nutritionist. All rights reserved</p></div>
</div>

</div>
</nav>
    
    </>
  )
}

export default Footer
