import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <header className="header-1 main-menu">
                <div className="container-fluid">
                    <div className="d-flex align-items-center justify-content-between flex-wrap wv-gap-10">
                        <Link to="/" className="header-logo">
                            <span className="logo" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--dark)' }}>AgenciaShopify.</span>
                        </Link>
                        <nav className="header-nav navbar-nav d-none d-lg-block" id="navbarNav">
                            <ul>
                                <li><a href="#inicio">Inicio</a></li>
                                <li><a href="#soluciones">Soluciones</a></li>
                                <li><a href="#planes">Planes</a></li>
                                <li><a href="#proyectos">Proyectos</a></li>
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

            <section className="banner-1 wv-mt-55">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="banner-content">
                                <div className="text-center">
                                    <h6 data-aos="fade-up">Desarrollo Shopify en Chile</h6>
                                    <h1 data-aos="fade-up" data-aos-delay="200" className="text-uppercase color-gray-500">
                                        Sistemas que convierten clics en ventas
                                    </h1>
                                </div>
                                <div className="row wv-mt-65">
                                    <div className="col-xl-4 col-sm-6">
                                        <p data-aos="fade-right">
                                            Más que diseño, creamos ecosistemas comerciales en Chile. Migramos, estructuramos y optimizamos tu Shopify para maximizar tu rentabilidad y experiencia de usuario.
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
                                                    <img src="/img/since_1998.png" alt="Since 1998" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-sm-6 d-none d-xl-block">
                                        <div className="banner-img">
                                            <img className="banner-img-1" src="/img/banner_author.png" alt="Banner Author" />
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

            <div className="brand-section secondary-bg wv-pt-52 wv-pb-52">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee">
                                <div className="d-flex justify-content-between align-items-center brand-gap" style={{ gap: '90px' }}>
                                    <div className="brand-item">
                                        <h3 style={{ color: '#fff', margin: 0 }}>Shopify Partners</h3>
                                    </div>
                                    <div className="brand-item">
                                        <h3 style={{ color: '#fff', margin: 0 }}>Starken</h3>
                                    </div>
                                    <div className="brand-item">
                                        <h3 style={{ color: '#fff', margin: 0 }}>Chilexpress</h3>
                                    </div>
                                    <div className="brand-item">
                                        <h3 style={{ color: '#fff', margin: 0 }}>Webpay Plus</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="about-section section-margin">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-2 col-xl-2 col-lg-3">
                            <h4 className="section-sub-title" data-aos="fade-up">
                                Nuestra Metodología <span></span>
                            </h4>
                        </div>
                        <div className="col-xxl-7 col-xl-9 col-lg-9 offset-xl-1">
                            <h2 className="section-title" data-aos="fade-up">
                                Lanzamos tu tienda optimizada lista para vender en semanas.
                            </h2>
                        </div>
                    </div>
                    <div className="row wv-mt-92 align-items-start align-items-xl-center wv-gap-xl-30">
                        <div className="col-xl-6">
                            <div className="overflow-hidden wv-br-20">
                                <img data-aos="zoom-out" src="/img/about-1.png" className="w-100" alt="About" />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="wv-ml-xxl-0 wv-ml-40">
                                <p data-aos="fade-up">
                                    Aplicamos ingeniería de conversión en cada proyecto. Analizamos tu modelo de negocio local en Chile, configuramos medios de pago y despachos, y creamos un diseño que fomente la confianza en el consumidor.
                                </p>
                                <div className="about-list">
                                    <ul>
                                        <li data-aos="fade-up">Diseño UI/UX Premium</li>
                                        <li data-aos="fade-up">Velocidad y Carga Rápida (CRO)</li>
                                        <li data-aos="fade-up">Soporte Local y Capacitación</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer style={{ background: '#000', padding: '4rem 0 2rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <p style={{ color: '#fff' }}>&copy; 2026 AgenciaShopify Chile. Desarrollo de tiendas Shopify. Diseño Web Comercial.</p>
                </div>
            </footer>
        </>
    );
}

export default Home;
