import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import LinkInBioPage from './pages/LinkInBioPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-elegant-cream">
        <Routes>
          {/* Link in Bio page without navigation/footer */}
          <Route path="/links" element={<LinkInBioPage />} />
          
          {/* Main website pages with navigation/footer */}
          <Route path="/*" element={
            <>
              <Navigation />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
              </Routes>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;