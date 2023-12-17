import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getCards = async () => {
    const cards = await prisma.card.findMany({
        orderBy: {
            name: 'asc'
        },
        include: {
            faces: true
        }
    });
    return cards;
}

export default getCards