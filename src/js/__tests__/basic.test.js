import GamePlay from '../GamePlay';

const gamePlay = new GamePlay();

import RandomExit from '../RandomExit';

const randomExit = new RandomExit()


test('bindToDOM test', () => {
  expect(randomExit.init).toThrow();
});
