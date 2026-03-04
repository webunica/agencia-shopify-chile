import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <header>
                <div className="container nav-container">
                    <div className="logo">AgenciaShopify.</div>
                    <nav className="nav-links">
                        <a href="#inicio">Inicio</a>
                        <a href="#soluciones">Soluciones</a>
                        <a href="#planes">Planes</a>
                        <a href="#proyectos">Proyectos</a>
                    </nav>
                    <div className="header-actions">
                        <a href="#whatsapp" className="btn btn-outline" style={{ padding: '10px 16px' }}>WhatsApp</a>
                        <Link to="/cotizar" className="btn btn-primary">Adquirir Shopify</Link>
                    </div>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section id="inicio" className="hero">
                    <div className="container hero-inner">
                        <div className="hero-content">
                            <h1>Lanza y escala tu Tienda Shopify con un sistema que convierte clics en ventas.</h1>
                            <p>Más que diseño, creamos ecosistemas comerciales en Chile. Migramos, estructuramos y optimizamos tu Shopify para maximizar tu rentabilidad y experiencia de usuario.</p>
                            <div className="hero-actions">
                                <Link to="/cotizar" className="btn btn-primary">Comenzar mi Evaluación</Link>
                                <a href="#soluciones" className="btn btn-outline">Ver Soluciones</a>
                            </div>
                        </div>
                        <div className="hero-image">
                            <span>[ Imagen: Sistema de Embudo / Dashboard ]</span>
                        </div>
                    </div>
                </section>

                {/* Trust Features */}
                <section className="trust-bar">
                    <div className="container trust-grid">
                        <div className="trust-item">
                            <h4>📊 Embudo de Ventas Integrado</h4>
                            <p>Rutas claras hacia la compra</p>
                        </div>
                        <div className="trust-item">
                            <h4>⚡ Velocidad y CRO</h4>
                            <p>Optimizados para retener clientes</p>
                        </div>
                        <div className="trust-item">
                            <h4>⚙️ Configuración Logística</h4>
                            <p>Starken, Bluexpress, Webpay listos</p>
                        </div>
                        <div className="trust-item">
                            <h4>📈 Estrategia Escalable</h4>
                            <p>Estructura pensada para crecer</p>
                        </div>
                    </div>
                </section>

                {/* CTA Bottom */}
                <section className="container">
                    <div className="bottom-cta">
                        <h2>Deja de ofrecer "páginas" y comienza a vender ecosistemas rentables.</h2>
                        <p>Inicia nuestro embudo de diagnóstico para entender tu negocio en 2 minutos y entregarte la solución exacta que necesitas.</p>
                        <Link to="/cotizar" className="btn btn-primary" style={{ background: 'var(--white)', color: 'var(--dark)' }}>Comenzar Diagnóstico Interactivo</Link>
                    </div>
                </section>

            </main>

            {/* Footer base */}
            <footer style={{ background: 'var(--gray-light)', padding: '4rem 0 2rem', borderTop: '1px solid #e2e8f0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <p>&copy; 2026 Sistema Shopify Avanzado. Ecommerce de Alto Rendimiento.</p>
                </div>
            </footer>
        </>
    );
}

export default Home;
