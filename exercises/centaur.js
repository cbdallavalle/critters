class Centaur {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
    this.cranky = false
    this.standing = true
    this.layingDown = false
    this.exhaustionLvl = 0
  }

  shoot() {
    if (this.cranky || this.layingDown) return 'NO!'
    this.addExhaustion()
    return 'Twang!!!'
  }

  run() {
    if (this.layingDown) return 'NO!'
    this.addExhaustion()
    return 'Clop clop clop clop!!!'
  }
  
  addExhaustion() {
    this.exhaustionLvl++
    if (this.exhaustionLvl >=3) this.cranky = true
  }

  sleep() {
    if (this.standing) return 'NO!'
    if (this.layingDown) {
      this.cranky = false
      return 'ZZZZ'
    }
  }

  layDown() {
    this.standing = false
    this.layingDown = true
  }

  standUp() {
    this.standing = true
    this.layingDown = false
  }

  drinkPotion() {
    if (this.layingDown) return 'Not while I\'m laying down!'
    this.cranky = !this.cranky ? true : false
  }


}

module.exports = Centaur;
