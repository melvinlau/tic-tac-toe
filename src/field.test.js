import Field from './field'

let field;

beforeEach(() => {
  field = new Field;
});

describe('Field', () => {
  test('#content is initially null', () => {
    expect(field.content).toEqual(null);
  });
});
