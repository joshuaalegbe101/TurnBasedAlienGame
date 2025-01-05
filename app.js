const titleHeader = document.getElementById('title');
const startButton = document.getElementById('begin');
const startContainer = document.getElementById('start');
const contentScreen = document.getElementById('display');
const session = document.getElementById('gameplay');

class GameManager {
    round(hero, armada) {
        let turn = 0;
        while(hero.hull > 0 || armada.length > 0) {
            //turn

            //if alien ship is destroyed after attack grant option to retreat and exit loop


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
}

class AlienShip extends Ship{

}

const gameStart = () => {
    titleHeader.style.display ='none';
    startContainer.style.display ='none';
    session.style.display ='block';
    contentScreen.style.backgroundColor='black';

    //timer



    
    let heroShip = Ship();

    let aliens = [AlienShip(), AlienShip(), AlienShip(), AlienShip()];


}   


startButton.addEventListener('click', () => {
    gameStart();
});
