let questions = [
  {
    id: 1,
    question: "What is HTML ?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper",
      "Hyper Text Markup Language",
      "Hyper Markup",
      "Text Markup Language",
    ],
  },
  {
    id: 2,
    question: "What is CSS ?",
    answer: "Cascading Style Sheet",
    options: [
      "Case Cading Sheet",
      "Cascading Style Sheet",
      "Style Sheet",
      "Text Markup Language",
    ],
  },
  {
    id: 3,
    question: "What is JS ?",
    answer: "JavaScript",
    options: ["Hyper", "JavaScript", "Hyper Markup", "Text Markup Language"],
  },
  {
    id: 4,
    question: "What is JS ?",
    answer: "JavaScript",
    options: ["Hyper", "JavaScript", "Hyper Markup", "Text Markup Language"],
  },
  {
    id: 5,
    question: "What is JS ?",
    answer: "JavaScript",
    options: ["Hyper", "JavaScript", "Hyper Markup", "Text Markup Language"],
  },
  {
    id: 6,
    question: "What is JS ?",
    answer: "JavaScript",
    options: ["Hyper", "JavaScript", "Hyper Markup", "Text Markup Language"],
  },
  {
    id: 7,
    question: "What is JS ?",
    answer: "JavaScript",
    options: ["Hyper", "JavaScript", "Hyper Markup", "Text Markup Language"],
  },
  {
    id: 8,
    question: "What is JS ?",
    answer: "JavaScript",
    options: ["Hyper", "JavaScript", "Hyper Markup", "Text Markup Language"],
  },
  {
    id: 9,
    question: "What is JS ?",
    answer: "JavaScript",
    options: ["Hyper", "JavaScript", "Hyper Markup", "Text Markup Language"],
  },
  {
    id: 10,
    question: "What is JS ?",
    answer: "JavaScript",
    options: ["Hyper", "JavaScript", "Hyper Markup", "Text Markup Language"],
  },
];
function showData() {
  var name = localStorage.getItem("name");
  document.getElementById("data").innerHTML = `
  <h1>${name}</h1>
  `;
}

let quiz_box = document.querySelector(".quiz");
let start_button = document.querySelector(".start_button");
let question_count = 0;
let question_num = 0;
let userScore = 0;
let question_heading = document.getElementById("question_text");
let options = document.getElementById("options");

function startQuiz() {
  quiz_box.style.display = "block";
  start_button.style.display = "none";
  showData();
  showQuestions(0);
}

function showQuestions(index) {
  let question_text = questions[index].question;
  question_heading.innerHTML = question_text;
  let options_text = `<div class="option">${questions[index].options[0]}</div>
    <div class="option">${questions[index].options[1]}</div>
    <div class="option">${questions[index].options[2]}</div>
    <div class="option">${questions[index].options[3]}</div>`;
  let option = document.getElementsByClassName("option");
  options.innerHTML = options_text;
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "checkOption(this)");
  }
}

function checkOption(answer) {
  const allOptions = options.children.length;

  if (answer.textContent == questions[question_count].answer) {
    answer.classList.add("green");
    document.getElementById("next").disabled = false;
    userScore += 5;
  } else {
    answer.classList.add("red");
    document.getElementById("next").disabled = false;
  }
  for (i = 0; i < allOptions; i++) {
    options.children[i].classList.add("disabled");
  }
}

function Next() {
  if (question_count < questions.length - 1) {
    question_count++;
    question_num++;
    showQuestions(question_count);
  } else {
    showResult();
  }
}

