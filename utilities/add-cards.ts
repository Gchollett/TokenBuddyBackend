import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const addCards = async (cards) => {
    cards.forEach(async card => {
        const transaction = await prisma.card.create({data: {...card}})
        console.log(transaction)
    })
}

export default addCards