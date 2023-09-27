import addCards from "./add-cards"
import clearDatabase from "./clear-database"

const fetchData = (page) => {
  fetch(page).then(async res => {
    res.json().then(async resJson => {
      const cards = resJson.data.map(card => {
        return {
          name: card.name,
          power: card.power,
          toughness: card.toughness,
          frontImage: card.image_uris?.border_crop,
          backImage: "hello"
        }
      })
      await addCards(cards);
      if(resJson.has_more){
        fetchData(resJson.next_page);
      }
    })
  })
}

// https://api.scryfall.com/cards/search?q=t%3Atoken
const main = async () => {
  const apiUrl = 'https://api.scryfall.com/cards/search?q=t%3Atoken&unique=cards';
  await clearDatabase();
  await fetchData(apiUrl);
}

main();