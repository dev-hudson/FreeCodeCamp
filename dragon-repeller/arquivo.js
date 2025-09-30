let xp = 0;
let health = 100;
let gold = 250;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ['stick'];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const monsterHealthText = document.querySelector('#monsterHealth');

const weapons = [
    {
        name: 'bastão',
        power: 5
    },
    {
        name: 'punhal',
        power: 30
    },
    {
        name: 'martelo de garra',
        power: 50
    },
    {
        name: 'espada',
        power: 100
    }
];

const locations = [
    {
        name: 'town square (Praça da cidade)',
        'button test': ['Go to store (Ir para loja)', 'Go to cave (Ir para caverna)', 'Fight dragon (Enfrentar o dragão)'],
        'button functions': [goStore, goCave, fightDragon],
        text: "Você está na praça da cidade. Você vê uma placa que diz \"Loja\"."
    },
    {
        name: "store (loja)",
        "button text": ["Compre 10 de saúde (10 de ouro)", "Comprar arma (30 de ouro)", "Vá para a praça da cidade"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "Você entrou na loja."
    },
    {
        name: 'cave (caverna)',
        'button text': ['Enfrentar slime', "Enfrentar fanged beast", "Vá para a praça da cidade"],
        'button functions': [fightSlime, fightBeast, goTown],
        text: "Você entrou na caverna. Você pode ver alguns monstros."
  }
]   

// inicializar botões
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    button1.innerText = location['button test'][0];
    button2.innerText = location['button test'][1];
    button3.innerText = location['button test'][2];
    button1.onclick = location['button functions'][0]; 
    button2.onclick = location['button functions'][1];
    button3.onclick = location['button functions'][2];
    text.innerText = location.text;
}

function goTown() {
    update(locations[0]);
}

function goStore() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);           
}

function fightDragon() {
      
}

function buyHealth() {
    if(gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = 'Você não tem ouro o suficiente para comprar saúde.';
    }
}
function buyWeapon() {
    if (currentWeaponIndex < weapons.length - 1) {
        
        if (gold >= 30) {
            gold -= 30;
            currentWeaponIndex ++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeaponIndex].name;
            text.innerText = `Agora você tem um(a) ${newWeapon}.`
            inventory.push(newWeapon);
            text.innerText += ` Você tem em seu inventário: ${inventory} `;
        } else {
            text.innerText = `Você não possui ouro suficiente para comprar uma arma.`
        }
    
    }
}

function fightSlime() {

}

function fightBeast() {

}

