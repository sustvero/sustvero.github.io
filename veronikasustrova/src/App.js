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
      <div className="section-div">
      <About />
      </div>
      <div className="section-div">
      <Experience />
      </div>
      <div className="section-div">
      <Projects />
      </div>
      <div className="section-div">
      <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