function showResult() {
  var name = localStorage.getItem("name");
  document.getElementById("result").innerHTML = `
  <h1 id="name-show">${name}'s Result</h1>
  <div class="grade-result-score">
  <div class="result-data">
  <h2>Total Mark  : <span class="green-color"> 50</span></h2>
  <h2>Obtained Mark  : ${userScore}</h2>
  </div>
    <h1>${userScore} / 50</h1>
    </div>
    <p id="congrats"></p>
    <h3 id="grade"></h3>
  `;

  quiz_box.style.display = "none";

  document.getElementById("result").style.display = "block";
  var expectedScore = 50;
  var totalPercentage = (userScore / expectedScore) * 100;
  if (totalPercentage <= 100 && totalPercentage >= 90) {
    document.getElementById("popper").style.display = "block";
    document.getElementById("popper-2").style.display = "block";
    document.getElementById("popper-2").src = "./images/popp.webp";
    document.getElementById("popper").src = "./images/popp.webp";
    document.getElementById("congrats").innerHTML = "Congratulation Passed";
    document.getElementById("grade").innerHTML =
      "<span class='green-color''>A+1</span>";
    document.getElementById();
  } else if (totalPercentage <= 90 && totalPercentage >= 89) {
    document.getElementById("popper").style.display = "block";
    document.getElementById("popper-2").style.display = "block";
    document.getElementById("popper-2").src = "./images/popp.webp";
    document.getElementById("popper").src = "./images/popp.webp";
    document.getElementById("congrats").innerHTML = "Congratulation Passed";
    document.getElementById("grade").innerHTML =
      "<span class='green-color''>A+</span>";
  } else if (totalPercentage <= 80 && totalPercentage >= 79) {
    document.getElementById("popper").style.display = "block";
    document.getElementById("popper-2").style.display = "block";
    document.getElementById("popper-2").src = "./images/popp.webp";
    document.getElementById("popper").src = "./images/popp.webp";
    document.getElementById("congrats").innerHTML = "Congratulation Passed";
    document.getElementById("grade").innerHTML =
      "<span class='green-color''>A</span>";
  } else if (totalPercentage <= 70 && totalPercentage >= 69) {
    document.getElementById("popper").style.display = "block";
    document.getElementById("popper-2").style.display = "block";
    document.getElementById("popper-2").src = "./images/popp.webp";
    document.getElementById("popper").src = "./images/popp.webp";
    document.getElementById("congrats").innerHTML = "Congratulation Passed";
    document.getElementById("grade").innerHTML =
      "<span class='green-color''>B</span>";
  } else if (totalPercentage <= 60 && totalPercentage >= 59) {
    document.getElementById("popper").style.display = "block";
    document.getElementById("popper-2").style.display = "block";
    document.getElementById("popper-2").src = "./images/popp.webp";
    document.getElementById("popper").src = "./images/popp.webp";
    document.getElementById("congrats").innerHTML = "Congratulation Passed";
    document.getElementById("grade").innerHTML =
      "<span class='yellow-color''>C</span>";
  } else if (totalPercentage <= 50 && totalPercentage >= 49) {
    document.getElementById("popper").style.display = "block";
    document.getElementById("popper-2").style.display = "block";
    document.getElementById("popper-2").src = "./images/popp.webp";
    document.getElementById("popper").src = "./images/popp.webp";
    document.getElementById("congrats").innerHTML = "Congratulation Passed";
    document.getElementById("grade").innerHTML =
      "<span class='yellow-color''>D</span>";
  } else if (totalPercentage <= 40 && totalPercentage >= 37) {
    document.getElementById("popper").style.display = "block";
    document.getElementById("popper-2").style.display = "block";
    document.getElementById("popper-2").src = "./images/popp.webp";
    document.getElementById("popper").src = "./images/popp.webp";
    document.getElementById("congrats").innerHTML = "Congratulation Passed";
    document.getElementById("grade").innerHTML =
      "<span class='yellow-color''>E</span>";
  } else {
    document.getElementById("grade").innerHTML =
      "<span class='red-color'>F<span />";
    document.getElementById("congrats").innerHTML = "Better Luck Next Time";
    document.getElementById("popper").style.display = "block";
    document.getElementById("popper-2").style.display = "block";
    document.getElementById("popper-2").style.transform = "rotate(0deg)";
    document.getElementById("popper-2").src = "./images/sad.gif";
    document.getElementById("popper").src = "./images/sad.gif";
  }
}

function signUp() {
  let users = [];
  let obj = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    roll: document.getElementById("roll").value,
    phone: document.getElementById("phone").value,
  };
  users = JSON.parse(localStorage.getItem("users"));
  users.push(obj);

  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "./index.html";
}document.getElementById('loginButton').addEventListener('click', function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Perform your login logic here
  // For this example, we'll check if the username is "admin" and the password is "password"

  if (username === 'admin' && password === 'password') {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('logoutButton').classList.remove('hidden');
  } else {
    alert('Invalid username or password.');
  }
});

document.getElementById('logoutButton').addEventListener('click', function() {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('logoutButton').classList.add('hidden');
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
});



