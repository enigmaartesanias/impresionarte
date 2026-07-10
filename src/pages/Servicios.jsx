import React from 'react';
import { serviciosMock } from '../utils/mockData';

const Servicios = () => {
    return (
        <div className="pt-24 pb-12 px-6 max-w-6xl mx-auto min-h-screen">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Nuestros Servicios</h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Soluciones integrales de impresión y diseño gráfico para potenciar tu marca y proyectos editoriales.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {serviciosMock.map(servicio => (
                    <div key={servicio.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                        <img src={servicio.imagen} alt={servicio.titulo} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">{servicio.titulo}</h2>
                            <p className="text-gray-600 text-sm">{servicio.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Servicios;
