let xp = 0;
let health = 100;
let gold = 50;
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
    { name: 'bastão', power: 5},
    {name: 'punhal', power: 30},
    {name: 'martelo de garra', power: 50},
    {name: 'espada', power: 100}
];

const monsters = [
    {name: 'slime', level: 2, health: 15},
    {name: 'besta com presas', level: 8, health: 60},
    {name: 'dragão', level: 20, health: 300},
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
    },
    {
        name: 'fight (lutar)',
        'button text': ['Atacar', 'Esquivar', 'Correr'],
        'button functions': [attack, dodge, goTown],
        text: "Você está lutando contra um monstro"
    }
];

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
    
    } else {
        text.innerText = "Você já possui a arma mais poderosa!";
        button2.innerText = "Vender arma por 15 de ouro";
        button2.onclick = sellWeapon();
    }
}

function sellWeapon() {
    if (inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = `Você vendeu um(a) ${currentWeapon}`;
        text.innerText += ` Você tem em seu inventário: ${inventory}`;
    } else {
        text.innerText = `Não venda sua única arma`;
    }
}

function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    const monsterStats = monsterStats.style.display = 'block';
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

function fightSlime() {
    fighting = 0;
    goFight();
}

function fightBeast() {
    fighting = 1;
    goFight();
}

function fightDragon() {
    fighting = 2;
    goFight();
}

function attack() {

}

function dodge() {

}

