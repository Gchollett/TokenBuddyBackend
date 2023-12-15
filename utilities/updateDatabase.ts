import addCards from "./add-cards"
import clearDatabase from "./clear-database"

const fetchData = (page) => {
  fetch(page).then(async res => {
    res.json().then(async resJson => {
      const cards = resJson.data.map(card => {
        if(card.card_faces){
          const front = card.card_faces[0]
          const back = card.card_faces[1]
          return {
            name: card.name,
            multiFaced: true,
            faces: {
              createMany:{
                data: [
                  {
                    name: front.name,
                    power: front.power,
                    toughness: front.toughness,
                    image: front.image_uris?.border_crop
                  },
                  {
                    name: back.name,
                    power: back.power,
                    toughness: back.toughness,
                    image: back.image_uris?.border_crop
                  }
                ]
              }    
            }   
          }
        }
        return {
          name: card.name,
          multiFaced: false,
          faces: [],
          power: card.power,
          toughness: card.toughness,
          image: card.image_uris?.border_crop
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
  console.log('Database Updated');
}

main();