

import React from 'react';
import { Link } from 'react-router-dom';
import B1 from "../Assets/B1.jpg";
import B2 from "../Assets/B2.jpg";
import B3 from "../Assets/B3.jpg";
import B4 from "../Assets/B4.jpg";
import B5 from "../Assets/B5.jpg";
import B6 from "../Assets/B6.jpg";
import B7 from "../Assets/B7.jpg";
import B8 from "../Assets/B8.jpg";
import B9 from "../Assets/B9.jpg";
import B10 from "../Assets/B10.jpg";
import NutritionIcon from "../Assets/Nutrition Icon.png"

function Blog() {
  return (
    <>
      
      {/* Our Blogs Section */}
      <div className="bg-lime-50 m-[50px] h-[400px] p-6 flex flex-col justify-between">
        <div>
        <img className='size-10 ml-auto mr-auto mt-20' src = {NutritionIcon} alt="Nutrition Icon" />
          <h1 className="text-2xl font-bold mb-4 flex justify-center items-center mt-[110px]">Our Blogs</h1>
          <p className="mb-4">
            Welcome to the Blog Section of Nutritionist, your trusted source for insightful articles, tips,
            and expert advice on nutrition and wellness. Here, we strive to provide you with engaging and informative
            content that will inspire and empower you to make informed decisions about your health. Explore
            our blog to discover a wealth of resources that cover a wide range of topics related to nutrition,
            fitness, and overall well-being.
          </p>
        </div>

        {/* Bottom Navigation Bar */}
        <nav className="bg-green-950 text-white h-[70px] rounded-md mt-4">
          <ul className="flex justify-between items-center px-4 h-full text-xs">
            <li className="hover:bg-gray-600 px-4 py-2 rounded">All</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Weight Loss Tips</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Healthy Eating</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Fitness And Exercise</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Mindset And Motivation</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Recipes And Meal Planning</li>
          </ul>
        </nav>
      </div>
      
      <div className="bg-lime-50 p-4 mx-[70px]"> 
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
  {/* First Blog */}
<div className="relative max-w-[360px] mx-auto p-4 bg-lime-50 rounded-md shadow-md mt-[70px]">
  <h3 className="text-lg font-semibold mb-2">Weight Loss Tips</h3>
  <div className="relative overflow-hidden">
    <img
      src={B1}
      alt="Weight Loss Strategies"
      className="w-[320px] h-40 object-cover rounded-md mb-2 mx-auto"
    />
  </div>
  <h3 className="font-bold text-md mb-2">10 Effective Strategies for Sustainable Weight Loss</h3>

  {/* Container for Paragraph and Button */}
  <div className="flex items-start">
    <p className="text-xs whitespace-pre-wrap">
      Discover power strategies for long-term weight loss {"\n"}
      success. Learn how to create healthy habits, set {"\n"}
      achievable goals, and make sustainable lifestyle {"\n"}
      changes.
    </p>
    <Link to="/blog/weight-loss-strategies" className="ml-4">
      <button className="px-3 py-1 bg-lime-500 rounded">Read More</button>
    </Link>
  </div>
</div>

{/* Second Blog */}
<div className="relative max-w-[360px] mx-auto p-4 bg-lime-50 rounded-md shadow-md mt-[70px]">
  <h3 className="text-lg font-semibold mb-2">Weight Loss Tips</h3>
  <div className="relative overflow-hidden">
    <img
      src={B2}
      alt="Portion Control"
      className="w-[320px] h-40 object-cover rounded-md mb-2 mx-auto"
    />
  </div>
  <h3 className="font-bold text-md mb-2">The Role of Portion Control in Weight Management</h3>

  {/* Container for Paragraph and Button */}
  <div className="flex items-start">
    <p className="text-xs whitespace-pre-wrap">
      Learn how portion control can help manage weight {"\n"}
      effectively, with practical tips for controlling {"\n"}
      portion sizes and avoiding overeating.
    </p>
    <Link to="/blog/portion-control" className="ml-4">
      <button className="px-6 py-2 bg-lime-500 rounded">Read More</button>
    </Link>
  </div>
</div>


  </div>
</div>




    {/* Healthy Eating Blogs */}
<div className="bg-lime-50 p-4 mx-[70px]">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* First Blog */}
    <div className="relative max-w-[360px] mx-auto p-4 bg-lime-50 rounded-md shadow-md ">
      <h3 className="text-lg font-semibold mb-2">Healthy Eating</h3>
      <div className="relative overflow-hidden">
        <img
          src={B3}
          alt="Plant-Based Diet"
          className="w-[320px] h-40 object-cover rounded-md mb-2 mx-auto"
        />
      </div>
      <h3 className="font-bold text-md mb-2">
        The Benefits of a Plant-Based Diet for Overall Health
      </h3>

      {/* Container for Paragraph and Button */}
      <div className="flex items-start">
        <p className="text-xs whitespace-pre-wrap">
          Explore the advantages of adopting a plant-based {"\n"}
          diet. Learn about the potential health benefits, {"\n"}
          nutrient-rich plant-based foods, and tips for {"\n"}
          transitioning to a plant-based lifestyle.
        </p>
        <Link to="/blog/plant-based-diet" className="ml-4">
          <button className="px-6 py-2 bg-lime-500 rounded">Read More</button>
        </Link>
      </div>
    </div>

    {/* Second Blog */}
    <div className="relative max-w-[360px] mx-auto p-4 bg-lime-50 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Healthy Eating</h3>
      <div className="relative overflow-hidden">
        <img
          src={B4}
          alt="Macronutrients Blog"
          className="w-[320px] h-40 object-cover rounded-md mb-2 mx-auto"
        />
      </div>
      <h3 className="font-bold text-md mb-2">
        Understanding Macronutrients: Carbohydrates, Proteins, and Fats
      </h3>

      {/* Container for Paragraph and Button */}
      <div className="flex items-start">
        <p className="text-xs whitespace-pre-wrap">
          Get a comprehensive overview of macronutrients {"\n"}
          and their role in a balanced diet. Discover {"\n"}
          the best sources of each macronutrient and {"\n"}
          how to incorporate them into your meals.
        </p>
        <Link to="/blog/macronutrients" className="ml-4">
          <button className="px-6 py-2 bg-lime-500 rounded">Read More</button>
        </Link>
      </div>
    </div>

  </div>
</div>


   {/* Fitness and Exercise Blogs */}
<div className="bg-lime-50 p-4 mx-[70px]">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* First Blog */}
    <div className="relative max-w-[360px] mx-auto p-4 bg-lime-50 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Fitness And Exercise</h3>
      <div className="relative overflow-hidden">
        <img
          src={B5}
          alt="Cardio vs. Strength Training"
          className="w-[320px] h-40 object-cover rounded-md mb-2 mx-auto"
        />
      </div>
      <h3 className="font-bold text-md mb-2">
        Cardio vs. Strength Training: Which is Better for Weight Loss
      </h3>
      <div className="flex items-start">
        <p className="text-xs whitespace-pre-wrap">
          Explore the benefits of both cardio and {"\n"}
          strength training exercises for weight loss. {"\n"}
          Find out how to combine them effectively to {"\n"}
          maximize your results.
        </p>
        <Link to="/blog/cardio-vs-strength" className="ml-4">
          <button className="px-6 py-2 bg-lime-500 rounded">Read More</button>
        </Link>
      </div>
    </div>

    {/* Second Blog */}
    <div className="relative max-w-[360px] mx-auto p-4 bg-lime-50 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Fitness And Exercise</h3>
      <div className="relative overflow-hidden">
        <img
          src={B6}
          alt="Home Workout Routine"
          className="w-[320px] h-40 object-cover rounded-md mb-2 mx-auto"
        />
      </div>
      <h3 className="font-bold text-md mb-2">
        Building a Home Workout Routine: Tips and Best Practices
      </h3>
      <div className="flex items-start">
        <p className="text-xs whitespace-pre-wrap">
          Learn how to create an effective home workout {"\n"}
          routine that helps you stay fit without a gym. {"\n"}
          Discover exercises, tips, and strategies for {"\n"}
          working out at home.
        </p>
        <Link to="/blog/home-workout" className="ml-4">
          <button className="px-6 py-2 bg-lime-500 rounded">Read More</button>
        </Link>
      </div>
    </div>

  </div>
