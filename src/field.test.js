import Field from './field'

let field;

beforeEach(() => {
  field = new Field;
});

describe('Field', () => {

  test('#claim(arg) lets Player X claim a field', () => {
    field.claim('X');
    expect(field.content).toEqual('X');
  });

  test('#claim(arg) does not let a player claim a field that is already claimed', () => {
    field.claim('X');
    field.claim('O');
    expect(field.content).toEqual('X');
  });

});
