import getCards from './utilities/get-cards.js';
import express from 'express';
const app = express();
import cors from 'cors'

var cards = {}

const loadCards = async () => {
  cards = await getCards()
}

app.use(cors());

app.get("/cards", async (req,res) => {
  res.json({"cards":cards})
})

app.listen(process.env.PORT || 5000, () => {
  loadCards();
  console.log("Backend Server Started!");
});
