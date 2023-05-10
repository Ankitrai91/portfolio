import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavBar } from './Component/NavBar';
import { Banner } from './Component/Banner';
import { Skills } from './Component/Skills';
import { Projects } from './Component/Projects';
import { Contact } from './Component/Contact';
import { Footer } from './Component/Footer';
import { NavBar } from './Component/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
