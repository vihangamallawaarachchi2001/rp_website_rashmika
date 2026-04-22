'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { OBJLoader } from 'three-stdlib';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

const CoralMesh = () => {
  const obj = useLoader(OBJLoader, '/models/base.obj');

  const [colorMap, normalMap, roughnessMap, metalnessMap] = useTexture([
    '/models/texture_diffuse.png',
    '/models/texture_normal.png',
    '/models/texture_roughness.png',
    '/models/texture_metallic.png',
  ]);

  const material = new THREE.MeshStandardMaterial({
    map: colorMap,
    normalMap,
    roughnessMap,
    metalnessMap,
    roughness: 1,
    metalness: 1,
  });

  obj.traverse((child: THREE.Object3D) => {
    if (child instanceof THREE.Mesh) {
      child.material = material;
    }
  });

  return <primitive object={obj} scale={2} />;
};

const CoralModel: React.FC = () => {
  return (
    <Canvas style={{ height: '500px', width: '100%' }}>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <CoralMesh />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default CoralModel;
