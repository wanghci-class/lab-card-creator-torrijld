let cards = JSON.parse(localStorage.getItem("cards"));
let template = document.querySelector("#card-template");
let cardList = document.querySelector("#card-list");

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    console.log(card);

    let cardView = template.content.cloneNode(true);
    let titleText = cardView.querySelector(".title");
    let subtitleText = cardView.querySelector(".subtitle");
    let toText = cardView.querySelector(".to");
    let messageText = cardView.querySelector(".message");
    let fromText = cardView.querySelector(".from");

    titleText.textContent = card.title;
    subtitleText.textContent = card.subtitle;
    toText.textContent = card.to;
    messageText.textContent = card.message;
    fromText.textContent = card.from;

    // TODO rest of text spans

    // Function is declared inside for loop, so it can be reached
    // If the func was declared after, it would 
    // be called when the for loop ends.
    let deleteBtn = cardView.querySelector(".delete-btn")
    deleteBtn.addEventListener("click", function() {
        console.log(i);
        cards.splice(i);
        localStorage.setItem("cards", JSON.stringify(cards));
        location.reload();
    })

    cardList.appendChild(cardView);
}
