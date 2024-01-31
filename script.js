
function nextPage() {
    window.location.href = "yes.html";
}

function telegram() {
    window.location.href = "t.me/baka_zen/chat";
}

// function moveButton() {
//     var x =
//         Math.random() *
//         (window.innerWidth -
//             document.getElementById("noButton").offsetWidth);
//     var y =
//         Math.random() *
//         (window.innerHeight -
//             document.getElementById("noButton").offsetHeight);
//     document.getElementById("noButton").style.left = `${x}px`;
//     document.getElementById("noButton").style.top = `${y}px`;
// }


const buttonWidth = 50;
const buttonHeight = 150;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("noButton")

    button.addEventListener("mouseover", () => {
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + "px";
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + "px";
    });
});
