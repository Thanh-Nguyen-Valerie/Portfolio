<template>
  <main class="page">
    <section class="hero">
      <p class="tag">Portfolio • Nuxt</p>
      <h1>Nguyen Ho Thien Thanh</h1>
      <p class="lead">
        Full-Cycle Solutions Associate at Skill-Wanderer (03/2026 - now), focused on web product delivery
        with a full-cycle mindset across frontend and backend.
      </p>
      <div class="actions">
        <a href="#career">View career path</a>
        <a href="#contact" class="ghost">Contact</a>
      </div>
    </section>

    <section id="career" class="grid">
      <article class="card">
        <h2>Current Role • Skill-Wanderer</h2>
        <p>
          As a Full-Cycle Solutions Associate, I build web solutions and collaborate closely with product,
          design, and engineering teams.
        </p>
      </article>
      <article class="card">
        <h2>Core Skill • Frontend</h2>
        <p>
          ReactJS, web UI architecture, responsive implementation, and user experience optimization.
        </p>
      </article>
      <article class="card">
        <h2>Core Skill • Backend</h2>
        <p>
          Node.js service development, API integration, and frontend-backend orchestration in full-cycle workflows.
        </p>
      </article>
    </section>

    <section class="meta">
      <h3>Career Snapshot</h3>
      <ul>
        <li>Name: Nguyen Ho Thien Thanh</li>
        <li>Title: Full-Cycle Solutions Associate</li>
        <li>Company: Skill-Wanderer (03/2026 - now)</li>
      </ul>
    </section>

    <section id="contact" class="contact">
      <p><strong>Email:</strong> thanh-nguyen@skill-wanderer.com</p>
      <p><strong>Stack:</strong> Web Development, ReactJS, Node.js, Frontend, Backend</p>
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
  max-width: 680px;
  line-height: 1.6;
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
</style>
