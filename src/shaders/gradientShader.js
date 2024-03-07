import glsl from 'babel-plugin-glsl/macro';

export const vertexShader = glsl`

  uniform float u_intensity;
  uniform float u_time;

  varying vec2 vUv;
  varying float vDisplacement;

  void main() {
    vUv = uv;
    vec3 newPosition = position + normal * vec3(u_intensity * sin(position.y * 10.0 + u_time));
    vDisplacement = sin(position.y * 10.0 + u_time);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }

`;

export const fragmentShader = glsl`
  
  uniform float u_intensity;
  uniform float u_time;
  uniform vec3 u_color1;
  uniform vec3 u_color2;
  uniform vec3 u_color3;

  varying vec2 vUv;
  varying float vDisplacement;

  void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    // Interpolate between the three input colors based on the UV coordinate
    vec3 finalColor = mix(mix(u_color1, u_color2, vUv.y), u_color3, vUv.y);
    gl_FragColor = vec4(finalColor * (1.0 - distort), 1.0);
  }

`;