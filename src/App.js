import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import Header from "../src/components/Header";
import Links from "../src/components/Links";
import Banner from "../src/components/Banner";
import Pod from "../src/components/Podcast/Pod";
import PodD from "./components/Podcast/PodD";
import WorD from "./components/World/worD";
import Wor from "./components/World/wor";
import AnaD from "./components/Analysis/AnaD";
import Ana from "./components/Analysis/Ana";
import Indl from "./components/IndianLife/Indl";
import IndlD from "./components/IndianLife/IndlD";
import Smallb from "./components/SmallBig/Smallb";
import SmallbD from "./components/SmallBig/SmallbD";
import DramaD from "./components/Drama/DramaD";
import Drama from "./components/Drama/Drama";
import Footer from "./components/Footer";
import India from "./components/India"; // Import India component

const App = () => {
  return (
    <Router>
      <Header />
      <Links /> {/* Add Links component here */}
      <Banner />

      {/* Render the podcast section */}
      <h1 style={{ textAlign: "", marginBottom: "20px", marginLeft: "150px" }}>पॉडकास्ट</h1>
      <div
        style={{
          display: "flex",          
          justifyContent: "center", 
          gap: "20px",             
          flexWrap: "wrap",        
          marginTop: "20px",        
        }}
      >
        {PodD.map((item, index) => (
          <Pod 
            key={index} 
            img={item.img} 
            title={item.title} 
            des={item.des} 
          />
        ))}
      </div>

      {/* Render the world section */}
      <h1 style={{ textAlign: "", marginBottom: "20px", marginLeft: "150px" }}>दुनिया जहान</h1>
      <div
        style={{
          display: "flex",          
          justifyContent: "center", 
          gap: "20px",             
          flexWrap: "wrap",        
          marginTop: "20px",        
        }}
      >
        {WorD.map((item, index) => (
          <Wor 
            key={index} 
            img={item.img} 
            title={item.title} 
            des={item.des} 
          />
        ))}
      </div>

      {/* Render the analysis section */}
      <h1 style={{ textAlign: "", marginBottom: "20px", marginLeft: "150px" }}>विवेचना</h1>
      <div
        style={{
          display: "flex",          
          justifyContent: "center", 
          gap: "20px",             
          flexWrap: "wrap",        
          marginTop: "20px",        
        }}
      >
        {AnaD.map((item, index) => (
          <Ana 
            key={index} 
            img={item.img} 
            title={item.title} 
            des={item.des} 
          />
        ))}
      </div>

      {/* Render the small-big section */}
      <h1 style={{ textAlign: "", marginBottom: "20px", marginLeft: "150px" }}>छोटी उम्र बड़ी ज़िंदगी</h1>
      <div
        style={{
          display: "flex",          
          justifyContent: "center", 
          gap: "20px",             
          flexWrap: "wrap",        
          marginTop: "20px",        
        }}
      >
        {IndlD.map((item, index) => (
          <Indl 
            key={index} 
            img={item.img} 
            title={item.title} 
            des={item.des} 
          />
        ))}
      </div>

      {/* Render the drama section */}
      <h1 style={{ textAlign: "", marginBottom: "20px", marginLeft: "150px" }}>कहानी ज़िंदगी की</h1>
      <div
        style={{
          display: "flex",          
          justifyContent: "center", 
          gap: "20px",             
          flexWrap: "wrap",        
          marginTop: "20px",        
        }}
      >
        {SmallbD.map((item, index) => (
          <Smallb 
            key={index} 
            img={item.img} 
            title={item.title} 
            des={item.des} 
          />
        ))}
      </div>

      {/* Render the drama queen section */}
      <h1 style={{ textAlign: "", marginBottom: "20px", marginLeft: "150px" }}>ड्रामा क्वीन (Drama Queen)</h1>
      <div
        style={{
          display: "flex",          
          justifyContent: "center", 
          gap: "20px",             
          flexWrap: "wrap",        
          marginTop: "20px",        
        }}
      >
        {DramaD.map((item, index) => (
          <Drama 
            key={index} 
            img={item.img} 
            title={item.title} 
            des={item.des} 
          />
        ))}
      </div>

      {/* Footer section */}
      <Footer />

      <Routes>
  <Route path="/india" element={<India />} />
  {/* Add other routes as needed */}
</Routes>

    </Router>
  );
};

export default App;
