import { useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

export default function RobotModel() {
  const model = useLoader(GLTFLoader, '/models/poddy_obot.glb');
  const ref = useRef();

  useEffect(() => {
    model.scene.traverse((child) => {
      // Только для мешей с геометрией и материалом
      if (child.isMesh) {
        console.log('✔️ Найден меш:', child.name);
        // Точная настройка материалов по имени меша
        if (child.name === 'Object_30') {
          // Корпус
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#4B5563'),
            metalness: 1,
            roughness: 0.3,
          });
        } else if (child.name === 'Object_31') {
          // Глаза
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#7C838C'),
            metalness: 0.3,
            roughness: 0.2,
          });
        } else if (child.name === 'Object_32') {
          // Маска (стекло)
          child.material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color('4B5563'),
            transmission: 1,
            opasity: 1,
            thickness: 0.05,
            roughness: 0,
            metalness: 0,
            transparent: true,
            reflectivity: 0.1,
          });
        } else if (child.name === 'Object_33') {
          // Дополнительный элемент (например, кнопка/деталь)
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#2C2FDA'),
            emissive: new THREE.Color('#2C2FDA'),
            emissiveIntensity: 2,
            metalness: 0.4,
            roughness: 0.2,
          });
        } else {
          // fallback
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#4B5563'),
          });
        }
        child.material.needsUpdate = true;
      }
    });
  }, [model]);

  useFrame(({ mouse }) => {
    if (ref.current) {
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, mouse.x * 1.2, 0.09);
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -mouse.y * 0.5, 0.09);
    }
  });

  return (
    <primitive
      ref={ref}
      object={model.scene}
      scale={8}
      position={[2.5, -2, 0]}
      rotation={[0, 0, 0]}
      dispose={null}
    />
  );
}