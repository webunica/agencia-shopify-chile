import React from 'react';
import './index.css';

function App() {
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
                <a href="#faq">FAQ</a>
            </nav>
            <div className="header-actions">
                <a href="#whatsapp" className="btn btn-outline" style={{ padding: '10px 16px' }}>WhatsApp</a>
                <a href="#cotizar" className="btn btn-primary">Solicitar Cotización</a>
            </div>
        </div>
      </header>

      <main>
          {/* Hero Section */}
          <section id="inicio" className="hero">
              <div className="container hero-inner">
                  <div className="hero-content">
                      <h1>Desarrollo de Tiendas Shopify en Chile orientadas a vender más.</h1>
                      <p>Creamos, migramos y optimizamos tu ecommerce con un diseño premium y configuración experta. Deja la tecnología en nuestras manos y enfócate en crecer tu marca.</p>
                      <div className="hero-actions">
                          <a href="#cotizar" className="btn btn-primary">Cotizar mi Proyecto</a>
                          <a href="#soluciones" className="btn btn-outline">Ver Soluciones</a>
                      </div>
                  </div>
                  <div className="hero-image">
                      <span>[ Imagen: Mockup Premium UI/UX Shopify ]</span>
                  </div>
              </div>
          </section>

          {/* Trust Features */}
          <section className="trust-bar">
              <div className="container trust-grid">
                  <div className="trust-item">
                      <h4>🎨 Diseño Premium UI/UX</h4>
                      <p>Tu marca a otro nivel</p>
                  </div>
                  <div className="trust-item">
                      <h4>⚙️ Llave en Mano</h4>
                      <p>Lista para empezar a vender</p>
                  </div>
                  <div className="trust-item">
                      <h4>🚀 Máxima Velocidad</h4>
                      <p>Optimización técnica avanzada</p>
                  </div>
                  <div className="trust-item">
                      <h4>💬 Soporte Local</h4>
                      <p>Equipo experto en Chile</p>
                  </div>
              </div>
          </section>

          {/* Solutions Section */}
          <section id="soluciones" className="section-pad">
              <div className="container">
                  <div className="text-center">
                      <h2>Soluciones integrales para tu Ecommerce</h2>
                      <p>Especialistas en cada etapa del comercio electrónico.</p>
                  </div>
                  
                  <div className="solutions-grid">
                      {/* Tarjeta 1 */}
                      <article className="card">
                          <div className="card-icon">1</div>
                          <h3>Creación de Tiendas Shopify</h3>
                          <p>Diseño y desarrollo desde cero. Entregamos una tienda optimizada, conectada a pasarelas de pago y logística chilena, lista para generar ventas.</p>
                          <a href="#cotizar" style={{ color: 'var(--primary)', fontWeight: 700 }}>Cotizar Tienda Nueva &rarr;</a>
                      </article>
                      {/* Tarjeta 2 */}
                      <article className="card">
                          <div className="card-icon">2</div>
                          <h3>Migración a Shopify</h3>
                          <p>Traslados seguros desde WooCommerce, Jumpseller o Tiendanube. Mantenemos tu SEO, productos y clientes intactos sin fricción.</p>
                          <a href="#cotizar" style={{ color: 'var(--primary)', fontWeight: 700 }}>Saber más de Migraciones &rarr;</a>
                      </article>
                      {/* Tarjeta 3 */}
                      <article className="card">
                          <div className="card-icon">3</div>
                          <h3>Rediseño y CRO</h3>
                          <p>Modernizamos tu Shopify actual. Mejoramos la tasa de conversión (CRO), la experiencia de usuario y la velocidad de carga de tu sitio web.</p>
                          <a href="#cotizar" style={{ color: 'var(--primary)', fontWeight: 700 }}>Auditar mi Tienda &rarr;</a>
                      </article>
                  </div>
              </div>
          </section>

          {/* Call to Action Block */}
          <section className="container">
              <div className="bottom-cta">
                  <h2>¿Listo para tener la tienda Shopify que tu marca merece?</h2>
                  <p>Agenda una asesoría gratuita o solicita tu presupuesto detallado. Nuestro equipo de expertos revisará tu solicitud y se contactará a la brevedad.</p>
                  <a href="#cotizar" className="btn btn-primary" style={{ background: 'var(--white)', color: 'var(--dark)' }}>Empezar mi Proyecto</a>
              </div>
          </section>

      </main>

      {/* Footer base */}
      <footer style={{ background: 'var(--gray-light)', padding: '4rem 0 2rem', borderTop: '1px solid #e2e8f0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
              <p>&copy; 2026 AgenciaShopify Chile. Desarrollo de tiendas Shopify. Diseño Web Comercial.</p>
          </div>
      </footer>
    </>
  );
}

export default App;
