import glsl from 'babel-plugin-glsl/macro';

export const vertexShader = glsl`
#pragma glslify: cnoise3 = require(glsl-noise/classic/3d)
#pragma glslify: pnoise3 = require(glsl-noise/periodic/3d)

uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;
varying float noise;
varying float displacement;

// Classic Perlin 3D Noise 
// by Stefan Gustavson
//
uniform float u_frequency;

void main() {
  vUv = uv;

//   vDisplacement = cnoise3(position + vec3(2.0 * u_time));
  noise = 3.0 * pnoise3(position + u_time, vec3(10.0));
  displacement = (u_frequency / 100.0) * (noise / 10.0);

  vec3 newPosition = position + normal * displacement;

  vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}


`;

export const fragmentShader = glsl`

uniform vec2 u_resolution;


void main() {
  vec2 st = gl_FragCoord.xy; 
  
  gl_FragColor = vec4(st.x,st.y,1.0 ,1.0);
}

`;