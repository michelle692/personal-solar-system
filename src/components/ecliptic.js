import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { usePromptContext } from '../ContextProvider';

function Ecliptic({ xRadius = 1, zRadius = 1, tiltAngle = 35 }) {

  const { fadeIn } = usePromptContext();

  const tilt = new THREE.Euler(tiltAngle, 0, -35);
  const materialRef = useRef();
  const points = [];

  for (let i = 0; i < 64; i++) {
    const angle = (i / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);

    const point = new THREE.Vector3(x, 0, z);
    point.applyEuler(tilt);
    points.push(point);
  }
  points.push(points[0]);

  // console.log("xradius:", xRadius, "here are my points: ", points);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  useEffect(() => {
    fadeIn(materialRef.current, 750, () => {})
  }, [fadeIn]);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial ref={materialRef} color="#BFBBDA" linewidth={10} transparent opacity={0} />
    </line>
  );
}

export default Ecliptic;