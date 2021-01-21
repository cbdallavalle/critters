class Unicorn {
  constructor(name, color) {
    this.name = name
    this.color = color || 'white'
  }

  isWhite() {
    return this.color === 'white'
  }

  says(word) {
    return `**;* ${word} *;**`
  }
}

module.exports = Unicorn;
