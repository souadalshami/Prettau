
import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/vendors/animate/animate.min.css'
import './assets/vendors/animate/custom-animate.css'
import 'bootstrap-select/dist/css/bootstrap-select.css';
import './assets/vendors/fontawesome/css/all.min.css'
import './assets/css/bixola.css';
import './assets/css/bixola-responsive.css'
import './assets/vendors/bixola-icons/style.css'
import Home from './pages/Home'
import About from  './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import ScrollToTop from "./components/ScrollToTop";
import Cursor from "./Cursor";
import Preloader from './components/Preloader';
import Certificates from './pages/Certificates';
function App() {
  const [isloading, setloading] = useState(true);
  setTimeout(() => setloading(false), 3000);
  let element = isloading ? (
    <Preloader />
  ) : (
    <>
      <div>
        <div className="page-wrapper">
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Cursor />
      <div>{element} </div>
    </>
   
  );
}

export default App;
