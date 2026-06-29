import Link from "next/link";
import InstitutionalHeader from "@/components/InstitutionalHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LegacyPageEntry } from "@/types/site";

interface LegacyContentPageProps {
  page: LegacyPageEntry;
}

export default function LegacyContentPage({ page }: LegacyContentPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <InstitutionalHeader />
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/[0.03] via-background to-muted/40 dark:from-slate-950 dark:via-background dark:to-slate-900/40 py-16 md:py-24 border-b border-border/60">
          <div className="absolute inset-0 opacity-15 dark:opacity-35">
            <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/30 blur-[140px]" />
            <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/3 translate-y-1/3 rounded-full bg-[#FDC003]/20 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.35em] text-primary dark:text-[#FDC003]">
              {page.section}
            </p>
            <h1 className="max-w-4xl text-3xl font-black tracking-tight text-foreground md:text-5xl">
              {page.title}
            </h1>
            {page.summary ? (
              <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-muted-foreground md:text-base">
                {page.summary}
              </p>
            ) : null}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-primary dark:hover:text-[#FDC003]">
                Home
              </Link>
              <span className="text-muted-foreground/50">/</span>
              <span className="text-primary dark:text-[#FDC003]">{page.section}</span>
            </div>
          </div>
        </section>

        <section className="bg-background py-10 md:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl border border-border/40 bg-card/70 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.15)]">
              <div
                className="legacy-content px-6 py-10 md:px-14 md:py-16"
                dangerouslySetInnerHTML={{ __html: page.html ?? "" }}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

