import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            {/* =======================
          HEADER
      ======================== */}
            <header className="header-1 main-menu">
                <div className="container-fluid">
                    <div className="d-flex align-items-center justify-content-between flex-wrap wv-gap-10">
                        <Link to="/" className="header-logo">
                            <span className="logo" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--dark)' }}>AgenciaShopify.</span>
                        </Link>
                        <nav className="header-nav navbar-nav d-none d-lg-block" id="navbarNav">
                            <ul>
                                <li><a href="#inicio">Inicio</a></li>
                                <li><a href="#servicios">Servicios</a></li>
                                <li><a href="#faq">FAQ</a></li>
                            </ul>
                        </nav>
                        <div className="header-social d-none d-xxl-block">
                            <Link to="/cotizar" className="theme-btn">Adquirir Shopify</Link>
                        </div>
                        <a href="#" className="toggle-sidebar">
                            <div className="toggle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                    </div>
                </div>
            </header>

            {/* =======================
          1. HERO PRINCIPAL
      ======================== */}
            <section id="inicio" className="banner-1 wv-mt-55">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="banner-content">
                                <div className="text-center">
                                    <h6 data-aos="fade-up">Agencia Shopify Chile</h6>
                                    <h1 data-aos="fade-up" data-aos-delay="200" className="text-uppercase color-gray-500">
                                        Desarrollo y diseño de tiendas Shopify en Chile
                                    </h1>
                                </div>
                                <div className="row wv-mt-65">
                                    <div className="col-xl-4 col-sm-6">
                                        <p data-aos="fade-right">
                                            Tiendas optimizadas para vender. Desarrollo Shopify a la medida, configuración logística y diseño orientado a conversión para el mercado chileno.
                                        </p>
                                        <div data-aos="fade-right" data-aos-delay="200">
                                            <Link to="/cotizar" className="theme-btn with-icon wv-mt-30">
                                                Comenzar Diagnóstico <i className="fa-light fa-arrow-right-long"></i>
                                            </Link>
                                        </div>

                                        <div className="wv-mt-60" data-aos="fade-right" data-aos-delay="400">
                                            <div className="banner-author-2">
                                                <img className="banner-author-2-img" src="/img/banner_author_2.png" alt="Banner Author" />
                                                <div className="banner-author-2-circle circle-animation">
                                                    <img src="/img/since_1998.png" alt="Shopify Partners" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-sm-6 d-none d-xl-block">
                                        <div className="banner-img">
                                            <img className="banner-img-1" src="/img/banner_author.png" alt="Desarrollo Shopify" />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 flex-end">
                                        <div className="banner-right">
                                            <div data-aos="fade-left" data-aos-delay="200" className="banner-counter">
                                                <div className="banner-counter-item">
                                                    <i className="wv-icon-rocket"></i>
                                                    <h2><span className="counter">100</span>+</h2>
                                                    <p className="counter-text">Tiendas Creadas</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MARQUEE DE MARCAS (TRUST) */}
            <div className="brand-section secondary-bg wv-pt-52 wv-pb-52">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee">
                                <div className="d-flex justify-content-between align-items-center brand-gap" style={{ gap: '90px' }}>
                                    <div className="brand-item"><h3 style={{ color: '#fff', margin: 0 }}>Shopify Partners</h3></div>
                                    <div className="brand-item"><h3 style={{ color: '#fff', margin: 0 }}>Ecosistema Chile</h3></div>
                                    <div className="brand-item"><h3 style={{ color: '#fff', margin: 0 }}>Starken / Chilexpress</h3></div>
                                    <div className="brand-item"><h3 style={{ color: '#fff', margin: 0 }}>Webpay / MercadoPago</h3></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =======================
          2 a 6. SOLUCIONES Y SERVICIOS SHOPIFY
      ======================== */}
            <section id="servicios" className="services-section section-margin">
                <div className="container">
                    <div className="text-center">
                        <h4 className="section-sub-title" data-aos="fade-up">Nuestros Servicios <span></span></h4>
                        <h2 className="section-title" data-aos="fade-up">Soluciones Integrales Shopify</h2>
                    </div>

                    <div className="row wv-mt-75">
                        {/* 2. Diseño Shopify */}
                        <div className="col-lg-4 col-md-6 wv-mb-30">
                            <div data-aos="fade-up">
                                <div className="service-item" style={{ height: '100%' }}>
                                    <div className="service-icon"><i className="wv-icon-computing"></i></div>
                                    <h3 className="service-title">Diseño Shopify</h3>
                                    <p className="service-description">Personalización de themes, diseño UX/UI para ecommerce, y fichas de producto atractivas enfocadas en conversiones.</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Desarrollo Shopify */}
                        <div className="col-lg-4 col-md-6 wv-mb-30">
                            <div data-aos="fade-up" data-aos-delay="100">
                                <div className="service-item" style={{ height: '100%' }}>
                                    <div className="service-icon"><i className="wv-icon-crm"></i></div>
                                    <h3 className="service-title">Desarrollo Shopify</h3>
                                    <p className="service-description">Desarrollo de themes a medida, secciones personalizadas en Liquid y migraciones seguras desde WooCommerce o Jumpseller.</p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Integraciones para Chile */}
                        <div className="col-lg-4 col-md-6 wv-mb-30">
                            <div data-aos="fade-up" data-aos-delay="200">
                                <div className="service-item" style={{ height: '100%' }}>
                                    <div className="service-icon"><i className="wv-icon-magnet"></i></div>
                                    <h3 className="service-title">Integraciones Chile</h3>
                                    <p className="service-description">Configuramos logística nacional (Starken), pasarelas de pago (Webpay, MercadoPago), facturación electrónica y WhatsApp.</p>
                                </div>
                            </div>
                        </div>

                        {/* 5. SEO Shopify */}
                        <div className="col-lg-4 col-md-6 wv-mb-30">
                            <div data-aos="fade-up">
                                <div className="service-item" style={{ height: '100%' }}>
                                    <div className="service-icon"><i className="wv-icon-magnifier"></i></div>
                                    <h3 className="service-title">SEO Shopify</h3>
                                    <p className="service-description">Optimización de arquitectura SEO, velocidad y rendimiento (Core Web Vitals) para captar búsquedas comerciales orgánicas.</p>
                                </div>
                            </div>
                        </div>

                        {/* 6. Soporte y mantención */}
                        <div className="col-lg-4 col-md-6 wv-mb-30">
                            <div data-aos="fade-up" data-aos-delay="100">
                                <div className="service-item" style={{ height: '100%' }}>
                                    <div className="service-icon"><i className="wv-icon-tag"></i></div>
                                    <h3 className="service-title">Soporte & Mantención</h3>
                                    <p className="service-description">Auditoría técnica continua, mantención mensual y optimización de tasa de conversión (CRO) post lanzamiento.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =======================
          7. PREGUNTAS FRECUENTES (FAQ)
      ======================== */}
            <section id="faq" className="about-section section-margin secondary-bg wv-pt-100 wv-pb-100 wv-br-40 wv-mr-20 wv-ml-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <h4 className="section-sub-title" style={{ color: '#fff' }} data-aos="fade-up">Claridad ante todo <span></span></h4>
                            <h2 className="section-title" style={{ color: '#fff' }} data-aos="fade-up">Preguntas Frecuentes</h2>
                            <p style={{ color: '#aaa', marginTop: '20px' }} data-aos="fade-up">Todo lo que necesitas saber antes de invertir en una tienda Shopify en Chile.</p>
                        </div>
                        <div className="col-lg-7">
                            {/* Acordeón Base */}
                            <div className="faq-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div data-aos="fade-up" style={{ background: '#1a1a1a', padding: '25px', borderRadius: '15px' }}>
                                    <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '10px' }}>+ ¿Cuánto cuesta una tienda Shopify en Chile?</h3>
                                    <p style={{ color: '#aaa', margin: 0 }}>Los precios varían dependiendo de la complejidad, el catálogo y las integraciones. Tenemos planes diseñados tanto para emprendedores como para empresas que requieren desarrollos High-End.</p>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="100" style={{ background: '#1a1a1a', padding: '25px', borderRadius: '15px' }}>
                                    <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '10px' }}>+ ¿Qué incluye el desarrollo de una tienda Shopify?</h3>
                                    <p style={{ color: '#aaa', margin: 0 }}>Incluye configuración completa (pasarelas, envíos locales), diseño y desarrollo, optimización SEO inicial y capacitación al equipo.</p>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="200" style={{ background: '#1a1a1a', padding: '25px', borderRadius: '15px' }}>
                                    <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '10px' }}>+ ¿Puedo migrar desde WooCommerce a Shopify?</h3>
                                    <p style={{ color: '#aaa', margin: 0 }}>¡Absolutamente! Contamos con procesos de migración 100% seguros que mantienen tu SEO intacto y cuidan la información vital de tus clientes, pedidos y catálogos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =======================
          8. CTA FINAL
      ======================== */}
            <section className="join-section section-margin primary-bg wv-mr-40 wv-ml-40 wv-mr-md-10 wv-ml-md-10 wv-br-60 position-relative">
                <div className="container-fluid">
                    <div className="row align-items-center wv-pl-40 wv-pr-40">
                        <div className="col-xl-7 col-lg-6 color-white wv-pt-80 wv-pb-80">
                            <h2 className="section-title color-white" data-aos="fade-up">
                                Deja de ofrecer "páginas" <br />y comienza a vender con un Ecosistema.
                            </h2>
                            <p data-aos="fade-up" style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '40px' }}>
                                Únete a las marcas chilenas que ya están escalando a través de una arquitectura ágil, veloz y orientada 100% a conversiones.
                            </p>
                            <div data-aos="fade-up">
                                <Link to="/cotizar" className="theme-btn" style={{ background: '#fff', color: '#000' }}>
                                    Solicitar Cotización a Medida
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 text-center d-none d-lg-block">
                            <img src="/img/join.png" alt="CTA Agency" style={{ maxWidth: '100%', transform: 'scale(1.2)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer style={{ background: '#000', padding: '4rem 0 2rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <p style={{ color: '#fff' }}>&copy; 2026 AgenciaShopify Chile. Desarrollo de tiendas Shopify. Diseño Web Comercial.</p>
                </div>
            </footer>
        </>
    );
}

export default Home;
