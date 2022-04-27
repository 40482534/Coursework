//JavaScript Object containing all questions and answers
const myQuestions = [{
	question: "Question 1 - What is your Zodiac sign?",
	answer: [{text: "Aries", card: ["TE"]},
			{text: "Taurus", card: ["TH"]},
			{text: "Gemini", card: ["TL"]},
			{text: "Cancer", card: ["TC"]},
			{text: "Leo", card: ["S"]},
			{text: "Virgo", card: ["H"]},
			{text: "Libra", card: ["J"]},
			{text: "Scorpio", card: ["D"]},
			{text: "Sagittarius", card: ["T"]},
			{text: "Capricorn", card: ["TD"]},
			{text: "Aquarius", card: ["TS"]},
			{text: "Pisces", card: ["TM"]}]
	},
	{
	question: "Question 2 - What is your favourite season?",
	answer: [{text: "Spring", card: ["TE", "TH", "TL"]},
		{text: "Summer", card: ["TC", "S", "H"]},
		{text: "Autumn", card: ["J", "D", "T"]},
		{text: "Winter", card:["TD", "TS", "TM"]}]
	},
	{
	question:"Question 3 - What is your biggest fear?",
	answer: [
		{text: "Losing someone important to you", card: ["L", "D"]},
		{text: "Heights", card: ["J", "TM"]},
		{text: "Failure", card: ["C", "T", "TS"]},
		{text: "Change", card: ["E", "S", "TD"]},
		{text: "Not being needed", card: ["TH", "H"]}]
	},
	{
	question: "Question 4 - Who do you turn to for advice?",
	answer: [
		{text: "Friends", card: ["J", "D"]},
		{text: "Family", card: ["E", "TS"]},
		{text: "Partner", card: ["L", "T", "TD"]},
		{text: "Mentor", card: ["TH", "TM"]},
		{text: "Myself", card: ["C", "S", "H"]}]
	},
	{
	question: "Question 5 - What point of the day do you get the most energy?",
	answer: [
		{text: "Morning", card: ["TE", "TS", "C"]},
		{text: "Afternoon", card: ["TH", "T", "J"]},
		{text: "Evening", card: ["TD", "S", "H"]},
		{text: "Night", card:["TM", "D", "L"]}]
	},
	{
	question: "Question 6 - What colour resinates with you the most?",
	answer: [
		{text: "Blue", card: ["TD", "S"]},
		{text: "Green", card: ["T", "D", "H"]},
		{text: "Red", card: ["TH", "L"]},
		{text: "Purple", card: ["TE", "J"]},
		{text: "Yellow", card: ["TM", "TS", "C"]}]
	},
	{
	question: "Question 7 - What cheers you up on a bad day?",
	answer: [
		{text: "Eating", card: ["D", "J"]},
		{text: "Dancing", card: ["TE", "TD"]},
		{text: "Writing about your feelings", card: ["L", "C"]},
		{text: "Spending time with others", card:["TH", "TS", "S"]},
		{text: "Going for a walk", card: ["T", "TM", "H"]}]
	},
	{
	question: "Question 8 - How would people describe you?",
	answer: [
		{text: "Ambititous", card: ["S","C", "D"]},
		{text: "Thoughtful", card: ["TH", "TM", "H"]},
		{text: "Practical", card: ["TE", "TD", "T"]},
		{text: "Caring", card: ["L", "J", "TS"]}]
	},
	{
	question: "Question 9 - What do you want out of life?",
	answer: [
		{text: "Love", card: ["L", "TS"]},
		{text: "Growth", card: ["E", "C", "S"]},
		{text: "Happiness", card: ["T", "H", "TS"]},
		{text: "Knowledge", card: ["TH", "J"]},
		{text: "Change", card: ["D", "TD", "TM"]}]
	},
	{
	question: "Queation 10 - How do you feel at the moment?",
	answer: [
		{text: "Content", card: ["th", "t", "ts"]},
		{text: "Excited", card: ["L", "TM"]},
		{text: "Disappointed", card: ["TD", "J", "H"]},
		{text: "Bored", card:["D", "C"]},
		{text: "Stressed", card:["TE", "S"]}]
	}
]



//Calls Function when user scrolls
window.onscroll = function () { stickNavBar() };

//Get required elements by their IDs
const answersElement = document.getElementById('answers');
const mainContainer = document.querySelector('.main-container');
const barElement = document.getElementById("bar");

var sticky = navbar.offsetTop;				//Getting position of navbar on page
let currentAnswers = [];					//Array holding past answers from questions
let pastAnswers = [];						//Array holding the most up to date answers

//Calls functions for displaying questions and answers
displayQuestion();


// Function checks that an answer was selected and stores current answers in localStorage
function nextQuestion(event) {
	if (currentAnswers.length == pastAnswers.length){
		event.preventDefault();
		alert("You have to enter an answer to continue!!");
	}

	localStorage.setItem("answers", JSON.stringify(currentAnswers));
}


//Displays Question and creates buttons containing answers
function displayQuestion(){	
	cur = selectQuestion();
	document.getElementById('questions').innerHTML = myQuestions[cur].question;

	myQuestions[cur].answer.forEach(answer => {
		const buttons = document.createElement('button');
		buttons.innerHTML = answer.text;
		buttons.classList.add('btn');

		//Adds event to each button to call selectAnwser if clicked and passes variables
		buttons.addEventListener('click', selectAnswer.bind(event, buttons, answer, cur));
		answersElement.appendChild(buttons);
	})

	//Check if this is the first question, clears any answers in localStorage
	if (cur == 0){
		localStorage.removeItem("answers");
	}

	var nextButton = document.getElementById("next").addEventListener("click", nextQuestion.bind(event));

	//Sets current status of the progress bar
	var width = cur * 10;
	barElement.style.width = width + "%";

	extractPastAnswers();
}


//Function to select current question
function selectQuestion() {
	var current;
	if (mainContainer.classList.contains('main-container')) {
		current = mainContainer.className.split(' ');
	}
	return current[1];
}


//Function changes buttons if answer selected
function selectAnswer(buttons, answer, cur) {

	//Loops for each other button and sets to default styling
	Array.from(answersElement.children).forEach(button => {
		button.style.background = "";
		button.style.color = "black";
	})

	//sets selected answer styling
	buttons.style.background = "#c4a3a3";
	buttons.style.color = "white";

	//Adds answer to currentQuestions array
	currentAnswers.push(answer.card);

	//Alters progress bar status
	let width = (cur * 10) + 10;
	barElement.style.width = width + "%";
}


//Function extract past anwsers from
function extractPastAnswers() {

	//Extracts anwsers in localStorage and stores in currentAnswers and pastAnswers arrays
	if (localStorage.getItem("answers")) {
		answerArray = JSON.parse(localStorage.getItem("answers"));
		answerArray.forEach(array => {
			currentAnswers.push(array);
			pastAnswers.push(array);
		})
	}

	//Removes any extra anwsers, for when the user goes back to previous questions
	while (currentAnswers.length > cur) {
		currentAnswers.pop();
		pastAnswers.pop();
	}
}


//Function keeps navigation bar at the top of the page when scrolling: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
function stickNavBar() {
if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
    }
	else {
		navbar.classList.remove("sticky");

	}
}

