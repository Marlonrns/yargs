const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "=") {
            try {
                const result = eval(currentInput);
                input.value = result;
                currentInput = result;
            } catch (error) {
                input.value = "Error";
                currentInput = "";
            }
        } else if (button.textContent === "C") {
            input.value = "";
            currentInput = "";
        } else {
            currentInput += button.textContent;
            input.value = currentInput;
        }
    });
});