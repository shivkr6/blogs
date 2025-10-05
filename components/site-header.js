class SiteHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #fff;
          border-bottom: 1px solid #eee;
          font-family: 'JetBrains Mono', monospace;
        }

        .logo a {
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--logo-zach-color, #00ab44);
          transition: color 0.35s ease;
        }
        .logo a:hover,
        .logo a:focus-visible {
          color: var(--logo-holman-color, #007a30);
        }

        .main-nav ul {
          list-style: none;
          display: flex;
          gap: 1.5rem;
          margin: 0;
          padding: 0;
        }

        .main-nav a {
          text-decoration: none;
          color: #222;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .main-nav a:hover {
          color: #00ab44;
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .main-nav {
            display: none;
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            background-color: #fff;
            border-bottom: 1px solid #eee;
            padding: 1rem 2rem;
          }

          .main-nav.is-open {
            display: block;
          }

          .main-nav ul {
            flex-direction: column;
            gap: 1rem;
          }

          .hamburger {
            display: block;
          }
        }
      </style>
      <header>
        <div class="logo">
          <a href="/">Zach Holman!</a>
        </div>
        <nav class="main-nav">
          <ul>
            <li><a href="index.html">About</a></li>
            <li><a href="writing.html">Writing</a></li>
            <li><a href="experience.html">Experience</a></li>
            <li><a href="#">Resume</a></li>
          </ul>
        </nav>
        <button class="hamburger">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </header>
    `;

    const hamburger = shadow.querySelector('.hamburger');
    const mainNav = shadow.querySelector('.main-nav');

    hamburger.addEventListener('click', () => {
      mainNav.classList.toggle('is-open');
    });
  }
}

customElements.define('site-header', SiteHeader);
