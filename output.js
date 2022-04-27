//JavaScript object containing all the cards, descriptions, images paths and score
const cards = [{
	card: "TE",
	cardName: "The Emperor",
	output: "You will hold a successful future in terms of your goals as long as you pursue them methodically and strategically. You may be put in charge of something important, this could be opportunity where a clear decisive mind is required.",
	love: "You should bring common sense, structure and logic to relationships and romance. Although, you should be careful as you may have a hard time expressing your feelings.",
	career:"Lastly, your career will flourish under your hard work and concentration. If you work at the moment is a bit chaotic or frustrating, it may be a good opportunity for you to step up and introduce new methods to help your teammates.",
	image: "./cardImages/the emperor.jpg",
	score: 0
	},
	{
	card: "TH",
	cardName: "The Hierophant",
	output: "This is your sign to embrace conventionality. It is good for you to follow social structures which are well established and have their own traditions, this may be of a religious nature. You should embrace an already existing set of rules which are fixed.",
	love: "Religion may affect your love life and choosing a partner. This may be a partner that is safe and respected by your community. This can also acts as a reminder to treat your partner with love. You seek a shared system of beliefs and morally.",
	career: "You will find success from working with others and should stay on a tried and true path. It also suggests that staying in a group rather than individually may be better for now. A more senior mentor could be helpful aid in progressing your career. This could also indicate a time of learning.",
	image: "./cardImages/the hierophant.jpg   ",
	score: 0
	},
	{
	card: "TL",
	cardName: "The Lovers",
	output: "There may be a dilemma in your life that you need to think about carefully and make the best decision for your situation. This card also suggests a close and intimate bond, possibly progressing into marriage or a development of your own personal belief system. You’re at a time for figuring out what you are going to stand for.",
	love: "You may currently be in a relationship with complimentary energies. A pair that works well together. This could also be a question of how committed to love you are. This could be between love and work, love and friendship etc. A sacrifice may be necessary.",
	career: "This could signal a business partnership or relationship with a colleague that is harmonious. This can symbolize partnership of a platonic kind. It can also bring forth a big decisions that you need to make when it comes to your future career. You need to take the time to make this tough decision.",
	image: "./cardImages/the lovers.jpg",
	score: 0
	},
	{
	card: "TC",
	cardName: "The Chariot",
	output: "The use of strength and willpower can critical in ensuring you overcome obstacles that lie in your path. You must maintain focus, confidence and determination through a future full of winding turns and detours. Your boldness will ensure that you achieve all that you should in this goal. Don't allow competitiveness to hinder you in the future, although it could be used to help you take charge.",
	love: "You must have a clear understanding for what you are looking for in love and romance, and once you are sure, you should take action. You may also need to balance your urges and question whether your choices so far are balanced.",
	career: "You are likely to feel very motivated at work, giving your discipline and drive to succeed. If you're looking for a change in your career, this card is your sign you need to go for it. You must remain clear of distractions and make sure to focus on what you need to do.",
	image: "./cardImages/the chariot.jpg",
	score: 0
	},
	{
	card: "S",
	cardName: "Strength",
	output: "You have the ability to remain calm and strong even when your life is going through immense struggle. You are a compassionate person and always have time for other people even if it's at your own expense. Your resilience will greatly aid you, and your fearlessness means that you should have no issues speaking your mind.",
	love: "You may find yourself in a passionate romance. This card can indicate both a strong relationship, and also one that can be prone to anger, jealousy or other emotional explosions. You will find that these qualities are bound to attract the partners that you need, or bring you and your existing partner closer together than ever.",
	career: "Your anger, drive and passion can help you take big steps in your career. This card signals that you likely already have talent and skill, you only need to muster your courage to make big moves. If you're looking for promotion, do something to get noticed. If you're looking to change your entire career, take the plunge and do it.",
	image: "./cardImages/strength.jpg",
	score: 0
	},
	{
	card: "H",
	cardName: "The Hermit",
	output: "You are currently contemplating if you need to be alone. Never be afraid to take this chance to reflect, it could help to clear your mind. This card symbolizes taking action which is authentic and aligned with your true self.",
	love: "You may need some time alone in order to develop some insight about yourselves before forming a strong romantic relationship. This may be a lonely period of time, but it will place you on the right path.",
	career: "You may need to spend some time thinking about your career right now. You should try to understand what kind of work would give you joy on all levels. You may be looking for a purpose, or at least something that gets you closer to who you want to be.",
	image: "./cardImages/the hermit.jpg",
	score: 0
	},
	{
	card: "J",
	cardName: "Justice",
	output: "This card may bring you relief if you have been wronged or act as a warning of you have caused pain to other. You must account for your actions. It indicates the revealing of truths, and warns that you must follow the right procedures to learn the truth.",
	love: "If you've been putting forth the effort, love will be coming your way. If you’ve been single, you will attract new potential romances. Make sure conflicts are handled with respect and trust. Compromise and understanding is needed.",
	career: "If you've been involved in workplace disputes, this is a signal that everything should work out in your favors long as you've been truthful and fair. If you haven't this is a reminder to always act with integrity and ensure that you take responsibility for you actions. With fair and balanced dealings, your career will flourish.",
	image: "./cardImages/justice.jpg",
	score: 0
	},
	{
	card: "D",
	cardName: "Death",
	output: "This can signal one major phase in your life is ending and a new one is going to start. You need to close one door for another to open. There are things in the past you need to place behind you to focus on your future successes. You should welcome change.",
	love: "You must learn to embrace change in your current relationship or even ending the relationship if it's the most beneficial option because the current dynamic isn't working. It's important to remember that new opportunities will arise and to focus on building yourself.",
	career: "If you are considering a change in career, this is a sign to take this opportunity. You may be clinging to your current path because it offers stability and certainty, but you are otherwise unhappy. Embrace the shifts occurring right now and dive in.",
	image: "./cardImages/death.jpg",
	score: 0
	},
	{
	card: "T",
	cardName: "Temperance",
	output: "You are good at remaining calm throughout stressful situations. This implies you have a clear vision and know what you want to achieve. You are able to adapt and work in harmony with you community. This may indicate a time to evaluate and re-examine priorities you have chosen.",
	love: "Patience, moderation and understanding are important. You must avoid going to extremes and be cautious and thoughtful of your actions. Your relationship or potential relationships may require some patience right now and attempt to work together to find compromise and harmony.",
	career: "Patience and moderation may be helpful tools to achieve your goals. Your dedication and ability to navigate emotionally charged situations at work can help you get noticed by your peers and superiors.This is a reminder to be patient with changes in your career.",
	image: "./cardImages/temperance.jpg",
	score: 0
	},
	{
	card: "TD",
	cardName: "The Devil",
	output: "You may have feelings of entrapment, emptiness and lack of fulfillment. You may be struggling from escaping a desire to over indulge in luxurious living, which is leading you down a rabbit hole. This addiction to material pleasures could be reason for your feelings of powerlessness.",
	love: "You may have a selfish desire for self-gratification. You should communicate with your partners your expectations and avoid pressuring them. This card may also indicate a co-dependency on a partner, which is likely to become destructive to the individuality of both of you.",
	career: "You feel stuck or trapped in your career right now, with no options but to stay somewhere that you dislike. This card signals that you have more choices than you think you do. It's time to reclaim that power.",
	image: "./cardImages/the devil.jpg",
	score: 0
	},
	{
	card: "TS",
	cardName: "The Sun",
	output: "There is much joy and happiness coming your way. You provide others with inspiration and joy, causing them to be drawn to you. This card symbolizes that you have a sense of deserved confidence right now. Life is currently good.",
	love: "Your relationship will blossom, bringing the two of you together as you enjoy life's blessings. You will build an even closer connection with your loved one. If you are single, now is the time to step out and let yourself shine. You will draw in romance with your positivity and radiance.",
	career: "This brings signs of success and optimism. You may experience a period of great enthusiasm and motivation when it comes to your job. If you are searching for a new job or a promotion, your continued positivity will being you success.",
	image: "./cardImages/the sun.jpg",
	score: 0
	},
	{
	card: "TM",
	cardName: "The Moon",
	output: "You need to be aware of situations that are causing fear and anxiety in your mind. Don't allow inner disturbances and self-deception to take the best of you. Negative energy must be released and turned into something constructive.",
	love: "Your emotions are complicated at this time. The environment may be one of misunderstandings and not everything is as it appears. It's important to understand your emotions and motivations. Don't allow old attitudes to cloud your judgement.",
	career: "There are some uncertainty with your career path right now. You may not have a clear understanding of what your goals are and which direction you should go towards. Make sure to express yourself clearly. You may not have all the information you need to make sound work decisions. Who can help shed some light on the facts?",
	image: "./cardImages/the moon.jpg",
	score: 0
	}
]


