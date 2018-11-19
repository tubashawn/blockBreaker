// can't get import to work...
// import Paddle from "./src/paddle"; 


let canvas = document.getElementById("gamescreen");
let ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, 800, 600);

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = 150;
        this.height = 30;
        
        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        };
    }
    
    draw(ctx) {
        console.log("Paddle class");
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}



let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);