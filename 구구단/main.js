const computer = document.querySelector(".computer");
const main = document.querySelector(".computer__main");
const content = document.createElement("p");
main.insertBefore(content, main.firstChild);

let multiplicationTable = generateMultiplicationTable();
let contentIndex = 0;
const TYPING_INTERVAL = 100;

function typing() {
  if (contentIndex >= multiplicationTable.length) return;
  let txt = multiplicationTable[contentIndex++];
  content.innerHTML += txt === "\n" ? "<br/>" : txt;
}

function autoScroll() {
  computer.scrollTop = computer.scrollHeight;
}

function generateMultiplicationTable() {
  let table = "";
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      table += `${i} * ${j} = ${i * j} \n`;
    }
  }
  return table;
}

setInterval(() => {
  typing();
  autoScroll();
}, TYPING_INTERVAL);
