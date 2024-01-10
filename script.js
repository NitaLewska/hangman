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
