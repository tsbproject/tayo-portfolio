// import { useEffect, useState } from "react";
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaLinkedin } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { Helmet } from 'react-helmet';

// import { IoClose } from "react-icons/io5";

// export default function App() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [closing, setClosing] = useState(false);

//   const [toast, setToast] = useState(null);
//   const [captcha, setCaptcha] = useState(generateCaptcha());
//   const [captchaAnswer, setCaptchaAnswer] = useState("");
//   const [loading, setLoading] = useState(false);

//   function generateCaptcha() {
//     const a = Math.floor(Math.random() * 10);
//     const b = Math.floor(Math.random() * 10);
//     return { question: `${a} + ${b}`, answer: a + b };
//   }

//   const showToast = (msg, type) => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3500);
//   };

//   const closeMobile = () => {
//     setClosing(true);
//     setTimeout(() => {
//       setMobileOpen(false);
//       setClosing(false);
//     }, 450);
//   };

//   useEffect(() => {
//     if (mobileOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => (document.body.style.overflow = "");
//   }, [mobileOpen]);

//   const navItems = [
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "projects", label: "Projects" },
//     { id: "contact", label: "Contact" },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (parseInt(captchaAnswer) !== captcha.answer) {
//       showToast("❌ Incorrect math answer. Please try again.", "error");
//       return;
//     }

//     setLoading(true);

//     const formData = new FormData(e.target);
//     formData.append("access_key", "d23748f7-be9a-4546-8b3b-30062373d6a2");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const result = await response.json();
//     setLoading(false);

//     if (result.success) {
//       showToast("✅ Message sent successfully!", "success");
//       e.target.reset();
//       setCaptcha(generateCaptcha());
//       setCaptchaAnswer("");
//     } else {
//       showToast("❌ Failed to send message. Try again.", "error");
//     }
//   };

//   return (
//        <>
//       <Helmet>
//         <title>Tayo Bolarinwa | Frontend Web Developer</title>
//         <meta name="description" content="Creative frontend developer and WordPress expert building modern, high-impact, responsive websites and Applications for Brands That Dare to Stand Out in Lagos Nigeria." />
//         <meta property="og:title" content="Tayo Bolarinwa Portfolio" />
//         <meta property="og:description" content="Explore my projects and skills in web development and design." />
//         <meta property="og:image" content="https://tayobolarinwa.dev/preview.jpg" />
//         <meta property="og:url" content="https://tayobolarinwa.dev" />
//         <meta name="twitter:card" content="summary_large_image" />
//       </Helmet>
//       {/* Your page content */}
    





//     <div className="font-sans text-gray-900">
//       {/* ===== Header ===== */}
//       <header className="fixed top-0 left-0 w-full bg-blue-950/80 shadow-md z-10">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          
//           {/* === LOGO === */}
//           <div className="flex items-center space-x-2">
//             <img src="/logo2.png" alt="Logo" className="w-10 h-10 object-contain" />
//             <span className="font-bold text-blue-400 text-lg">Tayo Samuel Bolarinwa</span>
//           </div>

//           {/* Social Media (hidden on small devices) */}
//           <div className="hidden md:flex items-center space-x-2 text-blue-400">
//             {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 border-2 border-blue-400 hover:border-blue-300 rounded-full p-1.5 transition">
//               <FaFacebookF size={16} />
//             </a> */}
//             <a href="https://instagram.com/tayo_bolarinwa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 border-2 border-blue-400 hover:border-blue-300 rounded-full p-1.5 transition">
//               <FaInstagram size={16} />
//             </a>
//             <a href="https://x.com/tsbolarinwa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 border-2 border-blue-400 hover:border-blue-300 rounded-full p-1.5 transition">
//               <FaTwitter size={16} />
//             </a>
//             {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 border-2 border-blue-400 hover:border-blue-300 rounded-full p-1.5 transition">
//               <FaYoutube size={16} />
//             </a> */}
//             <a href="https://www.linkedin.com/in/tayo-bolarinwa-a6b1252a5/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 border-2 border-blue-400 hover:border-blue-300 rounded-full p-1.5 transition">
//               <FaLinkedin size={16} />
//             </a>
//           </div>

//           {/* Desktop Nav + Resume Button */}
//           <div className="hidden md:flex items-center space-x-6 font-semibold">
//             <nav className="flex space-x-6">
//               {navItems.map((n) => (
//                 <a key={n.id} href={`#${n.id}`} className="text-blue-400 hover:text-blue-100 hover:underline transition">
//                   {n.label}
//                 </a>
//               ))}
//             </nav>
//             {/* === Resume Button === */}
//             <a
//               href="/resume.pdf"
//               download
//               className=" text-amber-300  px-4 py-2 border-2 border-blue-900 rounded-full hover:bg-blue-300 transition font-bold"
//             >
//               Download Resume
//             </a>
//           </div>

