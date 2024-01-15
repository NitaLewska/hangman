import questions from "./questions.js"

function createGameField() {
    let game = document.createElement("div")
    game.classList.add("hangman-game")

    let gallows = createGallows()
    let quiz = createQuiz()

    game.appendChild(gallows)
    game.appendChild(quiz)

    document.querySelector("body").appendChild(game)
}

function createGallows() {
    let gallows = document.createElement("div")
    gallows.classList.add("gallows")
    let canvas = document.createElement("canvas")
    canvas.width = 500
    canvas.height = 700
    gallows.appendChild(canvas)

    let rect1 = canvas.getContext("2d");
    rect1.fillStyle = "black";
    rect1.fillRect(50, 20, 15, 700);

    let rect2 = canvas.getContext("2d");
    rect2.fillStyle = "black";
    rect2.fillRect(0, 685, 500, 15);

    let rect3 = canvas.getContext("2d");
    rect3.fillStyle = "black";
    rect3.fillRect(50, 20, 320, 15);

    let rect4 = canvas.getContext("2d");
    rect4.fillStyle = "black";
    rect4.fillRect(355, 20, 15, 100);

    let rect5 = canvas.getContext("2d");
    rect5.rotate(45 * Math.PI / 180)
    rect5.fillStyle = "black";
    rect5.fillRect(100, -70, 15, 100);
    rect5.rotate(-45 * Math.PI / 180)

    let head = canvas.getContext("2d");
    drawArc(head, 362.5, 180, 60, 0, 360, false, "black", "transparent", 10)

    let body = canvas.getContext("2d");
    body.fillStyle = "black";
    body.fillRect(357.5, 240, 10, 180);

    let leftHand = canvas.getContext("2d");
    leftHand.fillStyle = "black";
    leftHand.translate(357, 270);
    leftHand.rotate(30 * Math.PI / 180);
    leftHand.fillRect(0, 0, 10, 150);
    leftHand.rotate(-30 * Math.PI / 180);
    leftHand.translate(-357, -270);

    let rightHand = canvas.getContext("2d");
    rightHand.fillStyle = "black";
    rightHand.translate(357, 270);
    rightHand.rotate(-30 * Math.PI / 180);
    rightHand.fillRect(0, 0, 10, 150);
    rightHand.rotate(30 * Math.PI / 180);
    rightHand.translate(-357, -270);

    let leftLeg = canvas.getContext("2d");
    leftLeg.fillStyle = "black";
    leftLeg.translate(357, 415);
    leftLeg.rotate(30 * Math.PI / 180);
    leftLeg.fillRect(0, 0, 10, 150);
    leftLeg.rotate(-30 * Math.PI / 180);
    leftLeg.translate(-357, -415);

    let rightLeg = canvas.getContext("2d");
    rightLeg.fillStyle = "black";
    rightLeg.translate(357, 415);
    rightLeg.rotate(-30 * Math.PI / 180);
    rightLeg.fillRect(0, 0, 10, 150);
    rightLeg.rotate(-30 * Math.PI / 180);
    rightLeg.translate(-357, -415);

    return gallows
}

function createQuiz() {
    let quiz = document.createElement("div")
    quiz.classList.add("quiz")

    let keyboard = document.createElement("div")
    keyboard.classList.add("keyboard")

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    alphabet.toUpperCase().split("").map((a) => createButton(a))

    function createButton(a) {
        let key = document.createElement("button")
        key.innerHTML = a
        keyboard.appendChild(key)
    }

    let secretWord = document.createElement("div")
    secretWord.classList.add("secret-word")

    let question = document.createElement("div")
    question.classList.add("question")

    quiz.appendChild(secretWord)
    quiz.appendChild(question)
    quiz.appendChild(keyboard)
    return quiz
}

createGameField()

let questionNumber = 0
let question = "What is the primary ingredient in guacamole?"
let answer = "avocado"

function chooseQuestion() {
    let newNumber = Math.floor(Math.random()*Object.keys(questions).length)
    console.log(newNumber)
    if (newNumber === questionNumber) {
        chooseQuestion()
    }
    questionNumber = newNumber
    question = questions[Object.keys(questions)[questionNumber]]
    answer = Object.keys(questions)[questionNumber]
    console.log(question, answer)
    return
}

function newGame() {
    chooseQuestion()
    document.querySelector(".question").innerHTML = question
    answer.split('').map((a) => createLetter(a))

    function createLetter(a) {
        let letter = document.createElement("div")
        letter.appendChild(document.createElement("p"))

        document.querySelector(".secret-word").appendChild(letter)
        letter.querySelector("p").innerHTML = " "
    }
}

function drawArc(context, xPos, yPos, radius, startAngle, endAngle, anticlockwise, lineColor, fillColor, lineWidth) {
    var startAngle = startAngle * (Math.PI / 180);
    var endAngle = endAngle * (Math.PI / 180);
    var radius = radius;
    context.strokeStyle = lineColor;
    context.fillStyle = fillColor;
    context.lineWidth = lineWidth;
    context.beginPath();
    context.arc(xPos, yPos, radius, startAngle, endAngle, anticlockwise);
    context.fill();
    context.stroke();
}

newGame()

let keys = document.querySelectorAll(".keyboard > button")
keys.forEach((a) => a.addEventListener('click', () => checkLetter(a.innerHTML)))
function checkLetter(letter) {
    if (answer.split('').indexOf(letter.toLowerCase()) != -1) {
        document.querySelectorAll(".secret-word p").forEach((a, i) => {
            if (answer.split('')[i] == letter.toLowerCase()) {
                a.innerHTML = letter
            }
        })
    }
}