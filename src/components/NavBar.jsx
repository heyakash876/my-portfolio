import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            // Show navbar after scrolling down 1 viewport height (hero section)
            const show = window.scrollY > (window.innerHeight - 100);
            setIsVisible(show);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = ['about', 'skills', 'projects', 'contact'];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveTab(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveTab(id);
        }
    };

    return (
        <nav className={`navbar-container ${isVisible ? 'visible' : ''}`}>
            <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                AV
            </div>
            <div className="nav-links">
                {['about', 'skills', 'projects', 'contact'].map((item) => (
                    <a
                        key={item}
                        className={`nav-link ${activeTab === item ? 'active' : ''}`}
                        onClick={() => scrollToSection(item)}
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
