
/// Panorama.js
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { debounce } from 'lodash';
import { PropsPanoramaType } from '../types/panoramaType';

const Panorama = ({ source }: PropsPanoramaType) => {
    const panoramaRef = useRef<HTMLDivElement | null>(null);
    const [textureLoaded, setTextureLoaded] = useState(false);

    //     const panoramaTexture = new THREE.TextureLoader().load(source);
    //     const panoramaRadius = (window.innerWidth * 0.9) / 2;
    //     const geometry = new THREE.SphereGeometry(panoramaRadius, 60, 40);
    //     const material = new THREE.MeshBasicMaterial({ map: panoramaTexture, side: THREE.DoubleSide });
    //     const sphere = new THREE.Mesh(geometry, material);

    //     const scene = new THREE.Scene();
    //     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //     const renderer = new THREE.WebGLRenderer();
    //     const initializePanorama = () => {
    //         renderer.setSize(window.innerWidth, window.innerHeight);

    //         scene.add(sphere);

    //         camera.position.set(0, 0, 0.1);

    //         panoramaRef.current.appendChild(renderer.domElement);

    //         // Add OrbitControls
    //         const controls = new OrbitControls(camera, renderer.domElement);
    //         controls.enableZoom = false;
    //     };

    //     const addCenterIcon = () => {
    //         const text = document.createElement('h2');
    //         text.innerText = "Kontrol dengan Mouse anda"; // Replace with the path to your text image
    //         text.style.position = 'absolute';
    //         text.style.height = '50px';
    //         text.style.top = '50%';
    //         text.style.left = '50%';
    //         text.style.zIndex = '20';

    //         panoramaRef.current.appendChild(text);
    //     };

    //     const handleResize = () => {
    //         const newWidth = window.innerWidth;
    //         const newHeight = window.innerHeight;

    //         camera.aspect = newWidth / newHeight;
    //         camera.updateProjectionMatrix();

    //         renderer.setSize(newWidth, newHeight);
    //     };

    //     // Initialize panorama only once on mount
    //     if (!panoramaInitialized && textureLoaded) {
    //         initializePanorama();
    //         addCenterIcon();
    //         setPanoramaInitialized(true);
    //     }
    //     setTextureLoaded(true);

    //     // Resize event listener
    //     window.addEventListener('resize', handleResize);
    // }, [textureLoaded, panoramaInitialized]);
    useEffect(() => {
        const panoramaTexture = new THREE.TextureLoader().load(source);
        const geometry = new THREE.SphereGeometry((window.innerWidth * 0.5) / 2, 60, 40);
        const material = new THREE.MeshBasicMaterial({ map: panoramaTexture, side: THREE.DoubleSide });
        const sphere = new THREE.Mesh(geometry, material);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        if (!textureLoaded) {
            // renderer.setSize(window.innerWidth * 0.95, window.innerHeight * 0.8);
            // renderer.domElement.className = 'w-44';

            scene.add(sphere);

            camera.position.set(0, 0, 0.1);

            panoramaRef.current?.appendChild(renderer.domElement);

            // Add OrbitControls
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.enableZoom = false; // Optionally disable zooming
            const addCenterIcon = () => {
                const text = document.createElement('h2');
                text.innerText = "Kontrol dengan Mouse anda"; // Replace with the path to your text image
                text.style.position = 'absolute';
                text.style.top = '50%';
                text.style.left = '50%';
                text.style.zIndex = '20';
                text.style.transform = 'translate(-50%, -50%)';

                panoramaRef.current?.appendChild(text);
            };
            const handleResize = debounce(() => {
                const newWidth = window.innerWidth * 0.97;
                const newHeight = window.innerHeight * 0.7;

                camera.aspect = newWidth / newHeight;
                camera.updateProjectionMatrix();

                renderer.setSize(newWidth, newHeight);
            });
            handleResize()
            window.addEventListener('resize', handleResize);
            const animate = () => {
                requestAnimationFrame(animate);
                controls.update(); // Update controls in each animation frame
                renderer.render(scene, camera);
                addCenterIcon()
                setTextureLoaded(true);
                // Enable controls after initialization
                if (controls) {
                    controls.enabled = true;
                }
            };

            animate();
            return () => {
                window.removeEventListener('resize', handleResize);

                // You might need to dispose of other resources depending on your application

                // Dispose of WebGLRenderer
                if (renderer) {
                    // renderer.domElement.removeEventListener('dblclick', onDoubleClick);
                    renderer.dispose();
                }
            };

        }
    }, [source, textureLoaded]);
    // useEffect(() => {
    //     let scene: undefined, camera: undefined, renderer: undefined, controls: undefined;

    //     const initializePanorama = () => {
    //         const panoramaTexture = new THREE.TextureLoader().load(source);
    //         const geometry = new THREE.SphereGeometry(500, 60, 30);
    //         const material = new THREE.MeshBasicMaterial({ map: panoramaTexture, side: THREE.DoubleSide });
    //         const sphere = new THREE.Mesh(geometry, material);

    //         scene = new THREE.Scene();
    //         camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //         renderer = new THREE.WebGLRenderer();
    //         renderer.setSize(window.innerWidth, window.innerHeight);

    //         scene.add(sphere);

    //         camera.position.set(0, 0, 0.1);

    //         panoramaRef.current.appendChild(renderer.domElement);

    //         // Add OrbitControls
    //         controls = new OrbitControls(camera, renderer.domElement);
    //         controls.enableZoom = false; // Optionally disable zooming
    //     };

    //     if (!textureLoaded) {
    //         initializePanorama();
    //         setTextureLoaded(true);
    //     }

    //     const handleResize = () => {
    //         const newWidth = window.innerWidth;
    //         const newHeight = window.innerHeight;

    //         camera.aspect = newWidth / newHeight;
    //         camera.updateProjectionMatrix();

    //         renderer.setSize(newWidth, newHeight);
    //     };

    //     window.addEventListener('resize', handleResize);

    //     const animate = () => {
    //         requestAnimationFrame(animate);
    //         controls.update(); // Update controls in each animation frame
    //         renderer.render(scene, camera);
    //     };

    //     animate();

    //     // Cleanup
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //         // Dispose of resources if needed
    //     };
    // }, [textureLoaded]);
    return (
        <div className='w-44'>
            <div ref={panoramaRef} />
        </div>
    );
};

export default Panorama;
