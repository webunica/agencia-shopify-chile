import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowLeft, CheckCircle2, Rocket, Briefcase, RefreshCw, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

function Funnel() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        urgency: '',
        stage: '',
        budget: '',
        name: '',
        email: ''
    });

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleSelect = (field, value) => {
        setFormData({ ...formData, [field]: value });
        if (step < 4) {
            setTimeout(() => nextStep(), 400); // Pequeño delay para ver la seleccion
        }
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0
        })
    };

    return (
        <div className="funnel-container" style={{ minHeight: '100vh', background: 'var(--gray-light)', display: 'flex', flexDirection: 'column' }}>

            {/* Header del Funnel */}
            <header style={{ padding: '20px 40px', background: 'var(--white)', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--dark)' }}>AgenciaShopify.</Link>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
                    Paso {step} de 4
                </div>
            </header>

            {/* Contenido centrado de la pregunta */}
            <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                <div style={{ width: '100%', maxWidth: '700px', background: 'var(--white)', padding: '50px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', position: 'relative', overflow: 'hidden' }}>

                    <AnimatePresence mode="wait" custom={1}>

                        {step === 1 && (
                            <motion.div key="step1" custom={1} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                                <h2 style={{ marginBottom: '10px' }}>¿En qué etapa se encuentra tu marca hoy?</h2>
                                <p style={{ marginBottom: '30px' }}>Selecciona la opción que mejor represente tu situación.</p>

                                <div style={{ display: 'grid', gap: '15px' }}>
                                    <FunnelOption
                                        icon={<Rocket />} title="Empezando desde cero" desc="No tengo tienda, quiero partir bien en Shopify."
                                        selected={formData.stage === 'nueva'}
                                        onClick={() => handleSelect('stage', 'nueva')}
                                    />
                                    <FunnelOption
                                        icon={<RefreshCw />} title="Migrar mi tienda actual" desc="Vengo de WooCommerce, Jumpseller, etc."
                                        selected={formData.stage === 'migracion'}
                                        onClick={() => handleSelect('stage', 'migracion')}
                                    />
                                    <FunnelOption
                                        icon={<Briefcase />} title="Optimizar mi Shopify existente" desc="Quiero mejor diseño, CRO o funcionalidades pro."
                                        selected={formData.stage === 'optimizacion'}
                                        onClick={() => handleSelect('stage', 'optimizacion')}
                                    />
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div key="step2" custom={1} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                                <h2 style={{ marginBottom: '10px' }}>¿Cuál es el volumen de ventas que buscas proyectar?</h2>
                                <p style={{ marginBottom: '30px' }}>Esto nos ayuda a recomendarte la arquitectura correcta (apps y servers).</p>

                                <div style={{ display: 'grid', gap: '15px' }}>
                                    <FunnelOption
                                        title="Crecimiento Inicial" desc="Menos de 100 pedidos mensuales."
                                        selected={formData.urgency === 'inicial'}
                                        onClick={() => handleSelect('urgency', 'inicial')}
                                    />
                                    <FunnelOption
                                        title="Escalabilidad" desc="Entre 100 y 1,000 pedidos al mes."
                                        selected={formData.urgency === 'media'}
                                        onClick={() => handleSelect('urgency', 'media')}
                                    />
                                    <FunnelOption
                                        title="Alto Rendimiento" desc="Más de 1,000 pedidos (Requiere estrategia avanzada)."
                                        selected={formData.urgency === 'alta'}
                                        onClick={() => handleSelect('urgency', 'alta')}
                                    />
                                </div>
                                <button onClick={prevStep} className="btn-back"><ArrowLeft size={16} /> Volver</button>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div key="step3" custom={1} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                                <h2 style={{ marginBottom: '10px' }}>¿Cuál es el presupuesto aproximado para tu inversión en tecnología este año?</h2>
                                <p style={{ marginBottom: '30px' }}>Nuestros planes llaves en mano comienzan desde tarifas estratégicas. Nos adaptamos al nivel del proyecto.</p>

                                <div style={{ display: 'grid', gap: '15px' }}>
                                    <FunnelOption
                                        title="USD $800 - $1,500" desc="Ideal para Setups iniciales o marcas emergentes."
                                        selected={formData.budget === 'bajo'}
                                        onClick={() => handleSelect('budget', 'bajo')}
                                    />
                                    <FunnelOption
                                        title="USD $1,500 - $3,500" desc="Proyectos serios de migración o rediseño premium."
                                        selected={formData.budget === 'medio'}
                                        onClick={() => handleSelect('budget', 'medio')}
                                    />
                                    <FunnelOption
                                        title="Más de USD $3,500" desc="Desarrollos B2B, Plus o Ecosistemas de alta magnitud."
                                        selected={formData.budget === 'alto'}
                                        onClick={() => handleSelect('budget', 'alto')}
                                    />
                                </div>
                                <button onClick={prevStep} className="btn-back"><ArrowLeft size={16} /> Volver</button>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div key="step4" custom={1} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                                <h2 style={{ marginBottom: '10px' }}>Último paso. Ingresa tus datos corporativos</h2>
                                <p style={{ marginBottom: '30px' }}>Un especialista analizará tus respuestas y te contactará con una ruta exacta de trabajo.</p>

                                <div style={{ display: 'grid', gap: '20px' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Tu Nombre o de tu Marca</label>
                                        <input
                                            type="text"
                                            style={inputStyle}
                                            placeholder="Ej. Juan Pérez - ModaCL"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Correo Corporativo (O Comercial)</label>
                                        <input
                                            type="email"
                                            style={inputStyle}
                                            placeholder="ejemplo@tumarca.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        className="btn btn-primary"
                                        style={{ width: '100%', marginTop: '10px', fontSize: '1.1rem', padding: '16px' }}
                                        onClick={() => {
                                            alert("¡Consulta recibida! (Aquí se conecta el POST a tu CRM o API de Email)");
                                        }}
                                    >
                                        Solicitar Auditoría Comercial <ChevronRight style={{ marginLeft: '10px' }} />
                                    </button>
                                </div>
                                <button onClick={prevStep} className="btn-back"><ArrowLeft size={16} /> Volver</button>
                            </motion.div>
                        )}

                    </AnimatePresence>

                </div>
            </main>
        </div>
    );
}

// Subcomponente estilizado para las opciones del Formulario
function FunnelOption({ icon, title, desc, onClick, selected }) {
    return (
        <div
            onClick={onClick}
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '20px',
                border: selected ? '2px solid var(--primary)' : '2px solid #e2e8f0',
                borderRadius: '12px',
                background: selected ? '#f0fdf4' : 'var(--white)',
                cursor: 'pointer',
                transition: 'all 0.2s',
            }}
        >
            {icon && (
                <div style={{ color: selected ? 'var(--primary)' : 'var(--text-muted)', marginRight: '20px' }}>
                    {icon}
                </div>
            )}
            <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0, fontSize: '1.1rem', color: selected ? 'var(--primary)' : 'var(--dark)' }}>{title}</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px' }}>{desc}</p>
            </div>
            <div>
                {selected ? <CheckCircle2 color="var(--primary)" /> : <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #cbd5e1' }} />}
            </div>
        </div>
    );
}

const inputStyle = {
    width: '100%',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border 0.2s'
};

export default Funnel;
