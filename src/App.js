import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

import { Footer } from "./components/Footer";
import { Certificate } from './components/Certificate';
import { Work } from './components/Work';
import { Publications } from './components/Publications';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Publications/>
      <Work/>
      <Certificate />
      <Footer />
    </div>
  );
}

export default App;
