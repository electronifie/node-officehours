officehours
====

Given a set of rules, `officehours(rules[, date])` will return `true` or `false` depending on whether the current or supplied time is during officehours.

### Example rules
Office hours are weekdays from 7am to 5pm.
```
[
  { 
    "days": [ 1,2,3,4,5 ],
    "startTime": { "h": 7, "m": 0 }, 
    "endTime": { "h": 17, "m": 0 }
  }
]
```

Office hours are weekdays from 9am to 6:30pm, and weekends from 10am to 4pm.
```
[
  { 
    "days": [ 1,2,3,4,5 ],
    "startTime": { "h": 9, "m": 0 }, 
    "endTime": { "h": 18, "m": 30 }
  },
  { 
    "days": [ 0,6 ],
    "startTime": { "h": 10, "m": 0 }, 
    "endTime": { "h": 16, "m": 0 }
  }
]
```
