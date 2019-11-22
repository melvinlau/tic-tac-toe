class Field {
  constructor() {
    this._content = null;
  }

  get content() {
    return this._content;
  }

  claim(player) {
    return this._content = player;
  }

}

export default Field;
