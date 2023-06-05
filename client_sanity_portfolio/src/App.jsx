import Navbar from "./components/Navbar/Navbar";
import { Header, About, Work, Skill, Testimonials, Contact } from "./container";

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skill />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App;