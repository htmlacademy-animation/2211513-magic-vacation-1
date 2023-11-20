import * as THREE from 'three';
import {CAMERA_POSITION} from '../consts';


export const LIGHTS = [
  {
    type: `DirectionalLight`,
    color: `rgb(255, 255, 255)`,
    intensity: 0.84,
    position: {
      x: 0,
      y: CAMERA_POSITION * Math.tan(-15 * THREE.Math.DEG2RAD),
      z: CAMERA_POSITION,
    }
  },
  {
    type: `PointLight`,
    color: `rgb(246, 242, 255)`,
    intensity: 0.60,
    position: {
      x: -785,
      y: -350,
      z: -710,
    },
    decay: 2.0,
    distance: 2500,
  },
  {
    type: `PointLight`,
    color: `rgb(245, 254, 255)`,
    intensity: 0.95,
    position: {
      x: 730,
      y: 800,
      z: -985
    },
    decay: 2.0,
    distance: 2500,
  },
];
