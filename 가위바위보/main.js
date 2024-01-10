const sissor = document.querySelector(".button__sissor");
const rock = document.querySelector(".button__rock");
const paper = document.querySelector(".button__paper");
const buttons = [sissor, rock, paper];
const userChoiceHtml = document.querySelector(".dashbord__user--result");
const comChoiceHtml = document.querySelector(".dashbord__computer--result");
const resultHtml = document.querySelector(".result");

const SISSOR = "가위✌️";
const ROCK = "바위✊";
const PAPER = "보✋";

const userWinScenario = [
  { user: SISSOR, com: PAPER },
  { user: ROCK, com: SISSOR },
  { user: PAPER, com: ROCK },
];

const makeUserChoice = (event) => {
  let result;
  switch (event.target.innerText) {
    case "가위":
      result = SISSOR;
      break;
    case "바위":
      result = ROCK;
      break;
    case "보":
      result = PAPER;
      break;
    default:
      break;
  }
  return result;
};

const makeComChoice = () => {
  let result;
  const randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      result = SISSOR;
      break;
    case 1:
      result = ROCK;
      break;
    case 2:
      result = PAPER;
      break;
    default:
      break;
  }
  return result;
};

const choiceHandler = (event) => {
  const userChoice = makeUserChoice(event);
  const comChoice = makeComChoice();

  userChoiceHtml.innerHTML = userChoice;
  comChoiceHtml.innerHTML = comChoice;

  return [userChoice, comChoice];
};

const clickHandler = (event) => {
  const [userChoice, comChoice] = choiceHandler(event);

  if (userChoice === comChoice) {
    resultHtml.innerHTML = "무승부";
    return;
  }

  const compareStr = JSON.stringify({ user: userChoice, com: comChoice });
  if (
    userWinScenario.some((scenario) => JSON.stringify(scenario) === compareStr)
  ) {
    resultHtml.innerHTML = "승리";
  } else {
    resultHtml.innerHTML = "패배";
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", clickHandler);
});
