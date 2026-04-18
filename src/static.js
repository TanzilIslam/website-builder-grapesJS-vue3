/* eslint-disable prettier/prettier */
export const landingComponents = `
  <header class="navbar">
    <div class="container nav-content">
      <h2 class="logo">DevCore</h2>
      <nav>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <h1>We Build Modern Web Solutions</h1>
      <p>High performance apps for startups and enterprises.</p>
      <a class="btn primary" href="#">Get Started</a>
    </div>
  </section>

  <section class="services container">
    <div class="card">
      <h3>Web Development</h3>
      <p>Scalable and fast web applications.</p>
    </div>
    <div class="card">
      <h3>Mobile Apps</h3>
      <p>Cross-platform mobile solutions.</p>
    </div>
    <div class="card">
      <h3>Cloud Solutions</h3>
      <p>Secure and reliable cloud infrastructure.</p>
    </div>
  </section>

  <section class="cta">
    <div class="container">
      <h2>Ready to grow your business?</h2>
      <a class="btn secondary" href="#">Contact Us</a>
    </div>
  </section>

  <footer class="footer">
    <p>© 2026 DevCore. All rights reserved.</p>
  </footer>
`;

export const landingStyles = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Inter, Arial, sans-serif;
    color: #1a1a1a;
  }

  .container {
    width: 90%;
    max-width: 1100px;
    margin: auto;
  }

  /* Navbar */
  .navbar {
    padding: 20px 0;
    background: #fff;
    border-bottom: 1px solid #eee;
  }

  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    margin: 0;
  }

  nav a {
    margin-left: 20px;
    text-decoration: none;
    color: #333;
    font-size: 14px;
  }

  /* Hero */
  .hero {
    padding: 100px 0;
    text-align: center;
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    color: #fff;
  }

  .hero h1 {
    font-size: 42px;
    margin-bottom: 10px;
  }

  .hero p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  /* Buttons */
  .btn {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 6px;
    text-decoration: none;
  }

  .primary {
    background: #fff;
    color: #4f46e5;
  }

  .secondary {
    background: #4f46e5;
    color: #fff;
  }

  /* Services */
  .services {
    display: flex;
    gap: 20px;
    padding: 80px 0;
  }

  .card {
    flex: 1;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  /* CTA */
  .cta {
    padding: 80px 0;
    text-align: center;
    background: #f9fafb;
  }

  /* Footer */
  .footer {
    text-align: center;
    padding: 20px;
    font-size: 14px;
    background: #111;
    color: #fff;
  }
`;
