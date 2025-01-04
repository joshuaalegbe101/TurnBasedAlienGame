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
    constructor()
}

let heroShip = Ship(20, 5, .7);