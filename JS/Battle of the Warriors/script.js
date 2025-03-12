const thor = {
    name: "Lugia",
    hp: 100,
    strength: 15,
    attack() {
        return Math.floor(Math.random() * this.strength);
    }
};

const zeus = {
    name: "Rayquaza",
    hp: 100,
    strength: 16,
    attack() {
        return Math.floor(Math.random() * this.strength);
    }
};


function battle(warrior1, warrior2) {
    for (let round = 1; round <= 10; round++) {
        console.log(`=== Round ${round} ===`);

       
        let damage = warrior1.attack();
        warrior2.hp -= damage;
        console.log(`${warrior1.name} attacks ${warrior2.name} and does ${damage} damage!`);
        console.log(`${warrior1.name} HP: ${warrior1.hp} | ${warrior2.name} HP: ${warrior2.hp}`);

        if (warrior2.hp <= 0) {
            console.log(`🏆 ${warrior1.name} WINS the battle! 🏆`);
            return;
        }

        damage = warrior2.attack();
        warrior1.hp -= damage;
        console.log(`${warrior2.name} attacks ${warrior1.name} and does ${damage} damage!`);
        console.log(`${warrior1.name} HP: ${warrior1.hp} | ${warrior2.name} HP: ${warrior2.hp}`);

      
        if (warrior1.hp <= 0) {
            console.log(`🏆 ${warrior2.name} WINS the battle! 🏆`);
            return;
        }
    }

    
    console.log("=== Final Results ===");
    if (warrior1.hp > warrior2.hp) {
        console.log(`🏆 ${warrior1.name} WINS the battle! 🏆`);
    } else if (warrior2.hp > warrior1.hp) {
        console.log(`🏆 ${warrior2.name} WINS the battle! 🏆`);
    } else {
        console.log("It's a draw!");
    }
}


battle(thor, zeus);
