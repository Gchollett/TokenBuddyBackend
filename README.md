# TokenBuddyBackend
This is the backend implementation for the Token Buddy application.
## Dependencies
- [Node.js](https://nodejs.org/en/)
- [MongDB](https://www.mongodb.com/)
## Quick Setup Guide
First, make sure you have the dependencies installed before moving further. You do not need to install MongoDB, however, you do need to set up a new database.

Second, copy the repository into your local environment using the following command:
```bash
git clone <repository>
```

Third, run the following command in the newly created directory:
```
npm install
```
This will install all of the dependencies needed.

Fourth, create a <code>.env</code> file in the root directory and copy the code from the <code>.env.template</code> into it.

To find your <code>DATABASE_URL</code>, got to your cluster in [MongDB](https://www.mongodb.com/) and go to connect. Choose drivers and then the url will be at the bottom. Replace the question mark and everything after with the name of the collection you will be using.

Lastly, run the following commands in order to configure your database:
```bash
npm run gen 
# or
yarn gen
# or
pnpm gen
#This will generate the database using Prisma
npm run updatedb 
# or
yarn updatedb
# or
pnpm updatedb
#This will add all of the tokens from Scryfall to your database
```
Now, you are ready to run your server locally.
## Running on Development Side
To run locally, you need to run the following command:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

This will cause the server to start running on your chosen port.