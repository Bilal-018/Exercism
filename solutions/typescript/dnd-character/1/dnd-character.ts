export class DnDCharacter {
  charisma = DnDCharacter.generateAbilityScore();
  wisdom = DnDCharacter.generateAbilityScore();
  intelligence = DnDCharacter.generateAbilityScore();
  strength = DnDCharacter.generateAbilityScore();
  dexterity = DnDCharacter.generateAbilityScore();
  constitution = DnDCharacter.generateAbilityScore();
  hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);

  public static generateAbilityScore(): number {
    return Math.floor(Math.random() * (16)) + 3;
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue-10)/2);
  }
}
