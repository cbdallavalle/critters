class Wizard {
  constructor(wizardDetails) {
    this.name = wizardDetails.name
    this.bearded = wizardDetails.bearded === undefined ? true : false
    this.rested = true
    this.castedSpells = 0
  }

  incantation(spell) {
    return spell.toUpperCase()
  }

  cast() {
    if (this.castedSpells >= 2) {
      this.rested = false
      return 'I SHALL NOT CAST!!'
    }
    this.castedSpells++
    return 'MAGIC BULLET'
  }


}

module.exports = Wizard;
