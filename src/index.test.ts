import { Character } from './index';
describe("a test suite", () => {
  it("should success when create Character", () => {
    const character = new Character();
    expect(character.health).toEqual(1000);
    expect(character.level).toEqual(1);
    expect(character.isAlive()).toEqual(true);
  });

  it("should decrement health when receive damage", () => {
    const character = new Character();

    character.receiveDamage(500);
    expect(character.health).toEqual(500); 
  });
  it("should die when helth is above zero", () => {
    const character = new Character();

    character.receiveDamage(1000);

    expect(character.isAlive()).toEqual(false); 
  });

  it("when damage received exceeds current Health, Health becomes 0", () => {
    const character = new Character();

    character.receiveDamage(1010);

    expect(character.health).toEqual(0); 
  });

  it("character damage to other character", () => {
    const offensive = new Character();
    const defensive = new Character();

    offensive.doDamage(defensive, 500);

    expect(defensive.health).toEqual(500); 
  });
  
});


/* 

 Characters can Deal Damage to Characters.

Damage is subtracted from Health
When damage received exceeds current Health, Health becomes 0 and the character dies

*/