
import React from 'react';

const About = () => {
    return (
        <section style={{
            maxWidth: '800px',
            margin: '0 auto 100px auto',
            padding: '4rem',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            borderRadius: '30px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'white',
            fontFamily: "'Outfit', sans-serif"
        }}>
            <h2 style={{
                fontSize: '3rem',
                marginBottom: '2rem',
                fontFamily: "'Space Grotesk', sans-serif"
            }}>About Me</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.9, marginBottom: '1.5rem' }}>
                I am an AI Engineer passionate about pushing the boundaries of what's possible with code.
                With a deep understanding of machine learning and modern web technologies, I build experiences
                that are not just functional, but truly intelligent.
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.9 }}>
                My goal is to simplify complexity through elegant design and robust engineering.
                Whether it's a generative AI model or a high-performance web application, I bring
                precision and creativity to every project.
            </p>
        </section>
    );
};

export default About;
