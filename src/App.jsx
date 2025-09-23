import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const [toast, setToast] = useState(null);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  function generateCaptcha() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return { question: `${a} + ${b}`, answer: a + b };
  }

  const showToast = (msg, type) => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseInt(captchaAnswer) !== captcha.answer) {
      showToast("❌ Incorrect math answer. Please try again.", "error");
      return;
    }

    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "d23748f7-be9a-4546-8b3b-30062373d6a2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      showToast("✅ Message sent successfully!", "success");
      e.target.reset();
      setCaptcha(generateCaptcha());
      setCaptchaAnswer("");
    } else {
      showToast("❌ Failed to send message. Try again.", "error");
    }
  };

  return (
    <div className="font-sans text-gray-900">
      {/* ===== Header ===== */}
      <header className="fixed top-0 left-0 w-full bg-blue-950/80 shadow-md z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          
          {/* === LOGO === */}
          <div className="flex items-center space-x-2">
            <img src="/logo2.png" alt="Logo" className="w-10 h-10 object-contain" />
            <span className="font-bold text-blue-400 text-lg">Tayo Samuel Bolarinwa</span>
          </div>

          {/* Social Media (hidden on small devices) */}
          <div className="hidden md:flex items-center space-x-2 text-blue-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 border-2 border-blue-400 hover:border-blue-300 rounded-full p-1.5 transition">
              <FaFacebookF size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 border-2 border-blue-400 hover:border-blue-300 rounded-full p-1.5 transition">
              <FaInstagram size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 border-2 border-blue-400 hover:border-blue-300 rounded-full p-1.5 transition">
              <FaTwitter size={16} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 border-2 border-blue-400 hover:border-blue-300 rounded-full p-1.5 transition">
              <FaYoutube size={16} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 border-2 border-blue-400 hover:border-blue-300 rounded-full p-1.5 transition">
              <FaTiktok size={16} />
            </a>
          </div>

          {/* Desktop Nav + Resume Button */}
          <div className="hidden md:flex items-center space-x-6 font-semibold">
            <nav className="flex space-x-6">
              {navItems.map((n) => (
                <a key={n.id} href={`#${n.id}`} className="text-blue-400 hover:text-blue-100 hover:underline transition">
                  {n.label}
                </a>
              ))}
            </nav>
            {/* === Resume Button === */}
            <a
              href="/resume.pdf"
              download
              className=" text-amber-300  px-4 py-2 border-2 border-blue-900 rounded-full hover:bg-blue-300 transition font-bold"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="p-2 rounded-md text-gray-50 hover:bg-gray-100 transition"
            >
              <GiHamburgerMenu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ===== Mobile Carpet Overlay ===== */}
      {mobileOpen && (
        <div className="mobile-overlay">
          <div className={`carpet  ${closing ? "carpet-hide " : ""} carpet-panel `}>
            {/* close btn */}
            <button onClick={closeMobile} className="mobile-close" aria-label="Close menu">
              <IoClose size={24} />
            </button>

            {/* Social Icons (mobile only) */}
            <div className="flex items-center gap-3 mb-6">
              <FaFacebookF size={18} />
              <FaInstagram size={18} />
              <FaTwitter size={18} />
              <FaYoutube size={18} />
              <FaTiktok size={18} />
            </div>

            {/* Mobile Menu */}
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

            {/* Resume Button in mobile */}
            <div className="mt-8">
              <a
                href="/mySamuelCV_2xNew.pdf"
                download
                onClick={closeMobile}
                className="inline-block bg-blue-900 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ===== Hero Section ===== */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 pt-40 overflow-hidden">
        <div
          className="absolute top-[-10rem] left-[-4rem] bg-cover inset-0"
          style={{ backgroundImage: "url('/tayo3-small.png')" }}
        >
          <div className="absolute inset-0 bg-blue-950/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-xl sm:text-4xl text-amber-300 mb-5"> Hello! My Name is Tayo Samuel Bolarinwa. </h1>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-4">
           A Front-End Web Developer & Creative Designer
          </h2>
          <p className="text-lg md:text-2xl text-amber-300 max-w-xl mb-8">
             I build modern, responsive websites, web applications and creative digital solutions
            that bring ideas to life.
          </p>
          <a
            href="#contact"
            className="bg-amber-300 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-100 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Headshot on the right */}
        <div className="relative z-10 mt-10 md:mt-0 md:ml-12">
          <img
            src="/tayo3-small.png"
            alt="My Headshot"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-contain bg-amber-50 border-4 border-amber-300 shadow-lg opacity-90 hover:opacity-100 transition"
          />
        </div>
      </section>
       {/* ===== About Section ===== */}
      <section id="about" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-blue-950 mb-6">About Me</h2>
        <p className="max-w-3xl mx-auto mb-3 text-lg text-gray-700">
          A highly skilled Front-End Developer and Creative Graphic Designer with a passion for building modern, functional, and visually engaging digital experiences.
        </p> 
        <p className="max-w-3xl mx-auto mb-3 text-lg text-gray-700">
          With expertise in front-end and back-end development, I craft responsive, user-friendly websites that deliver seamless performance across all devices. Beyond code, I bring strong creative direction to every project, blending design and technology to produce graphics and interfaces that not only look great but also communicate effectively.
        </p>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Whether it’s a sleek website, an engaging UI, or impactful branding, I focus on delivering solutions tailored to each client’s unique goals. What sets me apart is my commitment to quality, detail, and innovation—ensuring that every project reflects professionalism while exceeding expectations.
        </p>
      </section>

      {/* ===== Skills Section ===== */}
      <section id="skills" className="py-20 px-6 bg-blue-950 text-center">
        <h2 className="text-4xl font-bold text-amber-300 mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            "HTML","CSS", "CSS grid", "JavaScript","React","Next.js","Tailwind","Node.js","PHP","MySQL","Supabase","Adobe Illustrator","Adobe Photoshop","WordPress","Git & version control"
          ].map((skill) => (
            <div
              key={skill}
              className="p-6 border border-amber-300 text-amber-50 rounded-xl shadow hover:shadow-lg transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* ===== Projects Section ===== */}
      <section id="projects" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl text-blue-950 font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
            <h3 className="text-2xl font-semibold mb-2">Wuraola Royal Farm</h3>
            <p className="text-gray-700 mb-4">
              A modern, responsive farm website with image gallery, admin dashboard, and secure login features.
            </p>
            <div className=" flex flex-wrap text-md text-blue-950 font-bold">HTML | CSS | CSS GRID | JAVASCRIPT</div>
            <div className=" object-cover">
              <img src="/front1.PNG" />
            </div>
            <a href="https://wuraolaroyalfarm.com" target="_blank" 
             rel="noopener noreferrer" className="text-blue-950 font-semibold hover:underline">
              View Project →
            </a>
          </div>
          
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
            <h3 className="text-2xl font-semibold mb-2">Planet Laundromat</h3>
            <p className="text-gray-700 mb-4">
               A responsive laundry service website showcasing services, pricing, and easy contact options.
            </p>
            <div className=" flex flex-wrap text-md text-blue-950 font-bold">HTML | CSS | CSS GRID | JAVASCRIPT</div>
            <div className=" object-cover">
              <img src="/planet-lundro.PNG" />
            </div>
            <a href="https://planetlaundromat.com" target="_blank" 
             rel="noopener noreferrer" className="text-blue-950 font-semibold hover:underline">
              View Project →
            </a>
          </div>

          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
            <h3 className="text-2xl font-semibold mb-2">Marvel Creative Media</h3>
            <p className="text-gray-700 mb-4">
              A modern digital agency website offering web development, branding, and creative design solutions.
            </p>
            <div className=" flex flex-wrap text-md text-blue-950 font-bold">REACT | CSS MODULES | PHP | MYSQL</div>
            <div className=" object-cover">
              <img src="/mcmedia.PNG" />
            </div>
            <a href="https://marvelcmedia.com" target="_blank" 
             rel="noopener noreferrer" className="text-blue-950 font-semibold hover:underline">
              View Project →
            </a>
          </div>


          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
            <h3 className="text-2xl font-semibold mb-2">MarvelMarts Shopping </h3>
            <p className="text-gray-700 mb-4">
              An online shopping platform with a clean design, product showcase, and user-friendly experience.
            </p>
            <div className=" flex flex-wrap text-md text-blue-950 font-bold">HTML | CSS | WORDPRESS | JAVASCRIPT</div>
            <div className=" object-cover">
              <img src="/marvelmarts.PNG" />
            </div>
            <a href="https://marvelmarts.com" target="_blank" 
             rel="noopener noreferrer" className="text-blue-950 font-semibold hover:underline">
              View Project →
            </a>
          </div>


        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className="py-20 px-6 bg-blue-950 text-center">
        <h2 className="text-4xl font-bold text-yellow-300 mb-6">Contact</h2>
        <p className="mb-8 text-gray-50">
          Let’s work together! Fill out the form below or send me an email.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 bg-blue-900/50 p-6 rounded-lg">
          <input type="hidden" name="access_key" value="d23748f7-be9a-4546-8b3b-30062373d6a2" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border border-amber-300 rounded-lg placeholder:text-amber-50 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border border-amber-300 rounded-lg placeholder:text-amber-50 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="phone"
            name="phone"
            placeholder="Your Phone"
            className="w-full px-4 py-3 border border-amber-300 rounded-lg placeholder:text-amber-50 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 border border-amber-300 rounded-lg placeholder:text-amber-50 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          {/* Math CAPTCHA */}
          <div className="flex items-center justify-center space-x-3 text-amber-200">
            <label className="font-medium">Solve: {captcha.question} =</label>
            <input
              type="number"
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              className="w-20 px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-300 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>© {new Date().getFullYear()} TSBproject. All rights reserved.</p>
      </footer>

      {/* Toast Popup */}
      {toast && (
        <div
          className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white font-semibold transition-all duration-500 ${
            toast.type === "success"
              ? "bg-green-600 animate-fade-slide"
              : "bg-red-600 animate-fade-slide animate-shake"
          }`}
        >
          {toast.msg}
        </div>
      )}

      {/* Toast animation */}
      <style>{`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translate(-50%, 20px); }
          100% { opacity: 1; transform: translate(-50%, 0); }
        }
        @keyframes shake {
          0%, 100% { transform: translate(-50%, 0); }
          20%, 60% { transform: translate(-50%, -2px); }
          40%, 80% { transform: translate(-50%, 2px); }
        }
        .animate-fade-slide { animation: fadeSlideUp 0.5s ease-out; }
        .animate-shake { animation: shake 0.4s ease-in-out; }
      `}</style>
    </div>
  );
}











