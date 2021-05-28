import { Character, Game, MAX_HEALTH, MIN_HEALTH } from "./index";

describe("When a character is created", () => {
  it("should have MAX of health", () => {
    const aCharacter = new Character();
    expect(aCharacter.health).toBe(MAX_HEALTH);
  });

  it("should start at level 1", () => {
    const aCharacter = new Character();
    expect(aCharacter.level).toBe(1);
  });

  it("should start alive", () => {
    const aCharacter = new Character();
    expect(aCharacter.isAlive()).toBeTruthy();
  });
});

describe("When a character receives damage", () => {
  it("should reduce its health", () => {
    const damage = MAX_HEALTH / 2;
    const game = new Game();
    const attackingCharacter = new Character();
    const attackedCharacter = new Character();

    game.dealDamage(attackingCharacter, attackedCharacter, damage);

    expect(attackedCharacter.health).toBe(MAX_HEALTH - damage);
  });

  it("should die if its health becomes the MIN_HEALTH", () => {
    const damage = MAX_HEALTH * 2;
    const game = new Game();
    const attackingCharacter = new Character();
    const attackedCharacter = new Character();

    game.dealDamage(attackingCharacter, attackedCharacter, damage);

    expect(attackedCharacter.health).toBe(MIN_HEALTH);
    expect(attackedCharacter.isAlive()).toBeFalsy();
  });
});

describe("When a characters heals a character", () => {
  it("should increase the healed character health", () => {
    const health = MAX_HEALTH / 4;
    const game = new Game();
    const healerCharacter = new Character();
    const healedCharacter = new Character();
    healedCharacter.health = MAX_HEALTH / 2;

    game.heal(healerCharacter, healedCharacter, health);

    expect(healedCharacter.health).toBe(500 + health);
  });

  it("should NOT heal over max health", () => {
    const health = MAX_HEALTH * 2;
    const game = new Game();
    const healerCharacter = new Character();
    const healedCharacter = new Character();
    healedCharacter.health = MAX_HEALTH / 2;

    game.heal(healerCharacter, healedCharacter, health);

    expect(healedCharacter.health).toBe(MAX_HEALTH);
  });

  it("should NOT heal dead characters", () => {
    const health = MAX_HEALTH * 2;
    const game = new Game();
    const healerCharacter = new Character();
    const healedCharacter = new Character();
    healedCharacter.health = MIN_HEALTH;

    game.heal(healerCharacter, healedCharacter, health);

    expect(healedCharacter.health).toBe(MIN_HEALTH);
  });
});
