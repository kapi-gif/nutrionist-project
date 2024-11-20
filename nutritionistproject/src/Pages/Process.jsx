import React from 'react'
import NutritionIcon from "../Assets/Nutrition Icon.png"

const steps = [
    { id: 1, title: "Initial Consultation", description: "We start by scheduling an initial consultation, either in person or throungh a convenient online meeting. During this session, we will discuss your health history, lifestyle, goals, and any specific dietary requirements. ", icon: "👨‍⚕️" },
    { id: 2, title: "Assessing Your Needs", description: "Our team of experienced nutritionists and dietitians will conduct a thorough assessment of your nutritional needs and create a personalized plan tailored to your unique requirements.", icon: "📋" },
    { id: 3, title: "Personalized Nutrition Plan", description: "Based on the information gathered, we will develop a personalized nutrition plan that takes into account your preferences, lifestyle, and health goals.", icon: "🥗" },
    { id: 4, title: "Meal Planning and Recipes", description: "To make your journey easier, we will provide you with a variety of delicious meal options, along with recipes that align with your personalized nutrition plan.", icon: "🍲" },
    { id: 5, title: "Ongoing Support", description: "Throughout your journey, our team of nutrition experts will be there to provide continuous support, answer your questions, and help you stay on track.", icon: "💬" },
    { id: 6, title: "Progress Tracking", description: "We help you monitor your progress using our user-friendly mobile app, which keeps you informed and motivated as you achieve your goals.", icon: "📈" },
    { id: 7, title: "Regular Check-ins", description: "We will schedule regular check-ins to review your progress, address any concerns, and make any necessary adjustments to your nutrition plan. Our goal is to ensure that you are consistently moving towards your desired outcomes", icon: "✅" },
    { id: 8, title: "Education and Resources", description: "Along the way, we provide you with educational resources, tips, and articles to help you better understand the fundamentals of nutrition and empower you to make informed choices for a healthier lifestyle. ", icon: "📚" },
    { id: 9, title: "Pre-Tuning and Adjustments", description: "As your journey progresses, we adjust your plan to ensure it meets your evolving needs and goals adjusments to your nutrition plan to ensure that it continues to align with your changing needs.", icon: "🔧" },
    { id: 10, title: "Sustainable Lifestyle Habits", description: "Our ultimate goal is to help you develop sustainable lifestyle habits that will support your long-term health and wellness. We will equip you with the knowledge and skills to maintain your progress even after you've completed the program.", icon: "🌱" },
  ];
  
  const Process = () => {
    return (

      <>

<div>
      <div className="bg-lime-50 text-center p-8 h-[400px] m-10  ">
      <img className='size-10 ml-auto mr-auto mt-20' src = {NutritionIcon} alt="Nutrition Icon" />
      <h1 className="text-2xl font-bold mt-10">Your Journey to Health and Wellness</h1>
      <p className='ml-10 mr-10 p-5'>At Nutritionist, we believe in providing a personalized and conprehensive approach to help you achieve your health and wellness goals. Our "How it Works" process is designed to guide you through each step of your journey, ensuring that you receive the support, knowledge , and tools you need to succeed . Here's a detailed breakdown of our process.  </p>
      </div>
      <main className="container mx-auto p-4">
        <section className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
          <p className='text-sm p-10'>We provide a step-by-step guide on how to get started on your journey towards better health and nutrition. We are here to simplify the process and make it easy for you to navigate our platform and access the resources you need to achieve your goals. Here's how it works.</p>
        </section>

      </main>
    </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ml-14 mr-14">
        {steps.map((steps) => (
          <div key={steps.id} className="bg-lime-50 p-6 rounded-lg shadow-md hover:scale-105 ">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-2xl">{steps.icon}</span>
              <h3 className="text-lg font-bold">{steps.title}</h3>
            </div>
            <p className="text-sm">{steps.description}</p>
          </div>
        ))}
      </div>

      <div className='bg-lime-50 h-48 p-14 m-20 ml-14 mr-14 mt-28'>
        <button className='bg-lime-200 hover:bg-lime-500 px-3 py-2 rounded mr-5 float-right ...'>Book a Demo</button>
        <p className='ml-5 w-9/12 font-semibold text-xl'>
           Are you ready to embark on a transfomative journey towards better health and wellness? </p>
           <p className='m-5 text-sm'>Join us at Nutritionist and let us guide you on the path to a healthier and happier you.</p>
           
    </div>   

      </>
    
    );
  };
  

export default Process
