import request from 'supertest';
import app from '../app.js';
import assert from 'node:assert';

test('GET / responde 200', async () => {
  const res = await request(app).get('/');
  assert.equal(res.status, 200);
});
