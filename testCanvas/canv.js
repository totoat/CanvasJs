console.log("Javascriptを読み込めている!");

var canvas;
var ctext;

window.addEventListener('load',Init);

function Init(){
    console.log("a");
    canvas=document.getElementById('canvas');
    canvas.fillStyle="Red";
    ctext=canvas.getContext('2d');
    canvas.width=800;
    canvas.height=600;
}
