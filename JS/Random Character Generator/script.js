// Step 1: Define the character object
const character = {
    name: "Hero",  
    health: 100  
};

console.log(character); 

// Step 2: Define the possible classes
const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];

// Add a random class to the character
character.class = classes[Math.floor(Math.random() * classes.length)];

console.log(character);  

// Step 3: Method to randomize health
character.randomizeHealth = function() {
    this.health = Math.floor(Math.random() * 101) + 50; 
};

character.randomizeHealth();
console.log(character.health);  

// Step 4: Define the possible special abilities
const abilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];

// Adds a random special ability to the character
character.specialAbility = abilities[Math.floor(Math.random() * abilities.length)];

console.log(character);  

// Step 5: Generate a new character
function generateCharacter(name) {
    const randomNames = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];
    const newName = name || randomNames[Math.floor(Math.random() * randomNames.length)];
    
    // Creates a new character object
    const newCharacter = {
        name: newName,
        class: classes[Math.floor(Math.random() * classes.length)],
        health: Math.floor(Math.random() * 101) + 50,
        specialAbility: abilities[Math.floor(Math.random() * abilities.length)],
        
        // Method to randomize health
        randomizeHealth: function() {
            this.health = Math.floor(Math.random() * 101) + 50;
        },

        // Method to simulate a battle
        battle: function(otherCharacter) {
            const damage = Math.floor(Math.random() * 16) + 5;  
            const originalHealth = otherCharacter.health;
            otherCharacter.health = Math.max(0, otherCharacter.health - damage);

            // Log the battle details
            console.log(`Character ${this.name} attacked Character ${otherCharacter.name} with ${this.specialAbility}. ${otherCharacter.name}'s health dropped from ${originalHealth} to ${otherCharacter.health}.`);
        }
    };

    return newCharacter;
}


const namedCharacter = generateCharacter("Drake");
console.dir(namedCharacter);  // Logs a character named "Drake"

// Step 6: Test the battle method
const character1 = generateCharacter("Zane");
const character2 = generateCharacter("Elara");

character1.battle(character2);
// Example: "Character Zane attacked Character Elara with Power Slash. Elara's health dropped from 120 to 102."


// Step 7: Generate multiple characters
function generateMultipleCharacters(x) {
    const characters = [];
    for (let i = 0; i < x; i++) {
        characters.push(generateCharacter());
    }
    return characters;
}


const party = generateMultipleCharacters(5);
console.dir(party);  
