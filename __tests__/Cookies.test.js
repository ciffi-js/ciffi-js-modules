import Cookies, { checkExpire } from '../packages/Cookies/Cookies';

test('Cookies check expire date', () => {
  const date = checkExpire('data da parsare');
  expect(date).toBe('expire=datatrasformata');
});
