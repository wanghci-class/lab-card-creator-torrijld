let cards = JSON.parse(localStorage.getItem("cards"));
let template = document.querySelector("#card-template");
let cardList = document.querySelector("#card-list");

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    console.log(card);

    let cardView = template.textContent.cloneNode();
    let titleText = cardView.querySelector(".ti")
    titleText.textContent = card.title;

    // TODO rest of text spans

    // Function is declared inside for loop, so it can be reached
    // If the func was declared after, it would 
    // be called when the for loop ended.
    let deleteBtn = cardView.querySelector(".delete-btn")
    deleteBtn.addEventListener("click", function() {
        console.log(i)
    })

    cardList.appendChild(cardView);
}
