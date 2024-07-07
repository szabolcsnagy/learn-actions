import {test, expect} from 'vitest'
import {config} from 'dotenv/config';

test('test', () => {
  expect(1).toBe(1);
});

test('db passwd defined in .env', () => {
  // this should be set as repo secret in https://github.com/szabolcsnagy/learn-actions/settings/secrets/actions
  expect(process.env.DB_PASSWD).toBeDefined();
})
