"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserPlus, 
  GraduationCap, 
  Calendar, 
  Award, 
  Users, 
  BookOpen,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    id: "founder",
    label: "Founder's Message",
    icon: UserPlus,
    image: "/images/about/ceo.jpg",
    title: "Dr. Patangrao Kadam",
    subtitle: "Founder, Bharati Vidyapeeth Deemed University",
    content: (
      <>
        <p className="mb-4">
          I am indeed happy to welcome you to MCA Bharati Vidyapeeth’s
          Institute of Management & Information Technology, Navi
          Mumbai, which has a large pool of new executive talent
          waiting to step into the Corporate World.
        </p>
        <p className="mb-6">
          I established Bharati Vidyapeeth in 1964 with a
          realization that all-round social transformation can be
          brought about through the spread of education. During the
          last 55 years, we have established more than 156
          educational units of various kinds, right from Pre-Primary
          School to a full-fledged University.
        </p>
      </>
    ),
    link: "/about.php"
  },
  {
    id: "principal",
    label: "Principal's Message",
    icon: GraduationCap,
    image: "/images/about/principal.jpg",
    title: "Dr. Suhasini Vijaykumar",
    subtitle: "M.C.A, Ph. D. | Principal, BVIMIT",
    content: (
      <>
        <p className="mb-4">
          I would like to extend my sincere gratitude to each and
          every one of our stakeholders – our corporate and academic
          partners, alumni, faculty and students who have believed
          in us and supported us through our journey of becoming a
          successful technical and management institute over the
          past decade.
        </p>
        <p className="mb-6">
          Meeting the challenging IT requirements of the corporates
          is the prime responsibility of software engineers, BVIMIT,
          spares no effort to make its curriculum meaningful
          addressing the requirement. A team of dedicated faculty
          with a judicious blend of academic and industry background
          has made the delivery of the MCA programme NBA Accredited most effective
          to end users.
        </p>
      </>
    ),
    link: "/about.php#principal"
  },
  {
    id: "events",
    label: "Events",
    icon: Calendar,
    image: "/images/about/events.jpg",
    title: "Vibrant Campus Life",
    subtitle: "Activities that shape personalities",
    content: (
      <ul className="space-y-2 mb-6">
        {["International conferences", "Workshops and seminars", "Orientation", "Fresher's Party", "Cultural Week", "Eminence", "Milan", "Convocation"].map((event, i) => (
          <li key={i} className="flex items-center gap-2 text-muted-foreground font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
            {event}
          </li>
        ))}
      </ul>
    ),
    link: "/events-seminars"
  },
  {
    id: "scholarship",
    label: "Scholarship",
    icon: Award,
    image: "/images/about/events.jpg", // Fallback if no scholarship specific image
    title: "Empowering Futures",
    subtitle: "Financial assistance & awards",
    content: (
      <div className="space-y-4 mb-6">
        <a href="https://fellowship.aicte.gov.in/" target="_blank" rel="noreferrer" className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border transition-colors">
          <img src="/images/about/newred.gif" alt="New" className="mt-1 w-8" />
          <span className="font-semibold text-foreground">Click Here for AICTE Fellowship/Scholarships Details!</span>
        </a>
        <a href="https://aicte.gov.in/schemes/students-development-schemes" target="_blank" rel="noreferrer" className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border transition-colors">
          <img src="/images/about/newred.gif" alt="New" className="mt-1 w-8" />
          <span className="font-semibold text-foreground">Click Here for Students Development Schemes Details!</span>
        </a>
        <a href="/pdf/Scholarships.pdf" target="_blank" rel="noreferrer" className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border transition-colors">
          <img src="/images/about/newred.gif" alt="New" className="mt-1 w-8" />
          <span className="font-semibold text-foreground">Click Here for Aaple Sarkar DBT Portal (Direct Benefit Transfer) Scholarships Details 2025-2026!</span>
        </a>
      </div>
    ),
    link: "/scholarship"
  },
  {
    id: "students",
    label: "Student's Corner",
    icon: Users,
    image: "/images/about/students.jpg",
    title: "Student Centric Institute",
    subtitle: "Empowering students with resources",
    content: (
      <>
        <p className="mb-6">
          BVIMIT prides itself on being a student-centric institute. Students are here entrusted with resources and responsibilities early on. They are encouraged to participate in various activities and motivated to develop the live project for their future aspects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary/10 text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-colors border border-primary/20">
            <img src="/images/about/newred.gif" alt="New" className="w-6" />
            Student Handbook
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary/10 text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-colors border border-primary/20">
            <img src="/images/about/newred.gif" alt="New" className="w-6" />
            Technical Magazine
          </a>
        </div>
      </>
    ),
    link: "/student-corners"
  },
  {
    id: "library",
    label: "Library",
    icon: BookOpen,
    image: "/images/about/library.jpg",
    title: "Rich Collection",
    subtitle: "Knowledge hub of BVIMIT",
    content: (
      <p className="mb-6">
        Library BVIMIT library is very rich in its collection.
        Latest editions of textbooks, reference books journals and
        online full-text resources are available for its members.
      </p>
    ),
    link: "/campus_library.php"
  }
];

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find(t => t.id === activeTab)!;

  return (
    <section className="py-24 bg-background border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Discover <span className="text-primary italic">BVIMIT</span>
          </h2>
          <p className="text-muted-foreground font-semibold uppercase tracking-widest text-xs">
            Learn more about our institution
          </p>
        </div>

        <div className="bg-card border border-border border-t-4 border-t-primary rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
          
          {/* Tabs Sidebar */}
          <div className="w-full lg:w-1/3 bg-muted/10 border-b lg:border-b-0 lg:border-r border-border/50 p-4 lg:p-6 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible custom-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-4 px-5 py-4 rounded-sm transition-all whitespace-nowrap lg:whitespace-normal text-left group overflow-hidden ${
                    isActive 
                      ? "text-primary-foreground" 
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-primary z-0"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-5 h-5 shrink-0 relative z-10 ${isActive ? "text-primary-foreground" : "text-primary group-hover:scale-110 transition-transform"}`} />
                  <span className="font-bold tracking-tight relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3 p-6 lg:p-12 relative overflow-hidden bg-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                <div className="flex flex-col xl:flex-row gap-10 items-start">
                  
                  {/* Image */}
                  <div className="w-full xl:w-5/12 shrink-0">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="relative aspect-[3/4] sm:aspect-video xl:aspect-[3/4] w-full rounded-sm overflow-hidden border border-border group/img"
                    >
                      <Image 
                        src={activeContent.image} 
                        alt={activeContent.title}
                        fill
                        className="object-cover group-hover/img:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-black/20 to-transparent pointer-events-none opacity-80 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-0 left-0 p-6 text-white pointer-events-none translate-y-4 group-hover/img:translate-y-0 transition-transform duration-500">
                        <h4 className="font-black text-xl leading-tight">{activeContent.title}</h4>
                      </div>
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div className="w-full xl:w-7/12 flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-foreground tracking-tight mb-2">
                        {activeContent.title}
                      </h3>
                      <h5 className="text-sm font-bold uppercase tracking-widest text-primary">
                        {activeContent.subtitle}
                      </h5>
                    </div>

                    <div className="text-muted-foreground text-lg leading-relaxed flex-grow">
                      {activeContent.content}
                    </div>

                    <div className="mt-8 pt-6 border-t border-border/50">
                      <Link 
                        href={activeContent.link}
                        className="inline-flex items-center gap-2 bg-secondary text-black px-6 py-2 rounded-full font-bold transition-all group hover:bg-secondary/90 hover:shadow-[0_0_20px_rgba(253,192,3,0.4)] hover:-translate-y-1"
                      >
                        Read More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
