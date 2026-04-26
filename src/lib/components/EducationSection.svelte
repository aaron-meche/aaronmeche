<script>
    import { education, skills } from '$lib/portfolio.js';
</script>

<section id="education">
    <div class="section-inner">
        <h2 class="section-label">Education &amp; Skills</h2>
        <div class="edu-grid">

            <!-- Education card -->
            <div class="panel">
                <div class="edu-header">
                    <span class="edu-school">{education.school}</span>
                    <span class="edu-location">{education.location}</span>
                </div>
                <p class="edu-degree">{education.degree} &mdash; {education.concentration}</p>
                <p class="edu-grad">{education.graduation}</p>

                <div class="gpa-row">
                    <div class="gpa-item">
                        <span class="gpa-val">{education.gpa.cumulative}</span>
                        <span class="gpa-sub">Cumulative GPA</span>
                    </div>
                    <div class="gpa-item">
                        <span class="gpa-val">{education.gpa.major}</span>
                        <span class="gpa-sub">Major GPA</span>
                    </div>
                </div>

                <div class="honors">
                    {#each education.honors as honor}
                        <span class="honor-badge">{honor}</span>
                    {/each}
                </div>

                <div class="coursework">
                    <p class="group-label">Coursework</p>
                    <div class="tag-row">
                        {#each education.coursework as course}
                            <span class="tag">{course}</span>
                        {/each}
                    </div>
                </div>
            </div>

            <!-- Skills card -->
            <div class="panel">
                {#each skills as group}
                    <div class="skill-group">
                        <p class="group-label">{group.label}</p>
                        <div class="tag-row">
                            {#each group.items as item}
                                <span class="tag">{item}</span>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>

        </div>
    </div>
</section>

<style>
    #education {
        padding: 0 var(--inline-moat) 6rem;
    }

    .edu-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        align-items: start;
    }

    @media (max-width: 720px) {
        .edu-grid {
            grid-template-columns: 1fr;
        }
    }

    .panel {
        padding: 1.75rem;
        background: var(--l1);
        border: 1px solid var(--l3);
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    /* Education */
    .edu-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        flex-wrap: wrap;
        gap: 0.4rem;
    }

    .edu-school {
        font-size: 1.05rem;
        font-weight: 700;
    }

    .edu-location {
        font-size: 0.8rem;
        opacity: 0.45;
    }

    .edu-degree {
        font-size: 0.9rem;
        font-weight: 500;
        opacity: 0.85;
        margin: 0;
    }

    .edu-grad {
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--true-accent);
        margin: 0;
    }

    .gpa-row {
        display: flex;
        gap: 2rem;
    }

    .gpa-item {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }

    .gpa-val {
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--true-accent);
        line-height: 1;
    }

    .gpa-sub {
        font-size: 0.68rem;
        opacity: 0.4;
        text-transform: uppercase;
        letter-spacing: 0.08em;
    }

    .honors {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
    }

    .honor-badge {
        padding: 0.25rem 0.65rem;
        background: hsl(255 89% 64% / 0.1);
        color: var(--true-accent);
        border: 1px solid hsl(255 89% 64% / 0.22);
        border-radius: 999px;
        font-size: 0.72rem;
        font-weight: 500;
    }

    /* Shared between coursework and skills */
    .group-label {
        font-size: 0.68rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        opacity: 0.4;
        margin: 0 0 0.45rem 0;
    }

    .coursework {
        display: flex;
        flex-direction: column;
    }

    .skill-group {
        display: flex;
        flex-direction: column;
    }

    .tag-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem;
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
