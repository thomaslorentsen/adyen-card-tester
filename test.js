var request = require('supertest');
describe('loading express', function () {
    var server;
    beforeEach(function () {
        server = require('./app');
    });
    afterEach(function () {
        server.close();
    });
    it('responds to /', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });
    it('responds to /cvc', function testSlash(done) {
        request(server)
            .get('/cvc')
            .expect(200, done);
    });
    it('responds to /name', function testSlash(done) {
        request(server)
            .get('/name')
            .expect(200, done);
    });
    it('responds to / with simple layout', function testSlashSimple(done) {
        request(server)
            .get('/layout=simple')
            .expect(200, done);
    });
    it('404 everything else', function testPath(done) {
        request(server)
            .get('/foo/bar')
            .expect(404, done);
    });
});
