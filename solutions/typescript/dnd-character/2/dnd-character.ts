export class DnDCharacter {
  strength: number = DnDCharacter.generateAbilityScore();
  dexterity: number = DnDCharacter.generateAbilityScore();
  constitution: number = DnDCharacter.generateAbilityScore();
  intelligence: number = DnDCharacter.generateAbilityScore();
  wisdom: number = DnDCharacter.generateAbilityScore();
  charisma: number = DnDCharacter.generateAbilityScore();
  hitpoints: number = 10 + DnDCharacter.getModifierFor(this.constitution);

  public static generateAbilityScore(): number {
    let rolls: number[] = Array(4).fill(0).map(()=> Math.floor(Math.random() * 6) + 1);
    return rolls.sort((a, b)=> b-a).slice(0, 3).reduce((sum, num)=> sum + num, 0);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue-10)/2);
  }
}