</div>

{/* Motivation Blogs */}
<div className="bg-lime-50 p-4 mx-[70px]">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* First Blog */}
    <div className="relative max-w-[360px] mx-auto p-4 bg-lime-50 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Mindset and Motivation</h3>
      <div className="relative overflow-hidden">
        <img
          src={B7}
          alt="Motivation for Fitness"
          className="w-[320px] h-40 object-cover rounded-md mb-2 mx-auto"
        />
      </div>
      <h3 className="font-bold text-md mb-2">Staying Motivated on Your Fitness Journey</h3>
      <div className="flex items-start">
        <p className="text-xs whitespace-pre-wrap">
          Discover tips and strategies for staying {"\n"}
          motivated throughout your fitness journey. {"\n"}
          Learn how to overcome obstacles and stay {"\n"}
          focused on your goals.
        </p>
        <Link to="/blog/fitness-motivation" className="ml-4">
          <button className="px-6 py-2 bg-lime-500 rounded">Read More</button>
        </Link>
      </div>
    </div>

    {/* Second Blog */}
    <div className="relative max-w-[360px] mx-auto p-4 bg-lime-50 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Mindset and Motivation</h3>
      <div className="relative overflow-hidden">
        <img
          src={B8}
          alt="Mindset for Success"
          className="w-[320px] h-40 object-cover rounded-md mb-2 mx-auto"
        />
      </div>
      <h3 className="font-bold text-md mb-2">Developing a Growth Mindset for Success</h3>
      <div className="flex items-start">
        <p className="text-xs whitespace-pre-wrap">
          Learn how adopting a growth mindset can {"\n"}
          enhance your fitness and wellness journey. {"\n"}
          Find out how to cultivate a positive and {"\n"}
          resilient mindset for success.
        </p>
        <Link to="/blog/growth-mindset" className="ml-4">
          <button className="px-6 py-2 bg-lime-500 rounded">Read More</button>
        </Link>
      </div>
    </div>

  </div>
