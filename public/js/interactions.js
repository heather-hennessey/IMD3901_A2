console.log("Interactions.js Connected");

let mobile = AFRAME.utils.device.isMobile();
let scene = document.querySelector('a-scene');
let camRig = scene.querySelector('#camRig');
let cam = scene.querySelector('#cam');
let sCursor = cam.querySelector('#sceneCursor');
let canvas = scene.canvas;
let sWall = scene.querySelector('#brick');
let gc = scene.querySelector('#garbageCan');
// ************************** DEVICE DETECT ***************************** // 

if (mobile) {
    console.log("Mobile Device Detected");
    //cam.setAttribute("twoway-motion", "speed", 35);
    camRig.setAttribute("tilt-turn", "criticalAngle", 12);
    console.log("Mobile Controls Enabled");
} else{
    console.log("Non-VR Device Connected");
}

sWall.addEventListener('raycaster-intersected', function(event){
    //var newColor = event.detail.el.attributes.material.value.color;
    //event.detail.intersection.object.material.color = newColor;
    //event.detail.intersection.face.color.setRGB(255, 255, 0);
   // event.detail.intersection.object.material.needsUpdate = true;
   //console.log(event);
   newColor = event.detail.el.getAttribute("material").color;
   sWall.setAttribute('material', 'color', newColor);
   
});

gc.addEventListener('raycaster-intersected', function(event){
   scene.removeChild(event.detail.el); 

});