"use client"

import React, { useEffect, useRef, useState } from 'react';

const AsciiWaterSimulation = () => {
    const preRef = useRef<HTMLPreElement | null>(null);
    const [dimensions, setDimensions] = useState({ cols: 0, rows: 0 });
    const buffer1 = useRef<number[]>([]);
    const buffer2 = useRef<number[]>([]);
    const animationFrameId = useRef<number | null>(null);
    const isRunning = useRef(true);

    useEffect(() => {
        const preElement = preRef.current;
        if (!preElement) return;

        const resizeObserver = new ResizeObserver(entries => {
            if (!entries || entries.length === 0) return;
            const { width, height } = entries[0].contentRect;
            const charWidth = 8 * 0.6; 
            const charHeight = 8 * 1.25;
            
            const newCols = Math.max(10, Math.floor(width / charWidth));
            const newRows = Math.max(10, Math.floor(height / charHeight));

            setDimensions({ cols: newCols, rows: newRows });
        });

        resizeObserver.observe(preElement);
        return () => resizeObserver.disconnect();
    }, []);

    const { cols, rows } = dimensions;

    useEffect(() => {
        if (cols === 0 || rows === 0) return;
        
        isRunning.current = true;
        buffer1.current = Array(rows * cols).fill(0);
        buffer2.current = Array(rows * cols).fill(0);

        const disturb = (x: number, y: number, amount: number) => {
            if (x > 1 && x < cols - 1 && y > 1 && y < rows - 1) {
                const index = x + y * cols;
                if(buffer1.current[index] !== undefined) {
                    buffer1.current[index] += amount;
                }
            }
        };

        // Create initial ripples on startup
        setTimeout(() => {
            if (!isRunning.current) return;
            disturb(Math.floor(cols / 2), Math.floor(rows / 2), 1500);
            setTimeout(() => {
                 if (!isRunning.current) return;
                disturb(Math.floor(cols / 4), Math.floor(rows / 3), 1000);
            }, 300);
             setTimeout(() => {
                 if (!isRunning.current) return;
                disturb(Math.floor(cols * 3 / 4), Math.floor(rows * 2 / 3), 1000);
            }, 500);
        }, 500);


        const update = () => {
            for (let i = cols; i < buffer1.current.length - cols; i++) {
                if ((i + 1) % cols !== 0 && i % cols !== 0) {
                    const val = ((buffer1.current[i - 1] + buffer1.current[i + 1] + buffer1.current[i - cols] + buffer1.current[i + cols]) / 2) - buffer2.current[i];
                    buffer2.current[i] = val * 0.99;
                }
            }
            const temp = buffer1.current;
            buffer1.current = buffer2.current;
            buffer2.current = temp;
        };

        const renderAscii = () => {
            const chars = ' .:;!/r(l1Z4H9W8$@'.split('');
            let output = '';
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    const index = x + y * cols;
                    const val = Math.floor(Math.abs(buffer1.current[index] || 0));
                    const charIndex = Math.min(val, chars.length - 1);
                    output += chars[charIndex];
                }
                output += '\n';
            }
            if (preRef.current) {
                preRef.current.textContent = output;
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (preRef.current) {
                const rect = preRef.current.getBoundingClientRect();
                const x = Math.floor(((e.clientX - rect.left) / rect.width) * cols);
                const y = Math.floor(((e.clientY - rect.top) / rect.height) * rows);
                disturb(x, y, 250);
            }
        };

        const handleDeviceMotion = (e: DeviceMotionEvent) => {
            if (e.accelerationIncludingGravity && e.accelerationIncludingGravity.x && e.accelerationIncludingGravity.y) {
                const { x, y } = e.accelerationIncludingGravity;
                const midX = Math.floor(cols / 2);
                const midY = Math.floor(rows / 2);
                disturb(midX + Math.floor(x), midY + Math.floor(y), 150);
            }
        };
        
        // --- FPS Capping Logic ---
        let then = Date.now();
        const fpsInterval = 1000 / 60; // 60 FPS

        const loop = () => {
            if (!isRunning.current) return;

            animationFrameId.current = requestAnimationFrame(loop);

            const now = Date.now();
            const elapsed = now - then;

            if (elapsed > fpsInterval) {
                then = now - (elapsed % fpsInterval);
                update();
                renderAscii();
            }
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('devicemotion', handleDeviceMotion);
        
        animationFrameId.current = requestAnimationFrame(loop);

        return () => {
            isRunning.current = false;
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('devicemotion', handleDeviceMotion);
        };
    }, [cols, rows]);

    return (
        <pre ref={preRef} className="w-full h-full text-center text-[var(--accent-primary)] opacity-20 text-[8px] leading-tight pointer-events-auto"></pre>
    );
};


export default AsciiWaterSimulation
