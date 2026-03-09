import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        const handleHover = (e) => {
            const isClickable = e.target.closest('a, button, .clickable');
            setIsHovered(!!isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHover);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHover);
        };
    }, []);

    return (
        <div className={`custom-cursor ${isHovered ? 'hover' : ''}`}>
            <span className="cursor-star" style={{ left: `${position.x}px`, top: `${position.y}px` }}>✦</span>
            <div className="cursor-ring" style={{ left: `${position.x}px`, top: `${position.y}px` }} />
        </div>
    );
};

export default CustomCursor;
