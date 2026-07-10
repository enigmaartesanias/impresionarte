import React from 'react';
import { productosMock } from '../utils/mockData';

const Tienda = () => {
    return (
        <div className="pt-24 pb-12 px-6 max-w-6xl mx-auto min-h-screen">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Tienda y Productos</h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Explora nuestro catálogo de productos impresos y papelería corporativa listos para ser personalizados.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {productosMock.map(producto => (
                    <div key={producto.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                        <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover" />
                        <div className="p-5 flex flex-col flex-1">
                            <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2">{producto.categoria}</span>
                            <h2 className="text-lg font-bold text-gray-900 mb-2">{producto.nombre}</h2>
                            <p className="text-gray-600 text-sm mb-4 flex-1">{producto.descripcion}</p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="font-bold text-gray-900">{producto.precio}</span>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                                    Consultar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tienda;
