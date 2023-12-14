import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
type card = {
    name: string,
    power: string,
    toughness: string,
    frontImage: string,
    backImage: string
}

type battlefield = card[]

const addCards = async (cards : battlefield) => {
    cards.forEach(async card => {
        const transaction = await prisma.card.create({data: {...card}})
        // console.log(transaction)
    })
}

export default addCards