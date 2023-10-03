const request = require('supertest');
const app = require('./app');

describe('old', () => {

test('Get / I am alive and responding', (done) => {
    request(app)
    .get('/')
    .expect(200)
    .end(done);
});

test('GET /about ', (done) => {
    request(app)
    .get('/about')
    .expect(200)
    .end(done);
});

test('GET / jibberish', (done) => {
    request(app)
    .get('/jibberish')
    .expect(404)
    .end(done);
});
});

describe('new', () =>   {
    test('GET / user ska ge en lista av antalet användare', (done) => {
        request(app)
        .get('/user')
        .expect(200)
        .end(done);
    });
    
}  )