//           {/* Mobile Hamburger */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setMobileOpen(true)}
//               aria-label="Open menu"
//               className="p-2 rounded-md text-gray-50 hover:bg-gray-100 transition"
//             >
//               <GiHamburgerMenu size={22} />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* ===== Mobile Carpet Overlay ===== */}
//       {mobileOpen && (
//         <div className="mobile-overlay">
//           <div className={`carpet  ${closing ? "carpet-hide " : ""} carpet-panel `}>
//             {/* close btn */}
//             <button onClick={closeMobile} className="mobile-close" aria-label="Close menu">
//               <IoClose size={24} />
//             </button>

//             {/* Social Icons (mobile only) */}
//             <div className="flex items-center gap-3 mb-6">
//               <FaFacebookF size={18} />
//               <FaInstagram size={18} />
//               <FaTwitter size={18} />
//               <FaYoutube size={18} />
//               <FaTiktok size={18} />
//             </div>

//             {/* Mobile Menu */}
//             <nav className="flex flex-col gap-4">
//               {navItems.map((item, idx) => (
//                 <a
//                   key={item.id}
//                   href={`#${item.id}`}
//                   onClick={closeMobile}
//                   className="menu-item text-2xl font-semibold"
//                   style={{ animationDelay: `${idx * 110 + 160}ms` }}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </nav>

//             {/* Resume Button in mobile */}
//             <div className="mt-8">
//               <a
//                 href="/mySamuelCV_2xNew.pdf"
//                 download
//                 onClick={closeMobile}
//                 className="inline-block bg-blue-900 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
//               >
//                 Download Resume
//               </a>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ===== Hero Section ===== */}
//       <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 pt-40 overflow-hidden">
//         <div
//           className="absolute top-[-10rem] left-[-4rem] bg-cover inset-0"
//           style={{ backgroundImage: "url('/tayo3-small.png')" }}
//         >
//           <div className="absolute inset-0 bg-blue-950/80"></div>
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 max-w-2xl text-white">
//           <h1 className="text-xl sm:text-4xl text-amber-300 mb-5"> Hello! My Name is Tayo Samuel Bolarinwa. </h1>
//           <h2 className="text-5xl md:text-7xl font-extrabold mb-4">
//            A Front-End Web Developer & Creative Designer
//           </h2>
//           <p className="text-lg md:text-2xl text-amber-300 max-w-xl mb-8">
//              I build modern, responsive websites, web applications and creative digital solutions
//             that bring ideas to life.
//           </p>
//           <a
//             href="#contact"
//             className="bg-amber-300 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-100 transition"
//           >
//             Contact Me
//           </a>
//         </div>

//         {/* Headshot on the right */}
//         <div className="relative z-10 mt-10 md:mt-0 md:ml-12">
//           <img
//             src="/tayo3-small.png"
//             alt="My Headshot"
//             className="w-48 h-48 md:w-64 md:h-64 rounded-full object-contain bg-amber-50 border-4 border-amber-300 shadow-lg opacity-90 hover:opacity-100 transition"
//           />
//         </div>
//       </section>
//        {/* ===== About Section ===== */}
//       <section id="about" className="py-20 px-6 bg-gray-50 text-center">
//         <h2 className="text-4xl font-bold text-blue-950 mb-6">About Me</h2>
//         <p className="max-w-3xl mx-auto mb-3 text-lg text-gray-700">
//           A highly skilled Front-End Developer and Creative Graphic Designer with a passion for building modern, functional, and visually engaging digital experiences.
//         </p> 
//         <p className="max-w-3xl mx-auto mb-3 text-lg text-gray-700">
//           With expertise in front-end and back-end development, I craft responsive, user-friendly websites that deliver seamless performance across all devices. Beyond code, I bring strong creative direction to every project, blending design and technology to produce graphics and interfaces that not only look great but also communicate effectively.
//         </p>
//         <p className="max-w-3xl mx-auto text-lg text-gray-700">
//           Whether it’s a sleek website, an engaging UI, or impactful branding, I focus on delivering solutions tailored to each client’s unique goals. What sets me apart is my commitment to quality, detail, and innovation—ensuring that every project reflects professionalism while exceeding expectations.
//         </p>
//       </section>

