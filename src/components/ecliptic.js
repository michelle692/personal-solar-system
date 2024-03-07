import * as THREE from 'three';

function Ecliptic({ xRadius = 1, zRadius = 1, tiltAngle = 35 }) {
  const points = [];
  const tilt = new THREE.Euler(tiltAngle, 0, -35);

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
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
    </line>
  );
}

export default Ecliptic;