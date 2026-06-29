"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  navigationCallToAction,
  primaryNavigationItems,
  siteBranding,
} from "@/config/site-navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-xl text-foreground border-b border-border shadow-md transition-colors duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="hidden xl:flex items-center space-x-1 2xl:space-x-2 flex-wrap justify-center flex-1">
            {primaryNavigationItems.map((item) => {
              if (item.children?.length || item.groups?.length) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => {
                      setActiveDropdown(item.label);
                    }}
                    onMouseLeave={() => {
                      setActiveDropdown(null);
                    }}
                    ref={activeDropdown === item.label ? dropdownRef : null}
                  >
                    <button className="relative flex items-center gap-1.5 text-foreground/80 hover:text-primary dark:hover:text-[#FDC003] font-bold text-[10px] 2xl:text-[11px] uppercase tracking-wider px-3 py-2 rounded-lg transition-all duration-300 hover:bg-muted/50">
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 text-muted-foreground ${
                          activeDropdown === item.label ? "rotate-180 text-primary dark:text-[#FDC003]" : ""
                        }`}
                      />
                      {activeDropdown === item.label && (
                        <motion.span
                          layoutId="navUnderline"
                          className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-primary to-[#FDC003] rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label ? (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className={`absolute top-full mt-1 bg-popover/95 backdrop-blur-xl text-popover-foreground rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-border/80 p-5 z-[150] ${
                            item.menuVariant === "mega"
                              ? "left-0 w-[550px]"
                              : item.menuVariant === "more"
                              ? "right-0 w-[920px]"
                              : "left-0 min-w-[280px]"
                          }`}
                        >
                          <div
                            className={
                              item.menuVariant === "mega"
                                ? "grid grid-cols-2 gap-5"
                                : item.menuVariant === "more"
                                ? "grid grid-cols-4 gap-6"
                                : "flex flex-col gap-1.5"
                            }
                          >
                            {item.groups ? (
                              item.groups.map((group) => (
                                <div key={group.label} className="flex flex-col gap-2">
                                  <h3 className="text-[10px] font-black uppercase text-primary dark:text-[#FDC003] tracking-widest border-b border-border/60 pb-2 mb-2">{group.label}</h3>
                                  <div className="flex flex-col gap-1">
                                    {group.links.map((child) => (
                                      <Link
                                        href={child.href}
                                        key={child.label}
                                        onClick={() => setActiveDropdown(null)}
                                        className="group/drop flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/5 dark:hover:bg-white/5 transition-all duration-200"
                                      >
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary dark:bg-white/10 dark:text-[#FDC003] group-hover/drop:bg-primary group-hover/drop:text-white dark:group-hover/drop:bg-[#FDC003] dark:group-hover/drop:text-background transition-colors duration-250">
                                          <child.icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                          <h4 className="font-bold text-[11px] uppercase tracking-wide text-foreground group-hover/drop:text-primary dark:group-hover/drop:text-[#FDC003]">
                                            {child.label}
                                          </h4>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))
                            ) : (
                              item.children?.map((child) => (
                                <Link
                                  href={child.href}
                                  key={child.label}
                                  onClick={() => setActiveDropdown(null)}
                                  className="group/drop flex items-center gap-3.5 p-3 rounded-xl hover:bg-primary/5 dark:hover:bg-white/5 transition-all duration-200"
                                >
                                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary dark:bg-white/10 dark:text-[#FDC003] group-hover/drop:bg-primary group-hover/drop:text-white dark:group-hover/drop:bg-[#FDC003] dark:group-hover/drop:text-background transition-colors duration-250">
                                    <child.icon className="w-4.5 h-4.5" />
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-xs uppercase tracking-wide text-foreground group-hover/drop:text-primary dark:group-hover/drop:text-[#FDC003]">
                                      {child.label}
                                    </h4>
                                  </div>
                                </Link>
                              ))
                            )}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-foreground/80 hover:text-primary dark:hover:text-[#FDC003] font-bold text-[10px] 2xl:text-[11px] uppercase tracking-wider px-3 py-2 rounded-lg transition-all duration-300 hover:bg-muted/50 flex items-center justify-center"
                >
                  {item.icon ? <item.icon className="w-5 h-5" /> : item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center gap-3">
            {mounted ? (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                {theme === "dark" ? (
                  <Moon className="w-5 h-5 text-primary" />
                ) : (
                  <Sun className="w-5 h-5 text-orange-500" />
                )}
              </button>
            ) : null}
            <Button
              asChild
              className="rounded-full px-8 font-black uppercase tracking-widest text-[10px]"
            >
              <Link href={navigationCallToAction.desktop.href}>
                {navigationCallToAction.desktop.label}
              </Link>
            </Button>
          </div>

          <div className="xl:hidden flex items-center justify-between w-full">
            <Link
              href={siteBranding.homeHref}
              className="flex items-center gap-2"
            >
              <img
                src="/assets/images/bharati_logo.png"
                className="h-8 w-auto object-contain"
                alt={`${siteBranding.shortName} logo`}
              />
              <span className="font-black text-sm tracking-tighter uppercase text-foreground">
                {siteBranding.shortName}{" "}
                <span className="text-primary italic">
                  {siteBranding.location}
                </span>
              </span>
            </Link>

            <div className="flex items-center gap-3">
              {mounted ? (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full hover:bg-muted text-foreground"
                >
                  {theme === "dark" ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5" />
                  )}
                </button>
              ) : null}

              <button
                className="p-2 text-foreground hover:bg-muted rounded-xl transition-colors"
                onClick={() => setIsOpen((open) => !open)}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden border-t border-border bg-background/95 overflow-hidden backdrop-blur-md"
          >
            <div className="max-h-[70vh] overflow-y-auto px-4 pt-2 pb-6 flex flex-col space-y-1 mt-2">
              {primaryNavigationItems.map((item) => {
                if (item.children?.length || item.groups?.length) {
                  return (
                    <div key={item.label} className="flex flex-col">
                      <button
                        onClick={() =>
                          setActiveDropdown((current) =>
                            current === item.label ? null : item.label,
                          )
                        }
                        className="flex items-center justify-between w-full px-3 py-3 text-base text-foreground font-medium rounded-md hover:bg-muted transition-colors duration-200"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label ? (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-muted/30 rounded-xl overflow-hidden mt-1 mx-2"
                          >
                            <div
                              className={
                                item.menuVariant === "mega" || item.menuVariant === "more"
                                  ? "grid grid-cols-1 gap-4 p-4"
                                  : "flex flex-col p-2"
                              }
                            >
                              {item.groups ? (
                                item.groups.map((group) => (
                                  <div key={group.label} className="flex flex-col gap-2">
                                    <h3 className="text-sm font-black uppercase text-primary border-b border-border/50 pb-2 mb-1">{group.label}</h3>
                                    <div className="flex flex-col gap-1">
                                      {group.links.map((child) => (
                                        <Link
                                          key={child.label}
                                          href={child.href}
                                          onClick={() => {
                                            setActiveDropdown(null);
                                            setIsOpen(false);
                                          }}
                                          className="flex items-center gap-3 p-2 hover:bg-muted transition-colors rounded-lg"
                                        >
                                          <div className="p-1.5 rounded-md shadow-sm bg-background text-primary border border-border">
                                            <child.icon className="w-4 h-4" />
                                          </div>
                                          <div className="text-sm font-semibold text-foreground">
                                            {child.label}
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))
                              ) : (
                                item.children?.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setIsOpen(false);
                                    }}
                                    className="flex items-center gap-3 p-3 hover:bg-muted transition-colors rounded-lg"
                                  >
                                    <div className="p-1.5 rounded-md shadow-sm bg-background text-primary border border-border">
                                      <child.icon className="w-4 h-4" />
                                    </div>
                                    <div className="text-sm font-semibold text-foreground">
                                      {child.label}
                                    </div>
                                  </Link>
                                ))
                              )}
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-3 text-base text-foreground font-medium rounded-md hover:bg-muted transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon && <item.icon className="w-5 h-5" />}
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 px-3">
                <Button
                  asChild
                  className="w-full rounded-full py-6 font-black uppercase tracking-widest text-xs shadow-xl"
                >
                  <Link href={navigationCallToAction.mobile.href}>
                    {navigationCallToAction.mobile.label}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
