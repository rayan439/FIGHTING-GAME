const spider = document.getElementById("spiderman");
const hulk = document.getElementById("hulk");

let spiderX = 50, spiderY = 0;
let hulkX = window.innerWidth - 130, hulkY = 0;

document.addEventListener("keydown", (e) => {
  switch (e.key.toLowerCase()) {
    // Spider-Man Controls
    case "w":
      spiderY += 10;
      break;
    case "s":
      spiderY -= 10;
      break;
    case "a":
      spiderX -= 10;
      break;
    case "d":
      spiderX += 10;
      break;
    case "f":
      spider.classList.add("punch");
      setTimeout(() => spider.classList.remove("punch"), 300);
      break;

    // Hulk Controls
    case "ArrowUp":
      hulkY += 10;
      break;
    case "ArrowDown":
      hulkY -= 10;
      break;
    case "ArrowLeft":
      hulkX -= 10;
      break;
    case "ArrowRight":
      hulkX += 10;
      break;
    case " ":
      hulk.classList.add("punch");
      setTimeout(() => hulk.classList.remove("punch"), 300);
      break;
  }

  // Boundary Check
  spiderX = Math.max(0, Math.min(spiderX, window.innerWidth - 100));
  hulkX = Math.max(0, Math.min(hulkX, window.innerWidth - 100));

  spider.style.left = spiderX + "px";
  spider.style.bottom = spiderY + "px";
  hulk.style.left = hulkX + "px";
  hulk.style.bottom = hulkY + "px";
});