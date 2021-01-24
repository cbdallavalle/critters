class Medusa {
  constructor(name) {
    this.name = name
    this.statues = []
  }

  stare(person) {
    if (this.statues.length >= 3) {
      var unstonedPerson = this.statues.shift()
      unstonedPerson.stoned = false
    }
    person.stoned = true
    this.statues.push(person)
  }

}

module.exports = Medusa;
