import Field from './field'

let field;

beforeEach(() => {
  field = new Field;
});

describe('Field', () => {
  test('#content is initially null', () => {
    expect(field.content).toEqual(null);
  });

  test('#claim(arg) lets Player X claim a field', () => {
    field.claim('X');
    expect(field.content).toEqual('X');
  });

});