//Call Function when user scrolls
window.onscroll = function () { stickNavBar() };

//Get required elements by their IDs
var modal = document.getElementById("myModal");
const modalImg = document.getElementById("imgModal");
const caption = document.getElementById("caption");
const cardTitle = document.getElementById("cardName");
const mainOutput = document.getElementById("mainOutput");
const love = document.getElementById("love");
const career = document.getElementById("career");
const cardFlip = document.getElementById("flip-inner");
const cardFront = document.getElementById("card-front");
const navbar = document.getElementById("navbar");

//Get element where first className where is close
var span = document.getElementsByClassName("close")[0];

//Add listener for closing modal box
span.addEventListener("click", close);


var sticky = navbar.offsetTop;			//Getting position of navbar on page
let pastQuestions = [];					//Array holding past answers from questions

//Calls functions
pastAnswers();
calculateResult();
selectCards();
cardRotate();


//Function to rotate back of card to show selected card
function cardRotate() {
	cardFlip.style.transform = "rotateY(180deg)";
}

//Functions which collects answers and stores them in an array
function pastAnswers(){
	test = JSON.parse(localStorage.getItem("answers"))
	test.forEach(array => {
		pastQuestions.push(array)
	})
}

//Function calculates the score for each card
function calculateResult() {
	index = 0;
	cards.forEach(card => {
		pastQuestions.forEach(op => {
			op.forEach(ans => {
				if (ans == card.card) {
					card.score++;
				}
			})
		})

	})
}


//Function which finds the card with the largest score
function selectCards() {
	max = 0;
	result = "";
	cards.forEach( card =>{
		if (card.score > max){
			max = card.score;
			result = card;
		}
	})
	displayOutput(result);
}

//Function to display the card image and the output text on the page
function displayOutput(result){
	const image = document.createElement('img');
	image.src = result.image;
	image.alt = result.cardName;
	image.classList.add('cardImage');

	const cardName = document.createElement('h2');
	cardName.innerHTML = result.cardName;
	
	mainOutput.innerHTML = result.output;
	love.innerHTML = result.love;
	career.innerHTML = result.career;

	cardTitle.appendChild(cardName);
	cardFront.appendChild(image);

	//If the image is clicked the modal box will be activated
	image.onclick = function(){
		modal.style.display = "block";
		modalImg.src = result.image;
		caption.innerHTML = result.cardName;
	}

}

//Function to close the modal box
function close(){
	modal.style.display = "none";
}

//Function keeps navigation bar at the top of the page when scrolling: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
function stickNavBar() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

