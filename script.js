const btnSubmit = document.querySelector(".btn-1");
const btnReset = document.querySelector(".btn-2");
const header = document.querySelector(".header");
const img = document.querySelector(".present-holder__img");

btnSubmit.addEventListener("click", () => {
  let randomPic = Math.floor(Math.random() * 3) + 1;
  const present = (img.src = `img/present-${randomPic}.jpg`);

  if (present == "img/present-1.jpg") {
    header.textContent = "Aww, you got a pet kitty 🐈";
  } else if (present == "img/present-2.jpg") {
    header.textContent = "I guess you got a cow skull, nice?";
  } else {
    header.textContent = "You got a pumpkin, yay?";
  }
});

btnReset.addEventListener("click", () => {
  header.textContent = "Random Xmas Gift Here";
  img.src = "img/present-start.jpg";
});
