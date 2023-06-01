let form = document.getElementById("eval");
form.addEventListener('submit', getData);

function getData(e) {
    e.preventDefault();
    let answers = {};
    for (let i = 1; i <= 11; i++) {
        answers[`q${i}`]=e.target[`q${i}`].value;
    }
    console.log(answers);
}