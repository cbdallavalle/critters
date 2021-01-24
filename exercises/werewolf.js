class Werewolf {
  constructor(name, location) {
    this.name = name
    this.location = location
    this.human = true
    this.wolf = false
    this.hungry = false
  }

  change() {
    this.human = !this.human
    this.wolf = !this.wolf
    this.hungry = this.wolf ? true : false
  }

  eat(victim) {
    if (this.wolf) {
      victim.alive = false
      this.change()
    }
  }

}

module.exports = Werewolf;
