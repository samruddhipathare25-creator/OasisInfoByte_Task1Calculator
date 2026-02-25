let display = document.getElementById("display");
let history = document.getElementById("history");
let lastAnswer = 0;

function append(value) {
    if (display.textContent === "0") display.textContent = "";
    if (value === "ans") {
        display.textContent += lastAnswer;
    } else if (value === "±") {
        display.textContent = String(-eval(display.textContent));
    } else {
        display.textContent += value;
    }
}

function clearAll() {
    display.textContent = "0";
    history.textContent = "";
}

function del() {
    display.textContent = display.textContent.slice(0, -1) || "0";
}

function sqrt() {
    display.textContent = Math.sqrt(eval(display.textContent));
}

function calculate() {
    try {
        history.textContent = display.textContent;
        lastAnswer = eval(display.textContent);
        display.textContent = lastAnswer;
    } catch {
        display.textContent = "Error";
    }
}
