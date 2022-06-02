# millisecond-converter

use this package if you suck at math

simple package to convert milliseconds to stuff

```js
const miliConverter = require("millisecond-converter")

miliConverter.secsMinsHoursDays(248496534, "obj") // { days: 2, hours: 21, mins: 1, secs: 36, milli: 5 }
miliConverter.secsMinsHoursDays(248496534, "string") // 2 Days, 21 Hours, 1 Minute and 36 Seconds

miliConverter.secsMinsHours(248496534, "obj") // { hours: 69, mins: 1, secs: 36, milli: 0}
miliConverter.secsMinsHours(248496534, "string") // 69 Hours, 01 Minute and 36 Seconds
```
