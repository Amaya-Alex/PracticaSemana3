import request from 'supertest';
import assert from 'node:assert';
import app from '../app.js';

test('GET /health responde 200 y ok:true', async () => {
  const res = await request(app).get('/health');
  assert.equal(res.status, 200);
  assert.deepEqual(res.body, { ok: true });
});

test('GET / contiene Hola', async () => {
  const res = await request(app).get('/');
  assert.equal(res.status, 200);
  assert.ok(res.text.includes('Hola'));
});