//       {/* ===== Skills Section ===== */}
//       <section id="skills" className="py-20 px-6 bg-blue-950 text-center">
//         <h2 className="text-4xl font-bold text-amber-300 mb-10">Skills</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
//           {[
//             "HTML","CSS", "CSS grid", "JavaScript","React","Next.js","Tailwind","Node.js","PHP","MySQL","Supabase","Adobe Illustrator","Adobe Photoshop","WordPress","Git & version control"
//           ].map((skill) => (
//             <div
//               key={skill}
//               className="p-6 border border-amber-300 text-amber-50 rounded-xl shadow hover:shadow-lg transition"
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ===== Projects Section ===== */}
//       <section id="projects" className="py-20 px-6 bg-gray-50 text-center">
//         <h2 className="text-4xl text-blue-950 font-bold mb-10">Projects</h2>
//         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
//             <h3 className="text-2xl font-semibold mb-2">Wuraola Royal Farm</h3>
//             <p className="text-gray-700 mb-4">
//               A modern, responsive farm website with image gallery, admin dashboard, and secure login features.
//             </p>
//             <div className=" flex flex-wrap text-md text-blue-950 font-bold">HTML | CSS | CSS GRID | JAVASCRIPT</div>
//             <div className=" object-cover">
//               <img src="/front1.PNG" />
//             </div>
//             <a href="https://wuraolaroyalfarm.com" target="_blank" 
//              rel="noopener noreferrer" className="text-blue-950 font-semibold hover:underline">
//               View Project →
//             </a>
//           </div>
          
//           <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
//             <h3 className="text-2xl font-semibold mb-2">Planet Laundromat</h3>
//             <p className="text-gray-700 mb-4">
//                A responsive laundry service website showcasing services, pricing, and easy contact options.
//             </p>
//             <div className=" flex flex-wrap text-md text-blue-950 font-bold">HTML | CSS | CSS GRID | JAVASCRIPT</div>
//             <div className=" object-cover">
//               <img src="/planet-lundro.PNG" />
//             </div>
//             <a href="https://planetlaundromat.com" target="_blank" 
//              rel="noopener noreferrer" className="text-blue-950 font-semibold hover:underline">
//               View Project →
//             </a>
//           </div>

//           <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
//             <h3 className="text-2xl font-semibold mb-2">Marvel Creative Media</h3>
//             <p className="text-gray-700 mb-4">
//               A modern digital agency website offering web development, branding, and creative design solutions.
//             </p>
//             <div className=" flex flex-wrap text-md text-blue-950 font-bold">REACT | CSS MODULES | PHP | MYSQL</div>
//             <div className=" object-cover">
//               <img src="/mcmedia.PNG" />
//             </div>
//             <a href="https://marvelcmedia.com" target="_blank" 
//              rel="noopener noreferrer" className="text-blue-950 font-semibold hover:underline">
//               View Project →
//             </a>
//           </div>

//           <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
//             <h3 className="text-2xl font-semibold mb-2">Candidate-Manager-(WordPress-Plugin)</h3>
//             <p className="text-gray-700 mb-4">
//               A professional WordPress plugin for managing candidate applications with a 
//               styled frontend form, secure uploads, and an admin dashboard.
//             </p>
//             <div className=" flex flex-wrap text-md text-blue-950 font-bold">HTML | CSS | PHP |JAVASCRIPT</div>
//             <div className=" object-cover">
//               <img src="/form-preview-small.PNG" />
//             </div>
//             <a href="https://github.com/tsbproject/Candidate-Manager-WordPress-Plugin" target="_blank" 
//              rel="noopener noreferrer" className="text-blue-950 font-semibold hover:underline">
//               View Project →
//             </a>
//           </div>


//           <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
//             <h3 className="text-2xl font-semibold mb-2">MarvelMarts Shopping </h3>
//             <p className="text-gray-700 mb-4">
//               An online shopping platform with a clean design, product showcase, and user-friendly experience.
//             </p>
//             <div className=" flex flex-wrap text-md text-blue-950 font-bold">HTML | CSS | WORDPRESS | JAVASCRIPT</div>
//             <div className=" object-cover">
//               <img src="/marvelmarts.PNG" />
//             </div>
//             <a href="https://marvelmarts.com" target="_blank" 
//              rel="noopener noreferrer" className="text-blue-950 font-semibold hover:underline">
//               View Project →
//             </a>
//           </div>

//           <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
//             <h3 className="text-2xl font-semibold mb-2">MyDuduke Dating </h3>
//             <p className="text-gray-700 mb-4">
//               A modern dating site focused on connection, matching, and user profiles built for mobile-first experience.
//             </p>
//             <div className=" flex flex-wrap text-md text-blue-950 font-bold">HTML | CSS | WORDPRESS | JAVASCRIPT</div>
//             <div className=" object-cover">
//               <img src="/myduduke.PNG" />
//             </div>
//             <a href="https://myduduke.com" target="_blank" 
//              rel="noopener noreferrer" className="text-blue-950 font-semibold hover:underline">
//               View Project →
//             </a>
//           </div>


//         </div>
//       </section>

