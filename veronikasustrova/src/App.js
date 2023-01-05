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
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
