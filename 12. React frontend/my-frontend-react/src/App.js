// src/App.js
import "./App.css";
// import TheCv from "./TheCv.js";
// import MainPage from "./cvPagePlusResponsive/MainPage";
// import { BrowserRouter , Route, Routes} from "react-router-dom";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import Articles from "./pages/Articles";
import TestimonialCard from "./components/TestimonialCard";
// import DatePicker from "./datePickerUI/DatePicker";

function App() {
  return (
    // 1
    // components/testimonial
    <TestimonialCard/>

    // 2
    // cvPagePlusResponsive
    // createCV/TheCv
    // <TheCv/>


    // 3
    // pages/home,contact... 
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<MainPage />} />
    //     <Route path="/projects" element={<Projects />}/>
    //     <Route path="/contact" element={<Contact/>}/>
    //     <Route path="/articles" element={<Articles/>}/>
    //   </Routes>
    // </BrowserRouter>

    // 4
    // datePickerUI/DatePicker 
    // <DatePicker/>
  );
}

export default App;
