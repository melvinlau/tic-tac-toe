import Field from './field'

let field;

beforeEach(() => {
  field = new Field;
});

describe('Field', () => {

  test('#claim(arg) lets Player X claim a field', () => {
    expect(field.claim('X')).toEqual('X');
  });

  test('#claim(arg) does not let a player claim a field that is already claimed', () => {
    field.claim('X');
    expect(field.claim('O')).toEqual('X');
  });

});
