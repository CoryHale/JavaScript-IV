// Classes

class GameObject {
    constructor(object) {
        this.createdAt = object.createdAt;
        this.name = object.name;
        this.dimensions = object.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game.`
    }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject {
    constructor(stats) {
        super(stats);
        this.healthPoints = stats.healthPoints;
    }

    takeDamage() {
        return `${this.name} took damage.`
    }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

class Humanoid extends CharacterStats {
    constructor(attr) {
        super(attr);
        this.team = attr.team;
        this.weapons = attr.weapons;
        this.language = attr.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}.`
    }
}

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

//console.log(mage.createdAt); // Today's date
//console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
//console.log(swordsman.healthPoints); // 15
//console.log(mage.name); // Bruce
//console.log(swordsman.team); // The Round Table
//console.log(mage.weapons); // Staff of Shamalama
//console.log(archer.language); // Elvish
//console.log(archer.greet()); // Lilith offers a greeting in Elvish.
//console.log(mage.takeDamage()); // Bruce took damage.
//console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.





// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

class Hero extends Humanoid {
    constructor(heroAttr) {
        super(heroAttr);
    }

    heroAttack(enemy) {
        let attackDam = Math.floor(Math.random() * 100);
        enemy.healthPoints = enemy.healthPoints - attackDam;
        if (enemy.healthPoints <= 0) {
            console.log(`${this.name} attacked ${enemy.name} for ${attackDam} points of damage.`);
            console.log(`${enemy.name} took ${attackDam} points of damage and was removed from the game!`);
        } else {
            console.log(`${this.name} attacked ${enemy.name} for ${attackDam} points of damage.`);
            console.log(`${enemy.name} took ${attackDam} points of damage!`);
        }
    }
}

class Villain extends Humanoid {
    constructor(villainAttr) {
        super(villainAttr);
    }

    villainAttack(enemy) {
        let attackDam = Math.floor(Math.random() * 100);
        enemy.healthPoints = enemy.healthPoints - attackDam;
        if (enemy.healthPoints <= 0) {
            console.log(`${this.name} attacked ${enemy.name} for ${attackDam} points of damage.`);
            console.log(`${enemy.name} took ${attackDam} points of damage and was removed from the game!`);
        } else {
            console.log(`${this.name} attacked ${enemy.name} for ${attackDam} points of damage.`);
            console.log(`${enemy.name} took ${attackDam} points of damage!`);
        }
    }
}

// Hero and Villain Instantiation

let hero = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 5,
        width: 5,
        height: 5,
    },
    healthPoints: 500,
    name: 'Captain Marvel',
    team: 'Avengers',
    weapons: ['Binary Powers'],
    language: 'English',
});

let villain = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 5,
        width: 5,
        height: 5,
    },
    healthPoints: 500,
    name: 'Thanos',
    team: 'His Own',
    weapons: ['Infinity Gauntlet'],
    language: 'English',
});

// Create fight function

function fight(player1, player2) {
    while (player1.healthPoints > 0 || player2.healthPoints > 0) {
        if (player1.healthPoints > 0) {
            hero.heroAttack(player2);
        } else {
            break;
        }
        if (player2.healthPoints > 0) {
            villain.villainAttack(player1);
        } else {
            break;
        }
        console.log(`${player1.name} has ${player1.healthPoints} health points left!`);
        console.log(`${player2.name} has ${player2.healthPoints} health points left!`);
    }
}

// FIGHT!!!

// fight(hero, villain);