<section id="hero">
    <div class="hero-inner">
        <p class="hero-label">Software Engineer</p>
        <h1 class="hero-name">Aaron Meche</h1>
        <p class="hero-sub">Senior @ Louisiana State University &middot; c/o 2026</p>
        <p class="hero-location">
            <i class="fa-solid fa-location-dot"></i>
            Lake Charles, LA
        </p>
        <div class="hero-ctas">
            <a class="btn btn-primary" href="https://github.com/aaron-meche" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-github"></i>
                GitHub
            </a>
            <a class="btn btn-ghost" href="https://www.linkedin.com/in/aaron-meche-b3b329255/" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-linkedin"></i>
                LinkedIn
            </a>
            <a class="btn btn-ghost" href="mailto:aaron_meche@icloud.com">
                <i class="fa-solid fa-envelope"></i>
                Email
            </a>
            <a class="btn btn-ghost" href="#projects">
                Projects
                <i class="fa-solid fa-arrow-down"></i>
            </a>
        </div>
    </div>
</section>

<style>
    #hero {
        min-height: 62dvh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 4rem var(--inline-moat) 4.5rem;
    }

    .hero-inner {
        max-width: 700px;
    }

    .hero-label {
        font-size: 0.8rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.14em;
        color: var(--true-accent);
        margin: 0 0 1.25rem 0;
    }

    .hero-name {
        font-size: clamp(3.5rem, 9vw, 6.5rem);
        font-weight: 900;
        line-height: 1;
        letter-spacing: -0.03em;
        margin: 0 0 1.25rem 0;
        color: var(--contrast);
    }

    .hero-sub {
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        font-weight: 300;
        opacity: 0.65;
        margin: 0 0 0.4rem 0;
    }

    .hero-location {
        font-size: 0.875rem;
        opacity: 0.4;
        margin: 0 0 2.5rem 0;
        display: flex;
        align-items: center;
        gap: 0.35rem;
    }

    .hero-ctas {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
    }

    .btn {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        padding: 0.6rem 1.2rem;
        border-radius: 0.375rem;
        font-size: 0.875rem;
        font-weight: 500;
        font-family: BaileyScript;
        transition: opacity 0.15s, transform 0.15s, background 0.15s;
        white-space: nowrap;
    }

    .btn:hover {
        opacity: 0.85;
        transform: translateY(-1px);
    }

    .btn-primary {
        background: var(--true-accent);
        color: #fff;
    }

    .btn-ghost {
        background: var(--l2);
        color: var(--contrast);
        border: 1px solid var(--l4);
    }

    .btn-ghost:hover {
        background: var(--l3);
    }
</style>
