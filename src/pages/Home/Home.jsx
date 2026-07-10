import React from 'react';
import { Link } from 'react-router-dom';
import { serviciosMock, productosMock } from '../../utils/mockData';

const Home = () => {
    return (
        <main className="pt-16 min-h-screen">
            {/* Hero Section */}
            <section className="bg-[#f5e6d3] py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-6 font-serif">
                        Imprenta y Diseño Editorial
                    </h1>
                    <p className="text-xl text-gray-800 mb-10 max-w-2xl mx-auto font-serif">
                        Transformamos tus ideas en impresiones de alta calidad. Desde papelería corporativa hasta producciones editoriales completas.
                    </p>
                    <Link to="/servicios" className="bg-gray-800 text-[#f5e6d3] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-colors inline-block font-serif tracking-wide">
                        Conoce nuestros servicios
                    </Link>
                </div>
            </section>

            {/* Servicios Destacados */}
            <section className="py-20 px-6 bg-[#fdfbf7]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 font-serif">Lo que hacemos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serviciosMock.slice(0, 3).map(servicio => (
                            <div key={servicio.id} className="text-center">
                                <img src={servicio.imagen} alt={servicio.titulo} className="w-full h-48 object-cover rounded-xl mb-6 shadow-sm border border-[#e8dcc7]" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{servicio.titulo}</h3>
                                <p className="text-gray-700 font-serif">{servicio.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Productos Destacados */}
            <section className="py-20 px-6 bg-[#f5e6d3]">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Productos Destacados</h2>
                            <p className="text-gray-800 font-serif">Soluciones impresas listas para tu negocio.</p>
                        </div>
                        <Link to="/tienda" className="text-gray-900 font-semibold hover:underline hidden sm:block font-serif">
                            Ver catálogo completo →
                        </Link>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {productosMock.slice(0, 4).map(producto => (
                            <div key={producto.id} className="bg-white rounded-xl shadow-sm border border-[#e8dcc7] overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                                <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover" />
                                <div className="p-5 flex flex-col flex-1 bg-[#fdfbf7]">
                                    <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-2 font-serif">{producto.categoria}</span>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-serif">{producto.nombre}</h3>
                                    <div className="mt-auto pt-4 border-t border-[#e8dcc7] flex items-center justify-between">
                                        <span className="font-bold text-gray-900 font-serif">{producto.precio}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center sm:hidden">
                        <Link to="/tienda" className="text-gray-900 font-semibold hover:underline font-serif">
                            Ver catálogo completo →
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;