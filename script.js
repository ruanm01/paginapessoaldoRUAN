
const player = document.getElementById("player");
const game = document.getElementById("game");

let x = 50;
let y = 50;

const speed = 10;

document.addEventListener("keydown", function(event) {

    const gameWidth = game.clientWidth;
    const gameHeight = game.clientHeight;

    if (
        event.key === "ArrowRight" ||
        event.key.toLowerCase() === "d"
    ) {
        x += speed;
    }

    if (
        event.key === "ArrowLeft" ||
        event.key.toLowerCase() === "a"
    ) {
        x -= speed;
    }

    if (
        event.key === "ArrowUp" ||
        event.key.toLowerCase() === "w"
    ) {
        y -= speed;
    }

    if (
        event.key === "ArrowDown" ||
        event.key.toLowerCase() === "s"
    ) {
        y += speed;
    }

    // Limites da borda
    x = Math.max(0, Math.min(x, gameWidth - player.offsetWidth));

    y = Math.max(0, Math.min(y, gameHeight - player.offsetHeight));

    // Atualiza posição
    player.style.left = x + "px";
    player.style.top = y + "px";

});
