import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import './Dock.css';

const Dock = () => {
    const socialLinks = [
        {
            icon: <FiGithub />,
            url: 'https://github.com/heyakash876',
            label: 'GitHub',
            external: true
        },
        {
            icon: <FiLinkedin />,
            url: 'https://linkedin.com/in/heyakash876',
            label: 'LinkedIn',
            external: true
        },
        {
            icon: <FiFileText />,
            url: 'https://drive.google.com/file/d/1yqIQcd7iOFbVTqhGCREM_vdCeQvNJDNC/view?usp=sharing',
            label: 'Resume',
            external: true
        },
        {
            icon: <FiMail />,
            url: '#contact', // Scrolls to contact section
            label: 'Contact',
            external: false,
            onClick: (e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }
        }
    ];

    return (
        <div className="dock-container">
            <div className="dock-glass">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target={link.external ? "_blank" : "_self"}
                        rel={link.external ? "noopener noreferrer" : ""}
                        className="dock-item"
                        aria-label={link.label}
                        onClick={link.onClick}
                    >
                        <div className="dock-icon">
                            {link.icon}
                        </div>
                        <span className="dock-tooltip">{link.label}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Dock;
