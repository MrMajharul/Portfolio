import './index.css';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Research   from './components/Research';
import Experience from './components/Experience';
import Projects   from './components/Projects';
import Skills     from './components/Skills';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
