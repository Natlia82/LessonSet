export default class Team {
  constructor() {
    this.member = new Set();
  }

  add(character) {
    if (!this.member.has(character)) {
      this.member.add(character);
    } else throw new Error('такой персонаж уже существует');
  }


  addAll(...characters) {
    // console.log(characters);

    for (let i = 0; i < characters.length; i += 1) {
      this.member.add(characters[i]);
    }
  }

  toArray() {
    this.member = [...this.member];
  }
}
