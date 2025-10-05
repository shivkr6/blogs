class SiteFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        footer {
          padding: 3rem 2rem;
          text-align: center;
          background-image: radial-gradient(at 20% 90%, oklch(70% 0.2 150 / 0.4), transparent 50%),
                            radial-gradient(at 80% 20%, oklch(75% 0.22 155 / 0.3), transparent 50%);
          border-top: 1px solid #eee;
        }

        .footer-content h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .footer-content a {
          color: #00ab44;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .footer-content a:hover {
          color: #007a30;
        }
      </style>
      <footer>
        <div class="footer-content">
          <h2>Zach Holman</h2>
          <p>I'm on <a href="#">Threads</a>, <a href="#">Bluesky</a>, and unfortunately <a href="#">Twitter</a>.</p>
          <p>You can also find me on <a href="#">GitHub</a>.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