//       {/* ===== Contact Section ===== */}
//       <section id="contact" className="py-20 px-6 bg-blue-950 text-center">
//         <h2 className="text-4xl font-bold text-yellow-300 mb-6">Contact</h2>
//         <p className="mb-8 text-gray-50">
//           Let’s work together! Fill out the form below or send me an email.
//         </p>

//         <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 bg-blue-900/50 p-6 rounded-lg">
//           <input type="hidden" name="access_key" value="d23748f7-be9a-4546-8b3b-30062373d6a2" />
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             required
//             className="w-full px-4 py-3 border border-amber-300 rounded-lg placeholder:text-amber-50 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             required
//             className="w-full px-4 py-3 border border-amber-300 rounded-lg placeholder:text-amber-50 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <input
//             type="phone"
//             name="phone"
//             placeholder="Your Phone"
//             className="w-full px-4 py-3 border border-amber-300 rounded-lg placeholder:text-amber-50 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="5"
//             required
//             className="w-full px-4 py-3 border border-amber-300 rounded-lg placeholder:text-amber-50 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
//           ></textarea>

//           {/* Math CAPTCHA */}
//           <div className="flex items-center justify-center space-x-3 text-amber-200">
//             <label className="font-medium">Solve: {captcha.question} =</label>
//             <input
//               type="number"
//               value={captchaAnswer}
//               onChange={(e) => setCaptchaAnswer(e.target.value)}
//               className="w-20 px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-amber-300 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition disabled:opacity-50"
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>
//         </form>
//       </section>

//       {/* ===== Footer ===== */}
//       <footer className="py-6 bg-gray-900 text-white text-center">
//         <p>© {new Date().getFullYear()} TSBproject. All rights reserved.</p>
//       </footer>

//       {/* Toast Popup */}
//       {toast && (
//         <div
//           className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white font-semibold transition-all duration-500 ${
//             toast.type === "success"
//               ? "bg-green-600 animate-fade-slide"
//               : "bg-red-600 animate-fade-slide animate-shake"
//           }`}
//         >
//           {toast.msg}
//         </div>
//       )}

//       {/* Toast animation */}
//       <style>{`
//         @keyframes fadeSlideUp {
//           0% { opacity: 0; transform: translate(-50%, 20px); }
//           100% { opacity: 1; transform: translate(-50%, 0); }
//         }
//         @keyframes shake {
//           0%, 100% { transform: translate(-50%, 0); }
//           20%, 60% { transform: translate(-50%, -2px); }
//           40%, 80% { transform: translate(-50%, 2px); }
//         }
//         .animate-fade-slide { animation: fadeSlideUp 0.5s ease-out; }
//         .animate-shake { animation: shake 0.4s ease-in-out; }
//       `}</style>
//     </div>
//     </>
//   );
// }






// import { useEffect, useState } from "react";
// import { FaInstagram, FaTwitter, FaLinkedin, FaExternalLinkAlt, FaDownload, FaRocket, FaCode, FaPaintBrush } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoClose } from "react-icons/io5";
// import { Helmet } from 'react-helmet';

// // Color Variables used in classes below:
// // Deep Indigo: text-indigo-950, bg-indigo-950
// // Vivid Amber: text-amber-400, bg-amber-400, border-amber-400
// // Soft Teal: text-teal-400

// const NAV_ITEMS = [
//   { id: "about", label: "Strategy" },
//   { id: "skills", label: "Expertise" },
//   { id: "projects", label: "Case Studies" },
//   { id: "contact", label: "Consultation" },
// ];

// const SKILL_GROUPS = [
//   { 
//     category: "Full-Stack Engine", 
//     icon: <FaCode className="text-teal-400" />, 
//     items: ["React", "Next.js", "Node.js", "PHP", "MySQL", "Supabase"] 
//   },
//   { 
//     category: "Creative Direction", 
//     icon: <FaPaintBrush className="text-amber-400" />, 
//     items: ["UI/UX Design", "Adobe Suite", "WordPress", "Brand Identity"] 
//   },
//   { 
//     category: "Performance & Ops", 
//     icon: <FaRocket className="text-indigo-400" />, 
//     items: ["SEO Optimization", "Git/CI-CD", "Vercel", "API Architecture"] 
//   }
// ];

