
import React from 'react';
import NutritionIcon from "../Assets/Nutrition Icon.png"
import Map from "../Assets/Map.png";


const Contact = () => {
  return (
    <>

         {/* Contact Us Section */}
         <div className="bg-lime-50 mx-auto max-w-5xl mt-12 h-[560px] p-6 flex flex-col justify-center items-center">
        <div className="w-full text-center">
        <img className='size-10 ml-auto mr-auto m-10' src = {NutritionIcon} alt="Nutrition Icon" />
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-base mb-2">
            We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to
            assist you and provide the support you need on your nutritional journey.
          </p> 
          <p className="text-base">
            Please don't hesitate to reach out to us using any of the following contact methods.
          </p>
          
          {/* Dark Green Contact Section with Boxes */}
          <nav className="bg-green-950 mt-8 flex justify-center items-center space-x-6 py-8 rounded-lg">
            <p className="w-[300px] bg-green-900 text-white py-6 text-center rounded-lg">
              support@nutritionist.com
            </p>
            <p className="w-[300px] bg-green-900 text-white py-6 text-center rounded-lg">
              +910000000000
            </p>
            <p className="w-[300px] bg-green-900 text-white py-6 text-center rounded-lg">
              Somewhere in the World
            </p>
          </nav>
        </div>
      </div>

      {/* Form and Image Section */}
      <div className="flex justify-center mt-16">
        <div className="max-w-5xl w-full flex space-x-8 bg-lime-50 p-8 shadow-lg rounded-lg">
          {/* Left Side - Contact Form */}
          <div className="w-1/2 space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">Full Name</label>
              <input type="text" className="w-full border border-gray-300 p-3 rounded-lg bg-lime-100" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">Email</label>
              <input type="email" className="w-full border border-gray-300 p-3 rounded-lg bg-lime-100" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">Phone Number</label>
              <input type="text" className="w-full border border-gray-300 p-3 rounded-lg bg-lime-100" placeholder="Enter your phone number" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">Message</label>
              <textarea className="w-full border border-gray-300 p-3 rounded-lg bg-lime-100" placeholder="Write your message" rows="4"></textarea>
            </div>
            <button className="bg-lime-300 text-black py-3 rounded-lg hover:bg-lime-500 w-full">Send Message</button>
          </div>

          {/* Right Side - Image */}
          <div className="w-1/2 flex justify-center items-center">
            <img src={Map} alt="Map" className="w-full h-96 rounded-lg object-cover " />
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="max-w-5xl mx-auto bg-lime-50 shadow-lg rounded-lg p-8 flex flex-col mt-12">
        <h2 className="text-2xl font-bold mb-4">
          Are you ready to embark on a transformative journey towards better health and wellness?
        </h2>
        <p className="text-lg mb-6">
          Join us at Nutritionist and let us guide you on the path to a healthier and happier you.
        </p>
        <div className="flex justify-end">
          <button className="bg-lime-300 text-black py-2 px-6 rounded-lg hover:bg-lime-500">
            Join Us Now
          </button>
        </div>
      </div>


    </>
  );
};

export default Contact;
