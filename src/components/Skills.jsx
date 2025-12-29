import React from 'react';
import './Skills.css';

const skillCategories = [
    {
        category: "Languages",
        items: ["C++", "Java", "Python", "Solidity", "SQL", "JavaScript", "Node.js", "React.js"]
    },
    {
        category: "Backend Development",
        items: ["REST APIs", "Microservices", "API Authentication", "Automation", "Error Handling", "Logging"]
    },
    {
        category: "Databases",
        items: ["PostgreSQL", "MySQL", "DBMS concepts"]
    },
    {
        category: "Developer Tools",
        items: ["Git", "GitHub", "VS Code"]
    },
    {
        category: "Frameworks",
        items: ["Tensorflow", "React.js", "Node.js", "Next.js", "Django", "Flask"]
    },
    {
        category: "CS Fundamentals",
        items: ["Data Structures & Algorithms", "OOP", "SDLC"]
    },
    {
        category: "Soft Skills",
        items: ["Problem Solving", "Logical Reasoning", "Analytical Thinking", "Teamwork"]
    }
];

const SkillCard = ({ category }) => {
    const cardRef = React.useRef(null);
    const [rotation, setRotation] = React.useState({ x: 0, y: 0 });
    const [glarePosition, setGlarePosition] = React.useState({ x: 50, y: 50 });
    const [opacity, setOpacity] = React.useState(0);
    const [isHovering, setIsHovering] = React.useState(false);
    const [isEntering, setIsEntering] = React.useState(false);
    const enterTimeout = React.useRef(null);

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

        // Calculate rotation (limit to +/- 10 degrees)
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

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
            className="skill-card-container"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="skill-card"
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`,
                    transition: isHovering
                        ? (isEntering ? 'transform 0.2s ease-out' : 'none')
                        : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
            >
                {/* Glare Effect */}
                <div
                    className="card-glare"
                    style={{
                        '--glare-x': `${glarePosition.x}%`,
                        '--glare-y': `${glarePosition.y}%`,
                        opacity: opacity
                    }}
                />

                <h3 className="skill-category-title">{category.category}</h3>

                <div className="skill-items-container">
                    {category.items.map((item, i) => (
                        <span key={i} className="skill-pill">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-title">Technical Arsenal</h2>

            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <SkillCard key={index} category={category} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
