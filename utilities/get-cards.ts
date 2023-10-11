const PrismaClient = require('@prisma/client');
//const prisma = new PrismaClient()
module.exports = function() {
    this.getCards = async function() {
        const cards = await PrismaClient.card.findMany({
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
}

