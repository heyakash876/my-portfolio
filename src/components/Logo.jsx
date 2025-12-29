
import React, { useState, useEffect } from 'react';
import MetallicPaint, { parseLogoImage } from './MetallicPaint';
import logo from '../assets/logo.svg';

const Logo = () => {
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        async function loadDefaultImage() {
            try {
                const response = await fetch(logo);
                const blob = await response.blob();
                const file = new File([blob], "default.png", { type: blob.type });

                const parsedData = await parseLogoImage(file);
                setImageData(parsedData?.imageData ?? null);
            } catch (err) {
                console.error("Error loading default image:", err);
            }
        }

        loadDefaultImage();
    }, []);

    return (
        <div style={{ width: '150px', height: '150px', marginBottom: '20px' }}>
            <MetallicPaint
                imageData={imageData ?? new ImageData(1, 1)}
                params={{ edge: 2, patternBlur: 0.005, patternScale: 2, refraction: 0.015, speed: 0.3, liquid: 0.07 }}
            />
        </div>
    );
};

export default Logo;
