var fs = require("fs");
var moment = require("moment");
var officehours = require('../index');
var should = require("should");

var now = moment("2010-10-20 16:30", "YYYY-MM-DD HH:mm"); // day == 3

var tests = [
  { name: "weekday 7:30am-5pm", expect: true, file: "test/a.json" },
  { name: "weekends 7:30am-5pm", expect: false, file: "test/b.json" },
  { name: "multiple rules", expect: false, file: "test/b.json" }
];

describe('officehours', function () {
  tests.forEach(function(test) {
    it(test.name, function (done) {
      fs.readFile(test.file, function(err, data) {
        data = JSON.parse(data);
        var res = officehours(data, now);
        res.should.equal(test.expect);
        done();
      });
    });
  });
});