// const PROJECTS = [
//   {
//     title: "Marvel Creative Media",
//     tags: ["Next.js", "React"],
//     desc: "Luxury-focused agency platform built for extreme speed and visual fidelity.",
//     impact: "99+ Lighthouse Score",
//     link: "https://marvelcmedia.com",
//     img: "/mcmedia.PNG"
//   },
//   {
//     title: "MarvelMarts Shopping",
//     tags: ["React", "Supabase"],
//     desc: "A scalable marketplace engine with complex filtering and secure vendor portals.",
//     impact: "High-Conversion UX",
//     link: "https://marvelmarts.vercel.app",
//     img: "/marvelmarts.PNG"
//   },
//   {
//     title: "Candidate Manager Pro",
//     tags: ["WordPress", "PHP"],
//     desc: "A custom recruitment plugin managing secure data uploads and admin workflows.",
//     impact: "Workflow Automation",
//     link: "https://github.com/tsbproject/Candidate-Manager-WordPress-Plugin",
//     img: "/form-preview-small.PNG"
//   },
//   {
//     title: "Wuraola Royal Farm Website",
//     tags: ["HTML", "PHP", "jAVASCRIPT","CSS"],
//     desc: "A modern, responsive farm website with image gallery, admin dashboard, and secure login features.",
//     impact: "Profesional Corporate Webiste",
//     link: "https://wuraolaroyafarm.com",
//     img: "/front1.PNG"
//   }
// ];

// export default function App() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [closing, setClosing] = useState(false);
//   const [toast, setToast] = useState(null);
//   const [captcha, setCaptcha] = useState({ question: "5 + 3", answer: 8 });
//   const [captchaAnswer, setCaptchaAnswer] = useState("");
//   const [loading, setLoading] = useState(false);

//   const generateCaptcha = () => {
//     const a = Math.floor(Math.random() * 10);
//     const b = Math.floor(Math.random() * 10);
//     setCaptcha({ question: `${a} + ${b}`, answer: a + b });
//   };

//   const closeMobile = () => {
//     setClosing(true);
//     setTimeout(() => { setMobileOpen(false); setClosing(false); }, 400);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (parseInt(captchaAnswer) !== captcha.answer) {
//       setToast({ msg: "Verification failed.", type: "error" });
//       return;
//     }
//     setLoading(true);
//     // Logic for Web3Forms or similar here
//     setTimeout(() => {
//         setLoading(false);
//         setToast({ msg: "Strategy request sent!", type: "success" });
//         e.target.reset();
//         generateCaptcha();
//     }, 1500);
//   };

//   return (
//     <div className="bg-slate-50 selection:bg-amber-400 selection:text-indigo-950">
//       <Helmet>
//         <title>Tayo Bolarinwa | Senior Full-Stack Developer</title>
//       </Helmet>

//       {/* --- NAVIGATION --- */}
//       <header className="fixed top-0 w-full z-50 bg-indigo-950/95 backdrop-blur-lg border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-gradient-to-tr from-amber-400 to-teal-400 rounded-lg flex items-center justify-center font-bold text-indigo-950 text-xl shadow-lg shadow-amber-400/20">T</div>
//             <span className="hidden sm:block font-black text-white tracking-tighter uppercase text-lg">Tayo Bolarinwa</span>
//           </div>

//           <nav className="hidden md:flex items-center gap-8">
//             {NAV_ITEMS.map((item) => (
//               <a key={item.id} href={`#${item.id}`} className="text-slate-300 hover:text-amber-400 font-bold transition-all text-sm uppercase tracking-widest">
//                 {item.label}
//               </a>
//             ))}
//             <a href="/resume.pdf" download className="flex items-center gap-2 px-6 py-2.5 bg-amber-400 text-indigo-950 font-black rounded-full hover:bg-white hover:scale-105 transition-all shadow-xl shadow-amber-400/30">
//               <FaDownload size={14} /> RESUME
//             </a>
//           </nav>

//           <button onClick={() => setMobileOpen(true)} className="md:hidden text-amber-400"><GiHamburgerMenu size={28} /></button>
//         </div>
//       </header>

//       {/* --- HERO SECTION --- */}
//       <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-indigo-950">
//         <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#312e81_0%,#1e1b4b_100%)]"></div>
        
