/*
<section class="quiz-card quiz-card--opened">
  <div class="quiz-card__header">
    <h2>Question:</h2>
    <i class="quiz-card__bookmark fas fa-bookmark"></i>
  </div>
  <p class="quiz-card__question">What is the capital city of Spain?</p>
  <button class="quiz-card__button quiz-card__button--toggled">
    Hide Answer
  </button>
  <p class="quiz-card__answer">Madrid</p>
  <div class="quiz-card__tags">
    <div class="quiz-card__tag">#Geography</div>
    <div class="quiz-card__tag">#Spain</div>
    <div class="quiz-card__tag">#Europe</div>
  </div>
</section>
*/

export function createCardComponent(cardData) {
  // Parent Element of the Card component
  const section = document.createElement("section");
  section.classList.add("quiz-card");

  // Header, including title and bookmark
  const header = document.createElement("div");
  header.classList.add("quiz-card__header");

  const headerTitle = document.createElement("h2");
  headerTitle.textContent = `Question ${cardData.id + 1}`;

  const bookmarkIcon = document.createElement("i");
  bookmarkIcon.classList.add("quiz-card__bookmark", "fas", "fa-bookmark");

  header.append(headerTitle, bookmarkIcon);

  if (cardData.isBookmarked) {
    bookmarkIcon.classList.add("quiz-card__bookmark--toggled");
  }

  // Question text
  const questionText = document.createElement("p");
  questionText.classList.add("quiz-card__question");
  questionText.textContent = cardData.question;

  // Show/Hide Answer button
  const showHideAnswerButton = document.createElement("button");
  showHideAnswerButton.classList.add("quiz-card__button");
  showHideAnswerButton.textContent = "Show Answer";

  // Answer
  const answerText = document.createElement("p");
  answerText.classList.add("quiz-card__answer");
  answerText.textContent = cardData.answer;
  answerText.hidden = true;

  // Tags
  const tagsContainer = document.createElement("div");
  tagsContainer.classList.add("quiz-card__tags");

  cardData.tags.forEach((tagText) => {
    const tagElement = document.createElement("div");
    tagElement.classList.add("quiz-card__tag");
    tagElement.textContent = tagText;
    tagsContainer.append(tagElement);
  });

  section.append(
    header,
    questionText,
    showHideAnswerButton,
    answerText,
    tagsContainer
  );

  return section;
}
