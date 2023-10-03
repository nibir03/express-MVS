const request = require('supertest');
const app = require('./app');

test('Get I am alive and responding', done => {
    request(app)
    .get('/Get I am alive and responding')
    .expect(200)
    .end(done)
});

test('GET about ', done => {
    request(app)
    .get('/about')
    .expect(200)
    .end(done)
});

test('GET jibberish', done => {
    request(app)
    .get('/asjdgajdsg')
    .expect(404)
    .end(done)
});