


import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [closing, setClosing] = useState(false);

 
  const closeMobile = () => {
    setClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setClosing(false);
    }, 450); 
  };

  
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="font-sans text-gray-900">
   
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
         
          <div className="flex items-center space-x-2 text-green-700">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex hover:text-green-500 border-2 border-green-700 hover:border-green-500 rounded-full p-1.5 transition">
              <FaFacebookF size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex hover:text-green-500 border-2 border-green-700 hover:border-green-500 rounded-full p-1.5 transition">
              <FaInstagram size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex hover:text-green-500 border-2 border-green-700 hover:border-green-500 rounded-full p-1.5 transition">
              <FaTwitter size={16} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex hover:text-green-500 border-2 border-green-700 hover:border-green-500 rounded-full p-1.5 transition">
              <FaYoutube size={16} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex hover:text-green-500 border-2 border-green-700 hover:border-green-500 rounded-full p-1.5 transition">
              <FaTiktok size={16} />
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6 font-semibold">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-gray-800 hover:text-green-600 transition">{n.label}</a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="p-2 rounded-md text-gray-800 hover:bg-gray-100 transition"
            >
              <GiHamburgerMenu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ===== Mobile Carpet Overlay ===== */}
      {mobileOpen && (
        <div className="mobile-overlay">
          <div className={`carpet ${closing ? "carpet-hide" : ""} carpet-panel`}>
            {/* close btn */}
            <button onClick={closeMobile} className="mobile-close" aria-label="Close menu">
              <IoClose size={20} />
            </button>

            {/* social icons inside panel (visible on mobile) */}
            <div className="flex items-center gap-3 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90">
                <FaFacebookF size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90">
                <FaInstagram size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90">
                <FaTwitter size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90">
                <FaYoutube size={18} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90">
                <FaTiktok size={18} />
              </a>
            </div>

           
            <nav className="flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeMobile}
                  className="menu-item text-2xl font-semibold"
                  style={{ animationDelay: `${idx * 110 + 160}ms` }} 
                >
                  {item.label}
                </a>
              ))}
            </nav>

            
            <div className="mt-8">
              <a href="#contact" onClick={closeMobile} className="inline-block bg-white text-green-700 px-5 py-2 rounded-full font-semibold">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}


    {/* ===== Hero Section ===== */}
<section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 pt-40 overflow-hidden">

  <div 
    className="absolute top-[-10rem] left-[-4rem] bg-cover inset-0  "
    style={{ backgroundImage: "url('/tayo3-small.png')" }}
  >
    <div className="absolute inset-0 bg-blue-950/80"></div> 
  </div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-2xl text-white">
    <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
      Web Developer & Creative Designer
    </h1>
    <p className="text-lg md:text-2xl max-w-xl mb-8">
      I build modern, responsive websites and creative digital solutions
      that bring ideas to life.
    </p>
    <a
      href="#contact"
      className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
    >
      Contact Me
    </a>
  </div>

  {/* Headshot on the right with fade */}
  <div className="relative z-10 mt-10 md:mt-0 md:ml-12">
    <img
      src="/tayo3-small.png"
      alt="My Headshot"
      className="w-48 h-48 md:w-64 md:h-64 rounded-full object-contain bg-amber-50 border-4 border-white shadow-lg opacity-90 hover:opacity-100 transition"
    />
  </div>
</section>


      {/* ===== About Section ===== */}
      <section id="about" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl mx-auto mb-3 text-lg text-gray-700">
          A highly skilled Web Developer and Creative Graphic Designer with a passion for building modern, functional, and visually engaging digital experiences.
        </p> 
        <p className="max-w-3xl mx-auto mb-3 text-lg text-gray-700">
          With expertise in front-end and back-end development, I craft responsive, user-friendly websites that deliver seamless performance across all devices. Beyond code, I bring strong creative direction to every project, blending design and technology to produce graphics and interfaces that not only look great but also communicate effectively.
        </p>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Whether it’s a sleek website, an engaging UI, or impactful branding, I focus on delivering solutions tailored to each client’s unique goals. What sets me apart is my commitment to quality, detail, and innovation—ensuring that every project reflects professionalism while exceeding expectations.
        </p>
      </section>

      {/* ===== Skills Section ===== */}
      <section id="skills" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            "HTML","CSS","JavaScript","React","Next.js","Tailwind","Node.js","PHP","MySQL","Supabase","Adobe Illustrator","Adobe Photoshop","WordPress",
          ].map((skill) => (
            <div
              key={skill}
              className="p-6 border rounded-xl shadow hover:shadow-lg transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* ===== Projects Section ===== */}
      <section id="projects" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
            <h3 className="text-2xl font-semibold mb-2">Wuraola Royal Farm</h3>
            <p className="text-gray-700 mb-4">
              A modern, responsive farm website with image gallery, admin dashboard, and secure login features.
            </p>
            <a href="#" className="text-green-600 font-semibold hover:underline">
              View Project →
            </a>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
            <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-700 mb-4">
              A sleek, personal one-page portfolio showcasing skills, projects, and contact info.
            </p>
            <a href="#" className="text-green-600 font-semibold hover:underline">
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="mb-8 text-gray-700">
          Let’s work together! Fill out the form below or send me an email.
        </p>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>© {new Date().getFullYear()} TSBproject. All rights reserved.</p>
      </footer>
    </div>
  );
}



