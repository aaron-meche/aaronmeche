<script>
    let { project } = $props();
</script>

<a class="card" href={project.url} target="_blank" rel="noreferrer">
    <div class="card-top">
        <span class="card-name">{project.name}</span>
        <i class="fa-solid fa-arrow-up-right-from-square card-icon"></i>
    </div>
    <p class="card-desc">{project.description}</p>
    <div class="card-tags">
        {#each project.tags as tag}
            <span class="tag">{tag}</span>
        {/each}
    </div>
</a>

<style>
    .card {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding: 1.5rem;
        background: var(--l1);
        border: 1px solid var(--l3);
        border-radius: 0.5rem;
        color: var(--contrast);
        text-decoration: none;
        transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
    }

    .card:hover {
        border-color: var(--true-accent);
        transform: translateY(-3px);
        box-shadow: 0 12px 32px hsl(255 89% 64% / 0.12);
    }

    .card-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
    }

    .card-name {
        font-size: 1rem;
        font-weight: 700;
        font-family: monospace;
        letter-spacing: -0.01em;
    }

    .card-icon {
        font-size: 0.7rem;
        opacity: 0.35;
        flex-shrink: 0;
        transition: opacity 0.15s;
    }

    .card:hover .card-icon {
        opacity: 0.7;
    }

    .card-desc {
        font-size: 0.875rem;
        line-height: 1.65;
        opacity: 0.7;
        margin: 0;
        flex-grow: 1;
    }

    .card-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem;
        margin-top: 0.25rem;
    }

    .tag {
        padding: 0.2rem 0.55rem;
        background: var(--l3);
        border-radius: 999px;
        font-size: 0.7rem;
        font-weight: 500;
        opacity: 0.8;
        letter-spacing: 0.02em;
    }
</style>
