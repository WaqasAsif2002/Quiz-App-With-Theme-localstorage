var Questions = [
    {
        Question: "What does console.log() do?",
        option1: "Displays output in the console",
        option2: "Starts a loop",
        option3: "Declares a variable",
        option4: "Stops code execution",
        answer: "Displays output in the console"
    },
    {
        Question: "Which keyword is used to declare a variable?",
        option1: "var",
        option2: "let",
        option3: "const",
        option4: "All of the above",
        answer: "All of the above"
    },
    {
        Question: "Which symbol is used for single-line comments?",
        option1: "//",
        option2: "//**//",
        option3: "/*/",
        option4: "#",
        answer: "//"
    },
    {
        Question: "What will `typeof 42` return?",
        option1: "string",
        option2: "number",
        option3: "object",
        option4: "boolean",
        answer: "number"
    },
    {
        Question: "Which method adds an item to an array?",
        option1: "push()",
        option2: "pop()",
        option3: "join()",
        option4: "split()",
        answer: "push()"
    },
    {
        Question: "How do you write 'Hello World' in an alert box?",
        option1: "alertBox('Hello World');",
        option2: "msg('Hello World');",
        option3: "alert('Hello World');",
        option4: "msgBox('Hello World');",
        answer: "alert('Hello World');"
    },
    {
        Question: "Which of the following is a data type in JavaScript?",
        option1: "string",
        option2: "number",
        option3: "boolean",
        option4: "All of the above",
        answer: "All of the above"
    },
    {
        Question: "What does `isNaN()` function check?",
        option1: "If a value is null",
        option2: "If a value is NaN",
        option3: "If a value is undefined",
        option4: "If a value is a string",
        answer: "If a value is NaN"
    },
    {
        Question: "What does `===` check?",
        option1: "Equality without type conversion",
        option2: "Equality with type conversion",
        option3: "Inequality",
        option4: "None of the above",
        answer: "Equality without type conversion"
    },
    {
        Question: "What is the output of `2 + '2'`?",
        option1: "22",
        option2: "4",
        option3: "undefined",
        option4: "NaN",
        answer: "22"
    }
];

function gotonext() {
    document.getElementById("first").style.display = "none";
    document.getElementById("quizwindow").style.display = "block";
    rendering();
}

var nextbtn = document.getElementById('next');
var question = document.getElementById("question");
var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
var label3 = document.getElementById("label3");
var label4 = document.getElementById("label4");

var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var option = document.getElementsByName("option");

var questionCount = 0;
var score = 0;

function rendering() {
    question.innerHTML = Questions[questionCount].Question;

    label1.innerHTML = Questions[questionCount].option1;
    label2.innerHTML = Questions[questionCount].option2;
    label3.innerHTML = Questions[questionCount].option3;
    label4.innerHTML = Questions[questionCount].option4;

    option1.value = Questions[questionCount].option1;
    option2.value = Questions[questionCount].option2;
    option3.value = Questions[questionCount].option3;
    option4.value = Questions[questionCount].option4;

    // Uncheck all radio buttons for new question
    for (var i = 0; i < option.length; i++) {
        option[i].checked = false;
    }
}

function next() {
    var radiocheked = false;
    for (var i = 0; i < option.length; i++) {
        if (option[i].checked) {
            radiocheked = true;

            if (option[i].value === Questions[questionCount].answer)
                score++;
        }
    }



    if (!radiocheked) {
        Swal.fire({
            icon: "error",
            title: "Oops...Please Check One Option Must",
            text: "Something went wrong!",
            footer: '<a href="https://www.w3schools.com">Why do I have this issue?</a>'
        });
    } else {
        if (questionCount < Questions.length - 1) {
            questionCount++;
            rendering();
        } else {
            localStorage.setItem('quizScore', score);
            Swal.fire({
                icon: "success",
                title: "Quiz Completed!",
                text: `Your score is ${score} out of ${Questions.length}`
            });
            document.getElementById('quizwindow').style.display = "none"
            
            
        }
    }
}

function showScore() {
    var savedScore = localStorage.getItem('quizScore');
    
    if (savedScore !== null) {
        Swal.fire(`Your saved score is: ${savedScore}`);

 
    } else {
        Swal.fire(`No Score Found`);

    }
}


window.onload = rendering();
