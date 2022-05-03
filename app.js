require('dotenv').config()
const Trello = require("./main.js");

if(!process.env.KEY && !process.env.TOKEN) {
  throw new Error("No existe el api key ni el token");
}

const trello = new Trello(process.env.KEY, process.env.TOKEN);

var cardTitle = `Card Nueva ${new Date()}`;
console.log("Ejecutando!");

trello.addCard(cardTitle, "LaunchX Card Description", "62704a8959513806c62c0fbc",
  function (error, trelloCard) {
    if (error) {
      console.log('Could not add card:', error);
    }
    else {
      console.log('Added card:', trelloCard);
    }
  });
