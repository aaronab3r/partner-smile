import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Play, ArrowRight, Building2, Users, CreditCard, Lock, Menu, X } from 'lucide-react';
import logo from './assets/logo.jpeg';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCalendly = () => {
    // Placeholder for Calendly modal
    alert("Opening Calendly Scheduler...");
  };

  const handlePayment = () => {
    // Placeholder for Stripe payment
    alert("Redirecting to Stripe Payment...");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-gold selection:text-black overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Partner Smile Logo" className="h-10 w-auto rounded-full border border-gold/30" />
            <span className="text-xl font-semibold tracking-wide text-white hidden sm:block">Partner Smile</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="https://dashboard.stripe.com/login" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-neutral-400 hover:text-gold transition-colors">
              Client Login
            </a>
            <button 
              onClick={scrollToPricing}
              className="bg-gold-gradient text-neutral-950 px-6 py-2.5 rounded-2xl font-semibold text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              Check Availability
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-neutral-900 border-b border-white/10 p-6 flex flex-col gap-4"
          >
            <a href="https://dashboard.stripe.com/login" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-gold">Client Login</a>
            <button onClick={() => { scrollToPricing(); setIsMenuOpen(false); }} className="bg-gold-gradient text-neutral-950 px-6 py-3 rounded-2xl font-semibold w-full">
              Check Availability
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-gold-gradient">Acquire High-Net-Worth</span><br />
            <span className="text-white">Patients Without Ad Spend.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            The exclusive partnership engine that positions your practice inside the city's top luxury residential towers and med spas. No ads. No discounts. Just status.
          </motion.p>

          {/* VSL Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-4xl mx-auto mb-12"
          >
            <video
              className="w-full aspect-video rounded-3xl shadow-2xl border border-gold/30"
              controls
              playsInline
              poster="/thumbnail.jpg"
            >
              <source src="/PartnerSmileVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={scrollToPricing}
              className="w-full sm:w-auto bg-gold-gradient text-neutral-950 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              Check Territory Availability
            </button>
            <button 
              onClick={openCalendly}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-lg border border-gold/30 text-gold hover:bg-gold/10 transition-colors duration-300"
            >
              Book Strategy Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-6 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Lock className="w-8 h-8 text-gold" />,
                title: "Category Exclusivity",
                desc: "We partner with only one cosmetic practice per zip code. Lock out your competitors."
              },
              {
                icon: <Users className="w-8 h-8 text-gold" />,
                title: "Zero Ad Fatigue",
                desc: "Reach patients in their trusted physical environments, not their crowded Instagram feed."
              },
              {
                icon: <Building2 className="w-8 h-8 text-gold" />,
                title: "High-Ticket Intent",
                desc: "We target buildings and clubs where the average resident income qualifies for cash-pay dentistry."
              }
            ].map((card, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="glass-panel p-8 rounded-3xl hover:border-gold/30 transition-colors duration-300 group"
              >
                <div className="mb-6 p-4 bg-neutral-800/50 rounded-2xl w-fit group-hover:bg-gold/10 transition-colors duration-300">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{card.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-neutral-400">Three steps to dominance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            {[
              { step: "01", title: "Territory Check", desc: "Verify if your zip code is available for exclusivity." },
              { step: "02", title: "Partner Matching", desc: "We secure the Real Estate/Med Spa alliance for you." },
              { step: "03", title: "The Access Portal", desc: "We deploy digital perks directly to their high-value clients." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 text-center"
              >
                <div className="w-24 h-24 mx-auto bg-neutral-950 border-2 border-gold rounded-full flex items-center justify-center text-2xl font-bold text-gold mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-neutral-400 max-w-xs mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Offer */}
      <section id="pricing" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[2.5rem] p-8 md:p-12 border border-gold/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Partner Smile <span className="text-gold">Exclusive</span></h2>
                <p className="text-neutral-400 mb-8">Complete access to the luxury partnership engine.</p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Exclusive Zip Code Lock",
                    "Luxury Residential Placement",
                    "Med Spa Partnership Matching",
                    "Digital Access Portal Setup",
                    "Concierge Support"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-gold" />
                      </div>
                      <span className="text-neutral-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 text-center">
                <p className="text-neutral-400 text-sm mb-2 uppercase tracking-wider">Monthly Membership</p>
                <div className="text-5xl font-bold text-white mb-2">$497<span className="text-xl text-neutral-500 font-normal">/mo</span></div>
                <p className="text-neutral-500 text-sm mb-8">Cancel anytime. No long-term contracts.</p>
                
                <button 
                  onClick={handlePayment}
                  className="w-full bg-gold-gradient text-neutral-950 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-gold/20 flex items-center justify-center gap-2"
                >
                  Secure Your Territory <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-neutral-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8 w-auto rounded-full grayscale opacity-50" />
            <span className="text-neutral-500 text-sm">© 2025 Partner Smile. All rights reserved.</span>
          </div>
          
          <div className="flex gap-8">
            <a href="https://dashboard.stripe.com/login" className="text-sm text-neutral-500 hover:text-gold transition-colors">Client Login</a>
            <a href="#" className="text-sm text-neutral-500 hover:text-gold transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;