import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const C = {
    brand: '#2563eb', 
    text: '#1a1a1a',
    sub: '#6b7280',
    crema: '#f8fafc',
    bordes: '#e2e8f0',
    icBrand: '#dbeafe',
    textBrand: '#1e40af',
};

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const closeAll = () => setMenuOpen(false);
    const toggleMenu = () => setMenuOpen(o => !o);

    const goTo = (path) => {
        closeAll();
        navigate(path);
    };

    const NavRow = ({ path, iconBg, iconColor, iconContent, label, sub, hasDivider = true }) => (
        <div style={hasDivider ? { borderBottom: `1px solid ${C.bordes}` } : {}}>
            <button
                onClick={() => goTo(path)}
                style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%', padding: '12px 0', background: 'none', border: 'none',
                    cursor: 'pointer', textAlign: 'left',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                        width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                        backgroundColor: iconBg, color: iconColor,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 600, fontSize: 16,
                    }}>
                        {iconContent}
                    </div>
                    <div>
                        <span style={{ display: 'block', fontWeight: 500, fontSize: 16, color: C.text }}>{label}</span>
                        <span style={{ display: 'block', fontSize: 12, color: C.sub }}>{sub}</span>
                    </div>
                </div>
                <span style={{ color: C.sub, fontSize: 20, lineHeight: 1 }}>›</span>
            </button>
        </div>
    );

    return (
        <>
            <style>{`
                @media (min-width: 768px) {
                    #hamburger-btn  { display: none !important; }
                    #mobile-menu-nav { display: none !important; }
                    #menu-overlay    { display: none !important; }
                }
                @media (max-width: 767px) {
                    #desktop-nav { display: none !important; }
                }
            `}</style>

            <header
                id="main-header"
                style={{
                    position: 'fixed', top: 0, left: 0, right: 0,
                    height: 64, zIndex: 100,
                    backgroundColor: '#ffffff',
                    boxShadow: '0 1px 8px rgba(0,0,0,0.04)',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 24px',
                }}
            >
                {/* Logo */}
                <button onClick={() => goTo('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <img
                        src="/images/impresionarte.jpeg"
                        alt="Impresión & Arte"
                        style={{ height: 36, width: 'auto', objectFit: 'contain' }}
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <span style={{ fontWeight: 700, fontSize: 17, color: '#1a1a1a', fontFamily: 'Georgia, serif', letterSpacing: '-0.3px' }}>
                        Impresión <span style={{ color: '#555' }}>&amp;</span> Arte
                    </span>
                </button>

                {/* Hamburguesa móvil */}
                <button
                    id="hamburger-btn"
                    onClick={toggleMenu}
                    aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    style={{
                        display: 'flex', flexDirection: 'column',
                        justifyContent: 'center', alignItems: 'center',
                        width: 40, height: 40,
                        backgroundColor: '#111111',
                        borderRadius: 8, border: 'none',
                        cursor: 'pointer', gap: 5, padding: '10px 8px',
                    }}
                >
                    <span style={{
                        display: 'block', height: 2, width: '100%',
                        backgroundColor: '#fff', borderRadius: 2,
                        transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                        transition: 'transform 0.25s ease',
                    }} />
                    <span style={{
                        display: 'block', height: 2, width: '100%',
                        backgroundColor: '#fff', borderRadius: 2,
                        opacity: menuOpen ? 0 : 1,
                        transition: 'opacity 0.2s ease',
                    }} />
                    <span style={{
                        display: 'block', height: 2,
                        width: menuOpen ? '100%' : '60%',
                        alignSelf: 'flex-end',
                        backgroundColor: '#fff', borderRadius: 2,
                        transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                        transition: 'transform 0.25s ease, width 0.2s ease',
                    }} />
                </button>

                {/* Nav escritorio */}
                <ul id="desktop-nav" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4, listStyle: 'none', margin: 0, padding: 0 }}>
                    <li><Link to="/servicios" style={{ display: 'block', padding: '8px 12px', fontSize: 14, fontWeight: 500, color: '#1a1a1a', textDecoration: 'none' }}>Servicios</Link></li>
                    <li><Link to="/tienda" style={{ display: 'block', padding: '8px 12px', fontSize: 14, fontWeight: 500, color: '#1a1a1a', textDecoration: 'none' }}>Tienda</Link></li>
                    <li><Link to="/contacto" style={{ display: 'block', padding: '8px 12px', fontSize: 14, fontWeight: 500, color: '#1a1a1a', textDecoration: 'none' }}>Contacto</Link></li>
                </ul>
            </header>

            {menuOpen && <div id="menu-overlay" onClick={closeAll} style={{ position: 'fixed', inset: 0, zIndex: 98, backgroundColor: 'rgba(0,0,0,0.15)' }} />}

            <nav
                id="mobile-menu-nav"
                style={{
                    position: 'fixed', top: 64, left: 0, right: 0, bottom: 0, zIndex: 99,
                    display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff',
                    transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: menuOpen ? '4px 0 24px rgba(0,0,0,0.08)' : 'none',
                }}
            >
                <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px' }}>
                    <div style={{ borderBottom: `1px solid ${C.bordes}`, paddingBottom: 16, marginBottom: 16 }}>
                        <NavRow path="/servicios" iconBg={C.icBrand} iconColor={C.textBrand} iconContent="⎙" label="Servicios" sub="Impresión y Diseño Gráfico" />
                        <NavRow path="/tienda" iconBg="#f3f4f6" iconColor="#374151" iconContent="🛒" label="Tienda" sub="Papelería y Productos" />
                        <NavRow path="/contacto" iconBg="#fef3c7" iconColor="#92400e" iconContent="✉" label="Contacto" sub="Contáctanos" hasDivider={false} />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;