'use strict'

class BaseCharacter{
    constructor(race, name, language){
        this.race = race;
        this.name = name;
        this.language = language;
    }
    talk(){
        console.log(`${this.name} говорит на ${this.language}`);
    }

}
class Orc extends BaseCharacter{
    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }
    strike(){
        console.log(`${this.name} наносит удар ${this.weapon}ом!`);
    }
}

class Elf extends BaseCharacter{
    constructor(race, name, language, spellType) {
        super(race, name, language);
        this.spellType = spellType;
    }
    createSpell(){
        console.log(`${this.name} создает ${this.spellType} заклинание!`);
    }
}

const thrall = new Orc("Орк", "Тралл", "Оркский", "молот");
thrall.talk();
thrall.strike();

const legolas = new Elf("Эльф", "Леголас", "Синдарин", "ледяное");
legolas.talk();
legolas.createSpell();

