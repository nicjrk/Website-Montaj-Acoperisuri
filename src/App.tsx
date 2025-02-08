import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../src/components/ScrollToTop'; // Importă ScrollToTop
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import MontajAcoperisuriBucuresti from './pages/MontajAcoperisuriBucuresti';
import MontajAcoperisuriIlfov from './pages/MontajAcoperisuriIlfov';
import MontajAcoperisuriPitesti from './pages/MontajAcoperisuriPitesti';
import MontajAcoperisuriGiurgiu from './pages/MontajAcoperisuriGiurgiu';
import MontajAcoperisuriTargoviste from './pages/MontajAcoperisuriTargoviste'; // Importă pagina pentru Târgoviște
import MontajAcoperisuriPloiesti from './pages/MontajAcoperisuriPloiesti'; // Importă pagina pentru Ploiești

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Plasează ScrollToTop sub Router */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/montaj-acoperisuri-bucuresti" element={<MontajAcoperisuriBucuresti />} />
            <Route path="/montaj-acoperisuri-ilfov" element={<MontajAcoperisuriIlfov />} />
            <Route path="/montaj-acoperisuri-pitesti" element={<MontajAcoperisuriPitesti />} />
            <Route path="/montaj-acoperisuri-giurgiu" element={<MontajAcoperisuriGiurgiu />} />
            <Route path="/montaj-acoperisuri-targoviste" element={<MontajAcoperisuriTargoviste />} /> {/* Ruta pentru Târgoviște */}
            <Route path="/montaj-acoperisuri-ploiesti" element={<MontajAcoperisuriPloiesti />} /> {/* Ruta pentru Ploiești */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
