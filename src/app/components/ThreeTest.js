import React, { Component } from 'react';
import * as THREE from 'three';

export default class App extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 400);
    this.mount.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();
  }
  render() {
    return <div style={{ width: '50%' }} ref={ref => (this.mount = ref)} />;
  }
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
