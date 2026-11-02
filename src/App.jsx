import { PROFILE } from './data';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Architecture from './components/Architecture';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { STATE } from './data';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero /><Skills /><Architecture /><Architecture
          id="state"
          data={STATE}
          heading={<>How I <span className="grad">manage state</span></>}
          lead="I pick the tool based on how much state is shared and how complex it is."
        /><Projects /><Experience /><Contact />
      </main>
      <footer>© {new Date().getFullYear()} {PROFILE.name}. No Copyrights</footer>
    </>
  );
}
