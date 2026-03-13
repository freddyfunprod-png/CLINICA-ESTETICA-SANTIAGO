import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Instagram, Facebook, Phone, MapPin, 
  ChevronRight, ArrowRight, Star, Award, Users, 
  Calendar, CheckCircle2, PlayCircle, Clock
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Tratamientos', href: '#tratamientos' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 flex items-center justify-center">
            <img src="https://i.imgur.com/vl6cqxn.png" alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Clínica Santiago</span>
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-60">Estética</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] uppercase tracking-[0.15em] font-medium hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2 border border-luxury-ink text-[10px] uppercase tracking-[0.2em] hover:bg-luxury-ink hover:text-white transition-all duration-300">
            Agendar
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-luxury-ink/5 p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden bg-muted-grey">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/e2v8KG3.jpg" 
          alt="Clínica Santiago Interior" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-[10px] uppercase tracking-[0.4em] text-gold mb-6 font-bold">
            Medicina Estética de Vanguardia
          </span>
          <h1 className="text-6xl md:text-8xl leading-[0.9] mb-8 font-serif font-light">
            Tu mejor versión <br />
            <span className="italic">comienza aquí.</span>
          </h1>
          <p className="text-sm md:text-base text-luxury-ink/60 max-w-md mb-10 leading-relaxed tracking-wide">
            Expertos en armonización facial y corporal. Tecnología de última generación y un equipo médico multidisciplinario a tu servicio.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="px-10 py-5 bg-luxury-ink text-white text-[11px] uppercase tracking-[0.2em] hover:bg-gold transition-all duration-500 flex items-center gap-3">
              Agenda tu Evaluación <ArrowRight size={14} />
            </button>
            <button className="px-10 py-5 border border-luxury-ink text-luxury-ink text-[11px] uppercase tracking-[0.2em] hover:bg-luxury-ink hover:text-white transition-all duration-500">
              Ver Tratamientos
            </button>
          </div>
        </motion.div>

        <div className="hidden lg:block relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[4/5] magazine-border overflow-hidden flex items-center justify-center"
          >
            <img src="https://i.imgur.com/vl6cqxn.png" alt="Logo Hero" className="w-2/3 h-2/3 object-contain opacity-80" referrerPolicy="no-referrer" />
            <div className="absolute top-8 right-8 vertical-rail text-[10px] uppercase tracking-[0.5em] text-luxury-ink mix-blend-difference">
              SANTIAGO • CHILE
            </div>
          </motion.div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gold/10 backdrop-blur-xl magazine-border p-6 flex flex-col justify-end">
            <span className="text-3xl font-serif mb-2">15k+</span>
            <span className="text-[10px] uppercase tracking-widest opacity-60">Pacientes Felices</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResultsGallery = () => {
  const results = [
    { img: 'https://i.imgur.com/axduxyM.jpg' },
    { img: 'https://i.imgur.com/y5IuJ8z.jpg' },
    { img: 'https://i.imgur.com/B4I2o2H.jpg' },
    { img: 'https://i.imgur.com/dOzU8lT.jpg' },
  ];

  return (
    <section id="resultados" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4 block font-bold">Casos de Éxito</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">Resultados que <br /><span className="italic">hablan por sí solos.</span></h2>
          </div>
          <p className="text-sm text-luxury-ink/50 max-w-xs uppercase tracking-widest leading-loose">
            Explora nuestra galería de transformaciones reales realizadas por expertos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="relative aspect-[3/4] overflow-hidden group magazine-border bg-white"
            >
              <img 
                src={item.img} 
                alt="Resultado de procedimiento" 
                className="w-full h-full object-contain transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-ink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="before-after-pill left-4">Antes</div>
              <div className="before-after-pill right-4">Después</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const team = [
    { name: 'Dr. Alejandro Depetris', role: 'Director Médico', img: 'https://i.imgur.com/ka2FUZP.jpg', pos: 'center 5%' },
    { name: 'Dra. Elena Martínez', role: 'Especialista', img: 'https://i.imgur.com/5TIXGi0.jpg', pos: 'center 5%' },
    { name: 'Dr. Alejandro Girod', role: 'Cirujano Plástico', img: 'https://i.imgur.com/ASDAN0g.jpg', pos: 'center 5%' },
    { name: 'Dra. Ana Sofía', role: 'Medicina Estética', img: 'https://i.imgur.com/uNUXqws.jpg', pos: 'center 5%' },
    { name: 'Dr. Sastre', role: 'Cirujano Plástico', img: 'https://i.imgur.com/b7mqJ15.jpg', pos: 'center 5%' },
    { name: 'Dr. Diego Lombardi', role: 'Cirujano Plástico', img: 'https://i.imgur.com/vLhKzc6.jpg', pos: 'center 5%' },
  ];

  return (
    <section id="nosotros" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4 block font-bold">Excelencia Médica</span>
            <h2 className="text-5xl md:text-7xl font-serif">Expertos a tu <span className="italic">disposición.</span></h2>
          </div>
          <p className="text-sm text-luxury-ink/60 max-w-xs uppercase tracking-widest leading-relaxed">
            Un equipo multidisciplinario dedicado a resaltar tu belleza natural con la más alta tecnología.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {team.map((member, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-8 magazine-border bg-muted-grey relative">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  style={{ objectPosition: member.pos || 'center' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              <div className="space-y-2">
                <div className="h-px w-12 bg-gold mb-4 transition-all duration-500 group-hover:w-full" />
                <h3 className="text-xl md:text-3xl font-serif">{member.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contacto" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative h-[600px] magazine-border overflow-hidden bg-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.228182283188!2d-70.6035965243105!3d-33.41618197340333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf090766e413%3A0x78324c3e46b69473!2sCl%C3%ADnica%20Santiago%20Est%C3%A9tica!5e0!3m2!1ses!2scl!4v1710351000000!5m2!1ses!2scl" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Clínica Santiago Estética"
          ></iframe>
        </div>
        
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Contacto</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">Hablemos de <br /><span className="italic">tu cambio.</span></h2>
          </div>

          <div className="space-y-10">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full bg-muted-grey flex items-center justify-center shrink-0 transition-colors group-hover:bg-gold/10">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Ubicación</h4>
                <p className="text-luxury-ink/70 leading-relaxed">
                  Av. Vitacura 2902, Oficina 401,<br />Las Condes, Santiago, Chile.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full bg-muted-grey flex items-center justify-center shrink-0 transition-colors group-hover:bg-gold/10">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Teléfono</h4>
                <a href="tel:+56964968073" className="text-luxury-ink/70 hover:text-gold transition-colors">+56 9 6496 8073</a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full bg-muted-grey flex items-center justify-center shrink-0 transition-colors group-hover:bg-gold/10">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Horario</h4>
                <p className="text-luxury-ink/70">
                  Lunes a Viernes: 09:00 - 20:00<br />
                  Sábados: 10:00 - 14:00
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <a 
              href="https://wa.me/56964968073" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-luxury-ink text-white uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-gold transition-all duration-500 group"
            >
              Contactar por WhatsApp
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-luxury-ink text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="https://i.imgur.com/vl6cqxn.png" alt="Logo" className="w-full h-full object-contain brightness-0 invert" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-[0.2em] uppercase">Clínica Santiago</span>
                <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">Estética</span>
              </div>
            </div>
            <p className="text-sm text-white/40 max-w-sm leading-loose tracking-wide">
              Comprometidos con la excelencia en medicina estética y el bienestar integral de nuestros pacientes desde 2018.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-gold">Enlaces</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#tratamientos" className="hover:text-white transition-colors">Tratamientos</a></li>
              <li><a href="#resultados" className="hover:text-white transition-colors">Resultados</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-gold">Síguenos</h4>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-luxury-ink transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-luxury-ink transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-white/20">
          <p>© 2024 Clínica Santiago Estética. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const TestimonialsSection = () => {
  const reviews = [
    {
      name: "Musimi Gonza",
      text: "Estimado Dr. Depetris, quisiera expresar mi sincera gratitud por la excelente atención que recibí. Un equipo humano excepcional.",
      procedure: "Paciente de la Clínica",
      image: "https://i.pravatar.cc/150?u=musimi"
    },
    {
      name: "Sara Lepillanca",
      text: "Las palabras no pueden expresar mi gratitud a este equipo maravilloso por acompañarme durante mis dos cirugías de aumento de mama. Desde mi primera operación me sentí segura.",
      procedure: "Aumento de Mama",
      image: "https://i.pravatar.cc/150?u=sara"
    },
    {
      name: "Alejandra Castro Ramirez",
      text: "Estoy muy feliz con los resultados de mi mini lifting facial. El equipo de la clínica fue fantástico. La recuperación ha sido increíblemente fácil y prácticamente indolora.",
      procedure: "Mini Lifting Facial",
      image: "https://i.pravatar.cc/150?u=alejandra"
    },
    {
      name: "Erick Fabián Montenegro",
      text: "Excelente atención desde el inicio. El ejecutivo de ventas, el cirujano plástico, la enfermera, el fisioterapeuta... todos brindaron una atención excepcional y genuina compasión.",
      procedure: "Paciente de la Clínica",
      image: "https://i.pravatar.cc/150?u=erick"
    },
    {
      name: "Patricia Garcia",
      text: "Es un lugar espectacular. Desde el primer contacto fueron muy atentos. El Dr. Depetris siempre estuvo atento a nuestras preguntas y preocupaciones. La cirugía fue un éxito.",
      procedure: "Paciente de la Clínica",
      image: "https://i.pravatar.cc/150?u=patricia"
    },
    {
      name: "Olga Norambuena",
      text: "Clínica Santiago Estética ha sido una experiencia maravillosa. Me hice un lifting facial y ahora una mastopexia con el Dr. Girod. Es realmente un especialista.",
      procedure: "Lifting y Mastopexia",
      image: "https://i.pravatar.cc/150?u=olga"
    },
    {
      name: "Rosa Alba Gallardo",
      text: "Quisiera compartir mi experiencia: desde el ingreso recibí una atención excelente. El equipo y las enfermeras fueron muy atentos, y el médico fue fantástico.",
      procedure: "Paciente de la Clínica",
      image: "https://i.pravatar.cc/150?u=rosa"
    },
    {
      name: "Claudia Barbieri",
      text: "Me operé con el Dr. Sastre. Todos se mostraron muy atentos conmigo antes, durante y después de la operación. El cariño y la empatía son un verdadero acogimiento humano.",
      procedure: "Paciente de la Clínica",
      image: "https://i.pravatar.cc/150?u=claudia"
    }
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-8 block font-bold">Testimonios Reales</span>
        
        <div className="relative h-[400px] md:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex justify-center gap-1 mb-8 text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
              </div>
              <h2 className="text-2xl md:text-3xl font-serif italic mb-8 leading-relaxed">
                "{reviews[active].text}"
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden magazine-border">
                  <img src={reviews[active].image} alt={reviews[active].name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold uppercase tracking-widest">{reviews[active].name}</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-40">{reviews[active].procedure}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          {reviews.map((_, i) => (
            <button 
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${active === i ? 'bg-gold w-8' : 'bg-luxury-ink/10'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Magazine Marquee */}
      <div className="bg-luxury-ink py-4 overflow-hidden whitespace-nowrap border-y border-white/10">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[10px] uppercase tracking-[0.8em] text-white/40 mx-10">
              ARMONIZACIÓN FACIAL • RINOMODELACIÓN • PERFILADO LABIAL • TRATAMIENTOS CORPORALES • 
            </span>
          ))}
        </motion.div>
      </div>

      {/* Treatments Section */}
      <section id="tratamientos" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4 block font-bold">Nuestros Servicios</span>
              <h2 className="text-5xl md:text-7xl font-serif leading-tight">Tratamientos <br /><span className="italic">de alta precisión.</span></h2>
            </div>
            <p className="text-sm text-luxury-ink/50 max-w-xs uppercase tracking-widest leading-loose">
              Tecnología de vanguardia aplicada a tu belleza natural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: 'https://i.imgur.com/E1dk1yU.jpg' },
              { img: 'https://i.imgur.com/i6jf1Ky.jpg' },
              { img: 'https://i.imgur.com/fpT9RIN.jpg' },
              { img: 'https://i.imgur.com/owJ32ys.jpg' },
            ].map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 magazine-border bg-white">
                  <img src={t.img} alt="Procedimiento" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ResultsGallery />
      
      {/* Facilities Section */}
      <section className="py-32 bg-muted-grey">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4 block font-bold">Nuestras Instalaciones</span>
            <h2 className="text-5xl font-serif">Espacios diseñados para <br /><span className="italic">tu confort.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-3 aspect-[16/9] magazine-border overflow-hidden bg-white">
              <img src="https://i.imgur.com/e2v8KG3.jpg" alt="Instalación 1" className="w-full h-full object-contain transition-transform duration-700 hover:scale-105" referrerPolicy="no-referrer" />
            </div>
            {[
              'https://i.imgur.com/kLPd6rT.jpg',
              'https://i.imgur.com/AMgtHxa.jpg',
              'https://i.imgur.com/UYm7JkR.jpg',
              'https://i.imgur.com/YDxiAnp.jpg',
              'https://i.imgur.com/fVCXzoO.jpg',
              'https://i.imgur.com/v4i33n4.jpg'
            ].map((img, i) => (
              <div key={i} className="aspect-[4/5] magazine-border overflow-hidden bg-white">
                <img src={img} alt={`Instalación ${i + 2}`} className="w-full h-full object-contain hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      
      {/* Featured Quote Section */}
      <section className="py-40 bg-luxury-ink overflow-hidden relative text-white">
        <div className="absolute inset-0 z-0 bg-luxury-ink">
          <div className="absolute inset-0 flex items-center justify-center text-white/5 uppercase tracking-[1em] text-sm">Fondo Frase</div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[20vw] font-serif opacity-[0.03] select-none whitespace-nowrap">
          ESTÉTICA SANTIAGO
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-gold text-4xl font-serif mb-8 block">"</span>
          <h2 className="text-3xl md:text-5xl font-serif leading-relaxed mb-12 italic">
            La belleza no es un destino, es un camino hacia la confianza y el amor propio.
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mb-6" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Clínica Santiago</span>
        </div>
      </section>

      <TeamSection />
      <ContactSection />
      <Footer />

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/56964968073" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
        aria-label="WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute right-full mr-4 bg-white text-luxury-ink px-4 py-2 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿En qué podemos ayudarte?
        </span>
      </a>
    </div>
  );
};

export default App;
