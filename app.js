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
    titleHeader.style.display = 'none';
    startContainer.style.display = 'none';
    preSession.style.display ='block';
    

    setTimeout(() => {
        preSession.style.display = 'none'
        contentScreen.style.backgroundColor = 'black';
        session.style.display = 'block';
    }, 3000);
};

const updateHealthBar = (healthID, healthValue, initialHull) => {
    const healthBar = document.getElementById(healthID);
    const healthPercentage = (healthValue / initialHull) * 100;
    healthBar.style.width = `${Math.max(0, healthPercentage)}%`;
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
        lowerFeedback.innerText = "Victory! All alien ships destroyed!";
    }

    retreat() {

    }

    round() {
        if(this.currentAlien.hull <= 0) {
            console.log("Alien Ship Destroyed");
            lowerFeedback.innerText = "Alien Ship Destroyed!"
            this.armada.shift();
            
            if(this.armada.length === 0) {
                console.log("All ships destroyed");
                lowerFeedback.innerText = "All ships destroyed";
                return;
            }
            this.currentAlien = this.armada[0];
            updateHealthBar("enemyHealth", this.currentAlien.hull, this.currentAlien.initialHull);

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
        this.initialHull = hull;
        this.firepower = firepower, 
        this.accuracy = accuracy,
        this.type = type;
    }

    updateHealthBars(target) {
        if (target.type === "Player") {
            updateHealthBar("playerHealth", target.hull, target.initialHull);
        }
    
        if (target.type === "Alien") {
            updateHealthBar("enemyHealth", target.hull, target.initialHull);
        }
    }

    attack(target) {
        if(Math.random() < this.accuracy) { //hit
            lowerFeedback.innerText = "";
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
            this.updateHealthBars(target);
        }
        else {
            console.log("miss");
            feedback.innerText = this.type + " misses " + target.type;
        }
    }
}


const hero = new Ship(20, 5, 0.7, "Player");
const armada = [
    new Ship(3, 4, 0.6, "Alien"),
    new Ship(5, 3, 0.5, "Alien"),
    new Ship(6, 2, 0.8, "Alien"),
    new Ship(3, 4, 0.6, "Alien"),
    new Ship(5, 3, 0.5, "Alien"),
    new Ship(6, 2, 0.8, "Alien"),
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

retreatButton.addEventListener('click')
