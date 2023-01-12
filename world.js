import * as THREE from 'three';
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight,window.innerHeight);
document.body.append(renderer.domElement);
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(
    75,
    window.innerHeight/window.innerWidth,
    0.1,
    100
    );
renderer.render(scene,camera);