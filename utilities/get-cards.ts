import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getCards = async () => {
    const cards = await prisma.card.findMany({
        where:{
            NOT:{
                frontImage: "None"
            },
        },
        orderBy: {
            name: 'asc'
        },
    });
    return cards;
}

export default getCards