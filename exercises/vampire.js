class Vampire {
  constructor(name, pet) {
    this.name = name
    this.pet = pet || 'bat'
    this.thirsty = true
  }

  drink() {
    this.thirsty = false
  }

  undrink() {
    this.thirsty = true
  }
}

module.exports = Vampire;
