var moment = require("moment");

module.exports = function officeHours(rules, now) {
  var i, j;

  if (!rules || rules.length === 0) { 
    throw new Error("config is required for officehours");
  }

  for (i = 0; i < rules.length; i++) {
    var rule = rules[i];

    if (!rule.days || rule.days.length === 0) {
      throw new Error("Invalid day range in rule %j", rule);
    }

    now = now ? moment(now) : moment();
    var start = moment(now);
    var end = moment(now);

    start.seconds(0);
    end.seconds(0);

    for (j = 0; j < rule.days.length; j++) {
      if (rule.days[j] !== now.day()) { continue; } // not same day, move on to next
      
      start.day(rule.days[j]);
      end.day(rule.days[j]);

      start.hour(rule.startTime.h);
      start.minute(rule.startTime.m);
      end.hour(rule.endTime.h);
      end.minute(rule.endTime.m);

      if (now >= start && now <= end) {
        return true;
      }
    }
  };

  return false;
};

