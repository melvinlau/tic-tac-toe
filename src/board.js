import Field from './field';

class Board {
  constructor() {
    this._fields = [];
  }

  get fields() {
    return this._fields;
  }

  renderFields() {
    for (let index = 0; index < 9; index++) {
      this._fields[index] = new Field;
    }
  }
}

export default Board;
