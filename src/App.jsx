import { useEffect, useRef } from "react";
import "./App.css";
import profile from "./profile.png";
import idCard  from "./Id.png";
import Bg  from "./bg.png";

function App() {

const aboutRef = useRef(null);

useEffect(() => {
  const section = aboutRef.current;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        section.classList.add("show");
      } else {
        section.classList.remove("show");
      }
    },
    {
      threshold: 0.4,
    }
  );

  if (section) {
    observer.observe(section);
  }

  return () => {
    if (section) observer.unobserve(section);
  };
}, []);

  return (
    <>
    
{/* NAVBAR */}
  <header className="navbar">
  <h2 className="logo">Bea</h2>

  <nav>
    <a href="#hero">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#education">Education</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

{/* HERO */}
<section id="hero" className="hero">
  <div className="hero-container">
    <div 
      className="hero-left"
      onMouseMove={(e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }}
    onMouseLeave={(e) => {
    e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
    }}
  >
    <img src={idCard} alt="ID Card" className="id-card" />
      <img src={profile} alt="profile" className="profile-img" />
      <img src={Bg} alt="bg" className="bg-img" />
    </div>

    <div className="hero-right">
      <h1>Hi! I’m Bea</h1>
        <p>
          I’m a 3rd-year BSIT student who loves building delightful,
          accessible web interfaces. I focus on HTML, CSS, JavaScript —
          and learning React & UX patterns.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">View Projects</button>
          <button className="btn-secondary">Download Resume</button>
        </div>
    </div>
  </div>
</section>

{/* ABOUT */} 
<section
  id="about"
  className="about-section"
  ref={aboutRef}
>
  <div className="about-bg-text">BEA</div>

  <div className="about-content">
    <div className="about-title reveal">
      <h2>About Me</h2>
      <div className="accent-line"></div>
    </div>

    <div className="about-text">
      <p className="reveal">
        I am currently a <span>3rd-year BSIT student</span> with a strong
        passion for <span>front-end development</span>. I focus on building
        interfaces that balance <span>aesthetics</span>, 
        <span> accessibility</span>, and 
        <span> performance</span>.
      </p>

      <p className="reveal">
        My workflow includes designing in <span>Figma</span>, developing in 
        <span> VS Code</span>, and using <span>Git</span> for version control.
        I enjoy transforming ideas into clean, responsive, and user-friendly
        web applications.
      </p>

      <p className="reveal">
        As an aspiring front-end developer, my goal is to create meaningful
        digital experiences that are not only visually appealing but also
        <span> intuitive</span> and <span>efficient</span>. I continuously
        improve my skills by exploring new technologies, staying updated with
        design trends, and applying best practices in modern web development.
      </p>

      <div className="about-tags">
        <span>UI Design</span>
        <span>Frontend Development</span>
        <span>Responsive Design</span>
        <span>User Experience</span>
      </div>
    </div>
  </div>
</section>

{/* PROJECTS */}
<section id="projects" className="projects-section">
  <div className="projects-header">
    <h2>Projects</h2>
    <div className="accent-line"></div>
  </div>

  <div className="projects-grid">

    <div className="project-card">
      <img src="/project1.jpg" alt="Project 1" />
      <div className="project-overlay">
        <h3>Project1</h3>
        <p>React • Glass UI • Responsive</p>
        <button>View Project</button>
      </div>
    </div>

    <div className="project-card">
      <img src="/project2.jpg" alt="Project 2" />
      <div className="project-overlay">
        <h3>Project 2</h3>
        <p>Figma • UX Design • Mobile</p>
        <button>View Project</button>
      </div>
    </div>

    <div className="project-card">
      <img src="/project3.jpg" alt="Project 3" />
      <div className="project-overlay">
        <h3>Project 3</h3>
        <p>React • Firebase • Clean UI</p>
        <button>View Project</button>
      </div>
    </div>

  </div>
</section>

{/* SKILLS */}
<section id="skills" className="skills-section">
  <div className="skills-header">
    <h2>Skills</h2>
    <div className="accent-line"></div>
  </div>

  <div className="circle-grid">

    <div className="circle-skill" style={{ "--percent": 90 }}>
      <div className="circle-inner">
        <span>90%</span>
        <p>HTML</p>
      </div>
    </div>

    <div className="circle-skill" style={{ "--percent": 90 }}>
      <div className="circle-inner">
        <span>90%</span>
        <p>CSS</p>
      </div>
    </div>

    <div className="circle-skill" style={{ "--percent": 60 }}>
      <div className="circle-inner">
        <span>60%</span>
        <p>JavaScript</p>
      </div>
    </div>

    <div className="circle-skill" style={{ "--percent": 50 }}>
      <div className="circle-inner">
        <span>50%</span>
        <p>Git & GitHub</p>
      </div>
    </div>

    <div className="circle-skill" style={{ "--percent": 50 }}>
      <div className="circle-inner">
        <span>50%</span>
        <p>Figma</p>
      </div>
    </div>

    <div className="circle-skill" style={{ "--percent": 30 }}>
      <div className="circle-inner">
        <span>30%</span>
        <p>React JS</p>
      </div>
    </div>

  </div>
</section>

{/* EDUCATION */}
<section id="education" className="education-section">
  <div className="education-header">
    <h2>Education</h2>
    <div className="accent-line"></div>
  </div>

  <div className="timeline">

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>Bachelor of Science in Information Technology</h3>
        <span>Informatics College Manila</span>
        <p>Relevant coursework: Web Development, Database Systems, UI/UX Design.</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>Senior High School</h3>
        <span>Integrated College Business and Technology (ICT)</span>
        <p>Award: With Honor, Junior Programmer</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>High School</h3>
        <span>San Ildefonso National High School</span>
        <p>Started learning HTML, CSS & basic JavaScript</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>Elementary</h3>
        <span>Mataas na Parang Elementary</span>
        <p>Chess player</p>
      </div>
    </div>
  </div>
</section>
<section id="contact" className="contact-section">
  <div className="contact-header">
    <h2>Contact</h2>
    <div className="accent-line"></div>
  </div>

  <div className="contact-container">
    <form className="contact-form">
      <div className="input-group">
        <input type="text" required />
        <label>Your Name</label>
      </div>

      <div className="input-group">
        <input type="email" required />
        <label>Your Email</label>
      </div>

      <div className="input-group">
        <textarea rows="5" required></textarea>
        <label>Your Message</label>
      </div>

      <div className="contact-buttons">
        <button type="submit" className="btn-primary">
          Send Message
        </button>

        <a href="mailto:your@email.com" className="btn-secondary">
          Or Email Me
        </a>
      </div>
    </form>
  </div>
</section>

      {/* FOOTER */}
      <footer>© 2026 Bea Son</footer>
    </>
  );
}

export default App;