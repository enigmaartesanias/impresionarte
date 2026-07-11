import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f5e6d3] text-gray-900 py-12 w-full mt-auto font-monserrat">
      <div className="container mx-auto px-8 max-w-6xl">

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-400">

          {/* Columna 1: Información */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Impresión Arte Perú</h3>
            <p className="text-base text-gray-800 leading-relaxed">
              Jr. General Orbegoso 249, Dpto. 634<br />
              Lima - Perú
            </p>
          </div>

          {/* Columna 2: Contacto */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Contacto</h3>
            <p className="text-base text-gray-800 mb-2">
              ventas@impresionarteperu.com
            </p>
            <p className="text-base text-gray-800">
              WhatsApp: 999 698 361 / 998 738 077
            </p>
          </div>

          {/* Columna 3: Información */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Servicios</h3>
            <div className="flex flex-col space-y-3 text-base text-gray-800 items-center md:items-start">
              <p>Impresión Offset y Digital</p>
              <p>Diseño Gráfico Profesional</p>
              <p>Acabados Especiales</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-sm text-gray-700">
          <p>© 2026 Impresión & Arte. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;