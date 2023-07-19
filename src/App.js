import NavBar from './components/NavBar.js'
import Banner from './components/Banner.js'
import Skills from './components/Skills.js'
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js'
import About from './components/About.js'
import Footer from './components/Footer.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
