class Character {
  health: number;
  level: number;


  constructor() {
    this.health = 1000;
    this.level = 1;

  }

  receiveDamage(damage: number) {
      if (damage > this.health) {
          this.health = 0
      } else {
        this.health -= damage;
      }
  }

  isAlive(): Boolean {
    return this.health > 0;
  }

  doDamage(defensiveCharacter: Character, damage: number) {
    defensiveCharacter.receiveDamage(damage)
  }
}

class DoDamage {

    invoke(offensive: Character, defensive: Character, damage: number) {
        defensive.receiveDamage(number)
    }
}

export { Character };


