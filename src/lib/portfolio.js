export const projects = [
    {
        name: "rueter-ai",
        url: "https://github.com/aaron-meche/rueter-ai",
        description: "Lightweight unified TypeScript npm package wrapping Anthropic, OpenAI, Gemini, and Grok behind a single .prompt() API — with parallel prompting, automatic USD cost tracking, and 20+ pre-built model factories.",
        tags: ["TypeScript", "AI", "npm"]
    },
    {
        name: "rue-lang",
        url: "https://github.com/aaron-meche/rue-lang",
        description: "Domain-specific stylesheet language that compiles custom nested syntax to optimized CSS. Ships with a Svelte preprocessor and Vite plugin — integrated into production projects.",
        tags: ["TypeScript", "Compiler", "CSS", "Svelte"]
    },
    {
        name: "game-sage",
        url: "https://github.com/Nashs-Biggest-Simps/game-sage",
        description: "Steam-powered gaming dashboard with AI-driven recommendations, real-time friend activity, and analytics for 2,000+ game libraries. Full-stack SvelteKit + Firebase.",
        tags: ["SvelteKit", "Firebase", "Steam API", "AI"]
    },
    {
        name: "louisiana-live-traffic",
        url: "https://github.com/aaron-meche/louisiana-live-traffic-model",
        description: "Real-time traffic analysis for Louisiana highways — streams 511la.org camera feeds through a YOLOv8 computer vision model and renders vehicle counts on an interactive map overlay.",
        tags: ["Python", "YOLOv8", "Computer Vision"]
    },
    {
        name: "rue-lang-extension",
        url: "https://github.com/aaron-meche/rue-lang-extension",
        description: "VS Code extension for rue-lang. Adds syntax highlighting, compile-time variable recognition, and formatting support for .rue stylesheet files.",
        tags: ["VS Code Extension", "JavaScript"]
    }
];

export const education = {
    school: "Louisiana State University",
    location: "Baton Rouge, LA",
    degree: "B.S. Computer Science",
    concentration: "Software Engineering Concentration",
    graduation: "Expected Dec 2026",
    gpa: { cumulative: "3.75", major: "3.90" },
    honors: [
        "Dean's List — Fall 2023, Spring 2025",
        "President's Honor Roll — Fall 2025"
    ],
    coursework: [
        "Data Structures",
        "Object-Oriented Design",
        "Programming Languages",
        "Operating Systems",
        "Database Management Systems",
        "Software Testing"
    ]
};

export const skills = [
    { label: "Languages",    items: ["Java", "TypeScript", "JavaScript", "Python", "C", "HTML/CSS"] },
    { label: "Frameworks",   items: ["SvelteKit", "Node.js", "React"] },
    { label: "Databases",    items: ["Firebase", "MySQL", "MongoDB"] },
    { label: "Cloud & DevOps", items: ["AWS (S3, EC2)", "Docker", "CI/CD", "Git"] }
];
