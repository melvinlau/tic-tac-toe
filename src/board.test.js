import Board from './board';

let board;

beforeEach(() => {
  board = new Board;
});

describe('Board', () => {

  test('#renderFields generates 9 unique fields', () => {
    board.renderFields();
    expect(board.fields.length).toEqual(9);
  });

});
