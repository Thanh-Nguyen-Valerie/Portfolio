const career = [
  {
    title: 'Current Role - Skill-Wanderer',
    desc: 'Full-Cycle Solutions Associate (03/2026 - now), building and shipping practical web solutions.'
  },
  {
    title: 'Core Skill - Frontend',
    desc: 'ReactJS-driven interfaces, responsive architecture, and clean component systems for product teams.'
  },
  {
    title: 'Core Skill - Backend',
    desc: 'Node.js development, API integration, and reliable frontend-backend workflows.'
  }
]

export default function HomePage() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <p style={styles.tag}>Next.js</p>
        <h1 style={styles.title}>Nguyen Ho Thien Thanh</h1>
        <p style={styles.desc}>
          Full-Cycle Solutions Associate at Skill-Wanderer, focused on delivering end-to-end web products
          across frontend and backend.
        </p>
        <div style={styles.buttons}>
          <a href="#career" style={styles.buttonPrimary}>View career path</a>
          <a href="#contact" style={styles.buttonGhost}>Contact</a>
        </div>
      </section>

      <section id="career" style={styles.grid}>
        {career.map((item) => (
          <article key={item.title} style={styles.card}>
            <h2 style={styles.cardTitle}>{item.title}</h2>
            <p style={styles.cardDesc}>{item.desc}</p>
          </article>
        ))}
      </section>

      <section style={styles.meta}>
        <h3 style={styles.metaTitle}>Career Snapshot</h3>
        <ul style={styles.metaList}>
          <li>Name: Nguyen Ho Thien Thanh</li>
          <li>Role: Full-Cycle Solutions Associate</li>
          <li>Company: Skill-Wanderer (03/2026 - now)</li>
        </ul>
      </section>

      <section id="contact" style={styles.contact}>
        <p>Email: thanh-nguyen@skill-wanderer.com</p>
        <p>Tech stack: Web Development, ReactJS, Node.js, Frontend, Backend</p>
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
    maxWidth: 740
  },
  tag: {
    fontSize: 12,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#0d5bb8',
    fontWeight: 700
  },
  title: {
    margin: '10px 0 14px',
    fontSize: 'clamp(2rem, 6vw, 3.4rem)'
  },
  desc: {
    margin: 0,
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    lineHeight: 1.6,
    maxWidth: 680
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
    marginTop: 34,
    display: 'grid',
    gap: 16,
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))'
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
  cardDesc: {
    margin: 0,
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    lineHeight: 1.5
  },
  contact: {
    marginTop: 26,
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
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
  }
}
