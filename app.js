const titleHeader = document.getElementById('title');
const startButton = document.getElementById('begin');
const startContainer = document.getElementById('start');
const contentScreen = document.getElementById('display');
const preSession = document.getElementById('preScreen');
const session = document.getElementById('gameplay');
const attackButton = document.getElementById('attack');
const retreatButton = document.getElementById('retreat');
const feedback = document.getElementById('panel1');
const lowerFeedback = document.getElementById('panel2');
const playerOne = document.getElementById('player');


const gameStart = () => {
    titleHeader.style.display ='none';
    startContainer.style.display ='none';
    //preSession.style.display ='block';
    contentScreen.style.backgroundColor='black';

    session.style.display = 'block';
    //timer
}   


startButton.addEventListener('click', () => {
    gameStart();
});


class GameManager {
    constructor(hero, armada) {
        this.hero = hero;
        this.armada = armada;
        this.currentAlien = this.armada[0];
    }
    win() {

    }

    round() {
        if(this.currentAlien.hull <= 0) {
            console.log("Alien Ship Destroyed");
            lowerFeedback.innerText = "Alien Ship Destroyed"
            this.armada.shift();
            if(this.armada.length === 0) {
                console.log("All ships destroyed");
                lowerFeedback.innerText = "All ships destroyed";
                return;
            }
            this.currentAlien = this.armada[0];
        }
        if(this.hero.hull <= 0) {
            console.log('Your ship has been destroyed!');
            playerOne.style.display = 'none';

        }
    }

    alienTurn() {
        if(this.currentAlien.hull > 0) {
            console.log("Alien attacks!");
            this.currentAlien.attack(this.hero);
        }
    }
}


class Ship {
    //hull, firepower, accuracy
    constructor(hull, firepower, accuracy, type) {
        this.hull = hull,
        this.firepower = firepower, 
        this.accuracy = accuracy,
        this.type = type;
    }

    attack(target) {
        if(Math.random() < this.accuracy) { //hit
            console.log("target hit");
            feedback.innerText = this.type + " hits " + target.type;
            target.hull -= this.firepower; 

            if(target.hull <= 0) {
                target.hull = 0;
                /*
                console.log("target destroyed");
                feedback.innerText = "Target Destroyed";
                */
            }
        }
        else {
            console.log("miss");
            feedback.innerText = this.type + "misses " + target.type;
        }
    }
}

class AlienShip extends Ship{
    //active
}


const hero = new Ship(20, 5, 0.7, "Player");
const armada = [
    new Ship(15, 4, 0.6, "Alien"),
    new Ship(12, 3, 0.5, "Alien"),
    new Ship(10, 2, 0.4, "Alien"),
];

const gameManager = new GameManager(hero, armada);

attackButton.addEventListener('click', () => {
    if(gameManager.hero.hull > 0 && gameManager.armada.length > 0) {
        gameManager.hero.attack(gameManager.currentAlien);
        gameManager.round();

        
        if(gameManager.armada.length > 0) {
            setTimeout(() => gameManager.alienTurn(), 1500); 
        }
    }
})
