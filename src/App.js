import Navbar from "./component/navbar/Navbar.jsx";
import Intro from "./component/intro/Intro.jsx";
import Services from "./component/Services/Services.jsx";
import Experience from "./component/Experience/Experience.jsx";
import Work from "./component/Work/Work.jsx";
import Porfolio from "./component/Portfolio/Porfolio.jsx";
import Testimonial from "./component/Testimonial/Testimonial.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Footer from "./component/Footer/Footer.jsx";
import './App.css'
import { themeContext } from "./Context.js";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background: darkMode ? 'black' : '',
        color : darkMode ? 'white' : ''
      }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Porfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
