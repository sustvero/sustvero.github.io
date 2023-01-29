import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
      <Header />
      </header>
      <div className="section-div about-me">
      <About />
      </div>
      <div className="section-div my-experience">
      <Experience />
      </div>
      <div className="section-div my-projects">
      <Projects />
      </div>
      <div className="section-div contact-me">
      <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
