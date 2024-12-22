import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
