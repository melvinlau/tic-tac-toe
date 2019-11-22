class Field {
  constructor() {
    this._content = null;
  }

  get content() {
    return this._content;
  }

  claim(player) {
    if (this._content === null) return this._content = player;
  }

}

export default Field;
