import addCards from "./add-cards"
import clearDatabase from "./clear-database"

type card = {
  name: string,
  power: string,
  toughness: string,
  frontImage: string,
  backImage: string
}

// https://api.scryfall.com/cards/search?q=t%3Atoken
const main = async () => {
  fetch('https://api.scryfall.com/cards/search?q=t%3Atoken&unique=cards')
  .then(async res => {
    res.json().then(scryfallCards =>{
    const cards : card[] = scryfallCards.data.map(card => {
      return {
        name: card.name,
        power: card.power,
        toughness: card.toughness,
        frontImage: card.image_uris?.border_crop,
        backImage: "hello"
      }
    })
    clearDatabase();
    addCards(cards);
  })})
}

main();