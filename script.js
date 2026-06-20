// Flashcards

let currentCategory = "greetings";
let currentIndex = 0;

function displayWord(){

    document.getElementById("word").innerHTML =
        vocabulary[currentCategory][currentIndex].word;

    document.getElementById("translation").innerHTML =
        vocabulary[currentCategory][currentIndex].translation;
}

displayWord();

function nextWord(){

    currentIndex++;

    if(currentIndex >= vocabulary[currentCategory].length){

        currentIndex = 0;
    }

    displayWord();
}


document.getElementById("category").addEventListener(
"change",
function(){

    currentCategory = this.value;

    currentIndex = 0;

    displayWord();

});


// Pronunciation

function speakWord(){

    let text =
    vocabulary[currentCategory][currentIndex].word;

    let speech =
    new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    window.speechSynthesis.speak(speech);
}



// Quiz

let score = localStorage.getItem("score") || 0;

document.getElementById("score").innerHTML = score;

let currentQuestion = 0;

loadQuestion();


function loadQuestion(){

    document.getElementById("question").innerHTML =
    quizQuestions[currentQuestion].question;

    document.getElementById("option1").innerHTML =
    quizQuestions[currentQuestion].options[0];

    document.getElementById("option2").innerHTML =
    quizQuestions[currentQuestion].options[1];

    document.getElementById("option3").innerHTML =
    quizQuestions[currentQuestion].options[2];
}


document.getElementById("option1").onclick = function(){
    checkAnswer(this.innerHTML);
};

document.getElementById("option2").onclick = function(){
    checkAnswer(this.innerHTML);
};

document.getElementById("option3").onclick = function(){
    checkAnswer(this.innerHTML);
};


function checkAnswer(answer){

    if(answer === quizQuestions[currentQuestion].answer){

        score++;

        localStorage.setItem("score",score);

        document.getElementById("result").innerHTML =
        "✅ Correct!";
    }

    else{

        document.getElementById("result").innerHTML =
        "❌ Wrong!";
    }

    document.getElementById("score").innerHTML = score;

    currentQuestion++;

    if(currentQuestion >= quizQuestions.length){

        currentQuestion = 0;
    }

    loadQuestion();
}