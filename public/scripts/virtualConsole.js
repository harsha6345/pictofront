const evaluate_button = document.getElementById("evaluate-button");
const console_list = document.getElementById("console-list");

const originalConsoleLog = console.log;
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;
const originalConsoleInfo = console.info;

const logMessages = [];

console.log = function () {
  originalConsoleLog.apply(console, arguments);
  logMessages.push({ type: "log", arguments: Array.from(arguments) });
};

console.error = function () {
  originalConsoleError.apply(console, arguments);
  logMessages.push({ type: "error", arguments: Array.from(arguments) });
};

console.warn = function () {
  originalConsoleWarn.apply(console, arguments);
  logMessages.push({ type: "warn", arguments: Array.from(arguments) });
};

console.info = function () {
  originalConsoleInfo.apply(console, arguments);
  logMessages.push({ type: "info", arguments: Array.from(arguments) });
};

evaluate_button.addEventListener("click", async () => {
  console_list.innerHTML = "";

  logMessages.forEach((message) => {
    const listElement = document.createElement("li");
    let consoleArguments = message.arguments
      .map((arg) => {
        if (typeof arg === "object") {
          return JSON.stringify(arg);
        }
        return arg;
      })
      .join(" ");

    const listContent = document.createTextNode(`> ${consoleArguments}`);

    listElement.appendChild(listContent);
    listElement.classList.add("font-code");
    listElement.classList.add(`console-${message.type}`);
    console_list.appendChild(listElement);
  });

  logMessages.length = 0;
});
