import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>

            {/* <Route path="/contact" element={<Contact/>}/> */}

            <Route path="/" element={
              <>
                <Header resumeData={resumeData} />
                <About resumeData={resumeData} />
                <Resume resumeData={resumeData} />
                <Portfolio resumeData={resumeData} />
                {/* <ContactUs resumeData={resumeData} /> */}
                <Footer resumeData={resumeData} /> 
              </>
            }/>
            {/* <Route element={<Testimonials resumeData={resumeData} />}/> */}
 
          </Routes>
       </div>
      </Router>
      
    );
  }
}

export default App;
