const titleHeader = document.getElementById('title');
const startButton = document.getElementById('begin');
const startContainer = document.getElementById('start');
const contentScreen = document.getElementById('display');
const preSession = document.getElementById('preScreen');
const session = document.getElementById('gameplay');
const attackButton = document.ElementById('attack');
const retreatButton = document.ElementById('retreat');
const feedback = document.getElementById('topPanel');


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
    round() {
        if(this.currentAlien.hull <= 0) {
            console.log("Alien Ship Destroyed");
            this.armada.shift();
            if(this.armada.length === 0) {
                console.log("All ships destroyed");
                return;
            }
            this.currentAlien = this.armada[0];
        }
        if(this.hero.hull <= 0) {
            console.log('Your ship has been destroyed!');
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
    constructor(hull, firepower, accuracy) {
        this.hull = hull,
        this.firepower = firepower, 
        this.accuracy = accuracy
    }

    attack(target) {
        if(Math.random() < this.accuracy) { //hit
            console.log("target hit");
            target.hull -= this.firepower; 

            if(target.hull <= 0) {
                target.hull = 0;
                console.log("target destroyed");
            }
        }
        else {
            console.log("miss");
        }

    }
}

class AlienShip extends Ship{
    //active
}


const hero = new Ship(20, 5, 0.7);
const armada = [
    new Ship(15, 4, 0.6),
    new Ship(12, 3, 0.5),
    new Ship(10, 2, 0.4),
];

const gameManager = new GameManager(hero, armada);

attackButton.addEventListener('click', () => {
    if(gameManager.hero.hull > 0 && gameManager.armada.length > 0) {
        gameManager.hero.attack(gameManager.currentAlien);
        gameManager.round();

        
        if(gameManager.armada.length > 0) {
            setTimeout(() => gameManager.alienTurn(), 1000); 
        }
    }
})
