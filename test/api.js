var chai = require('chai')
    , request = require('request');
var assert = chai.assert
    , expect = chai.expect
    , should = chai.should();
var config = require('../vagrant-opt/config.mocha.json');

describe('REST API', function() {
  describe('Route "GET /api/show"', function() {
    var uri = 'http://localhost:' + config.port + '/api/show';
    it('should return a payload that contains 2 hosts', function(done) {
      request({
        uri: uri,
        method: 'GET',
      }, function(error, response, body) {
        var jsonBody = JSON.parse(body);
        expect(jsonBody.payload.length).to.equal(2);
        done();
      });
    });
  });

  describe('Route "GET /api/show/2"', function() {
    var uri = 'http://localhost:' + config.port + '/api/show/2';
    it('should return the hostname "reddit.com"', function(done) {
      request({
        uri: uri,
        method: 'GET',
      }, function(error, response, body) {
        var jsonBody = JSON.parse(body);
        expect(jsonBody.payload.host).to.equal("reddit.com");
        done();
      });
    });
  });
});
