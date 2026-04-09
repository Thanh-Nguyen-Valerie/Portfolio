const experience = [
  {
    title: 'Skill-Wanderer - Full-Cycle Solutions Associate',
    period: '03/2026 - Present',
    desc: 'Architected Docker Compose microservices, optimized PostgreSQL persistence, engineered an Assignment Submission API with Google Drive integration, and redesigned Web Development and Git curriculum architecture with SEO-friendly learning routes.'
  },
  {
    title: 'Apps Cyclone - Frontend Developer Intern',
    period: '06/2025 - 08/2025',
    desc: 'Built responsive ReactJS interfaces, designed reusable component modules, integrated RESTful APIs in Agile sprints, and improved client-side UX and performance under senior mentorship.'
  },
  {
    title: 'Amazon Web Services Vietnam - Cloud Engineering Intern',
    period: '10/2024 - 03/2025',
    desc: 'Deployed a serverless CRUD platform with ReactJS and AWS Lambda, secured infrastructure through API Gateway, S3, and IAM, and monitored reliability via CloudWatch.'
  }
]

const projects = [
  {
    title: 'Health Management Mobile & Web App',
    period: '09/2024 - 05/2025 | Full-Stack Developer',
    desc: 'Developed ReactJS web + React Native mobile clients, implemented Node.js/Express REST APIs with MongoDB, integrated an AI chatbot API, and optimized data fetching for real-time consistency.',
    source: 'github.com/NXT1008/KLTN_App | github.com/NXT1008/KLTN_Frontend'
  },
  {
    title: 'To-Do-List Website (Personal Project)',
    period: '09/2025 - 10/2025 | Full-Stack Developer',
    desc: 'Achieved strong Web Vitals (LCP 0.19s, CLS 0, INP 24ms), built serverless APIs with API Gateway + Lambda, used DynamoDB for persistence, and maintained 99.9% reliability with CloudWatch.',
    source: 'github.com/nguyenhothienthanh/to-do-app'
  }
]

