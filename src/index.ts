export const MAX_HEALTH = 1000;
export const MIN_HEALTH = 0;

export class Character {
  health: number;
  level: number;

  constructor() {
    this.health = MAX_HEALTH;
    this.level = 1;
  }

  isAlive(): boolean {
    return this.health > MIN_HEALTH;
  }

  receiveDamage(damage: number): void {
    const hp = this.health - damage;
    this.health = hp < MIN_HEALTH ? MIN_HEALTH : hp;
  }

  receiveHealth(health: number) {
    const hp = this.health + health;
    this.health = hp > MAX_HEALTH ? MAX_HEALTH : hp;
  }
}

export class Game {
  constructor() {}

  dealDamage(
    attackingCharacter: Character,
    attackedCharacter: Character,
    damage: number
  ): void {
    attackedCharacter.receiveDamage(damage);
  }

  heal(
    healerCharacter: Character,
    healedCharacter: Character,
    health: number
  ): void {
    if (healedCharacter.isAlive()) {
      healedCharacter.receiveHealth(health);
    }
  }
}
