export default class InputHandler {
    constructor() {
        document.addEventListener("keydown", event => {
            alert(event.keyCode);
            switch(event.keycode) {
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