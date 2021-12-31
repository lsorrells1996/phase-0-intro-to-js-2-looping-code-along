

const cards = [];

function writeCards(name, event) {
    for (let c = 0; c < name.length; c++) {
        cards.push(`Thank you, ${name[c]}, for the wonderful ${event} gift!`);
    }

    return cards;
}

function countDown(number) {
    let n = number;
    while (n >= 0) {
        console.log(n--);
    }
}