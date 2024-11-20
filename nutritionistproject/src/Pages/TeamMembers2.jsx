import React from 'react'
import team1 from "../Assets/team1.jpg";
import team2 from "../Assets/team2.jpg";
import team3 from "../Assets/team3.jpg";
import team4 from "../Assets/team4.jpg";
import NutritionIcon from "../Assets/Nutrition Icon.png";

const TeamMembers2 = () => {
  return (
    <>

<div className="bg-lime-50 m-[50px] h-[440px] p-6 flex flex-col justify-between ">
        <div> 
          <img className='size-10 ml-auto mr-auto mt-20' src = {NutritionIcon} alt="Nutrition Icon" />
          <h1 className="text-2xl font-bold mb-4 flex justify-center items-center mt-11">Meet Our Team of Experts</h1>
          <p className='ml-14 mr-10 '>Our team of Nutritionistn is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact an your journey to better health. </p>
        </div>
        <div className='bg-green-950 h-16 mt-14 -ml-6 -mr-6'>
            <ul className=' flex justify-between text-sm p-3 ml-10 mr-10 text-white text-xs'>
            <li className='hover:bg-gray-600  px-2 py-2 rounded'>Management Team</li>
            <li className='hover:bg-gray-600  px-2 py-2 rounded'>Nutrionist and Dietitians</li>
            <li className='hover:bg-gray-600  px-2 py-2 rounded'>Customer Support</li>
            <li className='hover:bg-gray-600  px-2 py-2 rounded'>Marketing and Communications</li>
            <li className='hover:bg-gray-600  px-2 py-2 rounded'>Technology and Development</li>
            </ul>
        </div>
        </div>


      <div className='flex justify-between mr-20 ml-6 mt-40 ' >
      
      
        <img className='h-64 w-56 ml-10 rounded ' src = {team1} alt='team1' />
        <button className='bg-lime-50 h-16 w-44 -ml-60 mt-56 rounded'>
        <p className='text-sm'>Sarah Mitchell</p>
        <p className='text-xs'>Founder and CEO</p>
        </button>
      
        <img className='h-64 w-56 ml-10 rounded' src = {team2} alt='team2' />
        <button className='bg-lime-50 h-16 w-44 -ml-60 mt-56 rounded'>
        <p className='text-sm'>Emily Thampson</p>
        <p className='text-xs'>Chief Operating Officer </p>
        </button>
      
        <img className='h-64 w-56 ml-10 rounded' src = {team3} alt='team3' />
        <button className='bg-lime-50 h-16 w-44 -ml-60 mt-56 rounded'>
        <p className='text-sm'>John Davis</p>
        <p className='text-xs'>Chief Finacial Officer</p>
        </button>
      
        <img className='h-64 w-56 ml-10 rounded' src = {team4} alt='team4' />
        <button className='bg-lime-50 h-16 w-44 -ml-60 mt-56 rounded'>
        <p className='text-sm'>Rachel Adams</p>
        <p className='text-xs'>Chief Marketing Officer</p>
        </button>
    
    </div>

    <div className='bg-lime-50 h-40 m-10 mt-28'>
        <h4 className='p-5 text-xl font-semibold'>Join Our Team</h4>
        <button className='bg-lime-200 hover:bg-lime-500 px-3 py-2 rounded mr-5 float-right ...'>Book a Demo</button>
        <p className='ml-5 w-9/12'>
            We are always on the lookout for talented individuals who are enthusiastic about making a difference. Explore our career apportunities and join us in our mission to help people achieve their health and wellness goals. </p>
           
    </div>   

    

    
    </>
  )
}
export default TeamMembers2
