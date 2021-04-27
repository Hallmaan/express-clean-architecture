const expect = require('chai').expect;
const request = require('request');

describe('SearchUsecase', () => {
    it('E2E Usecase', function(done) {
        request('http://localhost:3000/searchApi?searchvalue=batman' , function(error, response, body) {
            const status = 200;
            const message = "Fetch Api Success";


            expect(status).to.equal(response.statusCode);
            expect(message).to.equal(JSON.parse(body).message);
            done();
        });
    });

    it('Shold fail E2E Usecase', function(done) {
        request('http://localhost:3000/searchApi?x=batman' , function(error, response, body) {
            const status = 400;
            const message = "Search value parameter not found";

            expect(status).to.equal(response.statusCode);
            expect(message).to.equal(JSON.parse(body).message);
            done();
        });
    });
})