</div>

{/* Recipes and Meal Planning Blogs */}
<div className="bg-lime-50 p-4 mx-[70px]">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* First Blog */}
    <div className="relative max-w-[360px] mx-auto p-4 bg-lime-50 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Recipes and Meal Planning</h3>
      <div className="relative overflow-hidden">
        <img
          src={B9}
          alt="Meal Planning Tips"
          className="w-[320px] h-40 object-cover rounded-md mb-2 mx-auto"
        />
      </div>
      <h3 className="font-bold text-md mb-2">Effective Meal Planning for Healthy Eating</h3>
      <div className="flex items-start">
        <p className="text-xs whitespace-pre-wrap">
          Learn how to plan your meals effectively {"\n"}
          to ensure you're eating healthy and balanced {"\n"}
          meals throughout the week. Get tips for {"\n"}
          making meal prep easier.
        </p>
        <Link to="/blog/meal-planning" className="ml-4">
          <button className="px-6 py-2 bg-lime-500 rounded">Read More</button>
        </Link>
      </div>
    </div>

    {/* Second Blog */}
    <div className="relative max-w-[360px] mx-auto p-4 bg-lime-50 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Recipes and Meal Planning</h3>
      <div className="relative overflow-hidden">
        <img
          src={B10}
          alt="Healthy Recipes"
          className="w-[320px] h-40 object-cover rounded-md mb-2 mx-auto"
        />
      </div>
      <h3 className="font-bold text-md mb-2">Healthy Recipes for Quick and Nutritious Meals</h3>
      <div className="flex items-start">
        <p className="text-xs whitespace-pre-wrap">
          Explore a variety of healthy recipes that {"\n"}
          are easy to prepare and packed with nutrients. {"\n"}
          Find meal ideas that support your wellness {"\n"}
          goals and save you time.
        </p>
        <Link to="/blog/healthy-recipes" className="ml-4">
          <button className="px-6 py-2 bg-lime-500 rounded">Read More</button>
        </Link>
      </div>
    </div>

  </div>
</div>





     
    </>
  );
}

export default Blog;