//         <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-black tracking-widest uppercase mb-6">
//               <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
//               Open for Global Consultation
//             </div>
//             <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
//               Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-teal-400">Luxury Apps</span> that scale.
//             </h1>
//             <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
//               High-performance React & Next.js development for brands that demand precision, security, and elite design.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <a href="#projects" className="px-10 py-4 bg-amber-400 text-indigo-950 font-black rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-amber-400/40 transition-all">PROJECTS</a>
//               <div className="flex items-center gap-6 px-4">
//                 <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors"><FaLinkedin size={26}/></a>
//                 <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors"><FaTwitter size={26}/></a>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center relative">
//              <div className="absolute inset-0 bg-teal-400/20 blur-[100px] rounded-full"></div>
//              <div className="relative group">
//                 <div className="absolute inset-0 border-2 border-amber-400 rounded-[3rem] translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
//                 <img src="/tayo3-small.png" alt="Tayo" className="relative z-10 w-80 h-[450px] object-cover rounded-[3rem] shadow-2xl transition-all duration-500" />
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* --- EXPERTISE (REFINED COLORS) --- */}
//       <section id="skills" className="py-24 px-6 bg-slate-50">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//           {SKILL_GROUPS.map((group, i) => (
//             <div key={i} className="p-10 bg-white border border-slate-200 rounded-[2.5rem] hover:shadow-2xl hover:shadow-indigo-950/10 transition-all group">
//               <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{group.icon}</div>
//               <h4 className="text-2xl font-black text-indigo-950 mb-6 uppercase tracking-tight">{group.category}</h4>
//               <div className="flex flex-wrap gap-3">
//                 {group.items.map(skill => (
//                   <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg">{skill}</span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- PROJECTS (REFINED COLORS) --- */}
//       <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
//         <h3 className="text-4xl font-black text-indigo-950 mb-16 text-center underline decoration-amber-400 decoration-8 underline-offset-8">CASE STUDIES</h3>
//         <div className="grid md:grid-cols-3 gap-10">
//           {PROJECTS.map((p, i) => (
//             <div key={i} className="group bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-indigo-950/5 border border-slate-100 hover:border-amber-400/50 transition-all">
//               <div className="h-64 overflow-hidden relative">
//                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
//                  <div className="absolute top-4 right-4 px-4 py-1 bg-indigo-950 text-amber-400 text-xs font-black rounded-full shadow-lg">{p.impact}</div>
//               </div>
//               <div className="p-8">
//                 <h4 className="text-2xl font-black text-indigo-950 mb-4">{p.title}</h4>
//                 <p className="text-slate-600 mb-8 text-sm font-medium leading-relaxed">{p.desc}</p>
//                 <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-black text-indigo-900 border-b-4 border-teal-400 hover:text-teal-500 transition-all uppercase text-sm">
//                   Launch Project <FaExternalLinkAlt size={12}/>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- CONTACT (VIBRANT) --- */}
//       <section id="contact" className="py-24 px-6">
//         <div className="max-w-4xl mx-auto bg-indigo-950 rounded-[3rem] p-12 text-center relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 blur-[80px] rounded-full"></div>
//           <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">Let’s Build Something <span className="text-amber-400 underline italic">Iconic</span>.</h2>
//           <p className="text-slate-400 mb-10 text-lg">Inquiries for 2026 development partnerships now open.</p>
          
//           <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
//             <input type="text" placeholder="Full Name" className="bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:border-amber-400 outline-none" required />
//             <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:border-amber-400 outline-none" required />
//             <textarea placeholder="Tell me about your project..." rows="4" className="md:col-span-2 bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:border-amber-400 outline-none" required></textarea>
            
//             <div className="md:col-span-2 flex items-center justify-between p-4 bg-teal-400/5 rounded-2xl border border-teal-400/20 text-teal-400">
//                 <span className="text-sm font-black">SECURITY: {captcha.question} =</span>
//                 <input type="number" value={captchaAnswer} onChange={(e) => setCaptchaAnswer(e.target.value)} className="w-20 bg-white/10 p-2 rounded-xl text-center outline-none" required />
//             </div>

//             <button className="md:col-span-2 py-5 bg-gradient-to-r from-amber-400 to-teal-400 text-indigo-950 font-black rounded-2xl uppercase tracking-widest shadow-2xl shadow-amber-400/20 hover:scale-105 transition-all">
//                 {loading ? "Processing..." : "Initiate Partnership"}
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* --- FOOTER --- */}
//       <footer className="py-12 bg-indigo-950 text-center border-t border-white/5">
//         <p className="text-slate-500 font-bold tracking-widest text-xs uppercase italic">
//           © {new Date().getFullYear()} TSB PROJECT // SENIOR SOLUTIONS PARTNER
//         </p>
//       </footer>
//     </div>
//   );
// }





import { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaExternalLinkAlt, FaDownload, FaRocket, FaCode, FaPaintBrush } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Helmet } from 'react-helmet';

const NAV_ITEMS = [
  { id: "about", label: "Strategy" },
  { id: "skills", label: "Expertise" },
  { id: "projects", label: "Case Studies" },
  { id: "contact", label: "Consultation" },
];

const SKILL_GROUPS = [
  { 
    category: "Full-Stack Engine", 
    icon: <FaCode className="text-teal-400" />, 
    items: ["React", "Next.js", "Node.js", "PHP", "MySQL", "Supabase"] 
  },
  { 
    category: "Creative Direction", 
    icon: <FaPaintBrush className="text-amber-400" />, 
    items: ["UI/UX Design", "Adobe Suite", "WordPress", "Brand Identity"] 
  },
  { 
    category: "Performance & Ops", 
    icon: <FaRocket className="text-indigo-400" />, 
    items: ["SEO Optimization", "Git/CI-CD", "Vercel", "API Architecture"] 
  }
];

