import React from 'react';
import './styles/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Páginas
import Home from './pages/Home/Home';
import Servicios from './pages/Servicios';
import Tienda from './pages/Tienda';
import Contacto from './pages/Contacto/Contacto';

// Componentes
import Header from './components/Header/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const MainContent = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/tienda" element={<Tienda />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
            <WhatsAppButton />
            <Footer />
        </>
    );
};

function App() {
    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <MainContent />
        </Router>
    );
}

export default App;