// Store all the button
const start = document.getElementById("start");
const accept = document.getElementById("accept");
const next = document.getElementById("next");
const endButton = document.getElementById("endGame");
const switchButton = document.querySelector("#switch");
const menuButton = document.querySelectorAll("#menu-button");

// Store all the pages
const form = document.getElementById("playerForm");
const playGameContainer = document.querySelector(".playGame");
const radioContainer = document.querySelector(".radio-container");
const regcontainer = document.querySelector(".wrapper-form");
const login = document.querySelector(".login");
const showChart = document.querySelector(".chart-container");
const menu = document.querySelector(".menu");
const showallplayerTextArea = document.querySelector(".showallplayers");
const showpercentageTextArea = document.querySelector(".showpercentage");

const showallTextArea = document.querySelector(".results");
const playerScore = document.querySelector("#score");

let answer;
let currentLoginPlayer;
let Players = [];
let PlayerData = [];
let myChart;

// TASK 2(8 MARK)
// function to register player information and add it to PlayerData array
function Register(event) {
  event.preventDefault();
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var dob = document.getElementById("dob");
  var age = document.getElementById("age");
  var gender = document.getElementById("gender");
  var email = document.getElementById("email");

  Players.push({
    firstName: firstName.value,
    lastName: lastName.value,
    dob: dob.value,
    age: age.value,
    gender: gender.value,
    email: email.value,
    question: 0,
    correct: 0,
    percentage: 0,
    difficulty: "Easy",
  });
  console.log(PlayerData);
  // Clear all field after sign up form
  const fakeDataStatus = SwitchStatus();
  let checkSwitchStatus = () => {
    if (fakeDataStatus) {
      return [...Players, ...data];
    }
    if (fakeDataStatus === false) {
      return Players;
    }
    return Players;
  };

  PlayerData = checkSwitchStatus();

  console.log(PlayerData);

  firstName.value = "";
  lastName.value = "";
  dob.value = "";
  age.value = "";
  gender.value = "";
  email.value = "";
  // hide certain elements and show radio button selection
  regcontainer.style.display = "none";
  menu.style.display = "block";
}

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

// Task 5: (4 marks)
function playGame() {
  let displayWord = document.querySelector(".word");
  let hit = document.querySelector(".hit");
  const playerName = document.querySelector("#name");
  const playerScore = document.querySelector("#score");
  const playerDifficulty = document.querySelector("#difficulty");
  var radioValue = document.querySelector(
    'input[name="difficulty"]:checked'
  ).value;

  playerName.innerHTML =
    " " + currentLoginPlayer.firstName + " " + currentLoginPlayer.lastName;
  playerScore.innerHTML = " " + currentLoginPlayer.correct;

  // function to get the selected difficulty level and return an array of words
  const difficulty = () => {
    if (radioValue === "easy") {
      return easyWord;
    } else if (radioValue === "medium") {
      return mediumWord;
    } else if (radioValue === "hard") {
      return hardWord;
    }
    return easyWord;
  };

  // call the difficulty function and get a random word from the array
  let selectedDifficulty = difficulty();
  playerDifficulty.innerHTML = " " + radioValue;

  PlayerData.find((player) => {
    if (currentLoginPlayer.firstName === player.firstName) {
      player.difficulty = radioValue;
    }
  });

  // Get a random index to select a word from the selectedDifficulty array
  let random = getRandomInt(selectedDifficulty.length);
  hit.innerHTML = selectedDifficulty[random].clue;
  // Set the answer to the selected word
  answer = selectedDifficulty[random].word;

  // Shuffle the selected word
  var shuffleWord = selectedDifficulty[random].word.split("");
  var n = shuffleWord.length;
  for (var i = 0; i < n - 1; ++i) {
    var j = getRandomInt(n);
    var temp = shuffleWord[i];
    shuffleWord[i] = shuffleWord[j];
    shuffleWord[j] = temp;
  }
  let word = shuffleWord.join("");

  // Display the shuffled word
  displayWord.innerHTML = word;

  // Navigate to the game interface by hiding the radio container and showing the play game container
  radioContainer.style.display = "none";
  playGameContainer.style.display = "flex";
  console.log(answer);
}