const PROJECTS = [
  {
    title: "Marvel Creative Media",
    tags: ["Next.js", "React"],
    desc: "Luxury-focused agency platform built for extreme speed and visual fidelity.",
    impact: "99+ Lighthouse Score",
    link: "https://marvelcmedia.com",
    img: "/mcmedia.PNG"
  },
  {
    title: "MarvelMarts Shopping",
    tags: ["React", "Supabase"],
    desc: "A scalable marketplace engine with complex filtering and secure vendor portals.",
    impact: "High-Conversion UX",
    link: "https://marvelmarts.vercel.app",
    img: "/marvelmarts.PNG"
  },
  {
    title: "Candidate Manager Pro",
    tags: ["WordPress", "PHP"],
    desc: "A custom recruitment plugin managing secure data uploads and admin workflows.",
    impact: "Workflow Automation",
    link: "https://github.com/tsbproject/Candidate-Manager-WordPress-Plugin",
    img: "/form-preview-small.PNG"
  },
  {
    title: "Wuraola Royal Farm",
    tags: ["HTML", "PHP", "JS", "CSS"],
    desc: "A modern, responsive farm website with image gallery, admin dashboard, and secure login features.",
    impact: "Professional Corporate",
    link: "https://wuraolaroyafarm.com",
    img: "/front1.PNG"
  }
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [toast, setToast] = useState(null);
  const [captcha, setCaptcha] = useState({ question: "5 + 3", answer: 8 });
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
  }, [mobileOpen]);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setCaptcha({ question: `${a} + ${b}`, answer: a + b });
  };

  const closeMobile = () => {
    setClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setClosing(false);
    }, 400);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (parseInt(captchaAnswer) !== captcha.answer) {
      setToast({ msg: "❌ Verification failed. Check your math.", type: "error" });
      setTimeout(() => setToast(null), 4000);
      return;
    }

    setLoading(true);
    const formData = new FormData(e.target);
    // Using the access key from your saved info
    formData.append("access_key", "d23748f7-be9a-4546-8b3b-30062373d6a2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setToast({ msg: "Partnership request sent successfully!", type: "success" });
        e.target.reset();
        setCaptchaAnswer("");
        generateCaptcha();
      } else {
        setToast({ msg: "❌ Error submitting form.", type: "error" });
      }
    } catch (err) {
      setToast({ msg: "❌ Connection error. Try again.", type: "error" });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 5000);
    }
  };

  return (
    <div className="bg-slate-50 selection:bg-amber-400 selection:text-indigo-950 scroll-smooth">
      <Helmet>
        <title>Tayo Bolarinwa | Senior Full-Stack Developer</title>
      </Helmet>

      {/* --- NAVIGATION --- */}
      <header className="fixed top-0 w-full z-50 bg-indigo-950/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-amber-400 to-teal-400 rounded-lg flex items-center justify-center font-bold text-indigo-950 text-xl shadow-lg shadow-amber-400/20">T</div>
            <span className="hidden sm:block font-black text-white tracking-tighter uppercase text-lg">Tayo Bolarinwa</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-slate-300 hover:text-amber-400 font-bold transition-all text-sm uppercase tracking-widest">
                {item.label}
              </a>
            ))}
            {/* Functional Resume Download */}
            <a href="/resume.pdf" download="resume.pdf" className="flex items-center gap-2 px-6 py-2.5 bg-amber-400 text-indigo-950 font-black rounded-full hover:bg-white hover:scale-105 transition-all shadow-xl shadow-amber-400/30">
              <FaDownload size={14} /> RESUME
            </a>
          </nav>

          <button onClick={() => setMobileOpen(true)} className="md:hidden text-amber-400"><GiHamburgerMenu size={28} /></button>
        </div>
      </header>

      {/* --- MOBILE OVERLAY (Functional) --- */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-indigo-950/60 backdrop-blur-sm" onClick={closeMobile}></div>
          <div className={`relative w-[80%] max-w-sm bg-indigo-950 h-full p-8 shadow-2xl transition-transform duration-500 ${closing ? "translate-x-full" : "translate-x-0"}`}>
            <button onClick={closeMobile} className="absolute top-6 right-6 text-amber-400"><IoClose size={32} /></button>
            <div className="flex flex-col gap-8 mt-20">
              {NAV_ITEMS.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={closeMobile} className="text-2xl font-black text-white hover:text-amber-400 uppercase tracking-tighter">
                  {item.label}
                </a>
              ))}
              <a href="/resume.pdf" download className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-amber-400 text-indigo-950 font-black rounded-2xl">
                <FaDownload size={18} /> DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-indigo-950">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#312e81_0%,#1e1b4b_100%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-black tracking-widest uppercase mb-6">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
              Open for Global Consultation
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-teal-400">Luxury Apps</span> that scale.
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
              High-performance React & Next.js development for brands that demand precision, security, and elite design.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-10 py-4 bg-amber-400 text-indigo-950 font-black rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-amber-400/40 transition-all">PROJECTS</a>
              <div className="flex items-center gap-6 px-4">
                <a href="https://www.linkedin.com/in/tayo-bolarinwa-a6b1252a5/" className="text-slate-400 hover:text-teal-400 transition-colors"><FaLinkedin size={26}/></a>
                <a href="https://x.com/tsbolarinwa" className="text-slate-400 hover:text-amber-400 transition-colors"><FaTwitter size={26}/></a>
              </div>
            </div>
          </div>
          <div className="flex justify-center relative">
             <div className="absolute inset-0 bg-teal-400/20 blur-[100px] rounded-full"></div>
             <div className="relative group">
                <div className="absolute inset-0 border-2 border-amber-400 rounded-[3rem] translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                <img src="/tayo3-small.png" alt="Tayo" className="relative z-10 w-80 h-[450px] object-cover rounded-[3rem] shadow-2xl transition-all duration-500" />
             </div>
          </div>
        </div>
      </section>

      {/* --- EXPERTISE --- */}
      <section id="skills" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, i) => (
            <div key={i} className="p-10 bg-white border border-slate-200 rounded-[2.5rem] hover:shadow-2xl hover:shadow-indigo-950/10 transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{group.icon}</div>
              <h4 className="text-2xl font-black text-indigo-950 mb-6 uppercase tracking-tight">{group.category}</h4>
              <div className="flex flex-wrap gap-3">
                {group.items.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <h3 className="text-4xl font-black text-indigo-950 mb-16 text-center underline decoration-amber-400 decoration-8 underline-offset-8 uppercase tracking-tighter">Case Studies</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((p, i) => (
            <div key={i} className="group bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-indigo-950/5 border border-slate-100 hover:border-amber-400/50 transition-all">
              <div className="h-64 overflow-hidden relative">
                 <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute top-4 right-4 px-4 py-1 bg-indigo-950 text-amber-400 text-xs font-black rounded-full shadow-lg">{p.impact}</div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-black text-indigo-950 mb-4">{p.title}</h4>
                <p className="text-slate-600 mb-8 text-sm font-medium leading-relaxed">{p.desc}</p>
                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-black text-indigo-900 border-b-4 border-teal-400 hover:text-teal-500 transition-all uppercase text-sm">
                  Launch Project <FaExternalLinkAlt size={12}/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT (Functional) --- */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-indigo-950 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 blur-[80px] rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">Let’s Build Something <span className="text-amber-400 underline italic">Iconic</span>.</h2>
          <p className="text-slate-400 mb-10 text-lg">Inquiries for 2026 development partnerships now open.</p>
          
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <input type="text" name="name" placeholder="Full Name" className="bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:border-amber-400 outline-none" required />
            <input type="email" name="email" placeholder="Email Address" className="bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:border-amber-400 outline-none" required />
            <textarea name="message" placeholder="Tell me about your project..." rows="4" className="md:col-span-2 bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:border-amber-400 outline-none" required></textarea>
            
            <div className="md:col-span-2 flex items-center justify-between p-4 bg-teal-400/5 rounded-2xl border border-teal-400/20 text-teal-400">
                <span className="text-sm font-black">SECURITY: {captcha.question} =</span>
                <input type="number" value={captchaAnswer} onChange={(e) => setCaptchaAnswer(e.target.value)} className="w-20 bg-white/10 p-2 rounded-xl text-center outline-none" required />
            </div>

            <button type="submit" disabled={loading} className="md:col-span-2 py-5 bg-gradient-to-r from-amber-400 to-teal-400 text-indigo-950 font-black rounded-2xl uppercase tracking-widest shadow-2xl shadow-amber-400/20 hover:scale-105 transition-all disabled:opacity-50">
                {loading ? "Processing..." : "Initiate Partnership"}
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-indigo-950 text-center border-t border-white/5">
        <p className="text-slate-500 font-bold tracking-widest text-xs uppercase italic">
          © {new Date().getFullYear()} TSB PROJECT // SENIOR SOLUTIONS PARTNER
        </p>
      </footer>

      {/* --- TOAST POPUP (Functional) --- */}
      {toast && (
        <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 px-8 py-4 rounded-2xl shadow-2xl text-white font-black z-[200] animate-bounce-in transition-all ${toast.type === "success" ? "bg-teal-500" : "bg-red-500"}`}>
          {toast.msg}
        </div>
      )}

      <style>{`
        @keyframes bounceIn {
          0% { opacity: 0; transform: translate(-50%, 20px); }
          50% { transform: translate(-50%, -5px); }
          100% { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-bounce-in { animation: bounceIn 0.5s ease-out; }
      `}</style>
    </div>
  );
}