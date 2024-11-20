import React from "react";
// import NutritionIcon from "../Assets/Nutrition Icon.png"
import { FaStar } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { FaMedal } from 'react-icons/fa';
import { FaCertificate } from 'react-icons/fa';
import { FaAppleAlt } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import Heart from "../Assets/Heart icon.png";
import B11 from "../Assets/B11.jpg";
import B12 from "../Assets/B12.jpg";
import B13 from "../Assets/B13.jpg";
import B14 from "../Assets/B14.jpg";
import B15 from "../Assets/B15.jpg";


const Home = () => {
  return (
    <>
   <div className="bg-white -mt-16">
    


      
<div className="flex max-w-7xl mx-auto mt-16 px-16 justify-between items-center">

  <div className="w-1/2">
    <img 
      src={B15} 
      alt="Mindful Eating Blog" 
      className="w-full h-[500px] object-cover rounded-lg mb-6 mx-auto mt-5"
    />
  </div>
  
  
  <div className="w-1/2 pl-16">
    <div className="text-2xl gap-2 mt-10 font-bold mb-6 text-left flex underline underline-offset-8 decoration-lime-600">
      Transform Your<img className="size-6 flex mt-2 " src = {Heart} alt="Heart" /> Health with
    </div>
    <div className="w-[200px] h-[2px] bg-lime-50 mb-6 mx-auto"></div>
    <h1 className="text-5xl font-extrabold text-teal-900 mb-6 text-left">
      Personalized Nutrition Coaching
    </h1>
    <div className="text-l mb-6 text-left ">
      Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching.
      Our certified nutritionists are here to guide you on your weight loss journey, providing customized
      plans and ongoing support. Start your transformation today and experience the power of personalized nutrition coaching.
    </div>
    
    
    <div className="flex space-x-8">
      <button className="bg-lime-500 text-black px-10 py-3 rounded-md hover:bg-lime-600 text-m">
        Get Starter Today
      </button>
      <button className="bg-yellow-500 text-black px-10 py-3 rounded-md hover:bg-yellow-700 text-m">
        Book a Demo
      </button>
    </div>
  </div>
</div>




<section className="max-w-6xl mx-auto px-16 mt-28 bg-lime-50">
  <h2 className="flex justify-center items-center text-4xl font-bold mb-4 p-6">Features</h2>
  <h5 className="flex justify-center items-center text-sm font-semibold mb-8 text-center">
    Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.
  </h5>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-6 justify-center mx-auto ml-6 mr-10">
    {/* Feature 1 */}
    <div className="w-[400px] text-center mx-auto">
      <h3 className="font-bold gap-3 text-sm bg-lime-100  py-3 px-6 flex"><FaStar size={25} color="#4CAF50" /> Personalized Nutrition Plans</h3>
      <p className="text-gray-700 mt-2 mb-6 text-sm bg-lime-100 h-[150px] p-6 hover:scale-105">
        Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists
        will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="w-[400px] text-center mx-auto">
      <h3 className="gap-3 font-bold text-sm bg-lime-100 py-3 px-6 flex"><MdAnalytics size={30} color="#4CAF50" />Food and Analysis</h3>
      <p className="text-gray-700 mt-2 mb-6 text-sm bg-lime-100 h-[150px] p-6 hover:scale-105">
        Effortlessly track your intake using our user-friendly app. Our nutritionists will analyze your data to provide
        insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="w-[400px] text-center mx-auto">
      <h3 className="gap-3 font-bold text-sm bg-lime-100 py-3 px-6 flex"><FaCertificate size={25} color="#4CAF50" />Lifestyle and Behavior Coaching</h3>
      <p className="text-gray-700 mt-2 mb-6 text-sm bg-lime-100 h-[150px] p-6 hover:scale-105">
        Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop
        healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.
      </p>
    </div>

    {/* Feature 4 */}
    <div className="w-[400px] text-center mx-auto">
      <h3 className="gap-3 font-bold text-sm bg-lime-100 py-3 px-6 flex"><FaGraduationCap size={30} color="#4CAF50" />Guidance from Certified Nutritionists</h3>
      <p className="text-gray-700 mt-2 mb-6 text-sm bg-lime-100 h-[150px] p-6 hover:scale-105">
        Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey.
        They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.
      </p>
    </div>

    {/* Feature 5 */}
    <div className="w-[400px] text-center mx-auto">
      <h3 className="gap-3 font-bold text-sm bg-lime-100 py-3 px-6 flex"><FaAppleAlt size={25} color="#4CAF50" />Meal Planning and Recipes</h3>
      <p className="text-gray-700 mt-2 mb-6 text-sm bg-lime-100 h-[150px] p-6 hover:scale-105">
        Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will
        also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.
      </p>
    </div>

    {/* Feature 6 */}
    <div className="w-[400px] text-center mx-auto">
      <h3 className="gap-3 font-bold text-sm bg-lime-100 py-3 px-6 flex"><FaMedal size={25} color="#4CAF50" />Nutritional Education and Workshops</h3>
      <p className="text-gray-700 mt-2 mb-6 text-sm bg-lime-100 h-[150px] p-6 hover:scale-105">
        Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will
        equip you with the knowledge and tools to make informed choices for long-term success.
      </p>
    </div>
  </div>
</section>


      {/* Blogs Section */}
      <div className="text-center mt-8 max-w-7xl mx-auto px-4 ">
        <h2 className="text-2xl font-bold mb-4">Our Blogs</h2>
        <p className="text-sm font-semibold text-gray-700 mb-8">
          Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts.
          Here's what you can expect from our blog:
        </p>
        <div className="grid md:grid-cols-2 gap-8 ">
          {/* Blog Post 1 */}
<div className="bg-lime-50 p-4 text-center w-[480px] mx-auto hover:scale-105 ">
    <img src={B13} alt="Weight Loss Blog" className="w-full h-40 object-cover rounded-lg mb-4"/>
    <h3 className="text-black-700 text-lg font-semibold mb-2">Weight Loss</h3>
    <h1 className="text-xl font-bold mb-2">The Benefits of Hydration for Weight Loss</h1>
    <p className="text-gray-600 text-sm">
        Discover how staying hydrated can support your weight loss goals and improve overall health.
    </p>
</div>


          {/* Blog Post 2 */}
<div className="bg-lime-50 p-4 text-center w-[480px] mx-auto hover:scale-105">
    <img src={B14} alt="Mindful Eating Blog" className="w-full h-40 object-cover rounded-lg mb-4"/>
    <h3 className="text-black-700 text-lg font-semibold mb-2">Mindful Eating</h3>
    <h1 className="text-xl font-bold mb-2">Cultivating a Healthy Relationship with Food</h1>
    <p className="text-gray-600 text-sm">
        Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.
    </p>
</div>

{/* Blog Post 3 */}
<div className="bg-lime-50 p-4 text-center w-[480px] mx-auto hover:scale-105">
    <img src={B12} alt="Macronutrients Blog" className="w-full h-40 object-cover rounded-lg mb-4"/>
    <h3 className="text-black-700 text-lg font-semibold mb-2">Understanding Macronutrients</h3>
    <h1 className="text-xl font-bold mb-2">Carbohydrates, Proteins, and Fats</h1>
    <p className="text-gray-600 text-sm">
        Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.
    </p>
</div>

{/* Blog Post 4 */}
<div className="bg-lime-50 p-4 text-center w-[480px] mx-auto hover:scale-105">
    <img src={B11} alt="Healthy Snacks Blog" className="w-full h-40 object-cover rounded-lg mb-4"/>
    <h3 className="text-black-700 text-lg font-semibold mb-2">Healthy Snacks on the Go</h3>
    <h1 className="text-xl font-bold mb-2">Quick and Nutritious Options</h1>
    <p className="text-gray-600 text-sm">
        Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.
    </p>
</div>

        </div>
      </div>

      {/* Testimonials Section */}
      <section className="bg-lime-50 py-16 mt-16 ml-10 mr-10 max-w-7xl">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Testimonials</h2>
          <p className="text-lg text-gray-700 mb-8 ">
            Our satisfied clients share their success stories and experiences on their journey to better health and well-being.
          </p>
          <div className="grid md:grid-cols-3 gap-8 ">
            {/* Testimonial 1 */}
            <div className="bg-lime-100 p-6 rounded-lg shadow-md hover:scale-105">
              <p className="text-gray-700 italic mb-4 ">
                "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!"
              </p>
              <h5 className="text-teal-700 font-semibold">Jennifer Anderson</h5>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-lime-100 p-6 rounded-lg shadow-md hover:scale-105">
              <p className="text-gray-700 italic mb-4">
                "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!"
              </p>
              <h5 className="text-teal-700 font-semibold">Robert Johnson</h5>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-lime-100 p-6 rounded-lg shadow-md hover:scale-105">
              <p className="text-gray-700 italic mb-4">
                "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I have never felt better!"
              </p>
              <h5 className="text-teal-700 font-semibold">Emily Davis</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-lime-50 max-w-7xl ml-10 mr-10 py-16 mt-16 mb-[80px]">
  <div className="max-w-6xl mx-auto px-4 text-center bg-lime-50">

    <h2 className="text-3xl  font-bold mb-4 text-black-800">Our Pricing</h2>
    <p className="text-lg text-gray-700 mb-8">
      We offer flexible and affordable options to support you on your journey to optimal health and nutrition.
      Everyone deserves access to personalized nutrition guidance and resources.
    </p>
    
    <div className="flex justify-center mb-8">
      <button className="bg-green-950 text-white px-6 py-2 rounded-md hover:bg-green-700 hover:scale-105">Monthly</button>
      <button className="bg-green-950 text-white px-6 py-2 ml-4 rounded-md hover:bg-green-700 hover:scale-105">Yearly</button>
    </div>
    <p className="text-sm font-semibold text-gray-600 mb-16">Save 50% on yearly plans!</p>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Basic Plan */}
      <div className="bg-lime-100 p-6 rounded-lg shadow-md text-center mb-[40px] hover:scale-105">
        <h3 className="text-2xl font-bold text-black-700 mb-4">Basic Plan</h3>
        <p className="text-sm text-gray-600 mb-6">Up to 50% off on Yearly Plan</p>
        <p className="text-gray-700 mb-8">
          Start your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, 
          meal planning assistance, and email support.
        </p>
        <h4 className="text-3xl font-bold text-teal-800 mb-6">$49/month</h4>
        <button className="bg-lime-300 text-black px-20 py-2 rounded-md hover:bg-lime-400">Choose Plan</button>
      </div>

      {/* Premium Plan */}
      <div className="bg-lime-100 p-6 rounded-lg shadow-md text-center mb-[40px] hover:scale-105">
        <h3 className="text-2xl font-bold text-black-700 mb-4">Premium Plan</h3>
        <p className="text-sm text-gray-600 mb-6">Up to 50% off on Yearly Plan</p>
        <p className="text-gray-700 mb-8">
          Upgrade to our Premium Plan for enhanced features. This plan includes video consultations, priority support, 
          and personalized recipe recommendations.
        </p>
        <h4 className="text-3xl font-bold text-teal-800 mb-6">$79/month</h4>
        <button className="bg-lime-300 text-black px-20 py-2 rounded-md hover:bg-lime-400">Choose Plan</button>
      </div>

      {/* Ultimate Plan */}
      <div className="bg-lime-100 p-6 rounded-lg shadow-md text-center mb-[40px] hover:scale-105">
        <h3 className="text-2xl font-bold text-black-700 mb-4">Ultimate Plan</h3>
        <p className="text-sm text-gray-600 mb-6">Up to 50% off on Yearly Plan</p>
        <p className="text-gray-700 mb-8">
          Experience full benefits with the Ultimate Plan. Includes all Premium features, 24/7 chat support, and exclusive workshops.
        </p>
        <h4 className="text-3xl font-bold text-teal-800 mb-6 p-3">$99/month</h4>
        <button className="bg-lime-300 text-black px-20 py-2 rounded-md hover:bg-lime-400">Choose Plan</button>
      </div>
    </div>
  </div>
</section>

</div>

    </>
  );
};

export default Home;