function nextQuestion() {
  // Skip question and add to the plyaer total amount thet were ask.
  PlayerData.find((player) => {
    let status = document.getElementById("status-answer");
    status.innerText = "";
    if (currentLoginPlayer.firstName === player.firstName) {
      player.question += 1;
    }
    playGame();
  });
}

// Task 5: (4 marks)
start.addEventListener("click", playGame);

// Task 8: (2 marks)
next.addEventListener("click", nextQuestion);
next.addEventListener("click", findPercentageScore);

// Task 9 (6 marks) and Task 11: (4 marks)
endButton.addEventListener("click", endGame);

// TASK 3 (4 MARKS)
form.addEventListener("submit", Register);

// Task 7: (2 marks)
accept.addEventListener("click", checkAnswer);

switchButton.addEventListener("click", SwitchStatus);

function endGame() {
  const userAnswer = document.getElementById("userAnswer");
  const status = document.getElementById("status-answer");
  // Call the findPercentageScore function to calculate the percentage scores for each player

  // Task 9 (6 marks) and Task 11: (4 marks)
  findPercentageScore();
  showpercentage();

  playGameContainer.style.display = "none";
  showpercentageTextArea.style.display = "flex";

  // Clear the form from Task 1 and enable input, all buttons must be
  // disabled except the Register button. Play and Results area are disabled.
  const elements = form.elements;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].type !== "submit") {
      elements[i].value = "";
    }
  }

  status.innerText = "";
  userAnswer.value = "";
}

// Task 6: (6 marks)
// Function to check the user's answer and update the PlayerData array
function checkAnswer() {
  let userAnswer = document.getElementById("userAnswer");
  let status = document.getElementById("status-answer");

  // Task 14 (2 marks)
  if (userAnswer.value.toLowerCase().trim() === answer) {
    status.innerHTML = "Correct";
    status.style.color = "green";
    playGame();
    PlayerData.find((player) => {
      if (currentLoginPlayer.firstName === player.firstName) {
        player.question += 1;
        player.correct += 1;
        console.log(PlayerData);

        playerScore.innerHTML = player.correct;
      }
    });
    userAnswer.value = "";
    return;
  }

  // If the user's answer is incorrect, update the PlayerData array and display "Wrong"
  if (userAnswer.value.toLowerCase().trim() !== answer) {
    status.innerHTML = " Wrong";
    status.style.color = "red";
    userAnswer.classList.add("wrongAnswer");
  }

  // Clear the user's input
  userAnswer.value = "";
}

// Define a function to remove the "status-answer" element's content
function removeStatus() {
  let status = document.getElementById("status-answer");
  status.innerHTML = "";
  userAnswer.classList.remove("wrongAnswer");
}

// Task 10: (8 marks)
// Define a function to calculate the percentage score for each player
function findPercentageScore() {
  let percentage = PlayerData?.map((element, index) => {
    const { question, correct, percentage } = element;
    let result = (correct / question) * 100;
    // Add the percentage score to the "PlayerData" array
    return (PlayerData[index].percentage = Math.floor(result));
  });

  return percentage;
}

// Task 13: (8 marks)
function showall() {
  regcontainer.style.display = "none";
  showallTextArea.style.display = "flex";
  findPercentageScore();

  const parent = document.querySelector(".playerResult-conatiner");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  // If there are no players registered, display a message
  if (PlayerData.length === 0) {
    parent.innerHTML =
      "<br> <br> <br> <h1 style='background-color:#33475b; '> No records as yet</h1>";
  }

  // Loop over each player in the "PlayerData" array and display their results
  PlayerData.forEach((player) => {
    const { firstName, lastName, age, question, correct, percentage } = player;

    const child = document.createElement("div");
    parent.appendChild(child);
    child.setAttribute("class", "playResults");

    child.innerHTML = ` <p> First Name: ${firstName}</p><br>
                      <p>Last Name: ${lastName}</p><br>
                       <p>Age: ${age}</p> <br>
                       <p>Number of Question: ${question} </p><br>
                       <p>Question Correct: ${correct}</p><br>
                       <p>Percentage:${percentage}%</p>                              
                      `;
  });
}

