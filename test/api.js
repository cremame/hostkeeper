var chai = require('chai')
    , request = require('request');
var assert = chai.assert
    , expect = chai.expect
    , should = chai.should();
var config = require('../vagrant-opt/config.mocha.json');

describe('REST API', function() {
  describe('Route "GET /api/show"', function() {
    var uri = 'http://localhost:' + config.port + '/api/show';

    it('should return status code 200', function(done) {
      request({
        uri: uri,
        method: 'GET',
      }, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});
