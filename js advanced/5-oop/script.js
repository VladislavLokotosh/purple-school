'use strict'

function BaseCharacter(race, name, language){
    this.race = race;
    this.name = name;
    this.language = language;
};

BaseCharacter.prototype.talk = function (){
    console.log(`${this.name} говорит на ${this.language}`);
};

function Orc(race, name, language, weapon) {
    BaseCharacter.call(this, race, name, language);
    this.weapon = weapon;
};

Orc.prototype = Object.create(BaseCharacter.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.strike = function() {
    console.log(`${this.name} наносит удар ${this.weapon}ом!`);
};

function Elf(race, name, language, spellType) {
    BaseCharacter.call(this, race, name, language);
    this.spellType = spellType;
};

Elf.prototype = Object.create(BaseCharacter.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function() {
    console.log(`${this.name} создает ${this.spellType} заклинание!`);
};

const thrall = new Orc("Орк", "Тралл", "Оркский", "молот");
thrall.talk();
thrall.strike();

const legolas = new Elf("Эльф", "Леголас", "Синдарин", "ледяное");
legolas.talk();
legolas.createSpell();

