// can't get import to work...
// import Paddle from "./src/paddle"; 
// import InputHandler from "./src/input";


let canvas = document.getElementById("gamescreen");
let ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, 800, 600);

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


// paddle.js code that wouldn't import
class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = 150;
        this.height = 15;
        
        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        };
    }
    
    draw(ctx) {
        console.log("Paddle class");
        ctx.fillStyle = "#048";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if(!deltaTime) return;
        // this.position.x += 5 / deltaTime;
    }
}

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);
// end of paddle.js code

// input.js code
class InputHandler {
    constructor() {
        document.addEventListener("keydown", event => {
            // alert(event.keyCode);
            switch(event.keyCode) {
                case 37:
                    alert("Move left");
                    break;
                case 39:
                    alert("Move right");
                    break;
            }
        });
    }
}
// end of input.js code

new InputHandler();
let lastTime = 0;
console.log(lastTime);
function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, 800, 600);
    paddle.update(deltaTime);
    paddle.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();