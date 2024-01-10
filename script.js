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

let question1 = "What is the primary ingredient in guacamole?"
let answer = "avocado"

function newGame(question, answer) {
    document.querySelector(".question").innerHTML = question
    answer.split('').map((a) => createLetter(a))

    function createLetter(a) {
        let letter = document.createElement("div")
        letter.appendChild(document.createElement("p"))

        document.querySelector(".secret-word").appendChild(letter)
        letter.querySelector("p").innerHTML = a
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

newGame(question1, answer)