export default function HomePage() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <p style={styles.tag}>Portfolio - Next.js</p>
        <h1 style={styles.title}>Nguyen Ho Thien Thanh</h1>
        <p style={styles.desc}>Software Engineer | Full-Stack Developer | DevOps</p>
        <p style={styles.descSub}>Ho Chi Minh City, Vietnam</p>
        <div style={styles.buttons}>
          <a href="#experience" style={styles.buttonPrimary}>View experience</a>
          <a href="#projects" style={styles.buttonGhost}>View projects</a>
          <a href="#contact" style={styles.buttonGhost}>Contact</a>
        </div>
      </section>

      <section id="contact" style={styles.meta}>
        <h3 style={styles.metaTitle}>Contact</h3>
        <ul style={styles.metaList}>
          <li>Phone: 0823292612</li>
          <li>Email: nguyenhothienthanh.work@gmail.com</li>
          <li>LinkedIn: www.linkedin.com/in/nguyen-ho-thien-thanh</li>
          <li>Facebook: www.facebook.com/i.am.Lamenth</li>
        </ul>
      </section>

      <section id="experience" style={styles.grid}>
        {experience.map((item) => (
          <article key={item.title} style={styles.card}>
            <h2 style={styles.cardTitle}>{item.title}</h2>
            <p style={styles.period}>{item.period}</p>
            <p style={styles.cardDesc}>{item.desc}</p>
          </article>
        ))}
      </section>

      <section id="projects" style={styles.grid}>
        {projects.map((item) => (
          <article key={item.title} style={styles.card}>
            <h2 style={styles.cardTitle}>{item.title}</h2>
            <p style={styles.period}>{item.period}</p>
            <p style={styles.cardDesc}>{item.desc}</p>
            <p style={styles.source}>Source: {item.source}</p>
          </article>
        ))}
      </section>

      <section style={styles.twoCol}>
        <article style={styles.meta}>
          <h3 style={styles.metaTitle}>Top Skills</h3>
          <ul style={styles.metaList}>
            <li>Back-End Web Development</li>
            <li>Problem Solving</li>
            <li>TypeScript</li>
            <li>Web Development</li>
            <li>ReactJS</li>
            <li>Node.js</li>
          </ul>
        </article>
        <article style={styles.meta}>
          <h3 style={styles.metaTitle}>Education</h3>
          <ul style={styles.metaList}>
            <li>HCMC University of Technology and Education</li>
            <li>Engineer&apos;s Degree, Information Technology</li>
            <li>08/2021 - 07/2025</li>
          </ul>
        </article>
      </section>

      <section style={styles.twoCol}>
        <article style={styles.meta}>
          <h3 style={styles.metaTitle}>Certifications</h3>
          <ul style={styles.metaList}>
            <li>JavaScript Fundamentals to Advanced: Full Stack Development</li>
            <li>HTML Essential Training</li>
            <li>Learning Python</li>
            <li>Programming Foundations: Fundamentals</li>
            <li>Preliminary English Test</li>
          </ul>
        </article>
        <article style={styles.meta}>
          <h3 style={styles.metaTitle}>Honors & Awards</h3>
          <ul style={styles.metaList}>
            <li>Outstanding Student in Academic Achievement (2023-2024)</li>
            <li>Five-Good Student Award, University Level (2023-2024)</li>
            <li>Academic Encouragement Scholarship, Semester 2 (2023-2024)</li>
          </ul>
          <h3 style={styles.metaTitle}>Languages</h3>
          <ul style={styles.metaList}>
            <li>Vietnamese (Native or Bilingual)</li>
            <li>English (Elementary)</li>
          </ul>
        </article>
      </section>
    </main>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background:
      'radial-gradient(circle at 12% 10%, rgba(0, 137, 209, 0.25), transparent 40%), linear-gradient(150deg, #f3f8ff 0%, #efffee 100%)',
    fontFamily: 'Cambria, Cochin, Georgia, Times, serif',
    color: '#152234',
    padding: '36px 20px 48px',
    maxWidth: 1024,
    margin: '0 auto'
  },
  hero: {
    maxWidth: 760
  },
  tag: {
    fontSize: 12,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#0d5bb8',
    fontWeight: 700
  },
  title: {
    margin: '10px 0 10px',
    fontSize: 'clamp(2rem, 6vw, 3.4rem)'
  },
  desc: {
    margin: 0,
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    lineHeight: 1.6,
    maxWidth: 740
  },
  descSub: {
    marginTop: 6,
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    lineHeight: 1.6,
    maxWidth: 740
  },
  buttons: {
    marginTop: 20,
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  },
  buttonPrimary: {
    textDecoration: 'none',
    background: '#0f4da3',
    color: '#fff',
    padding: '10px 18px',
    borderRadius: 999,
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    fontWeight: 600
  },
  buttonGhost: {
    textDecoration: 'none',
    background: 'transparent',
    color: '#0f4da3',
    border: '1px solid #0f4da3',
    padding: '10px 18px',
    borderRadius: 999,
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    fontWeight: 600
  },
  grid: {
    marginTop: 22,
    display: 'grid',
    gap: 16,
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'
  },
  card: {
    background: 'rgba(255,255,255,0.78)',
    border: '1px solid rgba(15,77,163,0.2)',
    borderRadius: 16,
    padding: 18,
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
  },
  cardTitle: {
    margin: '0 0 8px',
    fontSize: 18
  },
  period: {
    margin: '0 0 10px',
    fontWeight: 600,
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
  },
  cardDesc: {
    margin: 0,
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    lineHeight: 1.5
  },
  source: {
    margin: '10px 0 0',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    lineHeight: 1.5,
    fontSize: 14
  },
  meta: {
    marginTop: 24,
    background: 'rgba(255,255,255,0.58)',
    borderRadius: 14,
    padding: '16px 18px',
    border: '1px solid rgba(15,77,163,0.18)'
  },
  metaTitle: {
    margin: '0 0 10px'
  },
  metaList: {
    margin: 0,
    paddingLeft: 18,
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    lineHeight: 1.55
  },
  twoCol: {
    marginTop: 18,
    display: 'grid',
    gap: 16,
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'
  }
}
