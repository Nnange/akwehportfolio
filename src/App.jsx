import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import FadeIn from "./components/FadeIn";
import resumeData from "./resumeData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header resumeData={resumeData} />
              <FadeIn><About resumeData={resumeData} /></FadeIn>
              <FadeIn><Resume resumeData={resumeData} /></FadeIn>
              <FadeIn><Portfolio resumeData={resumeData} /></FadeIn>
              <FadeIn><ContactUs resumeData={resumeData} /></FadeIn>
              <Footer resumeData={resumeData} />
            </>
          }/>
        </Routes>
      </div>
    </Router>
  );
}
