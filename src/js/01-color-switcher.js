
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");
let timerId = null;

startBtn.addEventListener("click", () => {
  startBtn.setAttribute("disabled","")
  stopBtn.removeAttribute("disabled","")
  timerId = setInterval(() => {
        const color = getRangomColor();
        body.style.backgroundColor = color;
        console.log("start");
  }, 1000);
});


stopBtn.addEventListener("click", () => {
  startBtn.removeAttribute("disabled","")
  stopBtn.setAttribute("disabled","")
  clearInterval(timerId);
  console.log("stop");
});


function getRangomColor() {
    return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
  }
function getRandomHex() {
    return Math.round(Math.random() * 256)
        .toString(16)
        .padStart(2, "0");
}