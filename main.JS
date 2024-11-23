const questions = [{
    question: "Какой праздник отмечается 31 октября?",
    answers: [{
        text: "Рождество", 
        correct: false },
        {text: "Хэллоуин",
            correct: true }, 
         {text: "Пасха",
            correct: false }, 
            {text: "День Благодарения",
                correct: false
            }]

    
}, {
    question: 'Какое словосочетание на английском означает "сладость или гадость"?',
    answers: [{
        text: "Trick - or - treat", 
        correct: true },
        {text: "Happy Halloween",
            correct: false }, 
         {text: "Boo!",
            correct: false }, 
            {text: "Pumpkin",
                correct: false
    }]
}, {
    question: 'Какой цвет чаще всего ассоциируется с Хэллоуином, кроме черного?',
    answers: [{
        text: "Синий", 
        correct: false },
        {text: "Оранжевый",
            correct: true }, 
         {text: "Зеленый",
            correct: false }, 
            {text: "Красный",
                correct: false
    }]
}, {
    question: 'Какое животное часто изображается на Хэллоуинских украшениях и костюмах?',
    answers: [{
        text: "Собака", 
        correct: false },
        {text: "Кошка",
            correct: true }, 
         {text: "Кролик",
            correct: false }, 
            {text: "Лошадь",
                correct: false
    }]
}, {
    question: 'Какой персонаж из мультфильма "Кошмар перед Рождеством" является главным героем?',
    answers: [{
        text: "Санта Клаус", 
        correct: false },
        {text: "Джек Скеллингтон",
            correct: true }, 
         {text: "Рудольф",
            correct: false }, 
            {text: "Фрости",
                correct: false
    }]
}, {
    question: 'Какое название имеет традиционная игра на Хэллоуин, где дети пытаются поймать яблоки зубами?',
    answers: [{
        text: "Apple toss", 
        correct: false },
        {text: "Bobbing for apples",
            correct: true }, 
         {text: "Apple race",
            correct: false }, 
            {text: "Apple catch",
                correct: false
    }]
}, { question: 'Какой персонаж из фильма "Гарри Поттер" является призраком, который пугает детей?',
answers: [{
    text: "Добби", 
    correct: false },
    {text: "Призрак почти без головы (Ник Почти Безголовый)",
        correct: true }, 
     {text: "Гермиона",
        correct: false }, 
        {text: "Рон",
            correct: false
    }]
}, { question: 'Какое название имеет традиционное блюдо на Хэллоуин, приготовленное из яблок в карамели?',
    answers: [{
        text: "Карамельные яблоки", 
        correct: true },
        {text: "Шоколадные яблоки",
            correct: false }, 
         {text: "Яблочный пирог",
            correct: false }, 
            {text: "Яблочное пюре",
                correct: false
     }]
}, { question: 'Какой персонаж из мультфильма "Монстры на каникулах" является владельцем отеля?',
    answers: [{
        text: "Фрэнкиштейн", 
        correct: true },
        {text: "Граф Дракула",
            correct: false }, 
         {text: "Мумия",
            correct: false }, 
            {text: "Оборотень",
                correct: false
     }]
}, { question: 'Какой фрукт чаще всего используется для создания светильников Джека?',
    answers: [{
        text: "Тыква", 
        correct: true },
        {text: "Яблоко",
            correct: false }, 
         {text: "Банан",
            correct: false }, 
            {text: "Кабачок",
                correct: false
     }]
}]     

let startButton = document.getElementById("start")
let image = document.querySelector(".images")
let score = 0
let currentQuestion = -1
let isAnswer = false

function start()
{
    currentQuestion = 0
    image.remove()
    startButton.remove()
    printAswers()
}

function printAswers()
{
    let p = document.querySelector("p")
    let question = questions[currentQuestion]
    let div = document.getElementById("answers")
    p.innerText = question.question

    for(let answer of question.answers)
    {
        let button = document.createElement("button")
        button.className = "buttons"
        button.innerText = answer.text
        div.append(button)
        button.addEventListener("click", () => {
            if(!isAnswer) {checkAnswers(button)}})
    }
}

function checkAnswers(button)
{
    let question = questions[currentQuestion]

    for(let answer of question.answers)
    {
        if(button.innerText == answer.text)
        {
            if(answer.correct)
            {
                score++
            }            
        } 
    }

    isAnswer = true

    changeColor(question)
    nextUI()
}

function changeColor(question)
{
    let div = document.getElementById("answers")
    let buttons = div.childNodes

    for(let button of buttons)
    {
        for(let answer of question.answers)
        {
            if(button.innerText == answer.text)
            {
                if(answer.correct)
                {
                    button.style.backgroundColor = "lime"
                }
                else
                {
                    button.style.backgroundColor = "red"
                }
            }
        }
    }
}

function nextUI()
{
    let div = document.getElementById("quiz")
    let button = document.createElement("button")
    
    button.addEventListener("click", () => {button.remove()
        next()
    })
    button.className = "buttons"
    button.innerText = "Next"
    button.id = "nextButton"
    div.append(button)
}

function next()
{
    let div = document.getElementById("answers")
    let buttons = div.querySelectorAll("button")

    for(let i = 0; i < buttons.length; i++)
    {
        buttons[i].remove()
    }
    
    isAnswer = false
    currentQuestion++

    if(currentQuestion == 10)
    {
        printScore()
    }
    else
    {
        printAswers()
    }
}

function printScore()
{
    let p = document.getElementById("p")
    let header = document.getElementById("header")
    let div = document.getElementById("quiz")
    let button = document.createElement("button")

    button.addEventListener("click", () => {button.remove()
        restart()
    })
    header.innerText = "Ваш счёт: " + score + "/" + "10"
    p.innerText = "Спасибо за прохождение!"
    button.className = "buttons"
    button.innerText = "Restart"
    div.append(button)
    
}

function restart()
{
    let p = document.getElementById("p")
    let header = document.getElementById("header")
    let div = document.getElementById("quiz")

    score = 0
    p.innerText = "Happy Halloween"
    header.innerText = "Halloween quiz"
    div.append(image)
    div.append(startButton)
}