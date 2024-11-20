
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Process from './Pages/Process';
import Blog from './Pages/Blog';
import Home from './Pages/Home';
import About2 from './Pages/About2';
import Pricing from './Pages/Pricing';
import TeamMembers2 from './Pages/TeamMembers2';
import Contact from './Pages/Contact';
import Footer from './Component/Footer';
import GoTotop from './Component/GoTotop';




function App() {
  return (
    <>

      <div>

      <Header />
    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about2' element={<About2 />} />
          <Route path='/TeamMembers2' element={<TeamMembers2 />} />
          <Route path='/process' element={<Process />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </div>

      <div>

        <GoTotop /> 
        <Footer />

      </div>

    </>
  );
}

export default App;
