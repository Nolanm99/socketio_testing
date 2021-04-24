const socket = io();
const newPlayerBtn = document.getElementById('newPlayerBtn');
const siteMenu = document.getElementById('site-menu');
const flashLightBatteryElement = document.getElementById('flashLightStatusCard');
const flashLightBatteryProgressBarElement = document.getElementById('flashLightBattery');
const PLAYER_CREATION_LIMIT = 1;
const SPHERE_RADIUS = 10;
const PLAYER_VELOCITY = 2;

const playerLightRayCaster = new THREE.Raycaster();