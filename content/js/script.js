const pre = document.querySelector("pre");

document.addEventListener("mousemove", (e) => {
    rotateElement(e, pre);
  });

function rotateElement(event, element) {
// get mouse position
const x = event.clientX;
const y = event.clientY;
// console.log(x, y)

// find the middle
const middleX = window.innerWidth / 2;
const middleY = window.innerHeight / 2;
// console.log(middleX, middleY)

// get offset from middle as a percentage
// and tone it down a little
const offsetX = ((x - middleX) / middleX) * 45;
const offsetY = ((y - middleY) / middleY) * 45;
// console.log(offsetX, offsetY);

// set rotation
element.style.setProperty("--rotateX", -1 * offsetY + "deg");
element.style.setProperty("--rotateY", offsetX + "deg");
}
  

const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("nav ul li a");
const navlinks = document.querySelectorAll("nav ul li");
document.addEventListener("mousedown", () => {
    cursor.classList.add("click");
})
document.addEventListener("mouseup", () => {
    cursor.classList.remove("click");
})

document.addEventListener("mousemove", (e) => {
    let leftPosition = e.clientX + 4;
    let topPosition = e.clientY + 4;

    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
})

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
})

links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    })
})

// Animation

navlinks.forEach((li, i) => {
    li.style.animationDelay = 0 + i * 140 + "ms";
})

