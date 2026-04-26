<script>
    import ProjectCard from './ProjectCard.svelte';
    import { projects } from '$lib/portfolio.js';
</script>

<section id="projects">
    <div class="section-inner">
        <h2 class="section-label">Featured Projects</h2>
        <div class="projects-grid">
            {#each projects as project}
                <ProjectCard {project} />
            {/each}
        </div>
    </div>
</section>

<style>
    #projects {
        padding: 4rem var(--inline-moat) 5rem;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
        gap: 1rem;
    }
</style>
