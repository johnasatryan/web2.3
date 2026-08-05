class Car {
  constructor(name, year) {
    this._name = name;
    this.year = year;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value) {
      this._name = value;
    }
  }
}
module.exports = new Car('Audi', 2011);
