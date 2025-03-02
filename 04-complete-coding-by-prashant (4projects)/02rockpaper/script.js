function checkResult(inputSelect) {
    compSelect = defineCompSelect();
    score.totalGame++;
    alertFunc(inputSelect, compSelect);

    let localStorageJSON = JSON.stringify(score);
    localStorage.setItem('score', localStorageJSON);
}

function defineCompSelect() {
    compSelect = Math.random() * 3;
    if (compSelect > 0 && compSelect <= 1) {
        return 'Scissor';
    } else if (compSelect > 1 && compSelect <= 2) {
        return 'Paper';
    } else {
        return 'Rock';
    }
}

score = {
    playerScore: 0,
    compScore: 0,
    draw: 0,
    totalGame: 0
}

function alertFunc(inputSelect, compSelect) {
    let result = getResult(compSelect, inputSelect);

    document.querySelector('#playerSelect').textContent = ` ${inputSelect}`;
    document.querySelector('#compSelect').textContent = ` ${compSelect}`;
    document.querySelector('#finalDecision').textContent = `Result is:  ${result}`;

    document.querySelector('#playerScore').textContent = ` ${score.playerScore}`;
    document.querySelector('#compScore').textContent = ` ${score.compScore}`;
    document.querySelector('#draw').textContent = ` ${score.draw}`;
}

let decisionColorArray = ['text-info', 'text-success', 'text-danger'];


function getResult(compSelect, inputSelect) {
    if (compSelect === inputSelect) {
        result = 'Its a tie';
        document.querySelector('#finalDecision').classList.add(`${decisionColorArray[0]}`)
        score.draw++;
        return result;
    }
    else if ((compSelect === 'Rock' && inputSelect === 'Paper') || (compSelect === 'Paper' && inputSelect === 'Scissor') || (compSelect === 'Scissor' && inputSelect === 'Rock')) {
        result = 'You Win';
        document.querySelector('#finalDecision').classList.add(`${decisionColorArray[1]}`)

        score.playerScore++;
        return result;
    }
    else {
        result = 'You Lose';
        score.compScore++;
        document.querySelector('#finalDecision').classList.add(`${decisionColorArray[2]}`)
        return result;
    }
}

document.querySelectorAll('button').forEach(button => {
    button.classList.add('btn', 'btn-primary', 'me-5');
});









