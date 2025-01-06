const titleHeader = document.getElementById('title');
const startButton = document.getElementById('begin');
const startContainer = document.getElementById('start');
const contentScreen = document.getElementById('display');
const preSession = document.getElementById('preScreen');
const session = document.getElementById('gameplay');
const attackButton = documentElementById('attack');
const retreatButton = documentElementById('retreat');

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

const gameRound = (player, enemy) => {
    while(player.hull > 0 || enemy[] > 0) {

    }
    
}

const gameStart = () => {
    titleHeader.style.display ='none';
    startContainer.style.display ='none';
    //preSession.style.display ='block';
    contentScreen.style.backgroundColor='black';

    session.style.display = 'block';
    //timer



    
    let heroShip = Ship();

    let aliens = [AlienShip(), AlienShip(), AlienShip(), AlienShip()];


}   



startButton.addEventListener('click', () => {
    gameStart();
});

attackButton.addEventListener('click', () => {

})
