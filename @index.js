const toggleBookmarkIcons = document.querySelectorAll(".quiz-card__bookmark ");
toggleBookmarkIcons.forEach((bmIcon) => {
  bmIcon.addEventListener("click", (e) => {
    console.log("check");
    bmIcon.classList.toggle("quiz-card__bookmark--toggled");
  });
});

const buttons = document.querySelectorAll(".quiz-card__button");
const answers = document.querySelectorAll(".quiz-card__answer");

for (let i = 0; i < answers.length; i++) {
  const answer = answers[i];
  const button = buttons[i];
  console.log(button);
  button.addEventListener("click", () => {
    if (button.textContent === "Show Answer") {
      button.textContent = "Hide Answer";
      answer.classList.remove("hidden");
    } else {
      button.textContent = "Show Answer";
      answer.classList.add("hidden");
    }
  });
}
