console.log("Interactions.js Connected");

let mobile = AFRAME.utils.device.isMobile();
let scene = document.querySelector('a-scene');
let camRig = scene.querySelector('#camRig');
let cam = scene.querySelector('#cam');
let sCursor = cam.querySelector('#sceneCursor');
let canvas = scene.canvas;
// ************************** DEVICE DETECT ***************************** // 

if (mobile) {
    console.log("Mobile Device Detected");
    //cam.setAttribute("twoway-motion", "speed", 35);
    camRig.setAttribute("tilt-turn", "criticalAngle", 12);
    console.log("Mobile Controls Enabled");
} else{
    console.log("Non-VR Device Connected");
}
