
import './App.css';
import Header from"./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import ProblemSolution from "./components/ProblemSolution/page";
import Features from "./components/features/Features";
import Process from "./components/process/Process";
import WhyUs  from "./components/why/WhyUs";

import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">   
     <>
     
     <Header/>
     <HeroSection/>
     <ProblemSolution/>
     <Features/>
     <Process/>
     <WhyUs/>
     <Testimonials/>
     <Footer/>
     
     
     
    
     </>
    </div>
  );
}

export default App;
