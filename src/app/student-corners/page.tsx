"use client";

import SiteShell from "@/components/layout/SiteShell";
import { ArrowRight, Star, FileText, Newspaper, Trophy, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function StudentCornersPage() {
  const magazines = [
    { title: "Technical Magazine 2019", file: "tech_mag18-19.pdf", thumb: "t2019.PNG" },
    { title: "Technical Magazine 2018", file: "Tech_mag18.pdf", thumb: "t2018.PNG" },
    { title: "Technical Magazine 2017", file: "Tech_mag 16-17.pdf", thumb: "t2017.PNG" },
    { title: "Technical Magazine 2016", file: "Tech Mag 15-16.pdf", thumb: "t2016.PNG" },
  ];

  const newsletters = [
    { title: "Newsletter Prabhat 2019 Issue II", file: "Newsletter Prabhat 2019 Issue II (2).pdf", thumb: "prabhatII.bmp" },
    { title: "Newsletter Prabhat 2019 Issue I", file: "Newsletter Prabhat 2019 Issue I (5).pdf", thumb: "prabhat.PNG" },
    { title: "Newsletter Prabhat 2018 Issue II", file: "Newsletter Prabhat 2018 Issue II.pdf", thumb: "NL2018II.PNG" },
    { title: "Newsletter Prabhat 2018 Issue I", file: "Newsletter Prabhat 2018 Issue I.pdf", thumb: "NL2018I.PNG" },
    { title: "Newsletter Prabhat 2017 Issue II", file: "Newsletter Prabhat 2017 Issue II.pdf", thumb: "NL2017II.PNG" },
    { title: "Newsletter Prabhat 2017 Issue I", file: "Newsletter Prabhat 2017 Issue I.pdf", thumb: "NL2017I.PNG" },
  ];

  const achievements = [
    "Prof. Jyoti Kharade and students won the Gold Medal for “Innovation in Management Education” for their presentation at All India Institute of Management Schools (AIMS) on “Innovation in Management Education.”",
    "The students from MCA final year –Dipak Sonnar, Prashant Gaykar and Dyaneshwar Jambhulkar won the silver medal for their presentation of the students’ project on “WE School Innovation Award” at All India Institute of Management Studies (AIMS).",
    "MCA students, Jadhav Mayuri Ananda Anita (2012-2015 Batch) stood second in University and brought laurels to our institute.",
    "MCA students, Kaur Navneet Balwinder Manjeet (2011-2014 Batch) stood second in University and brought laurels to our institute.",
    "MCA students, Phatangale Trupti Laxmikant Mahima (2010-2013 Batch) stood second in University and brought laurels to our institute.",
    "One of our MCA students, Vipul Shah (2007 batch) stood as a University topper in 2010 and brought laurels to our institute.",
    "Smart India Hackathon 2017 - Three teams participated in Smart India Hackathon 2017 under the guidance of Dr. Suhasini Vijaykumar, Dr. Jyoti Kharade and Ms. Uttara Athawale. Team leaders received the participation certificates."
  ];

  return (
    <SiteShell>
      <div className="bg-background min-h-screen pb-20 pt-10">
        
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Star className="text-primary w-6 h-6 hidden sm:block" />
            <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter uppercase">
              Student <span className="text-primary">Corner</span>
            </h1>
            <Star className="text-primary w-6 h-6 hidden sm:block" />
          </div>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Intro Section */}
          <div className="bg-card border border-border/50 shadow-xl rounded-3xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-[400px]">
                <Image 
                  src="/images/Students.jpg" 
                  alt="Students" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-black text-foreground mb-6 flex items-center gap-3 border-b border-border/50 pb-4">
                  <ArrowRight className="text-primary w-6 h-6" />
                  Student Centric Institute
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                  BVIMIT prides itself on being a student-centric institute. Students are here entrusted with resources and responsibilities early on. They are encouraged to participate in various activities and motivated to develop the live project for their future aspects.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Magazine Section */}
          <section>
            <div className="flex items-center gap-3 mb-8 pb-2 border-b border-border/50">
              <FileText className="text-primary w-8 h-8" />
              <h2 className="text-3xl font-black text-foreground uppercase tracking-tight">Technical Magazine</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {magazines.map((mag, i) => (
                <a 
                  key={i} 
                  href={`/pdf/${mag.file}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/50 transition-all group flex flex-col"
                >
                  <div className="relative aspect-[3/4] w-full bg-muted">
                    <Image src={`/pdf/Thumbnails/${mag.thumb}`} alt={mag.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                      <Image src="/images/corner-pdf.png" alt="PDF" width={16} height={16} />
                      <span className="text-xs font-bold text-white uppercase">PDF</span>
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex items-center justify-center text-center">
                    <span className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {mag.title}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Newsletter Section */}
          <section>
            <div className="flex items-center gap-3 mb-8 pb-2 border-b border-border/50">
              <Newspaper className="text-primary w-8 h-8" />
              <h2 className="text-3xl font-black text-foreground uppercase tracking-tight">Student's NewsLetter</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {newsletters.map((news, i) => (
                <a 
                  key={i} 
                  href={`/pdf/${news.file}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/50 transition-all group flex flex-col"
                >
                  <div className="relative aspect-[3/4] w-full bg-muted">
                    <Image src={`/pdf/Thumbnails/${news.thumb}`} alt={news.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                      <Image src="/images/corner-pdf.png" alt="PDF" width={16} height={16} />
                      <span className="text-xs font-bold text-white uppercase">PDF</span>
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex items-center justify-center text-center">
                    <span className="font-bold text-foreground group-hover:text-primary transition-colors text-sm">
                      {news.title}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Achievements Section */}
          <section className="bg-muted/30 rounded-3xl p-8 lg:p-12 border border-border/50">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
              <Trophy className="text-primary w-8 h-8" />
              <h2 className="text-3xl font-black text-foreground uppercase tracking-tight">Our Achievements</h2>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-card border border-transparent hover:border-border/50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground text-lg leading-relaxed text-justify">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </SiteShell>
  );
}
