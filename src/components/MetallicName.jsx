
import React, { useState, useEffect } from 'react';
import MetallicPaint, { parseLogoImage } from './MetallicPaint';

const MetallicName = () => {
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        async function generateTextImage() {
            try {
                // Create an SVG with the text
                const svgString = `
          <svg width="1000" height="300" viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg">
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap');
              .text { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 140px; }
            </style>
            <rect width="100%" height="100%" fill="transparent" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black" class="text">AKASH VERMA</text>
          </svg>
        `;

                const blob = new Blob([svgString], { type: 'image/svg+xml' });
                const file = new File([blob], "name.svg", { type: 'image/svg+xml' });

                const parsedData = await parseLogoImage(file);
                setImageData(parsedData?.imageData ?? null);
            } catch (err) {
                console.error("Error generating text image:", err);
            }
        }

        generateTextImage();
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <MetallicPaint
                imageData={imageData ?? new ImageData(1, 1)}
                params={{
                    edge: 5,
                    patternBlur: 0.005,
                    patternScale: 3,
                    refraction: 0.015,
                    speed: 0.4,
                    liquid: 0.02
                }}
            />
        </div>
    );
};

export default MetallicName;
