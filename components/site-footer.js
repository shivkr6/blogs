class SiteFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }
        footer {
          padding: 4rem 2rem;
          text-align: center;
          background-color: oklch(30% 0.1 165);
          background-image: radial-gradient(at 15% 55%, oklch(80% 0.2 155 / 0.5) 0px, transparent 70%),
                            radial-gradient(at 80% 30%, oklch(65% 0.15 165 / 0.4) 0px, transparent 65%);
          color: #fff;
          border-top: 1px solid #eee;
        }

        .footer-content h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-family: 'JetBrains Mono', monospace;
        }

        .footer-content a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .footer-content a:hover {
          color: oklch(90% 0.1 150);
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
