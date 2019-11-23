class Field {

  constructor() {
    this.content = null;
  }

  claim(player) {
    if (this.content === null) {
      return this.content = player;
    } else {
      return this.content;
    }
  }

}

export default Field;
