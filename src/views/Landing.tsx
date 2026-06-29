"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  FileText, 
  Trophy, 
  GraduationCap, 
  Building, 
  Target, 
  Mail, 
  Phone, 
  User, 
  MessageSquare,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  BellRing,
  TrendingUp,
  Briefcase
} from "lucide-react";
import { useEffect, useState } from "react";
import AboutTabs from "@/components/landing/AboutTabs";
import visionMissionImg from "../../image.png";

export default function Landing() {
  // Carousel State
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      img: "/images/carousel/2.jpg",
      title: "Accredited & Affiliated",
      subtitle: "BVIMIT provides top-tier education affiliated with Mumbai University"
    },
    {
      img: "/images/carousel/1.jpg",
      title: "Vibrant Campus Life",
      subtitle: "Empowering students through state-of-the-art infrastructure"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for registering, ${formData.firstname}! We will get back to you shortly.`);
    setFormData({ firstname: "", lastname: "", email: "", phone: "", message: "" });
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <main className="bg-background text-foreground antialiased selection:bg-secondary selection:text-secondary-foreground overflow-x-hidden pb-24">
      
      {/* 1. STUNNING HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full mix-blend-multiply animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full mix-blend-multiply animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full mix-blend-multiply animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Typography & Vision Image */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 flex flex-col gap-8"
            >
              <motion.div variants={fadeUp} className="space-y-4">

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-serif leading-[1.1] tracking-tight text-foreground">
                  Social Transformation <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8A2BE2]">Through Dynamic Education</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Empowering the next generation of IT leaders with cutting-edge MCA programs, industry collaborations, and an environment that fosters multidisciplinary innovation.
                </p>
              </motion.div>

              {/* Dynamic Image Placement */}
              <motion.div variants={fadeUp} className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src={visionMissionImg.src} 
                  alt="Vision and Mission" 
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-black tracking-wide flex items-center gap-2">
                      <Target className="w-6 h-6 text-secondary" /> Vision & Mission
                    </h3>
                    <p className="text-sm text-gray-300 mt-2 max-w-lg line-clamp-2">To prepare students for careers in the industry and pursue research in all branches of computing field through effective teaching-learning process.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Glassmorphic Registration Form */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <div className="bg-card/70 backdrop-blur-xl border border-white/30 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-primary"></div>
                
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-foreground tracking-tight">Begin Your Journey</h2>
                  <p className="text-sm text-muted-foreground mt-2">Register now for admissions and inquiries.</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <User className="absolute left-4 top-3.5 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <input type="text" required placeholder="First Name"
                        value={formData.firstname} onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-2xl border border-border/60 bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium" />
                    </div>
                    <div className="relative group">
                      <User className="absolute left-4 top-3.5 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <input type="text" required placeholder="Last Name"
                        value={formData.lastname} onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-2xl border border-border/60 bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium" />
                    </div>
                  </div>

                  <div className="relative group">
                    <Mail className="absolute left-4 top-3.5 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <input type="email" required placeholder="Email Address"
                      value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-2xl border border-border/60 bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium" />
                  </div>

                  <div className="relative group">
                    <Phone className="absolute left-4 top-3.5 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <input type="tel" required pattern="[0-9]{10}" placeholder="10-Digit Mobile No."
                      value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-2xl border border-border/60 bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium" />
                  </div>

                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <textarea required placeholder="How can we help you?" rows={3}
                      value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-2xl border border-border/60 bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium resize-none" />
                  </div>

                  <button type="submit" className="w-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-black py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 group">
                    Submit Inquiry
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SMART NOTIFICATIONS TICKER */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-20">
        <div className="bg-card/90 backdrop-blur-md border border-border shadow-lg rounded-[2rem] p-6 flex flex-col md:flex-row gap-6 items-center">
          <div className="bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-black text-base md:text-lg flex items-center shrink-0 tracking-wider uppercase shadow-md">
            Announcements
          </div>
          <div className="flex-grow overflow-hidden relative w-full h-10">
            <div className="absolute whitespace-nowrap animate-marquee flex gap-16 items-center h-full text-base font-bold">
              <a href="/pdf/Provisnal Marit List 2025-26.pdf" className="hover:text-primary transition-colors">Provisional Merit List 2025-26 Released</a>
              <a href="/pdf/Ph.D.-Advt.-for-2025-26_BVIMIT (2).pdf" className="hover:text-primary transition-colors">PhD Computer Application Advertisement</a>
              <a href="/pdf/Anti Raggin Committee.pdf" className="hover:text-primary transition-colors">Anti Ragging Committee Notification</a>
              <a href="/pdf/spoc-nptel.pdf" className="hover:text-primary transition-colors">SPOC for NPTEL Local Chapter Details</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC BENTO GRID (Updates & Highlights) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* MCA Latest - Vertical List */}
          <motion.div variants={fadeUp} className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 lg:col-span-1 flex flex-col h-full group">
            <div className="mb-6 pb-4 border-b border-border/50">
              <h3 className="font-black text-2xl tracking-tight text-foreground">MCA Latest</h3>
            </div>
            <div className="space-y-4 flex-grow">
              <a href="https://manthan2k26.vercel.app/" className="block p-4 rounded-2xl bg-muted/30 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-colors group/item">
                <h4 className="font-bold text-sm text-foreground group-hover/item:text-primary transition-colors">Manthan 2026</h4>
                <p className="text-xs text-muted-foreground mt-1">24th & 25th March 2026</p>
              </a>
              <a href="/events-seminars" className="block p-4 rounded-2xl bg-muted/30 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-colors group/item">
                <h4 className="font-bold text-sm text-foreground group-hover/item:text-primary transition-colors">Sports Day 2026</h4>
                <p className="text-xs text-muted-foreground mt-1">18th March 2026</p>
              </a>
              <a href="/events-seminars" className="block p-4 rounded-2xl bg-muted/30 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-colors group/item">
                <h4 className="font-bold text-sm text-foreground group-hover/item:text-primary transition-colors">ICET 2026</h4>
                <p className="text-xs text-muted-foreground mt-1">10th & 11th April 2026</p>
              </a>
            </div>
          </motion.div>

          {/* Placement Highlights - Big Stats (Span 2) */}
          <motion.div variants={fadeUp} className="bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 lg:col-span-2 relative overflow-hidden group">
            <div className="mb-8 pb-4 border-b border-border/50">
              <h3 className="font-black text-2xl tracking-tight text-foreground">Placement Highlights</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 h-full items-center">
              <div className="flex flex-col justify-center bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <p className="text-6xl md:text-7xl font-black text-primary tracking-tighter">18 <span className="text-3xl text-secondary">LPA</span></p>
                <p className="text-muted-foreground font-bold mt-2 uppercase tracking-wider text-sm">Highest CTC Offered</p>
              </div>
              <div className="flex flex-col justify-center gap-6">
                <div className="bg-background rounded-2xl p-5 border border-border shadow-sm">
                  <p className="text-3xl font-black text-foreground tracking-tight">47+</p>
                  <p className="text-sm font-semibold text-muted-foreground mt-1">Companies Visited (2022-2024)</p>
                </div>
                <div className="bg-background rounded-2xl p-5 border border-border shadow-sm">
                  <p className="text-2xl font-black text-foreground tracking-tight">4 - 4.5 LPA</p>
                  <p className="text-sm font-semibold text-muted-foreground mt-1">Average CTC</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Top Recruiters - Pill Layout */}
          <motion.div variants={fadeUp} className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 lg:col-span-1 flex flex-col h-full group">
            <div className="mb-6 pb-4 border-b border-border/50">
              <h3 className="font-black text-2xl tracking-tight text-foreground">Top Recruiters</h3>
            </div>
            <div className="flex flex-wrap gap-2 flex-grow content-start">
              {[
                { name: "Carwala.com", package: "9 LPA" },
                { name: "Josh Tech", package: "8.7 LPA" },
                { name: "Bank of America", package: "6.45 LPA" },
                { name: "BNP Paribas", package: "6 LPA" },
                { name: "Princeton Blue", package: "6.25 LPA" },
                { name: "Zeus Learning", package: "7.5 LPA" },
                { name: "CRM NEXT", package: "4.5 LPA" }
              ].map((company, idx) => (
                <div key={idx} className="px-3 py-2 rounded-lg bg-muted/40 border border-border/50 flex flex-col">
                  <span className="text-xs font-bold text-foreground">{company.name}</span>
                  <span className="text-[10px] text-muted-foreground">{company.package}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* 4. SLIDESHOW & ABOUT TABS */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-20">
        
        {/* Full-width elegant slideshow */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-border group"
        >
          <img
            src={slides[activeSlide].img}
            alt={slides[activeSlide].title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] scale-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-10 left-10 right-10 text-white max-w-2xl">
            <motion.h3 
              key={activeSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black font-serif tracking-tight mb-4"
            >
              {slides[activeSlide].title}
            </motion.h3>
            <p className="text-lg text-gray-300 font-medium">{slides[activeSlide].subtitle}</p>
          </div>

          <button onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 border border-white/20">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 border border-white/20">
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>

        {/* Dynamic About Tabs */}
        <div className="pt-8">
          <AboutTabs />
        </div>
      </section>

      {/* Global styles for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes ring {
          0%, 100% { transform: rotate(0deg); }
          5% { transform: rotate(15deg); }
          10% { transform: rotate(-10deg); }
          15% { transform: rotate(5deg); }
          20% { transform: rotate(-5deg); }
          25% { transform: rotate(0deg); }
        }
      `}} />
    </main>
  );
}
