let menu = document.querySelector(".menu");
let cardContainer = document.querySelector(".loading-container");
let cards = cardContainer.querySelectorAll(".loading-card");
let selected = null;

//Show the first loading animation when the page opens
cards[0].style.display = 'block';

//Select what loading animation to show
function selectCard(card) {
	if(selected !== null) {
		selected.classList.remove("selected");
	}
	
	selected = card;
	selected.classList.add("selected");
	
	let cardToShow = selected.dataset.name;
	
	cards.forEach(card => {
		if(!card.classList.contains(cardToShow)) {
			card.style.display = 'none';
		} else {
			card.style.display = 'block';
		}
	});
}