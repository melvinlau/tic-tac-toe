import Board from './board';

let board;

beforeEach(() => {
  board = new Board;
});

describe('Board', () => {

  test('it initialises with an empty fields array', () => {
    expect(board.fields).toEqual([]);
  });

});
