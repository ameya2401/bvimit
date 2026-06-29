"use client";

import SiteShell from "@/components/layout/SiteShell";
import { ArrowRight, ArrowLeft, Download, ExternalLink, Star } from "lucide-react";
import Image from "next/image";

export default function ScholarshipPage() {
  return (
    <SiteShell>
      <div className="bg-background min-h-screen pb-20 pt-10">
        
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <ArrowRight className="text-primary w-6 h-6 hidden sm:block" />
            <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter uppercase">
              Scholarships <span className="text-primary">Details</span>
            </h1>
            <ArrowLeft className="text-primary w-6 h-6 hidden sm:block" />
          </div>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* AICTE and Development Schemes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* AICTE */}
            <div className="bg-card border border-primary/20 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Star className="w-5 h-5" />
                AICTE Fellowship/Scholarships
                <Star className="w-5 h-5" />
              </h2>
              <p className="text-muted-foreground text-justify mb-8 leading-relaxed flex-grow">
                The AICTE (All India Council for Technical Education) offers various fellowships and scholarship schemes to support students pursuing technical education in India. These schemes mainly focus on financial assistance, inclusivity, and skill development for different categories of students.
              </p>
              <a 
                href="https://fellowship.aicte.gov.in/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground px-6 py-4 rounded-xl font-bold transition-all border border-primary/20 hover:shadow-md w-full justify-center"
              >
                <img src="/gifs/newred.gif" alt="New" className="w-8" />
                Click Here for Details
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Students Development Schemes */}
            <div className="bg-card border border-primary/20 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Star className="w-5 h-5" />
                Students Development Schemes
                <Star className="w-5 h-5" />
              </h2>
              <p className="text-muted-foreground text-justify mb-8 leading-relaxed flex-grow text-sm sm:text-base">
                The AICTE Student Development Schemes are initiatives by the All India Council for Technical Education aimed at supporting students in technical education through scholarships, fellowships, internships, and skill development programs. These schemes focus on promoting equal opportunities by providing financial assistance to meritorious, economically weaker, differently-abled, and girl students, as well as encouraging participation in research, innovation, and global competitions.
              </p>
              <a 
                href="https://aicte.gov.in/schemes/students-development-schemes" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground px-6 py-4 rounded-xl font-bold transition-all border border-primary/20 hover:shadow-md w-full justify-center"
              >
                <img src="/gifs/newred.gif" alt="New" className="w-8" />
                Click Here for Details
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

          </div>

          {/* Aaple Sarkar Section */}
          <div className="bg-card border border-border/50 shadow-md rounded-3xl overflow-hidden mt-16">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 relative min-h-[300px]">
                <Image 
                  src="/images/scholarship.jpeg" 
                  alt="Scholarship" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full lg:w-2/3 p-8 lg:p-12">
                <h3 className="text-3xl font-black text-foreground mb-6 flex items-center gap-3 border-b border-border/50 pb-4">
                  <ArrowRight className="text-primary w-6 h-6 hidden sm:block" />
                  Aaple Sarkar DBT Portal SCHOLARSHIP
                  <ArrowLeft className="text-primary w-6 h-6 hidden sm:block" />
                </h3>
                <div className="text-muted-foreground text-lg space-y-4 mb-8">
                  <p>
                    Aaple Sarkar DBT Portal (Direct Benefit Transfer) is an initiative taken by the Government of Maharashtra, which is a unique Platform for Citizens to help them to avail benefits through the schemes.
                  </p>
                  <p>
                    The main objective of Aaple Sarkar DBT is for Development of a State DBT and Services Portal as the front end and the work flow management and content management platform as back end to various DBT schemes and services starting with scholarship schemes.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/pdf/Scholarships.pdf" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground px-6 py-4 rounded-xl font-bold transition-all border border-primary/20 shadow-sm flex-1 justify-center"
                  >
                    <img src="/gifs/newred.gif" alt="New" className="w-8" />
                    Scholarships Details 2025-2026
                  </a>
                  <a 
                    href="/pdf/Documents for Scholarship.pdf" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground px-6 py-4 rounded-xl font-bold transition-all border border-secondary/20 shadow-sm flex-1 justify-center"
                  >
                    <img src="/gifs/newred.gif" alt="New" className="w-8" />
                    List of Documents
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Scholarship GR Downloads */}
          <div className="bg-muted/30 rounded-3xl p-8 lg:p-12 mt-16 border border-border/50">
            <h2 className="text-3xl font-black text-foreground mb-8 pb-4 border-b border-border/50 flex items-center gap-4">
              Scholarship GR Downloads
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "EBC GR", file: "EBC GR.pdf" },
                { label: "OBC VJNT SBC GR", file: "OBC VJNT SBC GR.pdf" },
                { label: "SC GR", file: "SC GR.pdf" },
                { label: "ST Freeship GR", file: "ST Freeship GR.pdf" },
                { label: "ST Scholarship GR", file: "ST Scholarship GR.pdf" },
              ].map((gr, i) => (
                <a 
                  key={i}
                  href={`/pdf/${gr.file}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-5 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all group"
                >
                  <span className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {gr.label}
                  </span>
                  <div className="bg-primary/10 text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Download className="w-5 h-5" />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </SiteShell>
  );
}