// Task 12. (2 marks)
// Displays all players results in the game
function showallplayers() {
  const parent = document.querySelector(".showPlayers-conatiner");

  showallplayerTextArea.style.display = "flex";
  regcontainer.style.display = "none";

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  // If no players are registered, display a message indicating so
  if (PlayerData.length === 0) {
    parent.innerHTML =
      "<br> <br> <br> <h1 style='background-color:#33475b; '> No player register as yet</h1>";
  }

  // Loop through all players in the game and display their names
  PlayerData.forEach((player) => {
    const { firstName, lastName } = player;
    const child = document.createElement("div");
    parent.appendChild(child);
    child.setAttribute("class", "playerName");
    child.innerHTML = ` <p> ${firstName} ${lastName}</p><br> `;
  });
}

// Task 9 (6 marks)
function showpercentage() {
  const parent = document.querySelector(".showpercentage-container");
  const myDiv = document.getElementById("img");

  PlayerData.forEach((player) => {
    if (currentLoginPlayer.firstName === player.firstName) {
      if (player.percentage < 50) {
        // set the src attribute of the img element
        myDiv.src = "./images/icons8-worried-face-48.png";
      }
      if (player.percentage >= 50 && player.percentage < 90) {
        myDiv.src = "./images/icons8-grinning-face-with-big-eyes-48.png";
      }
      if (player.percentage >= 90) {
        myDiv.src = "./images/icons8-exploding-head-48.png";
      }
    }

    regcontainer.style.display = "none";
    showpercentageTextArea.style.display = "flex";
  });

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  PlayerData.find((player) => {
    const { firstName, lastName, age, question, correct, percentage } = player;

    if (currentLoginPlayer === player) {
      const child = document.createElement("div");
      parent.appendChild(child);
      child.setAttribute("class", "playResults");

      child.innerHTML = ` <p> First Name: ${firstName}</p><br>
                        <p>Last Name: ${lastName}</p><br>
                         <p>Age: ${age}</p> <br>
                         <p>Number of Question: ${question} </p><br>
                         <p>Question Correct: ${correct}</p><br>
                         <p>Percentage:${percentage}%</p>                              
                        `;
      return;
    }
    return;
  });
}

// Task 15. (14 marks)
function showfreq() {
  let persons = PlayerData;

  const colors = [
    "rgb(255,0,0)", // Red
    "rgba(255, 159, 64, 0.8)", // Orange
    "rgba(255, 206, 86, 0.8)", // Yellow
    "rgba(153, 102, 255, 0.8)", // Purple
    "rgba(54, 162, 235, 0.8)", // Blue
    "rgba(75, 192, 192, 0.8)", // Green
    "	rgb(0,128,0)",
  ];
  var percentageGraph = {
    labels: ["<50", "50-59", "60-69", "70-79", "80-89", "90-99", "100"],
    datasets: [
      {
        label: "Percentage Failed",
        data: [
          persons?.filter((person) => person?.percentage < 50).length,
          persons?.filter(
            (person) => person?.percentage >= 50 && person?.percentage < 60
          ).length,
          persons?.filter(
            (person) => person?.percentage >= 60 && person?.percentage < 70
          ).length,
          persons?.filter(
            (person) => person?.percentage >= 70 && person?.percentage < 80
          ).length,
          persons?.filter(
            (person) => person?.percentage >= 80 && person?.percentage < 90
          ).length,
          persons?.filter(
            (person) => person?.percentage >= 90 && person?.percentage < 100
          ).length,
          persons?.filter((person) => person?.percentage === 100).length,
        ],
        backgroundColor: colors,
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const percentageOptions = {
    title: {
      display: true,
      text: "Pecentage Frequency Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 1,
            precision: 0,
          },
        },
      ],
    },
    legend: {
      position: "top",
      labels: {
        fontColor: "#333",
        fontSize: 16,
      },
    },
  };

  const genderOptions = {
    title: {
      display: true,
      text: "Gender Frequency Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 1,
          },
        },
      ],
    },
    legend: {
      position: "top",
      labels: {
        fontColor: "#333",
        fontSize: 16,
      },
    },
  };
  let femaleCount = 0;
  let maleCount = 0;
  let otherCount = 0;
  for (let i = 0; i < PlayerData.length; i++) {
    if (PlayerData[i].gender.toLowerCase() === "female") {
      femaleCount++;
    } else if (PlayerData[i].gender.toLowerCase() === "male") {
      maleCount++;
    } else if (PlayerData[i].gender.toLowerCase() === "other") {
      otherCount++;
    }
  }

  // Create the initial chart (gender)
  var ctx = document.getElementById("myChart").getContext("2d");
  myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Male", "Female", "Other"],
      datasets: [
        {
          label: "Gender",
          data: [maleCount, femaleCount, otherCount],
          backgroundColor: ["rgb(255,0,0)", "#36a2eb", "pink"],
        },
      ],
    },
  });

  // Task 16: (2 marks)
  // Add click event listeners to the buttons
  var genderBtn = document.getElementById("gender-btn");
  var percentageBtn = document.getElementById("percentage-btn");
  // Task 16: (2 marks)
  genderBtn.addEventListener("click", function () {
    myChart.destroy(); // destroy the current chart
    myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Male", "Female"],
        datasets: [
          {
            label: "Gender",
            data: [maleCount, femaleCount],
            backgroundColor: ["red", "#36a2eb"],
          },
        ],
      },
      options: genderOptions,
    });
  });
  // Task 16: (2 marks)
  percentageBtn.addEventListener("click", function () {
    myChart.destroy(); // destroy the current chartF
    myChart = new Chart(ctx, {
      type: "bar",
      data: percentageGraph,
      options: percentageOptions,
    });
  });
}

