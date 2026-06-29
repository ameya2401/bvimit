"use client";

import SiteShell from "@/components/layout/SiteShell";
import { ArrowRight, ArrowLeft, Calendar, FileText } from "lucide-react";
import Image from "next/image";
import eventsData from "@/data/events.json";

export default function EventsSeminarsPage() {
  return (
    <SiteShell>
      <div className="bg-background min-h-screen pb-20 pt-10">
        
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Calendar className="text-primary w-8 h-8 hidden sm:block" />
            <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter uppercase">
              Seminars / <span className="text-primary">Webinars</span>
            </h1>
            <Calendar className="text-primary w-8 h-8 hidden sm:block" />
          </div>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Explore our vibrant campus life through various seminars, webinars, and technical events that shape the personalities and careers of our students.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {eventsData.map((event, index) => (
              <div 
                key={index}
                className="bg-card border border-border/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/50 transition-all group flex flex-col"
              >
                <div className="relative aspect-video w-full bg-muted/50 border-b border-border/50">
                  <Image 
                    src={event.image || '/images/gallery/default-event.jpg'} 
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://harmless-tapir-303.convex.cloud/api/storage/9a35e636-a4eb-419e-ba2b-edb716eef88b'; // Fallback image
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors line-clamp-3">
                    {event.title}
                  </h3>
                  
                  <div className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    <p className="line-clamp-4 text-justify whitespace-pre-wrap">
                      {event.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <button className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors">
                      <FileText className="w-4 h-4" />
                      Read Full Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SiteShell>
  );
}
