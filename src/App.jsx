const navbarLogo = "/pv-navbar-logo.png";
const heroLogo = "/pv-hero-logo.png";

import { useEffect } from "react";

export default function App() {

 useEffect(() => {
  const link = document.createElement("link");
  link.href = "https://assets.calendly.com/assets/external/widget.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);
}, []);
  return (
   <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
  <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-black/60 border-b border-cyan-400/10 shadow-[0_0_25px_rgba(34,211,238,0.08)] transition-all duration-500">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
  src={navbarLogo}
  alt="Pipe visionary Logo"
  className="w-20 sm:w-24 md:w-28 h-auto object-contain animate-eyeBlink transition-all duration-300 hover:scale-105 hover:-rotate-2 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.45)] cursor-pointer"
/>

            <div>
              <h1 className="font-black tracking-wide text-lg leading-none">
                Pipe Visionary
              </h1>
              <p className="text-[10px] text-cyan-400 tracking-[0.2em] uppercase mt-1">
                Underground Diagnostics
              </p>
            </div>
          </div>
<div className="hidden md:flex items-center gap-6 text-sm text-gray-300 backdrop-blur-sm">
  <a
              
              href="#services"
              className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300"
            >
              Services
            </a>

            <a
              href="#contact"
              className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    
<section className="relative overflow-hidden border-b border-cyan-500/20 animate-fadeIn">
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-black to-black"></div>

  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(34,211,238,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.15)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

  <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-12 items-center animate-fadeIn">
  <div>
   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6 shadow-[0_0_20px_rgba(34,211,238,0.08)] backdrop-blur-sm hover:scale-105 transition-all duration-300">
  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.9)]"></div>
        <span className="text-sm tracking-wide text-cyan-300">
          Advanced Sewer Camera Diagnostics
        </span>
      </div>

     <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-[0_0_25px_rgba(34,211,238,0.18)] hover:tracking-wide transition-all duration-500">
  SEE WHAT'S
  <span className="block text-cyan-400 drop-shadow-[0_0_18px_rgba(34,211,238,0.45)]">
    UNDERGROUND
  </span>
</h1>

      <div className="mt-6 w-32 h-1 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.7)] animate-pulse"></div>

    <p className="mt-6 text-base sm:text-lg text-gray-300/90 max-w-xl leading-relaxed tracking-wide animate-fadeIn">
  High-quality sewer pipe inspections using advanced camera systems, honest diagnostics, and modern underground analysis technology.
</p>

        <a
          href="#services"
          className="mt-6 inline-block px-6 py-4 rounded-2xl border border-cyan-400/20 hover:bg-cyan-400/10 hover:border-cyan-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
        >
          View Services
      </a>
      </div>

    <div className="relative flex items-center justify-center">
  <div className="relative flex items-center justify-center animate-float">
    <img
      src={heroLogo}
      alt="PV Hero"
      className="w-full max-w-md sm:max-w-lg md:max-w-2xl object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.18)]"
    />
  </div>
</div>
  </div>
</section>
<section id="services" className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm hover:tracking-[0.4em] transition-all duration-300">
  Services
</p>

      <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-wide drop-shadow-[0_0_18px_rgba(34,211,238,0.15)] hover:tracking-widest transition-all duration-500">
  WHAT WE DO
</h2>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
  {[
    "Sewer Camera Inspection",
    "Drain Diagnostics",
    "Real Estate Inspections",
    "Construction Site Inspections",
  ].map((service, i) => (
            <div
              key={i}
              className="group bg-zinc-900 border border-cyan-400/10 rounded-3xl p-8 backdrop-blur-sm hover:border-cyan-400/40 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300"
            >
      <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-2xl font-black transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-black group-hover:scale-110 group-hover:rotate-3">
        0{i + 1}
      </div>
     
      <img
        src={`/service-${i + 1}.png`}
        alt={service}
        className="mt-6 w-full h-48 md:h-64 object-cover rounded-2xl border border-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.08)] transition-all duration-500 group-hover:scale-105"
      />


         <h3 className="mt-6 text-2xl font-bold transition-all duration-300 group-hover:text-cyan-300 group-hover:tracking-wide">
  {service}
</h3>

            </div>
          ))}
        </div>
      </section>

      <section
  id="contact"
  className="border-t border-cyan-400/10 bg-zinc-950"
>
  <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 items-start animate-fadeIn">

  <div>
    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm hover:tracking-[0.4em] transition-all duration-300">
  Appointment Requests
</p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight drop-shadow-[0_0_18px_rgba(34,211,238,0.12)] hover:tracking-wide transition-all duration-500">
  READY TO
  <span className="block text-cyan-400">
    BOOK AN INSPECTION?
  </span>
</h2>

            <div className="mt-8 space-y-4 text-gray-300">
  <div>
    <p className="text-gray-400">Email</p>
    <a
      href="mailto:pipevisionary@gmail.com"
      className="text-cyan-400 text-lg hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.45)] hover:tracking-wide hover:translate-x-1 transition-all duration-300"
    >
      pipevisionary@gmail.com
    </a>
  </div>

  <div>
    <p className="text-gray-400">Phone</p>
    <a
      href="tel:8632685970"
      className="text-cyan-400 text-lg hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.45)] hover:tracking-wide hover:translate-x-1 transition-all duration-300"
    >
      (863) 268-5970
    </a>
  </div>
</div>
          </div>

        <div className="bg-black border border-cyan-400/10 rounded-[2rem] p-4 shadow-2xl backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_45px_rgba(34,211,238,0.12)]">
  <div
  className="calendly-inline-widget"
 data-url="https://calendly.com/pipevisionary/sewer-inspection-consultation?background_color=000000&text_color=ffffff&primary_color=22d3ee"
  style={{ minWidth: "320px", height: "480px" }}
></div>
</div>

</div>
      </section>
      <footer className="border-t border-cyan-400/10 bg-gradient-to-b from-black to-zinc-950 py-8 shadow-[0_-10px_40px_rgba(34,211,238,0.05)] backdrop-blur-md">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-center md:text-left text-sm text-gray-400">
    
    <div className="flex items-center gap-3">
  <img
    src={navbarLogo}
    alt="Pipe Visionary Logo"
    className="w-8 sm:w-10 h-auto object-contain opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110 hover:rotate-3 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.45)] cursor-pointer"
  />

  <span className="font-semibold tracking-wide text-white hover:text-cyan-300 transition-all duration-300">
  Pipe Visionary
</span>
</div>
      <p className="hover:text-cyan-300 hover:tracking-wide transition-all duration-300">
  © 2026 Pipe Visionary. All rights reserved.
</p>

      <div className="flex items-center gap-6 tracking-wide uppercase text-xs">
      <a
        href="#services"
        className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300"
      >
        Services
      </a>

            <a
        href="#contact"
        className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300"
      >
        Contact
      </a>
    </div>
  </div>
</footer>
    </div>
  );
}