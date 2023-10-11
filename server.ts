const gc = require('./utilities/get-cards.ts');
const express = require('express');
const app = express();
const cors = require('cors');

var cards = {}

const loadCards = async () => {
  cards = await gc.getCards()
}

app.use(cors());

app.get("/cards", async (req,res) => {
  res.json({"cards":cards})
})

app.listen(process.env.PORT, () => {
  loadCards();
  console.log("Backend Server Started!");
});
