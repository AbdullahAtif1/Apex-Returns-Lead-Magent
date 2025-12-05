import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './Store';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer here
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import Contact from './pages/Contact';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter basename="/Apex-Returns-Lead-Magent">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          {/* This ensures content expands to push footer down */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Catalogue />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;