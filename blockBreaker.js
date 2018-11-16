let canvas = document.getElementById("gamescreen");
let ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, 800, 600);

ctx.fillStyle = "#555";
ctx.fillRect(20, 20, 100, 100);

ctx.fillStyle = "#400";
ctx.fillRect (200, 200, 50, 50);