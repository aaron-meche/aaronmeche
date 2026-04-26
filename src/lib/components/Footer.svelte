<footer>
    <span>Aaron Meche &middot; 2026</span>
    <div class="footer-links">
        <a href="https://github.com/aaron-meche" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github"></i>
            GitHub
        </a>
        <a href="https://www.linkedin.com/in/aaron-meche-b3b329255/" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-linkedin"></i>
            LinkedIn
        </a>
    </div>
</footer>

<style>
    footer {
        padding: 1.75rem var(--inline-moat);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        border-top: 1px solid var(--l3);
        font-size: 0.8rem;
        opacity: 0.45;
    }

    .footer-links {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    footer a {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        transition: opacity 0.15s;
    }

    footer a:hover {
        opacity: 0.6;
    }

    @media (max-width: 500px) {
        footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.4rem;
        }
    }
</style>
