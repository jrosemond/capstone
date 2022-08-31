import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
          <Routes>
              <Route path="/"  element={<Home/>} />
              <Route path="projects" element={<Projects/>} />
              <Route path="about" element={<About/>} />
              <Route path="contact" element={<Contact/>} />
          </Routes>
    </div>
  );
}

export default App;
