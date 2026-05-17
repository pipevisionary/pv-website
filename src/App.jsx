const navbarLogo = "/pv-navbar-logo.png";
const heroLogo = "/pv-hero-logo.png";

export default function App() {
  return (
   <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
  <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-black/60 border-b border-cyan-400/10 shadow-[0_0_25px_rgba(34,211,238,0.08)] transition-all duration-500">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
              src={navbarLogo}
              alt="Pipe visionary Logo"
             className="w-28 h-auto object-contain animate-eyeBlink transition-all duration-300 hover:scale-105 hover:-rotate-2 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.45)] cursor-pointer" 
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
<div className="hidden md:flex items-center gap-8 text-sm text-gray-300 backdrop-blur-sm">
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

  <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center animate-fadeIn">
  <div>
   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6 shadow-[0_0_20px_rgba(34,211,238,0.08)] backdrop-blur-sm hover:scale-105 transition-all duration-300">
  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.9)]"></div>
        <span className="text-sm tracking-wide text-cyan-300">
          Advanced Sewer Camera Diagnostics
        </span>
      </div>

     <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-[0_0_25px_rgba(34,211,238,0.18)] hover:tracking-wide transition-all duration-500">
  SEE WHAT'S
  <span className="block text-cyan-400 drop-shadow-[0_0_18px_rgba(34,211,238,0.45)]">
    UNDERGROUND
  </span>
</h1>

      <div className="mt-6 w-32 h-1 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.7)] animate-pulse"></div>

     <p className="mt-6 text-lg text-gray-300/90 max-w-xl leading-relaxed tracking-wide animate-fadeIn">
  High-quality sewer pipe inspections using advanced camera systems, honest diagnostics, and modern underground analysis technology.
</p>
      <div className="mt-10 flex flex-wrap gap-4">
     
     <a
  href="https://calendly.com/pipevisionary"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-4 rounded-2xl bg-cyan-400 text-black font-black hover:bg-cyan-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300 shadow-lg shadow-cyan-400/20 inline-block"
>
  Book Sunday Inspection
</a>
        <a
          href="#services"
          className="px-6 py-4 rounded-2xl border border-cyan-400/20 hover:bg-cyan-400/10 hover:border-cyan-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
        >
          View Services
        </a>
      </div>
    </div>

    <div className="relative flex items-center justify-center">
      <div className="relative bg-zinc-900 border border-cyan-400/20 hover:border-cyan-400/40 rounded-[2rem] p-6 shadow-2xl w-full max-w-xs overflow-hidden animate-float transition-all duration-500 hover:shadow-[0_0_45px_rgba(34,211,238,0.18)] hover:-translate-y-1">
        <div className="min-h-[450px] rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-cyan-400/20 to-black border border-cyan-500/10 flex items-center justify-center">
          <div className="text-center px-6">
            <img
              src={heroLogo}
              alt="PV Logo"
             className="w-48 mx-auto mb-8 object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.18)] hover:scale-105 transition-all duration-500"
            />

            <h2 className="mt-8 text-3xl font-black tracking-wide">
              Pipe Visionary
            </h2>

            <p className="mt-4 text-gray-300">
              Advanced underground diagnostics with professional sewer camera inspection technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm hover:tracking-[0.4em] transition-all duration-300">
  Services
</p>

      <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-wide drop-shadow-[0_0_18px_rgba(34,211,238,0.15)] hover:tracking-widest transition-all duration-500">
  WHAT WE DO
</h2>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
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

              <h3 className="mt-6 text-2xl font-bold transition-all duration-300 group-hover:text-cyan-300 group-hover:tracking-wide">
  {service}
</h3>

              <p className="mt-4 text-gray-400 leading-relaxed transition-all duration-300 group-hover:text-gray-300 group-hover:translate-x-1">
  Professional underground inspection and diagnostics services.
</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-cyan-400/10 bg-zinc-950"
      >
      <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-start animate-fadeIn">
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

            <div className="mt-8 space-y-3 text-gray-300">
              <p>Email:</p>

              <a
                href="mailto:pipevisionary@gmail.com"
               className="text-cyan-400 text-lg hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.45)] hover:tracking-wide hover:translate-x-1 transition-all duration-300"
              >
                pipevisionary@gmail.com
              </a>
            </div>
          </div>

        <div className="bg-black border border-cyan-400/10 rounded-[2rem] p-8 shadow-2xl backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_45px_rgba(34,211,238,0.12)]">
  <div className="mb-8 border border-cyan-400/10 rounded-2xl p-5 bg-zinc-900/60">
              <h4 className="text-cyan-400 font-black text-lg mb-4">
                Sunday Availability
              </h4>

              <div className="grid grid-cols-3 gap-3 mt-2">
                {["9:00 AM", "11:30 AM", "1:30 PM"].map((time, i) => (
                  <button
                    key={i}
                    className="py-3 rounded-xl border border-cyan-400/20 bg-black hover:bg-cyan-400 hover:text-black hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] text-cyan-300 font-semibold transition-all duration-300"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-zinc-900 border border-cyan-400/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.18)] hover:border-cyan-400/30 transition-all duration-300 text-white"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-zinc-900 border border-cyan-400/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.18)] hover:border-cyan-400/30 transition-all duration-300 text-white"
              />

              <textarea
                placeholder="Tell us about your inspection needs"
                rows={5}
                 className="w-full bg-zinc-900 border border-cyan-400/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.18)] transition-all duration-300 text-white resize-none hover:border-cyan-400/30"
></textarea>

              <button className="w-full py-4 rounded-2xl bg-cyan-400 text-black font-black hover:bg-cyan-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.45)] transition-all duration-300 shadow-lg shadow-cyan-400/20">
  Send Appointment Request
</button>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-cyan-400/10 bg-gradient-to-b from-black to-zinc-950 py-8 shadow-[0_-10px_40px_rgba(34,211,238,0.05)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-3">
  <img
    src={navbarLogo}
    alt="Pipe Visionary Logo"
    className="w-10 h-auto object-contain opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110 hover:rotate-3 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.45)] cursor-pointer"
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