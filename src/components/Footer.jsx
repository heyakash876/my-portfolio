
import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '0.9rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            marginTop: 'auto'
        }}>
            <p>&copy; {new Date().getFullYear()} Akash Verma. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
