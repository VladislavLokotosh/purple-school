'use strict';

function rollDice(diceType) {
    const validDice = ["D4", "D6", "D8", "D10", "D12", "D16", "D20"];
    if (!validDice.includes(diceType)) {
        return (`Неподдерживаемый тип дайса: ${diceType}`);
    }

    const max = parseInt(diceType.substring(1));

    return Math.floor(Math.random() * max) + 1;
}
