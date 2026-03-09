import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setClearColor(0x000000, 0);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
        camera.position.set(0, 1.5, 7);
        camera.lookAt(0, 0, 0);

        /* ─ Flowing ribbon wave ─ */
        const seg = 70;
        const waveGeo = new THREE.PlaneGeometry(12, 6, seg, seg);
        const waveMat = new THREE.MeshBasicMaterial({ color: 0xB8DB80, wireframe: true, transparent: true, opacity: 0.18 });
        const wave = new THREE.Mesh(waveGeo, waveMat);
        wave.rotation.x = -Math.PI / 6;
        scene.add(wave);

        /* ─ Blush ribbon (second layer) ─ */
        const waveGeo2 = new THREE.PlaneGeometry(10, 5, 50, 50);
        const waveMat2 = new THREE.MeshBasicMaterial({ color: 0xF39EB6, wireframe: true, transparent: true, opacity: 0.1 });
        const wave2 = new THREE.Mesh(waveGeo2, waveMat2);
        wave2.rotation.x = -Math.PI / 4;
        wave2.position.y = -1;
        scene.add(wave2);

        /* ─ Floating green spheres ─ */
        const spheres = [];
        for (let i = 0; i < 8; i++) {
            const r = 0.08 + Math.random() * 0.18;
            const geo = new THREE.SphereGeometry(r, 16, 16);
            const mat = new THREE.MeshBasicMaterial({ color: 0xB8DB80, transparent: true, opacity: 0.4 + Math.random() * 0.3 });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 3);
            mesh.userData = { speed: 0.3 + Math.random() * 0.6, phase: Math.random() * Math.PI * 2 };
            scene.add(mesh);
            spheres.push(mesh);
        }

        /* ─ Rose torus ring ─ */
        const ringGeo = new THREE.TorusGeometry(3, 0.008, 8, 120);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0xF39EB6, transparent: true, opacity: 0.2 });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = 1.2; ring.rotation.z = 0.3;
        scene.add(ring);

        /* ─ Mouse parallax ─ */
        const mouse = { x: 0, y: 0 };
        const onMouse = e => {
            mouse.x = (e.clientX / window.innerWidth - 0.5);
            mouse.y = (e.clientY / window.innerHeight - 0.5);
        };
        window.addEventListener('mousemove', onMouse);

        const onResize = () => {
            if (!canvas) return;
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', onResize);

        let raf;
        const clock = new THREE.Clock();
        const posAttr = waveGeo.attributes.position;
        const posAttr2 = waveGeo2.attributes.position;

        const animate = () => {
            raf = requestAnimationFrame(animate);
            const t = clock.getElapsedTime();

            /* Wave green mesh */
            for (let i = 0; i <= seg; i++) {
                for (let j = 0; j <= seg; j++) {
                    const idx = i * (seg + 1) + j;
                    const x = posAttr.getX(idx);
                    const y = posAttr.getY(idx);
                    posAttr.setZ(idx, Math.sin(x * 0.7 + t * 0.8) * 0.3 + Math.cos(y * 0.6 + t * 0.5) * 0.25);
                }
            }
            posAttr.needsUpdate = true;

            /* Wave blush mesh */
            const a2 = waveGeo2.attributes.position;
            for (let i = 0; i <= 50; i++) {
                for (let j = 0; j <= 50; j++) {
                    const idx = i * 51 + j;
                    const x = a2.getX(idx);
                    const y = a2.getY(idx);
                    a2.setZ(idx, Math.sin(x * 0.5 + t * 0.6 + 1) * 0.35 + Math.cos(y * 0.4 + t * 0.4) * 0.2);
                }
            }
            a2.needsUpdate = true;

            /* Floating spheres */
            spheres.forEach(s => {
                s.position.y += Math.sin(t * s.userData.speed + s.userData.phase) * 0.004;
                s.rotation.y = t * 0.3;
            });

            /* Ring */
            ring.rotation.y = t * 0.07;
            ring.rotation.x = 1.2 + Math.sin(t * 0.3) * 0.1;

            /* Mouse influence */
            camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.04;
            camera.position.y += (-mouse.y * 0.4 + 1.5 - camera.position.y) * 0.04;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('mousemove', onMouse);
            window.removeEventListener('resize', onResize);
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
        />
    );
};

export default HeroCanvas;
