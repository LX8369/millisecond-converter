# millisecond-converter

use this package if you suck at math

simple package to convert milliseconds to stuff

```js
const miliConverter = require("millisecond-converter")

miliConverter.secsMinsHoursDays(248496534, "obj") // { days: 2, hours: 21, mins: 1, secs: 36, milli: 5 }
miliConverter.secsMinsHoursDays(248996534, "string") // 2 Days, 21 Hours, 9 Minutes and 56 Seconds
```
