const DEGREE = '\u00B0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const padZeros = number => String(number).padStart(2, '0');

function dms(degree) {
  let d = Math.floor(degree);
  let m = Math.floor((degree - d) * MINUTES_PER_DEGREE);
  let s = Math.floor(
    (((degree - d) * MINUTES_PER_DEGREE) - m) * SECONDS_PER_MINUTE
  );

  d = String(d) + DEGREE;
  m = padZeros(m) + "'";
  s = padZeros(s) + '"';

  return d + m + s;
}


// All test cases should return true
console.log(dms(30) === "30°00'00\"");
console.log(dms(76.73) === "76°43'48\"");
console.log(dms(254.6) === "254°35'59\"");
console.log(dms(93.034773) === "93°02'05\"");
console.log(dms(0) === "0°00'00\"");
console.log(dms(360) === "360°00'00\"" || dms(360) === "0°00'00\"");