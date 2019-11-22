import Field from './field';

class Board {

  constructor() {
    this.fields = [];
  }

  renderFields() {
    for (let index = 0; index < 9; index++) {
      this.fields[index] = new Field;
    }
  }
  
}

export default Board;