// Task 17: (8 marks)
function SwitchStatus() {
  if (switchButton.checked) {
    PlayerData = [...Players, ...data];
    return true;
  }
  if (switchButton.checked === false) {
    PlayerData = Players;
    return false;
  }
}
// Task 17: (8 marks)
function menuNevigation() {
  menuButton.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.innerText === "Play") {
        menu.style.display = "none";
        showlogin = document.querySelector(".login");

        showlogin.style.display = "block";
      }
      if (button.innerText === "Show All Players") {
        menu.style.display = "none";
        showallplayers();
        showallplayerTextArea.style.display = "flex";
      }
      if (button.innerText === "Sign Up") {
        CalculateAge();
        menu.style.display = "none";
        regcontainer.style.display = "block";
      }
      if (button.innerText === "Show All Results") {
        menu.style.display = "none";
        showall();
        showallTextArea.style.display = "flex";
      }
      if (button.innerText === "Show Chart") {
        menu.style.display = "none";
        showChart.style.display = "block";
      }
    });
  });
}
menuNevigation();
// Task 17: (8 marks)
function backNevigation() {
  regcontainer.style.display = "none";
  showallTextArea.style.display = "none";
  showallplayerTextArea.style.display = "none";
  login.style.display = "none";
  showChart.style.display = "none";
  showpercentageTextArea.style.display = "none";

  menu.style.display = "block";
  myChart?.destroy();
}

// function to calculate age from date of birth and validate age range
function CalculateAge() {
  const dobInput = document.getElementById("dob");
  const ageOutput = document.getElementById("age");
  dobInput.addEventListener("input", () => {
    const dob = new Date(dobInput.value);
    const ageInYears = Math.floor(
      (Date.now() - dob) / (365.25 * 24 * 60 * 60 * 1000)
    );
    if (ageInYears < 8 || ageInYears > 12) {
      ageOutput.value = "";
      dobInput.setCustomValidity("Age must be between 8 and 12 years old.");
    } else {
      ageOutput.value = ageInYears;
      dobInput.setCustomValidity("");
    }
  });
}

function checkCredentials(event) {
  // Prevent the form from submitting
  event.preventDefault();

  const firstName = document.getElementById("Fname");
  const email = document.getElementById("mail");

  // Check if the values match the password
  let findPlayer = PlayerData?.find((player) => {
    if (
      player.firstName === firstName.value.trim() &&
      player.email === email.value.trim()
    ) {
      console.log(player);
      currentLoginPlayer = player;
      return player.firstName;
    }
  });

  if (!findPlayer) {
    firstName.value = "";
    email.value = "";
    alert("Incorrect first name or email. Please try again.");
    return;
  }
  radioContainer.style.display = "flex";
  login.style.display = "none";
  firstName.value = "";
  email.value = "";
}
