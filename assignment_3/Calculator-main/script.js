let input = document.querySelector("#input");
let buttons = Array.from(document.getElementsByClassName('btn'));
let data = [];

buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let btnValue = event.target.innerText;

        if (btnValue === "AC") {
            input.innerText = '';
            data = [];
        } else if (btnValue === 'Del') {
            input.innerText = input.innerText.slice(0, -1);
        } else if (btnValue === '.') {
            if (!input.innerText.includes('.')) {
                input.innerText += btnValue;
            }
        } else if (btnValue === "=") {
            data.push(input.innerText);
            input.innerText = eval(data.join(' '));
            data = [];
        } else if (isNaN(parseInt(btnValue))) {
            data.push(input.innerText, btnValue);
            input.innerText += btnValue;
        } else {
            input.innerText += btnValue;
        }
    });
});
