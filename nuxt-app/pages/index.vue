<template>
  <main class="page">
    <section class="hero">
      <p class="tag">Portfolio • Nuxt</p>
      <h1>Nguyen Ho Thien Thanh</h1>
      <p class="lead">
        Software Engineer | Full-Stack Developer | DevOps
      </p>
      <p class="sublead">Ho Chi Minh City, Vietnam</p>
      <div class="actions">
        <a href="#experience">View experience</a>
        <a href="#projects" class="ghost">View projects</a>
        <a href="#contact" class="ghost">Contact</a>
      </div>
    </section>

    <section id="contact" class="meta">
      <h3>Contact</h3>
      <ul>
        <li>Phone: 0823292612</li>
        <li>Email: nguyenhothienthanh.work@gmail.com</li>
        <li>LinkedIn: www.linkedin.com/in/nguyen-ho-thien-thanh</li>
        <li>Facebook: www.facebook.com/i.am.Ave.chuong</li>
      </ul>
    </section>

    <section id="experience" class="grid">
      <article class="card">
        <h2>Skill-Wanderer • Full-Cycle Solutions Associate</h2>
        <p class="period">03/2026 - Present</p>
        <p>
          Architected containerized microservices with Docker Compose, optimized PostgreSQL persistence,
          built an Assignment Submission API with Google Drive integration, and redesigned course architecture
          for Web Development and Git with SEO-optimized learning routes.
        </p>
      </article>
      <article class="card">
        <h2>Apps Cyclone • Frontend Developer Intern</h2>
        <p class="period">06/2025 - 08/2025</p>
        <p>
          Engineered responsive ReactJS interfaces, built reusable component architecture, integrated RESTful APIs,
          and resolved client-side issues to improve UX and front-end performance.
        </p>
      </article>
      <article class="card">
        <h2>Amazon Web Services Vietnam • Cloud Engineering Intern</h2>
        <p class="period">10/2024 - 03/2025</p>
        <p>
          Deployed a serverless CRUD app with ReactJS + AWS Lambda, secured APIs via API Gateway/S3/IAM,
          and monitored reliability using CloudWatch.
        </p>
      </article>
    </section>

    <section id="projects" class="grid">
      <article class="card">
        <h2>Health Management Mobile & Web App</h2>
        <p class="period">09/2024 - 05/2025 • Full-Stack Developer</p>
        <p>
          Built cross-platform apps with ReactJS and React Native, developed Node.js/Express APIs,
          integrated MongoDB and an AI chatbot API, and optimized data fetching for low-latency sync.
        </p>
        <p class="linkline">Source: github.com/NXT1008/KLTN_App • github.com/NXT1008/KLTN_Frontend</p>
      </article>
      <article class="card">
        <h2>To-Do-List Website (Personal Project)</h2>
        <p class="period">09/2025 - 10/2025 • Full-Stack Developer</p>
        <p>
          Delivered high Lighthouse web vitals (LCP 0.19s, CLS 0, INP 24ms), implemented serverless APIs
          with API Gateway + Lambda, and monitored 99.9% reliability via CloudWatch.
        </p>
        <p class="linkline">Source: github.com/nguyenhothienthanh/to-do-app</p>
      </article>
    </section>

    <section class="meta two-col">
      <div>
        <h3>Top Skills</h3>
        <ul>
          <li>Back-End Web Development</li>
          <li>Problem Solving</li>
          <li>TypeScript</li>
          <li>Web Development</li>
          <li>ReactJS</li>
          <li>Node.js</li>
        </ul>
      </div>
      <div>
        <h3>Education</h3>
        <ul>
          <li>HCMC University of Technology and Education</li>
          <li>Engineer's degree, Information Technology</li>
          <li>08/2021 - 07/2025</li>
        </ul>
      </div>
    </section>

    <section class="meta two-col">
      <div>
        <h3>Certifications</h3>
        <ul>
          <li>JavaScript Fundamentals to Advanced: Full Stack Development</li>
          <li>HTML Essential Training</li>
          <li>Learning Python</li>
          <li>Programming Foundations: Fundamentals</li>
          <li>Preliminary English Test</li>
        </ul>
      </div>
      <div>
        <h3>Honors & Awards</h3>
        <ul>
          <li>Outstanding Student in Academic Achievement (2023-2024)</li>
          <li>Five-Good Student Award, University Level (2023-2024)</li>
          <li>Academic Encouragement Scholarship, Semester 2 (2023-2024)</li>
        </ul>
        <h3>Languages</h3>
        <ul>
          <li>Vietnamese (Native or Bilingual)</li>
          <li>English (Elementary)</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 85% 10%, rgba(25, 144, 105, 0.25), transparent 40%),
    linear-gradient(140deg, #f4efe2 0%, #e6f3ea 100%);
  font-family: Georgia, "Times New Roman", serif;
  color: #1d2c25;
  padding: 36px 20px 48px;
  max-width: 1024px;
  margin: 0 auto;
}

.hero h1 {
  margin: 10px 0 14px;
  font-size: clamp(2rem, 6vw, 3.5rem);
}

.tag {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #116649;
  font-weight: 700;
}

.lead {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  max-width: 760px;
  line-height: 1.6;
  margin-bottom: 0;
}

.sublead {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 6px;
  opacity: 0.9;
}

.actions {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.actions a {
  display: inline-block;
  text-decoration: none;
  background: #125f45;
  color: #fff;
  padding: 10px 18px;
  border-radius: 999px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
}

.actions .ghost {
  background: transparent;
  color: #125f45;
  border: 1px solid #125f45;
}

.grid {
  margin-top: 34px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.card {
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(17, 102, 73, 0.2);
  border-radius: 16px;
  padding: 18px;
  backdrop-filter: blur(4px);
}

.card h2 {
  margin: 0 0 8px;
  font-size: 1.1rem;
}

.card p {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5;
}

.period {
  margin-bottom: 10px !important;
  font-weight: 600;
  color: #0f4b36;
}

.linkline {
  margin-top: 10px !important;
  font-size: 0.92rem;
}

.contact {
  margin-top: 26px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.meta {
  margin-top: 24px;
  background: rgba(255, 255, 255, 0.55);
  border-radius: 14px;
  padding: 16px 18px;
  border: 1px solid rgba(17, 102, 73, 0.18);
}

.meta h3 {
  margin: 0 0 10px;
}

.meta ul {
  margin: 0;
  padding-left: 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.55;
}

.two-col {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}
</style>
