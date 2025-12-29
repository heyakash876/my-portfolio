import React, { useRef, useState } from 'react';
import './Projects.css';

const projectsData = [
    {
        title: "MockView – AI Mock Interview Platform",
        description: "Built a full-stack AI-powered platform using React, Next.js, and Google Gemini API. Designed secure REST APIs with PostgreSQL (Neon DB) and automated user interview reports. Integrated Clerk Auth for authentication and implemented type-safe queries with Drizzle ORM.",
        tags: ["React", "Next.js", "Gemini API", "PostgreSQL", "Clrizzle ORM"],
        color: "#007bff",
        githubUrl: "https://github.com/heyakash876/Mockview" // Placeholder
    },
    {
        title: "SecureWatch – Smart Contract Threat Detection",
        description: "Contributed to a real-time AI-assisted blockchain threat detection platform. Enhanced frontend components in React and integrated APIs to fetch and display anomalies. Collaborated with backend teams to design scalable services.",
        tags: ["React", "Blockchain", "Anomaly Detection", "API Integration"],
        color: "#ff00ff",
        githubUrl: "https://github.com/securedapp-github/SecureWatch" // Placeholder
    },
    {
        title: "RAG-based Chatbot",
        description: "Developed a Retrieval-Augmented Generation (RAG) chatbot integrating Sentence Transformer for semantic search and Google Gemini API. Implemented vector-based document retrieval using FAISS for efficient context fetching.",
        tags: ["Python", "Flask", "RAG", "Gemini API", "FAISS"],
        color: "#00ffff",
        githubUrl: "https://github.com/heyakash876/RAG-based-chatbot" // Placeholder
    }
];

const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = React.useState({ x: 0, y: 0 });
    const [glarePosition, setGlarePosition] = React.useState({ x: 50, y: 50 });
    const [opacity, setOpacity] = React.useState(0);
    const [isHovering, setIsHovering] = React.useState(false);

    // Smooth entry state (only for active card)
    const [isEntering, setIsEntering] = React.useState(false);
    const enterTimeout = useRef(null);

    const handleMouseEnter = () => {
        setIsHovering(true);
        setIsEntering(true);
        clearTimeout(enterTimeout.current);
        enterTimeout.current = setTimeout(() => setIsEntering(false), 200);
    };

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation (limit to +/- 5 degrees for projects)
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        setRotation({ x: rotateX, y: rotateY });

        // Calculate glare position
        setGlarePosition({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100
        });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setIsEntering(false);
        setRotation({ x: 0, y: 0 });
        setOpacity(0);
    };

    return (
        <div
            ref={cardRef}
            className="project-card-container"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: 'preserve-3d',
            }}
        >
            <div
                className="project-card"
                style={{
                    '--card-color': project.color,
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.01, 1.01, 1.01)`,
                    transition: isHovering
                        ? (isEntering ? 'transform 0.2s ease-out' : 'none')
                        : 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
            >
                <div
                    className="card-glare"
                    style={{
                        '--glare-x': `${glarePosition.x}%`,
                        '--glare-y': `${glarePosition.y}%`,
                        opacity: opacity
                    }}
                />

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="project-tag">{tag}</span>
                    ))}
                </div>

                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                    onClick={(e) => e.stopPropagation()}
                >
                    <svg viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Code
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-title">Selected Works</h2>

            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
